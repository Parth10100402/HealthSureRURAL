export type DomainEventType = 'appointment.booked' | 'appointment.cancelled' | 'appointment.rescheduled' | 'referral.created' | 'referral.status_changed' | 'consultation.completed' | 'teleconsultation.scheduled' | 'teleconsultation.rescheduled' | 'teleconsultation.cancelled' | 'teleconsultation.session_started' | 'teleconsultation.session_ended';
export interface DomainEvent<T = any> {
    id: string;
    eventId: string;
    eventType: DomainEventType;
    idempotencyKey: string;
    timestamp: string;
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
declare class EventOutboxService {
    private outbox;
    private seenIdempotencyKeys;
    private maxOutboxSize;
    /**
     * Resolve target n8n webhook URL by event type
     */
    getWebhookUrlForEvent(eventType: DomainEventType): string | null;
    /**
     * Map event type to its owning n8n workflow name
     */
    getWorkflowNameForEvent(eventType: DomainEventType): keyof ObservabilityMetrics['lastExecutionByWorkflow'];
    /**
     * Compute HMAC SHA-256 signature for payload verification
     */
    generateHmacSignature(payloadString: string): string;
    /**
     * Emit a domain event.
     * Atomically records the event into outbox and asynchronously dispatches to n8n webhook.
     */
    emit<T = any>(eventType: DomainEventType, payload: T, customIdempotencyKey?: string): Promise<DomainEvent<T>>;
    /**
     * Asynchronously send event to n8n webhook with exponential backoff retries.
     * Graceful fallback: If n8n is offline or disabled, marks event FAILED without blocking backend operations.
     */
    private dispatchWithRetry;
    /**
     * Retrieve all outbox events with optional filtering
     */
    getEvents(filter?: {
        eventType?: string;
        status?: string;
        limit?: number;
    }): DomainEvent[];
    /**
     * Get an event by eventId or idempotencyKey
     */
    getEvent(idOrKey: string): DomainEvent | undefined;
    /**
     * Return high-level observability metrics for administrative monitoring
     */
    getObservabilityMetrics(): ObservabilityMetrics;
    /**
     * Reset outbox (for automated test suite isolation)
     */
    reset(): void;
}
export declare const eventDispatcher: EventOutboxService;
export {};
