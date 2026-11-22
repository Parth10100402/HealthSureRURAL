// HealthSure — Express Application Setup
// backend/src/app.ts
import express from 'express';
import cors from 'cors';
import { errorHandler } from './middleware/errorHandler.js';
import { dataStore } from './db/store.js';
// Route Imports
import authRoutes from './routes/authRoutes.js';
import patientRoutes from './routes/patientRoutes.js';
import appointmentRoutes from './routes/appointmentRoutes.js';
import outreachRoutes from './routes/outreachRoutes.js';
import doctorRoutes from './routes/doctorRoutes.js';
import hospitalRoutes from './routes/hospitalRoutes.js';
import referralRoutes from './routes/referralRoutes.js';
import healthRecordRoutes from './routes/healthRecordRoutes.js';
import followUpRoutes from './routes/followUpRoutes.js';
import teleconsultRoutes from './routes/teleconsultRoutes.js';
import diagnosticRoutes from './routes/diagnosticRoutes.js';
import notificationRoutes from './routes/notificationRoutes.js';
import adminRoutes from './routes/adminRoutes.js';
import deepgramRoutes from './routes/deepgramRoutes.js';
import voiceRoutes from './routes/voiceRoutes.js';
import ivrRoutes from './routes/ivrRoutes.js';
import serviceRoutes from './routes/serviceRoutes.js';
export const createApp = () => {
    const app = express();
    // CORS Configuration
    app.use(cors({
        origin: true,
        credentials: true,
        methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
        allowedHeaders: ['Content-Type', 'Authorization', 'X-HealthSure-Service-Key', 'X-Service-Key'],
    }));
    // Body Parsers (Raw audio for speech-to-text, JSON/urlencoded for API)
    app.use(express.raw({ type: ['audio/*', 'application/octet-stream'], limit: '25mb' }));
    app.use(express.json({ limit: '10mb' }));
    app.use(express.urlencoded({ extended: true, limit: '10mb' }));
    // Request Logger
    app.use((req, _res, next) => {
        if (process.env.NODE_ENV !== 'test') {
            console.log(`[API ${req.method}] ${req.url}`);
        }
        next();
    });
    // Ensure In-Memory Database is seeded during serverless cold-starts
    app.use(async (_req, _res, next) => {
        try {
            await dataStore.initialize();
        }
        catch (e) {
            console.error('[DataStore] Cold-start initialization error:', e);
        }
        next();
    });
    // Health Check Endpoint
    app.get('/api/health', (_req, res) => {
        res.json({
            status: 'healthy',
            service: 'HealthSure REST API',
            version: '1.0.0',
            timestamp: new Date().toISOString(),
        });
    });
    // Voice Call Provider Interface Stub
    app.post('/api/voice/call', (req, res) => {
        const { destinationPhone, recipientName, purpose } = req.body;
        res.json({
            success: true,
            callId: 'call-' + Date.now(),
            status: 'INITIATED',
            message: `Voice call dispatched to ${recipientName || 'Beneficiary'} (${destinationPhone || '08047291536'}). Purpose: ${purpose || 'Continuity reminder'}.`,
        });
    });
    // Mount Modular Routes (both /api/* and root /* for serverless compatibility)
    const routePrefixes = ['/api', ''];
    routePrefixes.forEach((prefix) => {
        app.use(`${prefix}/auth`, authRoutes);
        app.use(`${prefix}/patients`, patientRoutes);
        app.use(`${prefix}/appointments`, appointmentRoutes);
        app.use(`${prefix}/outreach`, outreachRoutes);
        app.use(`${prefix}/doctors`, doctorRoutes);
        app.use(`${prefix}/hospitals`, hospitalRoutes);
        app.use(`${prefix}/referrals`, referralRoutes);
        app.use(`${prefix}/health-records`, healthRecordRoutes);
        app.use(`${prefix}/followups`, followUpRoutes);
        app.use(`${prefix}/teleconsultations`, teleconsultRoutes);
        app.use(`${prefix}/diagnostics`, diagnosticRoutes);
        app.use(`${prefix}/notifications`, notificationRoutes);
        app.use(`${prefix}/admin`, adminRoutes);
        app.use(`${prefix}/deepgram-token`, deepgramRoutes);
        app.use(`${prefix}/speech-to-text`, voiceRoutes);
        app.use(`${prefix}/text-to-speech`, voiceRoutes);
        app.use(`${prefix}/voice`, voiceRoutes);
        app.use(`${prefix}/ivr`, ivrRoutes);
        app.use(`${prefix}/service`, serviceRoutes);
    });
    // 404 Route Handler
    app.use('/api/*', (_req, res) => {
        res.status(404).json({
            success: false,
            message: 'API endpoint not found.',
        });
    });
    // Global Error Handler
    app.use(errorHandler);
    return app;
};
