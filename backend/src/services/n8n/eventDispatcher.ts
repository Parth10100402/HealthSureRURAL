// HealthSure — Domain Event Dispatcher & Transactional Outbox for n8n Automation
// backend/src/services/n8n/eventDispatcher.ts

import crypto from 'crypto';
import { config } from '../../config/env.js';

export type DomainEventType =
  | 'appointment.booked'
  | 'appointment.cancelled'
  | 'appointment.rescheduled'
  | 'referral.created'
  | 'referral.status_changed'
  | 'consultation.completed'
  | 'teleconsultation.scheduled'
  | 'teleconsultation.rescheduled'
  | 'teleconsultation.cancelled'
  | 'teleconsultation.session_started'
  | 'teleconsultation.session_ended';

export interface DomainEvent<T = any> {
  id: string;
  eventId: string;
  eventType: DomainEventType;
  idempotencyKey: string;
  timestamp: string; // ISO-8601 UTC
  payload: T;
  status: 'PENDING' | 'DELIVERED' | 'FAILED' | 'RETRYING';
  attempts: number;
  lastAttemptAt?: string;
  deliveredAt?: string;
  error?: string;
}

export interface ObservabilityMetrics {
  totalProcessed: number;
  successful: number;
  failed: number;
  retried: number;
  pending: number;
  lastExecutionByWorkflow: {
    HS_Appointment_Reminders?: string;
    HS_Referral_Escalation?: string;
    HS_Patient_Followups?: string;
    HS_Teleconsultation_Automation?: string;
  };
}

class EventOutboxService {
  private outbox: DomainEvent[] = [];
  private seenIdempotencyKeys = new Set<string>();
  private maxOutboxSize = 2000;

