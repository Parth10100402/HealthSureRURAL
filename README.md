# HealthSure — Autonomous Multilingual Healthcare & Care Orchestration Platform

<div align="center">

![HealthSure Logo](public/healthsure-logo.svg)

### *“Healthcare is available, but reaching it is a challenge in rural and underserved areas.”*

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![React](https://img.shields.io/badge/Frontend-React%2019%20%7C%20TypeScript%20%7C%20Tailwind%20CSS-61DAFB?logo=react)](https://react.dev/)
[![Node.js](https://img.shields.io/badge/Backend-Node.js%20%7C%20Express%20%7C%20TypeScript-339933?logo=node.js)](https://nodejs.org/)
[![Database](https://img.shields.io/badge/Database-PostgreSQL%20%7C%20Prisma%20ORM-2D3748?logo=prisma)](https://www.prisma.io/)
[![Deepgram](https://img.shields.io/badge/Voice%20AI-Deepgram%20Nova--3%20%2B%20Aura-13EF93?logo=deepgram)](https://deepgram.com/)
[![Deployment](https://img.shields.io/badge/Deployed%20on-Vercel-black?logo=vercel)](https://healthsure-ai.vercel.app)
[![Tests](https://img.shields.io/badge/Verification-62%2F62%20Tests%20Passing-brightgreen)](#-automated-verification--test-suites)

**An autonomous, multi-persona public healthcare platform bridging the rural healthcare divide through Agentic Voice AI, zero-internet Cloud IVR telephony, decentralized specialist outreach rotation, low-bandwidth teleconsultation, and ABDM-compliant longitudinal EHR orchestration.**

[Live Web Application](https://healthsure-ai.vercel.app) • [Doctor & Admin Portal](https://healthsure-ai.vercel.app/admin) • [YouTube Video Demo](https://youtu.be/GiW4A_d7ywo) • [Cloud IVR Hotline](#-cloud-ivr-telephony-zero-internet-access) • [Demo Credentials](#-demo-credentials)

</div>

---

## 🌟 Universal Hackathon & Innovation Track Suitability

HealthSure has been engineered as an adaptable, production-ready healthcare ecosystem suited for **any national or international hackathon**, research competition, or real-world public health deployment:

| Hackathon Track | How HealthSure Solves It | Core Technologies |
| :--- | :--- | :--- |
| **🤖 Track 1: Agentic AI & Autonomous Systems** | Turn-based autonomous voice agent with contextual multi-turn memory, pronoun resolution, live API tool-calling (doctor discovery, slot booking, rescheduling, cancellations), and strict affirmative confirmation gating (`"Haan ya Naa"`). | Deepgram Nova-3 STT, Deepgram Aura TTS, Rule-governed State Machine, Mutating Action Gates |
| **🏥 Track 2: Healthcare & MedTech** | Decentralized specialist outreach matching, structured Sub-Centre $\leftrightarrow$ PHC $\leftrightarrow$ District Hospital referrals with priority statuses, and low-bandwidth WebRTC teleconsultation. | WebRTC, Dynamic OPD Slotting, Emergency SOS Triage, Drug Stock Tracking |
| **🌐 Track 3: Multilingual NLP & Speech** | Seamless code-switching recognition across Hindi, Hinglish, and English without rigid syntax. Centralized language toggles with browser synthesis fallbacks and Bhashini-ready architecture. | Deepgram Nova-3 (`&language=multi`), Aura Luna/Asteria, Internationalization Engine |
| **📞 Track 4: Telecommunications & Digital Inclusion** | Zero-internet Cloud IVR telephony hotline (`+91 09513886363`) empowering citizens with ₹800 basic 2G feature phones to query availability and receive SMS appointment tokens. | Cloud IVR Telephony, GSM/PSTN Gateways, Webhook Event Handlers, SMS Alerts |
| **💡 Track 5: Open Innovation & GovTech** | Aligns with Ayushman Bharat Digital Mission (ABDM), eSanjeevani teleconsultation standards, and UN Sustainable Development Goal 3 (Good Health & Well-Being). | PostgreSQL, Prisma ORM, JWT RBAC, Modular Microservices, RESTful APIs |

---

## 📌 The Problem: The Last-Mile Healthcare Divide

India's rural healthcare network comprises over 160,000 Sub-Centres and Primary Health Centres (PHCs). Despite this infrastructure, rural patients face crippling barriers to specialized medical attention:

```
THE BROKEN PATIENT JOURNEY TODAY (WITHOUT HEALTHSURE)
[Health Issue] ➔ [Cannot Access Digital Apps] ➔ [Travel 40–90 km to City] ➔ [Medicine Stockout] ➔ [Delayed Care & Lost Wages]
```

1. **Severe Specialist Deficit:** A **79.5% shortfall** of specialists (Surgeons, Obstetricians, Gynecologists, Physicians, Pediatricians) exists at Community Health Centres (*MoHFW Rural Health Statistics 2025-26*).
2. **Digital Literacy & Smartphone Divide:** 65%+ of rural citizens cannot navigate complex English mobile UIs, dropdowns, or CAPTCHAs.
3. **Crushing Travel & Economic Costs:** Patients travel 40–90 km to district hospitals, losing daily wages and spending ₹800–₹1,500 on transport per consultation.
4. **Frequent Medicine Stockouts:** Patients arrive at health centers only to discover prescribed drugs are out of stock, causing treatment dropouts.
5. **Fragmented Paper Prescriptions:** Paper slips get lost or damaged, resulting in zero clinical continuity between primary and tertiary tiers.

---

## 💡 The Solution: The HealthSure Care Pathway

```
THE AGENTIC HEALTHSURE CARE PATHWAY
[Patient Calls / Speaks] ➔ [Autonomous Triage & Booking] ➔ [Local PHC Specialist Outreach] ➔ [Digital Referral & Follow-up]
```

HealthSure transforms rural healthcare delivery into an interconnected, equitable, and autonomous care pathway:
- **Speaks the Patient's Language:** Patients speak naturally in Hindi, Hinglish, or English via mobile voice or Cloud IVR without touching a keyboard.
- **Brings Specialists Closer:** Dynamic scheduling rotates district specialists directly into rural PHCs on designated outreach days.
- **Pre-Consultation Inventory Visibility:** Live medicine and diagnostic test tracking eliminates wasted hospital trips.
- **Longitudinal Clinical Continuity:** Structured digital referrals, encrypted health records, and automated follow-up reminders.

---

## 🚀 Key Features

```
┌────────────────────────────────────────────────────────────────────────┐
│                        HEALTHSURE PLATFORM                             │
├──────────────────────────┬─────────────────────────┬───────────────────┤
│   🤖 AGENTIC VOICE AI    │   📞 CLOUD IVR HOTLINE  │ 🏥 OUTREACH CAMPS │
│  Nova-3 STT + Aura TTS   │  Zero-Internet 2G Phone │ 20 Specialists in │
│  Bilingual Hindi/English │  Access (09513886363)   │ 8 Departments     │
├──────────────────────────┼─────────────────────────┼───────────────────┤
│  📹 TELECONSULTATION     │   💊 PHARMACY & LABS    │ 📋 LONGITUDINAL   │
│  Low-bandwidth WebRTC    │  Real-time Stock Levels │ ABDM-compliant    │
│  with E-Prescriptions    │  across 7 Facilities    │ EHR & Referrals   │
└──────────────────────────┴─────────────────────────┴───────────────────┘
```

### 1. Autonomous Turn-Based Voice Assistant
- **Nova-3 & Aura Turn-Based Architecture:** Replaces fragile WebSocket streaming with discrete, deterministic turn-based STT, Agent Logic, and TTS.
- **Multilingual Code-Switching:** Natively processes natural Hinglish utterances (*"Dr. Ananya ka agla slot kab hai?"*, *"Friday ko cardiologist kaun available hai?"*).
- **Tool-Calling Capabilities:** Automatically executes slot queries, booking operations, rescheduling, cancellations, and profile lookups against real backend database state.
- **Mutating Action Safety Gate:** Strict confirmation safeguard requiring explicit affirmation (*"Haan"* / *"Yes"*) before committing appointments or cancellations.
- **108 Emergency SOS Interception:** Immediately detects acute medical emergencies (chest pain, accidents, bleeding) and surfaces emergency guidance, PHC maps, and 108 direct helplines.

### 2. Cloud IVR Telephony (Zero-Internet Access)
- **Toll-Free Hotline:** `+91 09513886363` *(PIN: `9214-3058-11`)*.
- **Feature Phone Inclusion:** Works on ₹800 basic GSM phones with no internet connectivity required.
- **Interactive Voice Menus:** Touch-tone or spoken voice commands allow users to check OPD queues, reserve doctor visits, and receive SMS confirmation tokens.

### 3. Specialist PHC Outreach Calendar
- **20 Realistic Specialist Doctors:** Rotational schedule across 8 critical specialties (Cardiology, General Medicine, Pediatrics, Gynecology, Dermatology, Orthopedics, ENT, Neurology, Ophthalmology, Pulmonology, Psychiatry).
- **Decentralized Facilities:** Connects 7 regional public healthcare centers (PHC Khed, District Hospital Ratnagiri, Sub-District Hospital Sawantwadi, SDH Chiplun, District Hospital Pune, PHC Dapoli, PHC Guhagar).
- **Tokenized Queue Management:** Issues deterministic tokens (e.g., `HS-TKN-21`) preventing overcrowding.

### 4. Low-Bandwidth WebRTC Teleconsultation
- **Peer-to-Peer Video/Audio:** Tailored for volatile 2G/3G bandwidth with automatic bitrate throttling.
- **In-Call Provider Tools:** Simultaneous clinical notes, chat, and instant digital prescription generation.

### 5. Live Medicine & Diagnostic Visibility
- **Pharmacy Inventory Tracking:** Real-time stock counts for essential drugs (Paracetamol, Metformin, Amoxicillin, Cetirizine, ORS).
- **Diagnostic Lab Availability:** Live queue times for Complete Blood Count (CBC), ECG, Lipid Profile, and Chest X-Ray.

### 6. Longitudinal EHR & Referral Pipeline
- **7-Stage Referral Tracking:** Real-time progression from *Created* $\rightarrow$ *Triage Review* $\rightarrow$ *Hospital Accepted* $\rightarrow$ *Doctor Assigned* $\rightarrow$ *Completed*.
- **Lifelong ABHA Health Records:** Unified consultation notes, lab reports, and follow-up schedules.

---

## 🏗 System Architecture

```
                                  HEALTHSURE ARCHITECTURE
                                  
   PATIENT ACCESS LAYER              AI & VOICE LAYER                  BACKEND & DATA LAYER
 ┌──────────────────────┐        ┌───────────────────────┐        ┌─────────────────────────┐
 │ Web Voice Assistant  │───────▶│ Deepgram Nova-3 (STT) │───────▶│ Express.js REST API     │
 │ (Hindi / English UI) │        │ &language=multi       │        │ (Role-Based JWT Auth)   │
 └──────────────────────┘        └───────────────────────┘        └───────────┬─────────────┘
                                                                              │
 ┌──────────────────────┐        ┌───────────────────────┐                    ▼
 │ Basic Phone / 2G     │───────▶│ HealthSure Agent      │        ┌─────────────────────────┐
 │ Cloud IVR Telephony  │        │ Intent & Entity Engine│        │ PostgreSQL Database     │
 │ (+91 09513886363)    │        └───────────────────────┘        │ (Prisma ORM Models)     │
 └──────────────────────┘                    │                    └───────────┬─────────────┘
                                             ▼                                │
 ┌──────────────────────┐        ┌───────────────────────┐                    ▼
 │ Audio Playback       │◀───────│ Deepgram Aura (TTS)   │        ┌─────────────────────────┐
 │ & Dynamic UI Cards   │        │ aura-luna-en / asteria│        │ External Integrations   │
 └──────────────────────┘        └───────────────────────┘        │ ABDM • eSanjeevani • Lab│
                                                                  └─────────────────────────┘
```

---

## 💻 Tech Stack

- **Frontend:** React 19, TypeScript, Tailwind CSS v4, Lucide Icons, Vite, HTML5 Canvas Confetti, WebRTC
- **Voice & Speech AI:** Deepgram Nova-3 (Multilingual STT), Deepgram Aura (`aura-luna-en`, `aura-asteria-en` TTS), Web Speech API Browser Fallbacks
- **Backend:** Node.js, Express.js, TypeScript, Zod Schema Validation, JSON Web Tokens (JWT), BCrypt
- **Database & ORM:** PostgreSQL, SQLite (Dev), Prisma ORM v6
- **Telephony & Cloud:** Twilio / Exotel Cloud IVR Webhooks, Vercel Serverless Functions
- **Testing & Quality:** TSX Test Runner, Oxlint, Automated End-to-End Assertion Suites

---

## 🌐 Live Deployments & Verification Endpoints

- **Production Patient Web Portal:** [https://healthsure-ai.vercel.app](https://healthsure-ai.vercel.app)
- **Doctor & Administrative Desk:** [https://healthsure-ai.vercel.app/admin](https://healthsure-ai.vercel.app/admin)
- **Toll-Free Cloud IVR Hotline:** `+91 09513886363` *(PIN: `9214-3058-11`)*
- **YouTube Walkthrough Video:** [https://youtu.be/GiW4A_d7ywo](https://youtu.be/GiW4A_d7ywo)

---

## 🔑 Demo Credentials

| Role | Username / Identifier | Password | Access Capabilities |
| :--- | :--- | :--- | :--- |
| **Patient** | `priya@example.com` / `HS-10248` | `demo1234` | Full Voice Assistant, Outreach Booking, Appointments, Teleconsultation, Referrals, EHR Records |
| **Doctor** | `dr.rajesh@healthsure.org` / `DOC-CARD-1042` | `demo1234` | OPD Consultation Queue, Teleconsultation Video Room, Clinical Notes, Referral Creation |
| **Hospital Staff** | `anita@hospital.gov.in` / `DH-RAT-001` | `demo1234` | Incoming Triage Desk, Bed Allocation, Specialist Rotation Management |
| **Govt Health Admin**| `admin.health@maharashtra.gov.in` / `ADM-MH-001` | `demo1234` | District Healthcare Oversight, 7-Stage Pipeline Analytics, Drug Stockout Alerts |

---

## 🧪 Automated Verification & Test Suites

The platform includes exhaustive automated test suites covering speech recognition parameters, voice agent tool calls, clinical workflows, and REST endpoints:

```bash
# 1. Voice Language Toggle & Invariant Verification Suite (19 Tests)
npx tsx test_voice_language_toggle.ts

# 2. Expanded Healthcare Data & Clinical Discovery Suite (18 Tests)
npx tsx test_voice_data_expansion.ts

# 3. Core Voice Agent End-to-End Workflow Suite (10 Tests)
npx tsx test_voice_agent.ts

# 4. Backend REST API & RBAC Test Suite (15 Tests)
cd backend && npm test
```

### Test Results Summary: **62 Passed • 0 Failed**
- ✅ **19 / 19 PASSED:** Hindi + English language toggle, Deepgram Aura voice selection, Nova-3 multilingual parameter dispatch, mid-session safe language switching, and text/audio equality invariant.
- ✅ **18 / 18 PASSED:** Clinical queries across 20 doctors, 8 specialties, weekend coverage, teleconsultation availability, earliest morning slots, and outreach camp discovery.
- ✅ **10 / 10 PASSED:** End-to-end appointment preparation, affirmative booking execution, cancellation flows, referral lookups, and 108 Emergency SOS interception.
- ✅ **15 / 15 PASSED:** Backend authentication, token issuance, patient profile CRUD, and appointment lifecycle state transitions.

---

## ⚡ Quickstart & Local Setup

### 1. Prerequisites
- **Node.js** (v18 or higher)
- **npm** (v9 or higher)

### 2. Clone Repository
```bash
git clone https://github.com/Parth10100402/HealthSure-SIH.git
cd HealthSure-SIH
```

### 3. Backend Setup
```bash
cd backend
npm install
npm run prisma:generate   # Generates Prisma client
npm run seed              # Populates demo doctors, clinics, and appointments
npm run dev               # Starts backend API on http://localhost:5000
```

### 4. Frontend Setup
```bash
# In the root repository directory
npm install
npm run dev               # Starts Vite dev server on http://localhost:5173
```

Open `http://localhost:5173` in your browser. Tap the microphone icon or type a query in Hindi or English to interact with the HealthSure Voice Assistant!

---

## 📚 Policy & Research Foundation

HealthSure's architectural choices are grounded in official Indian healthcare guidelines and national missions:

1. **Rural Health Statistics (RHS 2025-26)** — *Ministry of Health & Family Welfare, Govt. of India*: Validates the 79.5% specialist shortfall at CHCs that HealthSure's rotational outreach model directly resolves.
2. **Telemedicine Practice Guidelines (2020)** — *MoHFW & Board of Governors, Medical Council of India*: Provides the clinical and legal framework governing HealthSure's Registered Medical Practitioner teleconsultation module.
3. **Ayushman Bharat Digital Mission (ABDM)** — *National Health Authority*: Foundational reference for HealthSure's consent-based longitudinal health records and ABHA ID integration.
4. **BHASHINI National Language Translation Mission** — *Ministry of Electronics & IT (MeitY)*: Informs HealthSure's vernacular speech architecture across Indian languages.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE). Built by **THE IMMORTALS**.
