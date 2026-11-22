// HealthSure — Exotel & Cloud Telephony IVR Controller
// backend/src/controllers/ivrController.ts

import type { Request, Response } from 'express';
import { dataStore } from '../db/store.js';

export interface IvrSessionState {
  callSid: string;
  from: string;
  attempts: number;
  selectedOption?: string;
  status: 'IN_PROGRESS' | 'COMPLETED' | 'TRANSFERRED' | 'EMERGENCY_TRIGGERED';
  startedAt: Date;
  updatedAt: Date;
}

// In-memory active IVR call sessions
const ivrCallSessions = new Map<string, IvrSessionState>();

const HEALTHSURE_EXECUTIVE_NUMBER = '+91 08047291536';
const AMBULANCE_108_NUMBER = '108';

/**
 * Helper to build Exotel Passthru XML or standard JSON responses
 */
function buildIvrResponse(
  req: Request,
  res: Response,
  data: {
    message: string;
    action?: 'collect_dtmf' | 'dial' | 'hangup';
    dialNumber?: string;
    numDigits?: number;
    timeoutSeconds?: number;
  }
) {
  const isXml = req.headers.accept?.includes('xml') || req.query.format === 'xml';

  if (isXml) {
    let xml = `<?xml version="1.0" encoding="UTF-8"?>\n<Response>\n`;
    xml += `  <Say language="hi-IN">${data.message}</Say>\n`;
    if (data.action === 'collect_dtmf') {
      xml += `  <Gather action="/api/ivr/dtmf" method="POST" numDigits="${data.numDigits || 1}" timeout="${data.timeoutSeconds || 10}" />\n`;
    } else if (data.action === 'dial' && data.dialNumber) {
      xml += `  <Dial>${data.dialNumber}</Dial>\n`;
    } else if (data.action === 'hangup') {
      xml += `  <Hangup />\n`;
    }
    xml += `</Response>`;
    res.setHeader('Content-Type', 'application/xml');
    res.status(200).send(xml);
    return;
  }

  res.status(200).json({
    success: true,
    ...data,
  });
}

/**
 * POST /api/ivr/incoming (or GET for test/passthru)
 * Initial IVR greeting and menu prompt
 */
export const handleIncomingCall = async (req: Request, res: Response): Promise<void> => {
  const callSid = (req.body?.CallSid || req.query.CallSid || `call-${Date.now()}`) as string;
  const from = (req.body?.From || req.query.From || req.body?.CallerId || 'anonymous') as string;

  ivrCallSessions.set(callSid, {
    callSid,
    from,
    attempts: 0,
    status: 'IN_PROGRESS',
    startedAt: new Date(),
    updatedAt: new Date(),
  });

  const greeting =
    'Namaste! Welcome to HealthSure Rural Healthcare Continuity Hotline. ' +
    'Press 1 to check your appointment status or doctor schedule. ' +
    'Press 2 to speak with a HealthSure care executive. ' +
    'Press 3 for emergency 108 medical SOS services.';

  buildIvrResponse(req, res, {
    message: greeting,
    action: 'collect_dtmf',
    numDigits: 1,
    timeoutSeconds: 8,
  });
};

/**
 * POST /api/ivr/dtmf
 * Handles DTMF digits from caller keypad (1, 2, 3)
 */
