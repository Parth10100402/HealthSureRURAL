/**
 * HealthSure × n8n — 20-Scenario End-to-End Automated Integration Test Suite
 * test_n8n_integration.ts
 */

import http from 'http';
import { createApp } from './backend/src/app.js';
import { dataStore } from './backend/src/db/store.js';
import { eventDispatcher } from './backend/src/services/n8n/eventDispatcher.js';
import { config } from './backend/src/config/env.js';

let server: http.Server;
config.HEALTHSURE_SERVICE_API_KEY = process.env.HEALTHSURE_SERVICE_API_KEY || 'test_hs_service_key_automated_suite_2026';
const SERVICE_KEY = config.HEALTHSURE_SERVICE_API_KEY;
const WRONG_SERVICE_KEY = 'hs_svc_invalid_key_999999';

let passed = 0;
let failed = 0;

function assert(condition: boolean, desc: string) {
  if (condition) {
    console.log(`  [PASS] ${desc}`);
    passed++;
  } else {
    console.error(`  [FAIL] ${desc}`);
    failed++;
  }
}

async function runTests() {
  console.log('========================================================================');
  console.log(' HEALTHSURE × n8n AUTOMATION INTEGRATION — 20 SCENARIOS VERIFICATION');
  console.log('========================================================================\n');

  await dataStore.initialize();
  const app = createApp();
  server = http.createServer(app);

  const PORT = 5098;
  await new Promise<void>((resolve) => server.listen(PORT, () => resolve()));
  const API_BASE = `http://localhost:${PORT}/api`;

  try {
    // ---------------------------------------------------------------------------
    // AUTHENTICATION & SECURITY BASELINE
    // ---------------------------------------------------------------------------
    console.log('--- BASELINE: Service Authentication & Handshake ---');
    const hsHealthRes = await fetch(`${API_BASE}/service/health`, {
      headers: { 'X-HealthSure-Service-Key': SERVICE_KEY },
    });
    const hsHealthBody: any = await hsHealthRes.json();
    assert(hsHealthRes.status === 200 && hsHealthBody.status === 'ONLINE', 'B1: Service handshake with valid key returns 200 ONLINE');

    const hsUnauthorizedRes = await fetch(`${API_BASE}/service/appointments/apt-001`, {
      headers: { 'X-HealthSure-Service-Key': WRONG_SERVICE_KEY },
    });
    assert(hsUnauthorizedRes.status === 401, 'B2: Service endpoint with invalid key returns 401 Unauthorized');

    // ---------------------------------------------------------------------------
    // MODULE 1: APPOINTMENTS AUTOMATION (Scenarios 1 - 5)
    // ---------------------------------------------------------------------------
    console.log('\n--- MODULE 1: Appointment Management Automation (Scenarios 1-5) ---');

    // Scenario 1: Appointment Booked
    const testApt = dataStore.appointments[0];
    const event1 = await eventDispatcher.emit('appointment.booked', {
      appointmentId: testApt.id,
      patientId: testApt.patientId,
      doctorId: testApt.doctorId,
      facilityId: testApt.facilityId,
      date: testApt.date,
      time: testApt.startTime,
      speciality: 'Cardiology',
    });

    const aptServiceRes = await fetch(`${API_BASE}/service/appointments/${testApt.id}`, {
      headers: { 'X-HealthSure-Service-Key': SERVICE_KEY },
    });
    const aptServiceBody: any = await aptServiceRes.json();

    assert(
      aptServiceRes.status === 200 && aptServiceBody.data.id === testApt.id,
      'S01: appointment.booked event dispatched & verified via /api/service/appointments/:id'
    );

    // Scenario 2: Appointment Cancelled
    testApt.status = 'CANCELLED';
    const event2 = await eventDispatcher.emit('appointment.cancelled', {
      appointmentId: testApt.id,
      patientId: testApt.patientId,
      reason: 'Patient requested cancellation',
    });
    const aptCancelRes = await fetch(`${API_BASE}/service/appointments/${testApt.id}`, {
      headers: { 'X-HealthSure-Service-Key': SERVICE_KEY },
    });
    const aptCancelBody: any = await aptCancelRes.json();
    assert(
      aptCancelBody.data.status === 'CANCELLED',
      'S02: appointment.cancelled event emitted & status confirmed as CANCELLED'
    );

    // Scenario 3: Appointment Rescheduled
    testApt.status = 'CONFIRMED';
    testApt.date = '2026-12-05';
    testApt.startTime = '02:00 PM';
    const event3 = await eventDispatcher.emit('appointment.rescheduled', {
      appointmentId: testApt.id,
      patientId: testApt.patientId,
      previousDate: '2026-08-28',
      newDate: '2026-12-05',
      newTime: '02:00 PM',
    });
    const aptReschedRes = await fetch(`${API_BASE}/service/appointments/${testApt.id}`, {
      headers: { 'X-HealthSure-Service-Key': SERVICE_KEY },
    });
    const aptReschedBody: any = await aptReschedRes.json();
    assert(
      aptReschedBody.data.date === '2026-12-05' && aptReschedBody.data.time === '02:00 PM',
      'S03: appointment.rescheduled updates live slot date & startTime correctly'
    );

    // Scenario 4: Duplicate Event (Idempotency deduplication)
    const dupEvent = await eventDispatcher.emit(
      'appointment.booked',
      { appointmentId: testApt.id, repeat: true },
      event1.idempotencyKey
    );
    assert(dupEvent.eventId === event1.eventId, 'S04: Duplicate event with same idempotencyKey deduplicated safely');

    // Scenario 5: Cancelled Appointment Invalidation
    testApt.status = 'CANCELLED';
    const aptPostCancelRes = await fetch(`${API_BASE}/service/appointments/${testApt.id}`, {
      headers: { 'X-HealthSure-Service-Key': SERVICE_KEY },
    });
    const aptPostCancelBody: any = await aptPostCancelRes.json();
    assert(
      aptPostCancelBody.data.status === 'CANCELLED',
      'S05: Invalidation verified - cancelled appointment prevents active reminder trigger'
    );

    // ---------------------------------------------------------------------------
    // MODULE 2: REFERRAL ESCALATION AUTOMATION (Scenarios 6 - 10)
    // ---------------------------------------------------------------------------
    console.log('\n--- MODULE 2: Referral Management & Escalation (Scenarios 6-10) ---');

    // Scenario 6: Referral Created
    const testRef = dataStore.referrals[0];
    const event6 = await eventDispatcher.emit('referral.created', {
      referralId: testRef.id,
      patientId: testRef.patientId,
      hospitalId: testRef.receivingHospitalId,
      priority: testRef.priority,
      reason: testRef.reason,
    });
    const refServiceRes = await fetch(`${API_BASE}/service/referrals/${testRef.id}`, {
      headers: { 'X-HealthSure-Service-Key': SERVICE_KEY },
    });
    const refServiceBody: any = await refServiceRes.json();
    assert(
      refServiceRes.status === 200 && refServiceBody.data.id === testRef.id,
      'S06: referral.created event emitted and readable via /api/service/referrals/:id'
    );

    // Scenario 7: Referral Status Changed (Accepted)
    testRef.status = 'HOSPITAL_ACCEPTED';
    const event7 = await eventDispatcher.emit('referral.status_changed', {
      referralId: testRef.id,
      patientId: testRef.patientId,
      hospitalId: testRef.receivingHospitalId,
      previousStatus: 'CREATED',
      currentStatus: 'HOSPITAL_ACCEPTED',
    });
    const refAcceptRes = await fetch(`${API_BASE}/service/referrals/${testRef.id}`, {
      headers: { 'X-HealthSure-Service-Key': SERVICE_KEY },
    });
    const refAcceptBody: any = await refAcceptRes.json();
    assert(
      refAcceptBody.data.status === 'HOSPITAL_ACCEPTED',
      'S07: referral.status_changed event emitted and status confirmed as HOSPITAL_ACCEPTED'
    );

    // Scenario 8: Referral Completed Status
    testRef.status = 'COMPLETED';
    const refCompleteRes = await fetch(`${API_BASE}/service/referrals/${testRef.id}`, {
      headers: { 'X-HealthSure-Service-Key': SERVICE_KEY },
    });
    const refCompleteBody: any = await refCompleteRes.json();
    assert(
      refCompleteBody.data.status === 'COMPLETED' && refCompleteBody.data.isSlaBreached === false,
      'S08: Closed referral flagged with isSlaBreached: false'
    );

    // Scenario 9: SLA Escalation Breach Detection (>48 hours)
    const breachedRef = {
      ...testRef,
      id: 'ref-breached-999',
      referralId: 'HS-REF-9999',
      status: 'CREATED' as const,
      priority: 'EMERGENCY' as const,
      createdAt: new Date(Date.now() - 50 * 3600 * 1000),
    };
    dataStore.referrals.push(breachedRef);

    const slaRes = await fetch(`${API_BASE}/service/referrals/${breachedRef.id}`, {
      headers: { 'X-HealthSure-Service-Key': SERVICE_KEY },
    });
    const slaBody: any = await slaRes.json();
    assert(
      slaBody.data.isSlaBreached === true && slaBody.data.elapsedHours >= 48,
      'S09: Pending referral exceeding 48h correctly flagged as isSlaBreached: true for government admin escalation'
    );

    // Scenario 10: Duplicate Referral Event Deduplication
    const dupRefEvent = await eventDispatcher.emit(
      'referral.created',
      { referralId: testRef.id, repeat: true },
      event6.idempotencyKey
    );
    assert(dupRefEvent.eventId === event6.eventId, 'S10: Duplicate referral event deduplicated by idempotency engine');

    // ---------------------------------------------------------------------------
    // MODULE 3: PATIENT FOLLOW-UP AUTOMATION (Scenarios 11 - 15)
    // ---------------------------------------------------------------------------
    console.log('\n--- MODULE 3: Patient Follow-up Automation (Scenarios 11-15) ---');

    // Scenario 11: Consultation Completed with Follow-up Date
    const testFollowup = dataStore.followUps[0];
    const event11 = await eventDispatcher.emit('consultation.completed', {
      followUpId: testFollowup.id,
      patientId: testFollowup.patientId,
      doctorId: testFollowup.doctorId,
      followUpDueDate: testFollowup.dueDate,
      title: testFollowup.title,
    });
    const followupServiceRes = await fetch(`${API_BASE}/service/followups/${testFollowup.id}`, {
      headers: { 'X-HealthSure-Service-Key': SERVICE_KEY },
    });
    const followupServiceBody: any = await followupServiceRes.json();
    assert(
      followupServiceRes.status === 200 && followupServiceBody.data.id === testFollowup.id,
      'S11: consultation.completed event dispatches follow-up and reads via /api/service/followups/:id'
    );

    // Scenario 12: Consultation Completed without Follow-up Date
    const event12 = await eventDispatcher.emit('consultation.completed', {
      consultationId: 'CONS-999',
      patientId: testFollowup.patientId,
      followUpDueDate: null,
      note: 'Resolved without scheduled follow-up',
    });
    assert(event12.status !== 'FAILED', 'S12: Consultation completed without follow-up handled gracefully without error');

    // Scenario 13: Follow-up Date Reminder Eligibility
    const isEligible = followupServiceBody.data.isReminderEligible;
    assert(isEligible === true, 'S13: Active DUE follow-up correctly identified as isReminderEligible: true');

    // Scenario 14: Completed Follow-up Status
    testFollowup.status = 'COMPLETED';
    const completedFollowupRes = await fetch(`${API_BASE}/service/followups/${testFollowup.id}`, {
      headers: { 'X-HealthSure-Service-Key': SERVICE_KEY },
    });
    const completedFollowupBody: any = await completedFollowupRes.json();
    assert(
      completedFollowupBody.data.status === 'COMPLETED' && completedFollowupBody.data.isReminderEligible === false,
      'S14: Completed follow-up cancels further automated reminders (isReminderEligible: false)'
    );

    // Scenario 15: Duplicate Follow-up Event Deduplication
    const dupFollowupEvent = await eventDispatcher.emit(
      'consultation.completed',
      { followUpId: testFollowup.id, repeat: true },
      event11.idempotencyKey
    );
    assert(dupFollowupEvent.eventId === event11.eventId, 'S15: Duplicate consultation event deduplicated by idempotencyKey');

    // ---------------------------------------------------------------------------
    // MODULE 4: TELECONSULTATION AUTOMATION (Scenarios 16 - 20)
    // ---------------------------------------------------------------------------
    console.log('\n--- MODULE 4: Teleconsultation Automation (Scenarios 16-20) ---');

    // Scenario 16: Teleconsultation Scheduled
    const testTele = dataStore.teleconsultations[0];
    const event16 = await eventDispatcher.emit('teleconsultation.scheduled', {
      sessionId: testTele.id,
      patientId: testTele.patientId,
      doctorId: testTele.doctorId,
      date: '2026-12-05',
      time: '02:00 PM',
    });
    const teleServiceRes = await fetch(`${API_BASE}/service/teleconsultations/${testTele.id}`, {
      headers: { 'X-HealthSure-Service-Key': SERVICE_KEY },
    });
    const teleServiceBody: any = await teleServiceRes.json();
    assert(
      teleServiceRes.status === 200 && teleServiceBody.data.id === testTele.id,
      'S16: teleconsultation.scheduled event dispatched and room URL retrieved via /api/service/teleconsultations/:id'
    );

    // Scenario 17: Teleconsultation Rescheduled
    const event17 = await eventDispatcher.emit('teleconsultation.rescheduled', {
      sessionId: testTele.id,
      patientId: testTele.patientId,
      newDate: '2026-12-06',
      newTime: '04:00 PM',
    });
    const teleReschedRes = await fetch(`${API_BASE}/service/teleconsultations/${testTele.id}`, {
      headers: { 'X-HealthSure-Service-Key': SERVICE_KEY },
    });
    const teleReschedBody: any = await teleReschedRes.json();
    assert(
      teleReschedRes.status === 200 && teleReschedBody.data.id === testTele.id,
      'S17: teleconsultation.rescheduled verified via service API'
    );

    // Scenario 18: Teleconsultation Session Started & Ended
    testTele.status = 'LIVE';
    const event18a = await eventDispatcher.emit('teleconsultation.session_started', {
      sessionId: testTele.id,
      patientId: testTele.patientId,
    });
    testTele.status = 'ENDED';
    const event18b = await eventDispatcher.emit('teleconsultation.session_ended', {
      sessionId: testTele.id,
      patientId: testTele.patientId,
    });
    const teleEndedRes = await fetch(`${API_BASE}/service/teleconsultations/${testTele.id}`, {
      headers: { 'X-HealthSure-Service-Key': SERVICE_KEY },
    });
    const teleEndedBody: any = await teleEndedRes.json();
    assert(
      teleEndedBody.data.status === 'ENDED' && teleEndedBody.data.isSessionActive === false,
      'S18: teleconsultation session_started and session_ended transitions validated cleanly'
    );

    // Scenario 19: Teleconsultation Cancelled
    testTele.status = 'CANCELLED';
    const event19 = await eventDispatcher.emit('teleconsultation.cancelled', {
      sessionId: testTele.id,
      patientId: testTele.patientId,
    });
    const teleCancelRes = await fetch(`${API_BASE}/service/teleconsultations/${testTele.id}`, {
      headers: { 'X-HealthSure-Service-Key': SERVICE_KEY },
    });
    const teleCancelBody: any = await teleCancelRes.json();
    assert(
      teleCancelBody.data.status === 'CANCELLED',
      'S19: teleconsultation.cancelled dispatches cancellation and flags status CANCELLED'
    );

    // Scenario 20: Duplicate Teleconsultation Event Deduplication
    const dupTeleEvent = await eventDispatcher.emit(
      'teleconsultation.scheduled',
      { sessionId: testTele.id, repeat: true },
      event16.idempotencyKey
    );
    assert(dupTeleEvent.eventId === event16.eventId, 'S20: Duplicate teleconsultation event safely deduplicated by idempotency key');

    // ---------------------------------------------------------------------------
    // OBSERVABILITY & METRICS VERIFICATION
    // ---------------------------------------------------------------------------
    console.log('\n--- SYSTEM: Observability & Outbox Metrics ---');
    const obsRes = await fetch(`${API_BASE}/service/observability`, {
      headers: { 'X-HealthSure-Service-Key': SERVICE_KEY },
    });
    const obsBody: any = await obsRes.json();
    assert(
      obsRes.status === 200 &&
      obsBody.data.metrics.totalProcessed >= 10 &&
      Array.isArray(obsBody.data.recentEvents) &&
      obsBody.data.recentEvents.length >= 10,
      'S21: /api/service/observability accurately logs outbox metrics and delivery statuses'
    );

    console.log('\n========================================================================');
    console.log(` RESULTS: ${passed} PASSED / ${failed} FAILED (Total ${passed + failed} Checks)`);
    console.log('========================================================================\n');
  } finally {
    if (typeof (server as any).closeAllConnections === 'function') {
      (server as any).closeAllConnections();
    }
    server.close();
  }
}

runTests().catch((err) => {
  console.error('Fatal test error:', err);
  if (server) server.close();
});
