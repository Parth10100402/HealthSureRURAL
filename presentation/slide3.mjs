import { pptx, C, applySlideTemplate } from "./deck_setup.mjs";

export function buildSlide3() {
  const s = pptx.addSlide();
  s.background = { color: C.white };
  applySlideTemplate(s, "PROPOSED SOLUTION & INNOVATION", "Autonomous Voice-Agent & Decentralized Care Orchestration Platform", 3);

  // Top Hero Box
  s.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
    x: 0.6, y: 1.4, w: 12.133, h: 1.5, r: 0.15,
    fill: { color: C.tealLight },
    line: { color: C.tealPrimary, width: 1.5 }
  });
  s.addText("PATIENT CALLS HEALTHSURE → MULTILINGUAL VOICE AGENT / CLOUD IVR (08047291536)", {
    x: 0.8, y: 1.5, w: 11.733, h: 0.35,
    fontSize: 13, fontFace: "Arial", bold: true, color: C.tealDark,
    align: "center", valign: "middle"
  });

  const topPillars = [
    { title: "VOICE COMMAND", sub: "Speak naturally in Hindi/Hinglish/English" },
    { title: "SPECIALIST ROTATION", sub: "Matches traveling doctors to PHCs" },
    { title: "TELECONSULTATION", sub: "Low-bandwidth WebRTC video/audio" },
    { title: "MEDICINE VISIBILITY", sub: "Live sub-centre inventory checks" }
  ];
  topPillars.forEach((p, idx) => {
    const xPos = 0.9 + (idx * 2.95);
    s.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
      x: xPos, y: 1.95, w: 2.75, h: 0.8, r: 0.1,
      fill: { color: C.white },
      line: { color: C.tealBorder, width: 1 }
    });
    s.addText(p.title, {
      x: xPos, y: 2.02, w: 2.75, h: 0.35,
      fontSize: 10, fontFace: "Arial", bold: true, color: C.tealPrimary,
      align: "center", valign: "middle"
    });
    s.addText(p.sub, {
      x: xPos, y: 2.37, w: 2.75, h: 0.32,
      fontSize: 8.5, fontFace: "Arial", color: C.slate,
      align: "center", valign: "top"
    });
  });

  // Middle: How HealthSure Changes the Journey
  s.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
    x: 0.6, y: 3.1, w: 12.133, h: 2.1, r: 0.15,
    fill: { color: C.white },
    line: { color: C.cardBorder, width: 1 }
  });
  s.addShape(pptx.shapes.RECTANGLE, {
    x: 0.6, y: 3.1, w: 12.133, h: 0.4,
    fill: { color: C.tealDark }
  });
  s.addText("HOW HEALTHSURE CHANGES THE PATIENT JOURNEY (THE AGENTIC CARE PATHWAY)", {
    x: 0.6, y: 3.1, w: 12.133, h: 0.4,
    fontSize: 11, fontFace: "Arial", bold: true, color: C.white,
    align: "center", valign: "middle"
  });

  const journeySolved = [
    { n: "1", title: "CALL-BASED IVR / VOICE", desc: "Access care with basic phone or mobile voice assistant without literacy barriers." },
    { n: "2", title: "SPECIALIST PHC ROTATION", desc: "Traveling district specialists scheduled at local PHCs; no long journeys." },
    { n: "3", title: "TELECONSULTATION", desc: "Connects experienced doctors via WebRTC audio/video for follow-up care." },
    { n: "4", title: "MEDICINE STOCK VISIBILITY", desc: "Live pharmacy tracking ensures medicines are in stock before patient visits." },
    { n: "5", title: "LONGITUDINAL EHR & ALERTS", desc: "Digital records, SMS appointment tokens, and proactive follow-up reminders." }
  ];

  journeySolved.forEach((st, idx) => {
    const xPos = 0.8 + (idx * 2.4);
    s.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
      x: xPos, y: 3.65, w: 2.25, h: 1.4, r: 0.1,
      fill: { color: C.tealLight },
      line: { color: C.tealPrimary, width: 1 }
    });
    s.addShape(pptx.shapes.OVAL, {
      x: xPos + 0.95, y: 3.75, w: 0.35, h: 0.35,
      fill: { color: C.tealPrimary }
    });
    s.addText(st.n, {
      x: xPos + 0.95, y: 3.75, w: 0.35, h: 0.35,
      fontSize: 10, fontFace: "Arial", bold: true, color: C.white,
      align: "center", valign: "middle"
    });
    s.addText(st.title, {
      x: xPos + 0.05, y: 4.15, w: 2.15, h: 0.3,
      fontSize: 9, fontFace: "Arial", bold: true, color: C.tealDark,
      align: "center", valign: "middle"
    });
    s.addText(st.desc, {
      x: xPos + 0.05, y: 4.45, w: 2.15, h: 0.55,
      fontSize: 7.5, fontFace: "Arial", color: C.slate,
      align: "center", valign: "top"
    });
  });

  // Bottom Before vs After Comparison
  s.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
    x: 0.6, y: 5.35, w: 5.9, h: 1.45, r: 0.15,
    fill: { color: C.redLight },
    line: { color: C.red, width: 1 }
  });
  s.addText("BEFORE HEALTHSURE", {
    x: 0.8, y: 5.45, w: 5.5, h: 0.3,
    fontSize: 10, fontFace: "Arial", bold: true, color: C.red
  });
  s.addText("❌ Long Travels (40–90 km)   ❌ No Specialists at Local PHCs\n❌ Medicine Stockout Surprises   ❌ Lost Paper Prescription Slips", {
    x: 0.8, y: 5.75, w: 5.5, h: 0.9,
    fontSize: 9.5, fontFace: "Arial", color: C.dark
  });

  s.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
    x: 6.8, y: 5.35, w: 5.9, h: 1.45, r: 0.15,
    fill: { color: C.greenLight },
    line: { color: C.green, width: 1 }
  });
  s.addText("AFTER HEALTHSURE", {
    x: 7.0, y: 5.45, w: 5.5, h: 0.3,
    fontSize: 10, fontFace: "Arial", bold: true, color: C.green
  });
  s.addText("✔ Voice / IVR Instant Access   ✔ Specialist Rotation & Outreaches\n✔ Verified Medicine Stock Levels   ✔ Longitudinal Digital Records & Alerts", {
    x: 7.0, y: 5.75, w: 5.5, h: 0.9,
    fontSize: 9.5, fontFace: "Arial", color: C.tealDark
  });
}