export const handleDtmf = async (req: Request, res: Response): Promise<void> => {
  const callSid = (req.body?.CallSid || req.query.CallSid || '') as string;
  const digits = (req.body?.Digits || req.query.Digits || req.body?.digits || '').toString().trim();
  const from = (req.body?.From || req.query.From || '') as string;

  const session = ivrCallSessions.get(callSid) || {
    callSid: callSid || `call-${Date.now()}`,
    from: from || 'anonymous',
    attempts: 0,
    status: 'IN_PROGRESS' as const,
    startedAt: new Date(),
    updatedAt: new Date(),
  };

  session.attempts += 1;
  session.updatedAt = new Date();
  ivrCallSessions.set(session.callSid, session);

  switch (digits) {
    case '1': {
      // 1: Check appointment / OPD schedule
      session.selectedOption = '1-APPOINTMENT_STATUS';
      session.status = 'COMPLETED';

      // Look up caller by phone number if available
      const cleanPhone = session.from.replace(/\D/g, '').slice(-10);
      const patient = dataStore.patients.find(
        (p) => (p.mobile || '').replace(/\D/g, '').slice(-10) === cleanPhone
      );

      const apt = patient
        ? dataStore.appointments.find((a) => a.patientId === patient.id && a.status === 'CONFIRMED')
        : dataStore.appointments.find((a) => a.status === 'CONFIRMED');

      let responseMsg = '';
      if (apt) {
        const doc = dataStore.doctors.find((d) => d.id === apt.doctorId);
        responseMsg = `Aapki agli appointment ${doc?.name || 'Dr. Ananya Mehta'} ke saath ${apt.date || 'aane wale din'} ko subah ${apt.startTime || '10:30 AM'} baje scheduled hai. Aapka token number ${apt.token || 'DH-CARD-14'} hai.`;
      } else {
        responseMsg =
          'HealthSure OPD mein Dr. Ananya Mehta Cardiology aur Dr. Rahul Verma General Medicine ke slots uplabdh hain. Appointment book karne ke liye kripya HealthSure executive se sampark karein.';
      }

      buildIvrResponse(req, res, {
        message: responseMsg,
        action: 'hangup',
      });
      return;
    }

    case '2': {
      // 2: Connect to Care Executive
      session.selectedOption = '2-EXECUTIVE_TRANSFER';
      session.status = 'TRANSFERRED';

      const transferMsg = 'Connecting your call to a HealthSure care executive. Please stay on the line.';
      buildIvrResponse(req, res, {
        message: transferMsg,
        action: 'dial',
        dialNumber: HEALTHSURE_EXECUTIVE_NUMBER,
      });
      return;
    }

    case '3': {
      // 3: SOS Emergency Services
      session.selectedOption = '3-EMERGENCY_SOS';
      session.status = 'EMERGENCY_TRIGGERED';

      // Trigger high-priority emergency notification in backend
      dataStore.notifications.unshift({
        id: 'notif-sos-' + Date.now(),
        userId: dataStore.users[0]?.id || 'usr-patient-001',
        type: 'SYSTEM',
        title: '🚨 IVR TELEPHONY EMERGENCY SOS TRIGGERED',
        message: `Emergency SOS call received from caller ${session.from || 'helpline'}. Transferred to 108 Emergency ambulance line.`,
        read: false,
        createdAt: new Date(),
      });

      const sosMsg =
        'Emergency alert activated. Connecting you immediately to 108 National Emergency Ambulance services. Stay calm, help is on the way.';
      buildIvrResponse(req, res, {
        message: sosMsg,
        action: 'dial',
        dialNumber: AMBULANCE_108_NUMBER,
      });
      return;
    }

    default: {
      // Invalid input or timeout
      if (session.attempts >= 3) {
        session.status = 'COMPLETED';
        buildIvrResponse(req, res, {
          message: 'Aapne koi valid vikalp nahi chuna. HealthSure mein call karne ke liye dhanyavaad. Alvida.',
          action: 'hangup',
        });
        return;
      }

      buildIvrResponse(req, res, {
        message: 'Kripya sahi number dabayein. Appointment ke liye 1 dabayein, Executive se baat karne ke liye 2 dabayein, ya Emergency ke liye 3 dabayein.',
        action: 'collect_dtmf',
        numDigits: 1,
        timeoutSeconds: 8,
      });
      return;
    }
  }
};

/**
 * POST /api/ivr/status
 * Exotel / Twilio call status callbacks (completed, busy, no-answer, failed)
 */
export const handleCallStatus = async (req: Request, res: Response): Promise<void> => {
  const callSid = (req.body?.CallSid || req.query.CallSid || '') as string;
  const status = (req.body?.CallStatus || req.query.CallStatus || req.body?.Status || 'completed') as string;
  const duration = req.body?.Duration || req.query.Duration || '0';

  if (callSid && ivrCallSessions.has(callSid)) {
    const session = ivrCallSessions.get(callSid)!;
    session.status = 'COMPLETED';
    session.updatedAt = new Date();
  }

  res.status(200).json({
    success: true,
    callSid,
    callStatus: status,
    durationSeconds: parseInt(duration as string, 10) || 0,
    recordedAt: new Date().toISOString(),
  });
};

/**
 * GET /api/ivr/config
 * Telephony configuration metadata and diagnostic status
 */
export const getIvrConfig = async (_req: Request, res: Response): Promise<void> => {
  res.status(200).json({
    success: true,
    helplineNumber: '+91 08047291536',
    executiveHotline: HEALTHSURE_EXECUTIVE_NUMBER,
    ambulanceHelpline: AMBULANCE_108_NUMBER,
    supportedLanguages: ['Hindi', 'English', 'Marathi'],
    ivrFlow: [
      { key: '1', intent: 'Appointment status and OPD doctor schedule' },
      { key: '2', intent: 'Connect to HealthSure care executive' },
      { key: '3', intent: 'Immediate 108 Emergency ambulance dispatch' },
    ],
    externalProvider: {
      provider: 'Exotel',
      webhookUrl: 'https://healthsurerural.vercel.app/api/ivr/incoming',
      dtmfUrl: 'https://healthsurerural.vercel.app/api/ivr/dtmf',
      statusUrl: 'https://healthsurerural.vercel.app/api/ivr/status',
      requiresDashboardBinding: true,
      documentation:
        'To connect this endpoint to live phone lines: In the Exotel Dashboard, create an Applet with a Passthru or Gather widget pointing to /api/ivr/incoming and bind your virtual number 08047291536 to it.',
    },
  });
};