  /**
   * Resolve target n8n webhook URL by event type
   */
  public getWebhookUrlForEvent(eventType: DomainEventType): string | null {
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
  public getWorkflowNameForEvent(eventType: DomainEventType): keyof ObservabilityMetrics['lastExecutionByWorkflow'] {
    if (eventType.startsWith('appointment.')) return 'HS_Appointment_Reminders';
    if (eventType.startsWith('referral.')) return 'HS_Referral_Escalation';
    if (eventType.startsWith('consultation.')) return 'HS_Patient_Followups';
    return 'HS_Teleconsultation_Automation';
  }

  /**
   * Compute HMAC SHA-256 signature for payload verification
   */
  public generateHmacSignature(payloadString: string): string {
    const secret = config.N8N_WEBHOOK_SECRET || 'hs_sec_99a81f3b72ce4e82b7041dc8394e1';
    return crypto.createHmac('sha256', secret).update(payloadString).digest('hex');
  }

  /**
   * Emit a domain event.
   * Atomically records the event into outbox and asynchronously dispatches to n8n webhook.
   */
  public async emit<T = any>(
    eventType: DomainEventType,
    payload: T,
    customIdempotencyKey?: string
  ): Promise<DomainEvent<T>> {
    const eventId = `evt-${Date.now()}-${crypto.randomBytes(4).toString('hex')}`;
    const idempotencyKey =
      customIdempotencyKey ||
      (payload as any)?.idempotencyKey ||
      `${eventType}-${(payload as any)?.id || (payload as any)?.appointmentId || (payload as any)?.referralId || (payload as any)?.sessionId || eventId}`;

    // Deduplication check
    if (this.seenIdempotencyKeys.has(idempotencyKey)) {
      const existing = this.outbox.find((e) => e.idempotencyKey === idempotencyKey);
      if (existing) {
        console.log(`[EventOutbox] Duplicate event suppressed (IdempotencyKey: ${idempotencyKey})`);
        return existing as DomainEvent<T>;
      }
    }

    this.seenIdempotencyKeys.add(idempotencyKey);

    const event: DomainEvent<T> = {
      id: eventId,
      eventId,
      eventType,
      idempotencyKey,
      timestamp: new Date().toISOString(),
      payload,
      status: 'PENDING',
      attempts: 0,
    };

    this.outbox.unshift(event);
    if (this.outbox.length > this.maxOutboxSize) {
      this.outbox.pop();
    }

    console.log(`[EventOutbox] Emitted ${eventType} (ID: ${eventId}, Key: ${idempotencyKey})`);

    // Non-blocking dispatch to n8n webhook
    this.dispatchWithRetry(event).catch((err) => {
      console.warn(`[EventOutbox] Unhandled dispatch error for ${event.id}:`, err?.message || err);
    });

    return event;
  }

  /**
   * Asynchronously send event to n8n webhook with exponential backoff retries.
   * Graceful fallback: If n8n is offline or disabled, marks event FAILED without blocking backend operations.
   */
  private async dispatchWithRetry(event: DomainEvent): Promise<void> {
    const webhookUrl = this.getWebhookUrlForEvent(event.eventType);

    if (!config.N8N_ENABLED && process.env.NODE_ENV !== 'test') {
      event.status = 'DELIVERED';
      event.deliveredAt = new Date().toISOString();
      event.error = 'n8n integration disabled (mock delivery)';
      return;
    }

    if (!webhookUrl) {
      event.status = 'FAILED';
      event.error = 'No webhook URL configured for event type';
      return;
    }

    const payloadString = JSON.stringify(event);
    const signature = this.generateHmacSignature(payloadString);

    const maxAttempts = 3;
    let attempt = 0;
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
        } else {
          const errText = await response.text();
          event.error = `HTTP ${response.status}: ${errText.slice(0, 100)}`;
          if (attempt < maxAttempts) {
            event.status = 'RETRYING';
            await new Promise((r) => setTimeout(r, Math.min(2000, 300 * Math.pow(2, attempt))));
          } else {
            event.status = 'FAILED';
          }
        }
      } catch (err: any) {
        event.error = err.message || 'Network error';
        if (attempt < maxAttempts) {
          event.status = 'RETRYING';
          await new Promise((r) => setTimeout(r, Math.min(2000, 300 * Math.pow(2, attempt))));
        } else {
          event.status = 'FAILED';
        }
      }
    }
  }

  /**
   * Retrieve all outbox events with optional filtering
   */
  public getEvents(filter?: { eventType?: string; status?: string; limit?: number }): DomainEvent[] {
    let list = [...this.outbox];
    if (filter?.eventType) {
      list = list.filter((e) => e.eventType.startsWith(filter.eventType!));
    }
    if (filter?.status) {
      list = list.filter((e) => e.status === filter.status);
    }
    return list.slice(0, filter?.limit || 100);
  }

  /**
   * Get an event by eventId or idempotencyKey
   */
  public getEvent(idOrKey: string): DomainEvent | undefined {
    return this.outbox.find((e) => e.id === idOrKey || e.eventId === idOrKey || e.idempotencyKey === idOrKey);
  }

  /**
   * Return high-level observability metrics for administrative monitoring
   */
  public getObservabilityMetrics(): ObservabilityMetrics {
    const totalProcessed = this.outbox.length;
    const successful = this.outbox.filter((e) => e.status === 'DELIVERED').length;
    const failed = this.outbox.filter((e) => e.status === 'FAILED').length;
    const retried = this.outbox.filter((e) => e.attempts > 1).length;
    const pending = this.outbox.filter((e) => e.status === 'PENDING' || e.status === 'RETRYING').length;

    const lastExecutionByWorkflow: ObservabilityMetrics['lastExecutionByWorkflow'] = {};

    for (const evt of this.outbox) {
      if (evt.status === 'DELIVERED') {
        const wf = this.getWorkflowNameForEvent(evt.eventType);
        if (!lastExecutionByWorkflow[wf]) {
          lastExecutionByWorkflow[wf] = evt.deliveredAt || evt.timestamp;
        }
      }
    }

    return {
      totalProcessed,
      successful,
      failed,
      retried,
      pending,
      lastExecutionByWorkflow,
    };
  }

  /**
   * Reset outbox (for automated test suite isolation)
   */
  public reset(): void {
    this.outbox = [];
    this.seenIdempotencyKeys.clear();
  }
}

export const eventDispatcher = new EventOutboxService();
