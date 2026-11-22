// HealthSure — Exotel IVR Automated Test Suite
// backend/test/ivr.test.ts

import { createApp } from '../src/app.js';
import { dataStore } from '../src/db/store.js';
import http from 'http';

async function runIvrTests() {
  console.log('====================================================');
  console.log('🧪 HEALTHSURE EXOTEL IVR TELEPHONY AUTOMATED TEST SUITE');
  console.log('====================================================\n');

  await dataStore.initialize();
  const app = createApp();
  const server = http.createServer(app);

  await new Promise<void>((resolve) => server.listen(5098, () => resolve()));
  const API_BASE = 'http://localhost:5098/api/ivr';

  let passed = 0;
  let failed = 0;

  const test = (name: string, condition: boolean, details?: string) => {
    if (condition) {
      console.log(`  ✓ PASS: ${name}`);
      passed++;
    } else {
      console.error(`  ✗ FAIL: ${name} ${details ? `(${details})` : ''}`);
      failed++;
    }
  };

  try {
    // 1. IVR Configuration & Diagnostic Endpoint
    const configRes = await fetch(`${API_BASE}/config`);
    const configData = (await configRes.json()) as any;
    test('1. GET /api/ivr/config returns verified IVR configuration', configData.success === true && Boolean(configData.helplineNumber));
    test('   - Mentions Exotel external dashboard instructions', Boolean(configData.externalProvider?.documentation));

    // 2. Incoming Call Webhook (Caller dials HealthSure virtual number)
    const callSid = `call-test-${Date.now()}`;
    const incomingRes = await fetch(`${API_BASE}/incoming`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        CallSid: callSid,
        From: '+91 9876543210',
      }),
    });
    const incomingData = (await incomingRes.json()) as any;
    test('2. POST /api/ivr/incoming answers call with trilingual greeting and DTMF gather prompt',
      incomingData.success === true &&
      incomingData.action === 'collect_dtmf' &&
      incomingData.message.includes('Welcome to HealthSure')
    );

    // 3. Caller Presses '1' (Appointment Status & OPD Slots)
    const dtmf1Res = await fetch(`${API_BASE}/dtmf`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        CallSid: callSid,
        Digits: '1',
        From: '+91 9876543210',
      }),
    });
    const dtmf1Data = (await dtmf1Res.json()) as any;
    test('3. DTMF 1 (Appointment Inquiry) retrieves patient appointment schedule & token',
      dtmf1Data.success === true &&
      dtmf1Data.action === 'hangup' &&
      (dtmf1Data.message.includes('appointment') || dtmf1Data.message.includes('OPD'))
    );

    // 4. Caller Presses '2' (Transfer to HealthSure Executive)
    const callSid2 = `call-test-transfer-${Date.now()}`;
    await fetch(`${API_BASE}/incoming`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ CallSid: callSid2, From: '+91 9876543210' }),
    });

    const dtmf2Res = await fetch(`${API_BASE}/dtmf`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        CallSid: callSid2,
        Digits: '2',
        From: '+91 9876543210',
      }),
    });
    const dtmf2Data = (await dtmf2Res.json()) as any;
    test('4. DTMF 2 (Care Executive Transfer) routes call to 07314624692',
      dtmf2Data.success === true &&
      dtmf2Data.action === 'dial' &&
      dtmf2Data.dialNumber.includes('07314624692')
    );

    // 5. Caller Presses '3' (Emergency SOS Services)
    const callSid3 = `call-test-sos-${Date.now()}`;
    await fetch(`${API_BASE}/incoming`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ CallSid: callSid3, From: '+91 9876543210' }),
    });

    const notifCountBefore = dataStore.notifications.length;
    const dtmf3Res = await fetch(`${API_BASE}/dtmf`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        CallSid: callSid3,
        Digits: '3',
        From: '+91 9876543210',
      }),
    });
    const dtmf3Data = (await dtmf3Res.json()) as any;
    const notifCountAfter = dataStore.notifications.length;

    test('5. DTMF 3 (Emergency SOS) dials 108 ambulance hotline',
      dtmf3Data.success === true &&
      dtmf3Data.action === 'dial' &&
      dtmf3Data.dialNumber === '108'
    );
    test('   - Creates emergency alert notification in backend dataStore',
      notifCountAfter > notifCountBefore &&
      dataStore.notifications[0].title.includes('EMERGENCY SOS')
    );

    // 6. Invalid Input Handling (Caller presses '9')
    const callSid4 = `call-test-invalid-${Date.now()}`;
    await fetch(`${API_BASE}/incoming`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ CallSid: callSid4, From: '+91 9876543210' }),
    });

    const invalidRes1 = await fetch(`${API_BASE}/dtmf`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ CallSid: callSid4, Digits: '9' }),
    });
    const invalidData1 = (await invalidRes1.json()) as any;
    test('6. Invalid DTMF input re-prompts user for input without hanging up',
      invalidData1.success === true &&
      invalidData1.action === 'collect_dtmf' &&
      invalidData1.message.includes('sahi number dabayein')
    );

    // 7. Repeated Invalid Inputs Exceeding Limit (3 attempts)
    await fetch(`${API_BASE}/dtmf`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ CallSid: callSid4, Digits: '9' }),
    });
    const invalidRes3 = await fetch(`${API_BASE}/dtmf`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ CallSid: callSid4, Digits: '9' }),
    });
    const invalidData3 = (await invalidRes3.json()) as any;
    test('7. Exceeding invalid attempt limit terminates call cleanly with hangup',
      invalidData3.success === true &&
      invalidData3.action === 'hangup'
    );

    // 8. Call Status Webhook Callback
    const statusRes = await fetch(`${API_BASE}/status`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        CallSid: callSid,
        CallStatus: 'completed',
        Duration: '48',
      }),
    });
    const statusData = (await statusRes.json()) as any;
    test('8. POST /api/ivr/status records telephony callback lifecycle metadata',
      statusData.success === true &&
      statusData.callStatus === 'completed' &&
      statusData.durationSeconds === 48
    );

  } finally {
    server.close();
  }

  console.log('\n====================================================');
  console.log(`📊 IVR TEST RESULTS: ${passed} PASSED | ${failed} FAILED`);
  console.log('====================================================\n');

  if (failed > 0) process.exit(1);
}

runIvrTests().catch((err) => {
  console.error('[IVR Test Fatal Error]:', err);
  process.exit(1);
});
