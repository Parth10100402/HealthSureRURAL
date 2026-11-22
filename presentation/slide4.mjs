import { pptx, C, applySlideTemplate } from "./deck_setup.mjs";

export function buildSlide4() {
  const s = pptx.addSlide();
  s.background = { color: C.white };
  applySlideTemplate(s, "KEY FEATURES & FUNCTIONALITY", "Comprehensive Multi-Persona Healthcare Orchestration Suite", 4);

  const features = [
    {
      title: "1. Autonomous Voice Assistant (Turn-Based)",
      desc: "Deepgram Nova-3 STT + Aura TTS in Hindi & English. Handles multi-turn tool-calling: appointment booking, doctor lookup, rescheduling, cancellation, and 108 Emergency SOS interception.",
      color: C.blue, bg: C.blueLight
    },
    {
      title: "2. Cloud IVR Telephony (08047291536)",
      desc: "Empowers patients on ₹800 basic feature phones with zero internet. Interactive voice response menu routes appointments, queries doctor availability, and triggers emergency alerts.",
      color: C.tealPrimary, bg: C.tealLight
    },
    {
      title: "3. Specialist PHC Outreach Calendar",
      desc: "Schedules visiting district specialists at local PHCs (Dr. Ananya Mehta - Cardio, Dr. Rahul Verma - Gen Med, Dr. Arjun Kapoor - Pedia) with tokenized queue management.",
      color: C.green, bg: C.greenLight
    },
    {
      title: "4. Low-Bandwidth Teleconsultation",
      desc: "WebRTC peer-to-peer video & audio consultations optimized for volatile 2G/3G connections. Includes chat, clinical note taking, and instant prescription generation.",
      color: C.purple, bg: "F3E8FF"
    },
    {
      title: "5. Real-Time Pharmacy & Diagnostics",
      desc: "Live inventory transparency for essential medicines (Paracetamol, Metformin, Amoxicillin) & diagnostic lab availability (CBC, ECG, Lipid Profile, X-Ray) across 7 health facilities.",
      color: C.orange, bg: C.orangeLight
    },
    {
      title: "6. Longitudinal EHR & Referral Pipeline",
      desc: "ABDM-compliant digital health records and structured inter-facility referral handovers from Sub-Centres to District Hospitals with audit trails and priority statuses.",
      color: C.navy, bg: C.grayLight
    }
  ];

  features.forEach((f, idx) => {
    const col = idx % 2;
    const row = Math.floor(idx / 2);
    const xPos = 0.6 + (col * 6.2);
    const yPos = 1.45 + (row * 1.75);

    s.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
      x: xPos, y: yPos, w: 5.9, h: 1.6, r: 0.15,
      fill: { color: C.white },
      line: { color: f.color, width: 1.5 }
    });
    s.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
      x: xPos, y: yPos, w: 5.9, h: 0.4, r: 0.15,
      fill: { color: f.bg }
    });
    s.addText(f.title, {
      x: xPos + 0.2, y: yPos, w: 5.5, h: 0.4,
      fontSize: 11, fontFace: "Arial", bold: true, color: f.color,
      valign: "middle"
    });
    s.addText(f.desc, {
      x: xPos + 0.2, y: yPos + 0.45, w: 5.5, h: 1.05,
      fontSize: 9.5, fontFace: "Arial", color: C.dark,
      valign: "top"
    });
  });

  s.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
    x: 0.6, y: 6.25, w: 12.133, h: 0.6, r: 0.1,
    fill: { color: C.tealDark }
  });
  s.addText("MULTI-PERSONA ACCESS:  Patient Portal (Voice & Touch)  •  ASHA Worker Community Interface  •  Doctor Consultation Desk  •  PHC Admin Management", {
    x: 0.6, y: 6.25, w: 12.133, h: 0.6,
    fontSize: 10, fontFace: "Arial", bold: true, color: C.white,
    align: "center", valign: "middle"
  });
}
