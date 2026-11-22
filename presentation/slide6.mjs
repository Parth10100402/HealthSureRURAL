import { pptx, C, applySlideTemplate } from "./deck_setup.mjs";

export function buildSlide6() {
  const s = pptx.addSlide();
  s.background = { color: C.white };
  applySlideTemplate(s, "WORKING PROTOTYPE & DEMONSTRATION", "Fully Functional, Live Deployed Prototype with Verifiable Artifacts", 6);

  // Left Column: Live Verification Endpoints & Links
  s.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
    x: 0.6, y: 1.45, w: 5.9, h: 5.35, r: 0.15,
    fill: { color: C.grayLight },
    line: { color: C.cardBorder, width: 1 }
  });
  s.addShape(pptx.shapes.RECTANGLE, {
    x: 0.6, y: 1.45, w: 5.9, h: 0.45,
    fill: { color: C.navy }
  });
  s.addText("LIVE PRODUCTION DEPLOYMENTS & DEMO LINKS", {
    x: 0.6, y: 1.45, w: 5.9, h: 0.45,
    fontSize: 11, fontFace: "Arial", bold: true, color: C.white,
    align: "center", valign: "middle"
  });

  // YouTube Box
  s.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
    x: 0.8, y: 2.05, w: 5.5, h: 1.15, r: 0.1,
    fill: { color: C.white },
    line: { color: C.red, width: 1.5 }
  });
  s.addText("▶ YOUTUBE PROTOTYPE DEMO VIDEO", {
    x: 1.0, y: 2.15, w: 5.1, h: 0.3,
    fontSize: 11, fontFace: "Arial", bold: true, color: C.red
  });
  s.addText("Watch HealthSure in action (Voice Assistant, Teleconsult, IVR):\nhttps://youtu.be/GiW4A_d7ywo", {
    x: 1.0, y: 2.45, w: 5.1, h: 0.65,
    fontSize: 9.5, fontFace: "Arial", color: C.blue, bold: true
  });

  // Google Drive Box (MANDATED BY JAI 2026 GUIDELINES)
  s.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
    x: 0.8, y: 3.35, w: 5.5, h: 1.35, r: 0.1,
    fill: { color: C.tealLight },
    line: { color: C.tealPrimary, width: 1.5 }
  });
  s.addText("📁 OFFICIAL GOOGLE DRIVE DEMO VIDEO (< 5 MINS)", {
    x: 1.0, y: 3.45, w: 5.1, h: 0.3,
    fontSize: 10.5, fontFace: "Arial", bold: true, color: C.tealDark
  });
  s.addText("As required by JAI 2026 guidelines (with viewing access enabled):\n[Insert Google Drive Link Here]\n• Demonstrates working prototype, major features & original team contribution.\n• Shows team members validating development authenticity.", {
    x: 1.0, y: 3.75, w: 5.1, h: 0.85,
    fontSize: 8.5, fontFace: "Arial", color: C.dark
  });

  // Live Endpoints Box
  s.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
    x: 0.8, y: 4.85, w: 5.5, h: 1.8, r: 0.1,
    fill: { color: C.white },
    line: { color: C.tealBorder, width: 1 }
  });
  s.addText([
    { text: "VERIFIABLE PRODUCTION URLS:\n", options: { bold: true, fontSize: 10, color: C.tealDark } },
    { text: "• Patient Voice Portal: ", options: { bold: true, fontSize: 9, color: C.navy } },
    { text: "https://healthsurerural.vercel.app (healthsurerural.vercel.com)\n", options: { fontSize: 8.5, color: C.blue } },
    { text: "• Admin/Doctor Portal: ", options: { bold: true, fontSize: 9, color: C.navy } },
    { text: "https://healthsurerural.vercel.app/admin\n", options: { fontSize: 8.5, color: C.blue } },
    { text: "• Cloud IVR Hotline: ", options: { bold: true, fontSize: 9, color: C.navy } },
    { text: "+91 08047291536  (PIN: 9214-3058-11)\n", options: { bold: true, fontSize: 9, color: C.tealPrimary } },
    { text: "• Test Credentials: ", options: { bold: true, fontSize: 9, color: C.navy } },
    { text: "priya@example.com / demo1234", options: { fontSize: 9, color: C.slate } }
  ], {
    x: 1.0, y: 4.95, w: 5.1, h: 1.6,
    valign: "top"
  });

  // Right Column: Proven Technical Metrics & Test Benchmarks
  s.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
    x: 6.8, y: 1.45, w: 5.9, h: 5.35, r: 0.15,
    fill: { color: C.white },
    line: { color: C.cardBorder, width: 1 }
  });
  s.addShape(pptx.shapes.RECTANGLE, {
    x: 6.8, y: 1.45, w: 5.9, h: 0.45,
    fill: { color: C.tealDark }
  });
  s.addText("TESTING BENCHMARKS & WORKING EVIDENCE", {
    x: 6.8, y: 1.45, w: 5.9, h: 0.45,
    fontSize: 11, fontFace: "Arial", bold: true, color: C.white,
    align: "center", valign: "middle"
  });

  const benchmarks = [
    { metric: "19 / 19 PASSED", label: "Automated Language & Agent Toggle Test Suite (Zero failures)" },
    { metric: "18 / 18 PASSED", label: "Expanded Healthcare Data & Query Coverage across 20 Specialists" },
    { metric: "10 / 10 PASSED", label: "Core Voice Agent Clinical & Mutating Action Verification Suite" },
    { metric: "< 1.4 SECONDS", label: "End-to-End Voice Turn Latency (Audio Capture → STT → Tool → TTS)" },
    { metric: "20 DEMO DOCTORS", label: "8 Specialties (Cardio, Ortho, Pedia, Gynae, ENT, Neuro, etc.)" },
    { metric: "100% CONFIRMATION", label: "Zero unconfirmed mutations; all bookings/cancellations strictly gated" }
  ];

  benchmarks.forEach((b, idx) => {
    const yPos = 2.05 + (idx * 0.76);
    s.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
      x: 7.0, y: yPos, w: 5.5, h: 0.65, r: 0.1,
      fill: idx === 0 || idx === 1 ? C.greenLight : C.grayLight,
      line: { color: idx === 0 || idx === 1 ? C.green : C.cardBorder, width: 1 }
    });
    s.addText(b.metric, {
      x: 7.1, y: yPos + 0.1, w: 1.8, h: 0.45,
      fontSize: 11, fontFace: "Arial", bold: true, color: idx === 0 || idx === 1 ? C.green : C.tealDark,
      valign: "middle"
    });
    s.addText(b.label, {
      x: 8.9, y: yPos + 0.05, w: 3.5, h: 0.55,
      fontSize: 8.5, fontFace: "Arial", color: C.dark,
      valign: "middle"
    });
  });
}
