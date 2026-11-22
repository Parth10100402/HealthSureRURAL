// HealthSure — Service Routes for n8n Automation Engine Integration
// backend/src/routes/serviceRoutes.ts
import { Router } from 'express';
import { checkServiceHealth, getServiceAppointmentById, getServiceReferralById, getServiceFollowUpById, getServiceTeleconsultById, sendServiceNotification, getServiceObservability, } from '../controllers/serviceController.js';
import { serviceAuthenticate } from '../middleware/serviceAuthMiddleware.js';
const router = Router();
// Handshake endpoint (can be called with or without service key for initial check)
router.get('/health', checkServiceHealth);
// Authenticated service endpoints for n8n
router.use(serviceAuthenticate);
router.get('/appointments/:id', getServiceAppointmentById);
router.get('/referrals/:id', getServiceReferralById);
router.get('/followups/:id', getServiceFollowUpById);
router.get('/teleconsultations/:id', getServiceTeleconsultById);
router.post('/notifications/send', sendServiceNotification);
router.get('/observability', getServiceObservability);
export default router;
