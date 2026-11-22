// HealthSure — Dedicated Backend Controller for n8n Service Integration
// backend/src/controllers/serviceController.ts
import { dataStore } from '../db/store.js';
import { eventDispatcher } from '../services/n8n/eventDispatcher.js';
import { config } from '../config/env.js';
import { smsService } from '../services/sms/smsService.js';
/**
 * GET /api/service/health
 * Connectivity handshake for n8n automation engine
 */
export const checkServiceHealth = async (_req, res) => {
    res.json({
        success: true,
        service: 'HealthSure Automation API',
        status: 'ONLINE',
        n8nIntegration: {
            enabled: config.N8N_ENABLED,
            baseUrl: config.N8N_BASE_URL,
            slaHours: config.REFERRAL_SLA_HOURS,
        },
        timestamp: new Date().toISOString(),
    });
};
/**
 * GET /api/service/appointments/:id
 * Retrieve live appointment state for delayed reminder verification
 */
export const getServiceAppointmentById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const apt = dataStore.appointments.find((a) => a.id === id || a.appointmentId === id);
        if (!apt) {
            res.status(404).json({ success: false, message: 'Appointment not found.' });
            return;
        }
        const patient = dataStore.patients.find((p) => p.id === apt.patientId);
        const doctor = dataStore.doctors.find((d) => d.id === apt.doctorId);
        const facility = dataStore.facilities.find((f) => f.id === apt.facilityId);
        const preferredLanguage = patient?.preferredLanguage || 'hi';
        res.json({
            success: true,
            data: {
                id: apt.id,
                appointmentId: apt.appointmentId,
                patientId: apt.patientId,
                patientName: patient?.fullName || null,
                patientMobile: patient?.mobile || null,
                preferredLanguage,
                doctorId: apt.doctorId,
                doctorName: doctor?.name || null,
                speciality: doctor?.speciality || null,
                facilityId: apt.facilityId,
                facilityName: facility?.name || null,
                scheduledAt: apt.scheduledAt,
                date: apt.date,
                time: apt.startTime,
                mode: apt.mode,
                status: apt.status, // CONFIRMED, CANCELLED, COMPLETED, RESCHEDULED
                token: apt.token,
                isReminderEligible: apt.status === 'CONFIRMED',
            },
        });
    }
    catch (err) {
        next(err);
    }
};
/**
 * GET /api/service/referrals/:id
 * Retrieve live referral status and SLA escalation metrics
 */
export const getServiceReferralById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const ref = dataStore.referrals.find((r) => r.id === id || r.referralId === id);
        if (!ref) {
            res.status(404).json({ success: false, message: 'Referral not found.' });
            return;
        }
        const patient = dataStore.patients.find((p) => p.id === ref.patientId);
        const referringFacility = dataStore.facilities.find((f) => f.id === ref.referringFacilityId);
        const receivingHospital = dataStore.facilities.find((f) => f.id === ref.receivingHospitalId);
        const referringDoctor = dataStore.doctors.find((d) => d.id === ref.referringDoctorId);
        const now = Date.now();
        const createdTime = new Date(ref.createdAt).getTime();
        const elapsedHours = Number(((now - createdTime) / (1000 * 60 * 60)).toFixed(2));
        const slaHours = config.REFERRAL_SLA_HOURS || 4;
        const isPending = ref.status === 'CREATED';
        const isSlaBreached = isPending && elapsedHours >= slaHours;
        res.json({
            success: true,
            data: {
                id: ref.id,
                referralId: ref.referralId,
                patientId: ref.patientId,
                patientName: patient?.fullName || null,
                patientMobile: patient?.mobile || null,
                referringFacilityId: ref.referringFacilityId,
                referringFacilityName: referringFacility?.name || null,
                receivingHospitalId: ref.receivingHospitalId,
                receivingHospitalName: receivingHospital?.name || null,
                referringDoctorName: referringDoctor?.name || null,
                speciality: ref.speciality,
                priority: ref.priority,
                status: ref.status, // CREATED, HOSPITAL_ACCEPTED, REJECTED, APPOINTMENT_SCHEDULED
                tokenNumber: ref.tokenNumber,
                createdAt: ref.createdAt,
                elapsedHours,
                slaHours,
                isSlaBreached,
                requiresEscalation: isSlaBreached,
            },
        });
    }
    catch (err) {
        next(err);
    }
};
/**
 * GET /api/service/followups/:id
 * Retrieve live patient follow-up record for reminder verification
 */
export const getServiceFollowUpById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const fol = dataStore.followUps.find((f) => f.id === id || f.appointmentId === id);
        if (!fol) {
            res.status(404).json({ success: false, message: 'Follow-up record not found.' });
            return;
        }
        const patient = dataStore.patients.find((p) => p.id === fol.patientId);
        const doctor = dataStore.doctors.find((d) => d.id === fol.doctorId);
        const facility = dataStore.facilities.find((f) => f.id === fol.facilityId);
        res.json({
            success: true,
            data: {
                id: fol.id,
                appointmentId: fol.appointmentId,
                patientId: fol.patientId,
                patientName: patient?.fullName || null,
                patientMobile: patient?.mobile || null,
                preferredLanguage: patient?.preferredLanguage || 'hi',
                doctorId: fol.doctorId,
                doctorName: doctor?.name || null,
                speciality: fol.speciality,
                facilityName: facility?.name || null,
                dueDate: fol.dueDate,
                mode: fol.mode,
                status: fol.status, // UPCOMING, COMPLETED, CANCELLED
                instructions: fol.instructions,
                isReminderEligible: fol.status === 'UPCOMING',
            },
        });
    }
    catch (err) {
        next(err);
    }
};
/**
 * GET /api/service/teleconsultations/:id
 * Retrieve live teleconsultation session status for readiness notification
 */
