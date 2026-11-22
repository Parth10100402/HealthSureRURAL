import type { Request, Response, NextFunction } from 'express';
/**
 * GET /api/service/health
 * Connectivity handshake for n8n automation engine
 */
export declare const checkServiceHealth: (_req: Request, res: Response) => Promise<void>;
/**
 * GET /api/service/appointments/:id
 * Retrieve live appointment state for delayed reminder verification
 */
export declare const getServiceAppointmentById: (req: Request, res: Response, next: NextFunction) => Promise<void>;
/**
 * GET /api/service/referrals/:id
 * Retrieve live referral status and SLA escalation metrics
 */
export declare const getServiceReferralById: (req: Request, res: Response, next: NextFunction) => Promise<void>;
/**
 * GET /api/service/followups/:id
 * Retrieve live patient follow-up record for reminder verification
 */
export declare const getServiceFollowUpById: (req: Request, res: Response, next: NextFunction) => Promise<void>;
/**
 * GET /api/service/teleconsultations/:id
 * Retrieve live teleconsultation session status for readiness notification
 */
export declare const getServiceTeleconsultById: (req: Request, res: Response, next: NextFunction) => Promise<void>;
/**
 * POST /api/service/notifications/send
 * Secure endpoint for n8n to trigger in-app & SMS notifications to stakeholders
 */
export declare const sendServiceNotification: (req: Request, res: Response, next: NextFunction) => Promise<void>;
/**
 * GET /api/service/observability
 * Returns event dispatcher metrics, outbox counts, and workflow executions
 */
export declare const getServiceObservability: (_req: Request, res: Response) => Promise<void>;
