// HealthSure — Exotel & Telephony IVR Routes
// backend/src/routes/ivrRoutes.ts
import { Router } from 'express';
import { handleIncomingCall, handleDtmf, handleCallStatus, getIvrConfig, } from '../controllers/ivrController.js';
const router = Router();
// Inbound IVR call webhook
router.get('/incoming', handleIncomingCall);
router.post('/incoming', handleIncomingCall);
// DTMF digit collection webhook
router.get('/dtmf', handleDtmf);
router.post('/dtmf', handleDtmf);
// Call status callback
router.get('/status', handleCallStatus);
router.post('/status', handleCallStatus);
// IVR configuration & diagnostic metadata
router.get('/config', getIvrConfig);
export default router;
