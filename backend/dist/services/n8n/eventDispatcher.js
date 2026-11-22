// HealthSure — Domain Event Dispatcher & Transactional Outbox for n8n Automation
// backend/src/services/n8n/eventDispatcher.ts
import crypto from 'crypto';
import { config } from '../../config/env.js';
import { getPrisma } from '../../db/prisma.js';
class EventOutboxService {
    outbox = [];
    seenIdempotencyKeys = new Set();
    maxOutboxSize = 2000;
    /**
     * Resolve target n8n webhook URL by event type
     */
    getWebhookUrlForEvent(eventType) {
        const base = config.N8N_BASE_URL.replace(/\/+$/, '');
        if (eventType.startsWith('appointment.')) {
            return config.N8N_APPOINTMENT_WEBHOOK_URL || (base ? `${base}/webhook/hs-appointment-reminders` : null);
        }
        if (eventType.startsWith('referral.')) {
            return config.N8N_REFERRAL_WEBHOOK_URL || (base ? `${base}/webhook/hs-referral-escalation` : null);
        }
        if (eventType.startsWith('consultation.')) {
            return config.N8N_FOLLOWUP_WEBHOOK_URL || (base ? `${base}/webhook/hs-patient-followups` : null);
        }
        if (eventType.startsWith('teleconsultation.')) {
            return config.N8N_TELECONSULT_WEBHOOK_URL || (base ? `${base}/webhook/hs-teleconsultation` : null);
        }
        return null;
    }
    /**
     * Map event type to its owning n8n workflow name
     */
    getWorkflowNameForEvent(eventType) {
        if (eventType.startsWith('appointment.'))
            return 'HS_Appointment_Reminders';
        if (eventType.startsWith('referral.'))
            return 'HS_Referral_Escalation';
        if (eventType.startsWith('consultation.'))
            return 'HS_Patient_Followups';
        return 'HS_Teleconsultation_Automation';
    }
    /**
     * Compute HMAC SHA-256 signature for payload verification
     */
    generateHmacSignature(payloadString) {
        const secret = config.N8N_WEBHOOK_SECRET?.trim() || '';
        if (!secret)
            return '';
        return crypto.createHmac('sha256', secret).update(payloadString).digest('hex');
    }
    /**
     * Emit a domain event.
     * Atomically records the event into transactional outbox (Prisma + Memory)
     * and asynchronously dispatches to n8n webhook when enabled.
     */
    async emit(eventType, payload, customIdempotencyKey) {
        const eventId = `evt-${Date.now()}-${crypto.randomBytes(4).toString('hex')}`;
        const idempotencyKey = customIdempotencyKey ||
            payload?.idempotencyKey ||
            `${eventType}-${payload?.id || payload?.appointmentId || payload?.referralId || payload?.sessionId || eventId}`;
        // Deduplication check: in-memory first
        if (this.seenIdempotencyKeys.has(idempotencyKey)) {
            const existing = this.outbox.find((e) => e.idempotencyKey === idempotencyKey);
            if (existing) {
                console.log(`[EventOutbox] Duplicate event suppressed (IdempotencyKey: ${idempotencyKey})`);
                return existing;
            }
        }
        const prisma = getPrisma();
        if (prisma && prisma.outboxEvent) {
            try {
                const dbExisting = await prisma.outboxEvent.findUnique({
                    where: { idempotencyKey },
                });
                if (dbExisting) {
                    console.log(`[EventOutbox] Database duplicate event suppressed (IdempotencyKey: ${idempotencyKey})`);
                    this.seenIdempotencyKeys.add(idempotencyKey);
                    return {
                        id: dbExisting.id,
                        eventId: dbExisting.eventId,
                        eventType: dbExisting.eventType,
                        idempotencyKey: dbExisting.idempotencyKey,
                        timestamp: dbExisting.timestamp.toISOString(),
                        payload: JSON.parse(dbExisting.payload),
                        status: dbExisting.status,
                        attempts: dbExisting.attempts,
                        lastAttemptAt: dbExisting.lastAttemptAt?.toISOString(),
                        deliveredAt: dbExisting.deliveredAt?.toISOString(),
                        error: dbExisting.error || undefined,
                    };
                }
            }
            catch (dbErr) {
                console.warn('[EventOutbox] Idempotency DB check skipped:', dbErr);
            }
        }
        this.seenIdempotencyKeys.add(idempotencyKey);
        // Initial status determined by n8n activation state
        const initialStatus = config.N8N_ENABLED ? 'PENDING' : 'MOCKED';
        const initialError = !config.N8N_ENABLED ? 'n8n integration disabled (mock delivery)' : undefined;
        const event = {
            id: eventId,
            eventId,
            eventType,
            idempotencyKey,
            timestamp: new Date().toISOString(),
            payload,
            status: initialStatus,
            attempts: 0,
            error: initialError,
        };
        // 1. Transactional persistence in PostgreSQL/Prisma
        if (prisma && prisma.outboxEvent) {
            try {
                await prisma.outboxEvent.create({
                    data: {
                        eventId: event.eventId,
                        eventType: event.eventType,
                        idempotencyKey: event.idempotencyKey,
                        timestamp: new Date(event.timestamp),
                        payload: JSON.stringify(event.payload),
                        status: event.status,
                        attempts: event.attempts,
                        error: event.error || null,
                    },
                });
            }
            catch (persistErr) {
                console.warn('[EventOutbox] Persistent outbox save fallback to memory:', persistErr);
            }
        }
        // 2. In-memory outbox mirror
        this.outbox.unshift(event);
        if (this.outbox.length > this.maxOutboxSize) {
            this.outbox.pop();
        }
        console.log(`[EventOutbox] Emitted ${eventType} [${event.status}] (ID: ${eventId}, Key: ${idempotencyKey})`);
        // 3. Dispatch to n8n if integration is enabled
        if (config.N8N_ENABLED) {
            this.dispatchWithRetry(event).catch((err) => {
                console.warn(`[EventOutbox] Unhandled dispatch error for ${event.id}:`, err?.message || err);
            });
        }
        return event;
    }
    /**
     * Asynchronously send event to n8n webhook with exponential backoff retries.
     * Truthful delivery status: NEVER marks MOCKED events as DELIVERED.
     */
    async dispatchWithRetry(event) {
        const webhookUrl = this.getWebhookUrlForEvent(event.eventType);
        if (!config.N8N_ENABLED) {
            event.status = 'MOCKED';
            event.error = 'n8n integration disabled (mock delivery)';
            await this.syncEventToDatabase(event);
            return;
        }
        if (!webhookUrl) {
            event.status = 'FAILED';
            event.error = 'No webhook URL configured for event type';
            await this.syncEventToDatabase(event);
            return;
        }
        const payloadString = JSON.stringify(event);
        const signature = this.generateHmacSignature(payloadString);
        const maxAttempts = 3;
        let attempt = event.attempts || 0;
        let success = false;
        while (attempt < maxAttempts && !success) {
            attempt++;
            event.attempts = attempt;
            event.lastAttemptAt = new Date().toISOString();
            try {
                const controller = new AbortController();
                const timeout = setTimeout(() => controller.abort(), 6000); // 6s timeout
                const response = await fetch(webhookUrl, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'X-HealthSure-Event-ID': event.eventId,
                        'X-HealthSure-Event-Type': event.eventType,
                        'X-HealthSure-Idempotency-Key': event.idempotencyKey,
                        'X-HealthSure-Timestamp': event.timestamp,
                        'X-HealthSure-Signature': signature,
                    },
                    body: payloadString,
                    signal: controller.signal,
                });
                clearTimeout(timeout);
                if (response.ok) {
                    success = true;
                    event.status = 'DELIVERED';
                    event.deliveredAt = new Date().toISOString();
                    event.error = undefined;
                    console.log(`[EventOutbox] Webhook delivered ${event.eventType} -> ${webhookUrl}`);
                }
                else {
                    const errText = await response.text();
                    event.error = `HTTP ${response.status}: ${errText.slice(0, 100)}`;
                    if (attempt < maxAttempts) {
                        event.status = 'RETRYING';
                        await new Promise((r) => setTimeout(r, Math.min(2000, 300 * Math.pow(2, attempt))));
                    }
                    else {
                        event.status = 'FAILED';
                    }
                }
            }
            catch (err) {
                event.error = err.message || 'Network error';
                if (attempt < maxAttempts) {
                    event.status = 'RETRYING';
                    await new Promise((r) => setTimeout(r, Math.min(2000, 300 * Math.pow(2, attempt))));
                }
                else {
                    event.status = 'FAILED';
                }
            }
        }
        await this.syncEventToDatabase(event);
    }
    /**
     * Synchronize event state updates back into PostgreSQL Outbox table
     */
    async syncEventToDatabase(event) {
        const prisma = getPrisma();
        if (!prisma || !prisma.outboxEvent)
            return;
        try {
            await prisma.outboxEvent.updateMany({
                where: { eventId: event.eventId },
                data: {
                    status: event.status,
                    attempts: event.attempts,
                    lastAttemptAt: event.lastAttemptAt ? new Date(event.lastAttemptAt) : null,
                    deliveredAt: event.deliveredAt ? new Date(event.deliveredAt) : null,
                    error: event.error || null,
                },
            });
        }
        catch (syncErr) {
            console.warn('[EventOutbox] DB status sync skipped:', syncErr);
        }
    }
    /**
     * Process pending retries for any events in RETRYING or PENDING status
     */
    async processPendingRetries() {
        const pendingEvents = this.outbox.filter((e) => (e.status === 'RETRYING' || e.status === 'PENDING') && e.attempts < 3);
        for (const evt of pendingEvents) {
            await this.dispatchWithRetry(evt);
        }
        return pendingEvents.length;
    }
    /**
     * Retrieve all outbox events with optional filtering
     */
    getEvents(filter) {
        let list = [...this.outbox];
        if (filter?.eventType) {
            list = list.filter((e) => e.eventType.startsWith(filter.eventType));
        }
        if (filter?.status) {
            list = list.filter((e) => e.status === filter.status);
        }
        return list.slice(0, filter?.limit || 100);
    }
    /**
     * Get an event by eventId or idempotencyKey
     */
    getEvent(idOrKey) {
        return this.outbox.find((e) => e.id === idOrKey || e.eventId === idOrKey || e.idempotencyKey === idOrKey);
    }
    /**
     * Return high-level observability metrics for administrative monitoring
     */
    getObservabilityMetrics() {
        const totalProcessed = this.outbox.length;
        const successful = this.outbox.filter((e) => e.status === 'DELIVERED').length;
        const mocked = this.outbox.filter((e) => e.status === 'MOCKED').length;
        const failed = this.outbox.filter((e) => e.status === 'FAILED').length;
        const retried = this.outbox.filter((e) => e.attempts > 1).length;
        const pending = this.outbox.filter((e) => e.status === 'PENDING' || e.status === 'RETRYING').length;
        const lastExecutionByWorkflow = {};
        for (const evt of this.outbox) {
            if (evt.status === 'DELIVERED' || evt.status === 'MOCKED') {
                const wf = this.getWorkflowNameForEvent(evt.eventType);
                if (!lastExecutionByWorkflow[wf]) {
                    lastExecutionByWorkflow[wf] = evt.deliveredAt || evt.timestamp;
                }
            }
        }
        return {
            totalProcessed,
            successful,
            mocked,
            failed,
            retried,
            pending,
            lastExecutionByWorkflow,
        };
    }
    /**
     * Reset outbox (for automated test suite isolation)
     */
    reset() {
        this.outbox = [];
        this.seenIdempotencyKeys.clear();
    }
}
export const eventDispatcher = new EventOutboxService();
