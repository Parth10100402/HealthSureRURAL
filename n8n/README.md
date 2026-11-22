# HealthSure × n8n Workflow Automation Engine

This directory contains the production-grade, battle-tested n8n automation workflows for **HealthSure: Rural Healthcare Continuity Platform**.

## 1. Architectural Overview

```
HEALTHSURE FRONTEND
        ↓
HEALTHSURE BACKEND (Node.js + TypeScript + In-Memory/Prisma DB)
        ↓
SECURE DOMAIN EVENT DISPATCHER (HMAC-SHA256 Signed Outbox)
        ↓
n8n WORKFLOW ENGINE (Webhook Triggers)
        ↓
HEALTHSURE SERVICE APIs (Gated by X-HealthSure-Service-Key)
        ↓
PATIENT / DOCTOR / HOSPITAL / GOVERNMENT ADMIN NOTIFICATIONS
```

### Core Architecture Guarantees:
1. **Single Source of Truth**: HealthSure database (`dataStore` / PostgreSQL via Prisma) is the sole source of truth.
2. **Business Logic & Authorization**: HealthSure backend enforces all permissions, medical validations, and SLA checks.
3. **Idempotent Dispatch**: Every domain event carries a unique `eventId` and `idempotencyKey` preventing duplicate executions.
4. **Resilience & Non-blocking Outbox**: If n8n is offline or unreachable, HealthSure queues events in the outbox and continues normal medical operations without interruption.
5. **Secure Service Authentication**: n8n communicates back with HealthSure using a dedicated static service key header `X-HealthSure-Service-Key`, completely decoupled from expiring user JWTs.

---

## 2. Integrated Modules & Workflows

| # | Workflow File | Trigger Event | Target Node Sequence |
|---|---------------|---------------|----------------------|
| 1 | `HS_Appointment_Reminders.json` | `appointment.booked`, `appointment.cancelled`, `appointment.rescheduled` | Webhook → Signature Check → Fetch Live Appointment → Multilingual Switch (HI/MR/EN) → SMS/In-App Reminder Dispatch |
| 2 | `HS_Referral_Escalation.json` | `referral.created`, `referral.status_changed`, Cron SLA | Webhook → Fetch Live Referral → SLA Breach Check (>48h) → Emergency Medical Alert → Government Triage Escalation |
| 3 | `HS_Patient_Followups.json` | `consultation.completed` | Webhook → Validate Follow-Up Due Date → Care Continuity Reminder → Schedule Outreach Notification |
| 4 | `HS_Teleconsultation_Automation.json` | `teleconsultation.scheduled`, `teleconsultation.rescheduled`, `teleconsultation.cancelled`, `session_started`, `session_ended` | Webhook → Validate Session Readiness → Direct WebRTC Room Link Dispatch → Low-Bandwidth Mode Guidance |

---

## 3. Dedicated Service Endpoints

All service callbacks require header: `X-HealthSure-Service-Key: <HEALTHSURE_SERVICE_API_KEY>`

- `GET /api/service/health` — Service connectivity handshake
- `GET /api/service/appointments/:id` — Live appointment verification & preferred language
- `GET /api/service/referrals/:id` — Live referral status & SLA breach analysis
- `GET /api/service/followups/:id` — Follow-up due date & adherence verification
- `GET /api/service/teleconsultations/:id` — Teleconsult session readiness & room URL
- `POST /api/service/notifications/send` — Centralized dispatch for SMS, In-App, and Push alerts
- `GET /api/service/observability` — Real-time event dispatch metrics & delivery logs

---

## 4. How to Import Workflows into n8n

1. Start your local or hosted n8n instance:
   ```bash
   npx n8n start
   ```
2. In the n8n UI, navigate to **Workflows** → Click **Import from File**.
3. Select any or all JSON files from `n8n/workflows/`:
   - `HS_Appointment_Reminders.json`
   - `HS_Referral_Escalation.json`
   - `HS_Patient_Followups.json`
   - `HS_Teleconsultation_Automation.json`
4. Set the environment variable `HEALTHSURE_SERVICE_API_KEY` in your n8n workflow settings or credentials vault.
5. Activate each workflow.
