import { pptx, C, applySlideTemplate } from "./deck_setup.mjs";

export function buildSlide5() {
  const s = pptx.addSlide();
  s.background = { color: C.white };
  applySlideTemplate(s, "TECHNICAL ARCHITECTURE & STACK", "Decoupled, Scalable, and Cloud-Native Healthcare Network Pipeline", 5);

  // Left Column: 5-Tier Stack Architecture
  s.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
    x: 0.6, y: 1.4, w: 6.8, h: 5.4, r: 0.15,
    fill: { color: C.white },
    line: { color: C.cardBorder, width: 1 }
  });
  s.addShape(pptx.shapes.RECTANGLE, {
    x: 0.6, y: 1.4, w: 6.8, h: 0.45,
    fill: { color: C.tealDark }
  });
  s.addText("LAYERED SYSTEM ARCHITECTURE (HEALTHSURE BLUEPRINT)", {
    x: 0.6, y: 1.4, w: 6.8, h: 0.45,
    fontSize: 11, fontFace: "Arial", bold: true, color: C.white,
    align: "center", valign: "middle"
  });

  const tiers = [
    {
      badge: "FRONTEND",
      tech: "React 18 + TypeScript + Tailwind CSS",
      detail: "Mobile-responsive, bilingual UI (Hindi/English), discrete MediaRecorder voice pipeline, Lucide Icons, JWT session management."
    },
    {
      badge: "VOICE & AI",
      tech: "Deepgram Nova-3 (STT) + Aura (TTS)",
      detail: "Turn-based STT with Hindi/Hinglish code-switching (&language=multi), natural conversational agent, affirmative mutation gating."
    },
    {
      badge: "BACKEND",
      tech: "Node.js + Express.js + REST API",
      detail: "Secure service layer, token issuance, appointment state machine, teleconsultation room dispatch, Twilio/Exotel IVR webhook handlers."
    },
    {
      badge: "DATA LAYER",
      tech: "PostgreSQL + Prisma ORM",
      detail: "ACID-compliant relational database for patient health history, appointment slots, referral tracking, and real-time medicine inventory."
    },
    {
      badge: "INTEGRATIONS",
      tech: "ABDM • eSanjeevani • Pharmacy • Labs",
      detail: "Consent-based ABHA ID linking, federated health records, diagnostic lab tie-ups, cloud deployment ready for AWS/NIC MeghRaj."
    }
  ];

  tiers.forEach((t, idx) => {
    const yPos = 1.95 + (idx * 0.95);
    s.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
      x: 0.8, y: yPos, w: 1.6, h: 0.32, r: 0.08,
      fill: { color: C.tealPrimary }
    });
    s.addText(t.badge, {
      x: 0.8, y: yPos, w: 1.6, h: 0.32,
      fontSize: 8.5, fontFace: "Arial", bold: true, color: C.white,
      align: "center", valign: "middle"
    });
    s.addText(t.tech, {
      x: 2.5, y: yPos, w: 4.7, h: 0.32,
      fontSize: 10, fontFace: "Arial", bold: true, color: C.navy,
      valign: "middle"
    });
    s.addText(t.detail, {
      x: 0.8, y: yPos + 0.35, w: 6.4, h: 0.52,
      fontSize: 8.5, fontFace: "Arial", color: C.slate,
      valign: "top"
    });
  });

  // Right Column: Patient Journey Flow
  s.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
    x: 7.6, y: 1.4, w: 5.133, h: 5.4, r: 0.15,
    fill: { color: C.grayLight },
    line: { color: C.cardBorder, width: 1 }
  });
  s.addShape(pptx.shapes.RECTANGLE, {
    x: 7.6, y: 1.4, w: 5.133, h: 0.45,
    fill: { color: C.navy }
  });
  s.addText("PATIENT CARE JOURNEY WITH HEALTHSURE", {
    x: 7.6, y: 1.4, w: 5.133, h: 0.45,
    fontSize: 11, fontFace: "Arial", bold: true, color: C.white,
    align: "center", valign: "middle"
  });

  const flowSteps = [
    { title: "1. Access Platform", desc: "Via Web App (Voice Assistant) or Cloud IVR Phone Call." },
    { title: "2. Slot Discovery & Booking", desc: "Agent resolves doctor, date, and available OPD slot." },
    { title: "3. Consultation / Outreach", desc: "At Sub-centre/PHC or via low-bandwidth Teleconsultation." },
    { title: "4. Digital Referral", desc: "Seamless referral to District Hospital specialist if required." },
    { title: "5. Longitudinal EHR & Follow-up", desc: "Prescription stored; SMS reminders sent for review visits." }
  ];

  flowSteps.forEach((fs, idx) => {
    const yPos = 2.0 + (idx * 0.72);
    s.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
      x: 7.8, y: yPos, w: 4.733, h: 0.62, r: 0.1,
      fill: { color: C.white },
      line: { color: C.tealBorder, width: 1 }
    });
    s.addText(fs.title, {
      x: 7.9, y: yPos + 0.05, w: 4.5, h: 0.25,
      fontSize: 9.5, fontFace: "Arial", bold: true, color: C.tealDark
    });
    s.addText(fs.desc, {
      x: 7.9, y: yPos + 0.28, w: 4.5, h: 0.3,
      fontSize: 8.5, fontFace: "Arial", color: C.slate
    });
  });

  s.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
    x: 7.8, y: 5.75, w: 4.733, h: 0.95, r: 0.1,
    fill: { color: C.tealLight },
    line: { color: C.tealPrimary, width: 1 }
  });
  s.addText([
    { text: "LIVE DEPLOYMENT ENDPOINTS:\n", options: { bold: true, fontSize: 9.5, color: C.tealDark } },
    { text: "• Web Portal: https://healthsurerural.vercel.app (or healthsurerural.vercel.com)\n", options: { fontSize: 8.5, color: C.navy } },
    { text: "• IVR Hotline: +91 08047291536  (PIN: 9214-3058-11)", options: { bold: true, fontSize: 8.5, color: C.tealPrimary } }
  ], {
    x: 7.9, y: 5.8, w: 4.5, h: 0.85,
    valign: "middle"
  });
}
