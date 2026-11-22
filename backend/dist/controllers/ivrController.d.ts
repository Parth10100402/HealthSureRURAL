import type { Request, Response } from 'express';
export interface IvrSessionState {
    callSid: string;
    from: string;
    attempts: number;
    selectedOption?: string;
    status: 'IN_PROGRESS' | 'COMPLETED' | 'TRANSFERRED' | 'EMERGENCY_TRIGGERED';
    startedAt: Date;
    updatedAt: Date;
}
/**
 * POST /api/ivr/incoming (or GET for test/passthru)
 * Initial IVR greeting and menu prompt
 */
export declare const handleIncomingCall: (req: Request, res: Response) => Promise<void>;
/**
 * POST /api/ivr/dtmf
 * Handles DTMF digits from caller keypad (1, 2, 3)
 */
export declare const handleDtmf: (req: Request, res: Response) => Promise<void>;
/**
 * POST /api/ivr/status
 * Exotel / Twilio call status callbacks (completed, busy, no-answer, failed)
 */
export declare const handleCallStatus: (req: Request, res: Response) => Promise<void>;
/**
 * GET /api/ivr/config
 * Telephony configuration metadata and diagnostic status
 */
export declare const getIvrConfig: (_req: Request, res: Response) => Promise<void>;