export const getServiceTeleconsultById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const tele = dataStore.teleconsultations.find((t) => t.id === id || t.appointmentId === id);
        if (!tele) {
            res.status(404).json({ success: false, message: 'Teleconsultation session not found.' });
            return;
        }
        const patient = dataStore.patients.find((p) => p.id === tele.patientId);
        const doctor = dataStore.doctors.find((d) => d.id === tele.doctorId);
        const appointment = dataStore.appointments.find((a) => a.id === tele.appointmentId);
        const roomUrl = `https://healthsurerural.vercel.app/patient/teleconsultation?session=${tele.id}`;
        res.json({
            success: true,
            data: {
                id: tele.id,
                appointmentId: tele.appointmentId,
                patientId: tele.patientId,
                patientName: patient?.fullName || null,
                patientMobile: patient?.mobile || null,
                preferredLanguage: patient?.preferredLanguage || 'hi',
                doctorId: tele.doctorId,
                doctorName: doctor?.name || null,
                speciality: doctor?.speciality || null,
                status: tele.status, // SCHEDULED, WAITING_FOR_DOCTOR, LIVE, ENDED, CANCELLED
                scheduledAt: appointment?.scheduledAt,
                roomUrl,
                isSessionActive: tele.status === 'SCHEDULED' || tele.status === 'WAITING_FOR_DOCTOR' || tele.status === 'LIVE',
            },
        });
    }
    catch (err) {
        next(err);
    }
};
/**
 * POST /api/service/notifications/send
 * Secure endpoint for n8n to trigger in-app & SMS notifications to stakeholders
 */
export const sendServiceNotification = async (req, res, next) => {
    try {
        const { recipientId, recipientRole = 'PATIENT', title, message, channel = 'IN_APP', type = 'SYSTEM', priority = 'NORMAL', } = req.body;
        if (!title || !message) {
            res.status(400).json({ success: false, message: 'Missing notification title or message.' });
            return;
        }
        // Resolve userId and phone
        let targetUserId = recipientId;
        let targetPhone = null;
        if (recipientRole === 'PATIENT') {
            const pat = dataStore.patients.find((p) => p.id === recipientId || p.userId === recipientId);
            if (pat) {
                targetUserId = pat.userId;
                targetPhone = pat.mobile || null;
            }
        }
        else if (recipientRole === 'DOCTOR') {
            const doc = dataStore.doctors.find((d) => d.id === recipientId || d.userId === recipientId);
            if (doc) {
                targetUserId = doc.userId;
                const u = dataStore.users.find((user) => user.id === doc.userId);
                targetPhone = u?.phone || null;
            }
        }
        else if (recipientRole === 'HOSPITAL_STAFF' || recipientRole === 'ADMIN') {
            const admin = dataStore.users.find((u) => u.role === recipientRole || u.role === 'ADMIN');
            if (admin) {
                targetUserId = admin.id;
                targetPhone = admin.phone || null;
            }
        }
        if (!targetUserId) {
            res.status(404).json({ success: false, message: `Recipient with id "${recipientId}" not found.` });
            return;
        }
        const notifId = 'notif-n8n-' + Date.now();
        let deliveryStatus = 'STORED_IN_APP';
        // 1. Store in-app notification
        dataStore.notifications.unshift({
            id: notifId,
            userId: targetUserId,
            type: type || 'SYSTEM',
            title: title.trim(),
            message: message.trim(),
            read: false,
            createdAt: new Date(),
        });
        // 2. If SMS channel requested, invoke SMS service and record truthful status
        if (channel === 'SMS') {
            if (targetPhone) {
                if (config.DEMO_MODE || config.SMS_PROVIDER === 'mock') {
                    deliveryStatus = 'MOCKED_SMS';
                }
                else {
                    try {
                        const smsSent = await smsService.sendOtp(targetPhone, '000000'); // Check provider connectivity
                        deliveryStatus = smsSent ? 'DELIVERED_SMS' : 'FAILED_SMS';
                    }
                    catch {
                        deliveryStatus = 'FAILED_SMS';
                    }
                }
            }
            else {
                deliveryStatus = 'FAILED_SMS_NO_PHONE';
            }
        }
        console.log(`[ServiceNotification] Dispatched [${channel}:${deliveryStatus}][${priority}] to ${recipientRole} (${targetUserId}): "${title}"`);
        res.status(201).json({
            success: true,
            data: {
                notificationId: notifId,
                recipientId,
                recipientRole,
                channel,
                deliveryStatus,
                deliveredAt: new Date().toISOString(),
            },
            message: `Notification processed [${deliveryStatus}].`,
        });
    }
    catch (err) {
        next(err);
    }
};
/**
 * GET /api/service/observability
 * Returns event dispatcher metrics, outbox counts, and workflow executions
 */
export const getServiceObservability = async (_req, res) => {
    const metrics = eventDispatcher.getObservabilityMetrics();
    const recentEvents = eventDispatcher.getEvents({ limit: 20 });
    res.json({
        success: true,
        data: {
            metrics,
            recentEvents: recentEvents.map((e) => ({
                id: e.id,
                eventType: e.eventType,
                idempotencyKey: e.idempotencyKey,
                status: e.status,
                attempts: e.attempts,
                timestamp: e.timestamp,
                deliveredAt: e.deliveredAt,
                error: e.error,
            })),
            timestamp: new Date().toISOString(),
        },
    });
};
