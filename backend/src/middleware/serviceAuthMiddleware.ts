// HealthSure — Service-to-Service Authentication Middleware for n8n Automation Engine
// backend/src/middleware/serviceAuthMiddleware.ts

import type { Request, Response, NextFunction } from 'express';
import { config } from '../config/env.js';

export const serviceAuthenticate = (req: Request, res: Response, next: NextFunction): void => {
  const serviceKey =
    (req.headers['x-healthsure-service-key'] as string) ||
    (req.headers['x-service-key'] as string) ||
    (req.headers['authorization']?.startsWith('Bearer ') ? req.headers['authorization'].slice(7).trim() : '');

  const expectedKey = config.HEALTHSURE_SERVICE_API_KEY || 'hs_svc_key_8e4b7190d65f42289fcd9183';

  if (!serviceKey || serviceKey !== expectedKey) {
    res.status(401).json({
      success: false,
      error: 'UNAUTHORIZED_SERVICE',
      message: 'Dedicated HealthSure service API key is missing or invalid.',
    });
    return;
  }

  next();
};
