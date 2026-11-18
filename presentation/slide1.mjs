import { pptx, C } from "./deck_setup.mjs";

export function buildSlide1() {
  const s = pptx.addSlide();
  s.background = { color: C.white };

  s.addShape(pptx.shapes.RECTANGLE, {
    x: 0, y: 0, w: 13.333, h: 1.2,
    fill: { color: C.tealLight }
  });
  s.addText("JAI 2026 HACKATHON — JAYPEE AGENTIC AI HACKATHON", {
    x: 0.6, y: 0.2, w: 12.133, h: 0.45,
    fontSize: 18, fontFace: "Arial", bold: true, color: C.navy,
    align: "center", valign: "middle"
  });
  s.addText("Organised by Jaypee Institute of Information Technology (JIIT), Noida", {
    x: 0.6, y: 0.65, w: 12.133, h: 0.35,
    fontSize: 12, fontFace: "Arial", color: C.slate,
    align: "center", valign: "top"
  });

  s.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
    x: 1.0, y: 1.6, w: 11.333, h: 5.0, r: 0.25,
    fill: { color: C.white },
    line: { color: C.tealBorder, width: 2 },
    shadow: { type: "outer", color: "CBD5E1", blur: 8, offset: 4, angle: 90 }
  });

  s.addText("HEALTHSURE", {
    x: 1.5, y: 1.9, w: 10.333, h: 0.8,
    fontSize: 42, fontFace: "Arial", bold: true, color: C.tealDark,
    align: "center", valign: "middle"
  });

  s.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
    x: 2.2, y: 2.8, w: 8.933, h: 0.5, r: 0.15,
    fill: { color: C.tealLight },
    line: { color: C.tealPrimary, width: 1 }
  });
  s.addText("“Healthcare is available, but reaching it is a challenge in Rural India”", {
    x: 2.2, y: 2.8, w: 8.933, h: 0.5,
    fontSize: 13, fontFace: "Arial", bold: true, italic: true, color: C.tealDark,
    align: "center", valign: "middle"
  });

  s.addText([
    { text: "• Hackathon Track:\n", options: { bold: true, fontSize: 13, color: C.navy } },
    { text: "   Track 2 — Agentic AI for Healthcare\n", options: { bold: true, fontSize: 12, color: C.tealPrimary } },
    { text: "   (Decision support, patient interaction & care pathway automation)\n\n", options: { fontSize: 11, color: C.slate } },
    { text: "• Secondary Relevance:\n", options: { bold: true, fontSize: 13, color: C.navy } },
    { text: "   Track 3: Multilingual NLP & Speech  |  Track 4: Open Innovation\n\n", options: { fontSize: 11, color: C.slate } },
    { text: "• Project Category:\n", options: { bold: true, fontSize: 13, color: C.navy } },
    { text: "   Software / Autonomous Agentic Voice & Care Orchestration System", options: { fontSize: 12, color: C.dark } }
  ], {
    x: 1.5, y: 3.5, w: 5.5, h: 2.8,
    valign: "top"
  });

  s.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
    x: 7.3, y: 3.5, w: 4.5, h: 2.8, r: 0.2,
    fill: { color: C.grayLight },
    line: { color: C.cardBorder, width: 1 }
  });
  s.addText([
    { text: "PARTICIPATING TEAM\n", options: { bold: true, fontSize: 14, color: C.tealDark } },
    { text: "Team Name: ", options: { bold: true, fontSize: 13, color: C.navy } },
    { text: "THE IMMORTALS\n\n", options: { bold: true, fontSize: 14, color: C.tealPrimary } },
    { text: "Core Innovation:\n", options: { bold: true, fontSize: 12, color: C.navy } },
    { text: "Autonomous Voice Agent & Toll-Free Cloud IVR Telephony bringing specialist healthcare to 2G/basic-phone rural citizens.", options: { fontSize: 11, color: C.slate } }
  ], {
    x: 7.6, y: 3.8, w: 3.9, h: 2.2,
    valign: "top"
  });

  s.addShape(pptx.shapes.RECTANGLE, {
    x: 0, y: 7.1, w: 13.333, h: 0.4,
    fill: { color: C.tealDark }
  });
  s.addText("@JAI 2026 Idea Submission — THE IMMORTALS", {
    x: 0.6, y: 7.1, w: 10.0, h: 0.4,
    fontSize: 10, fontFace: "Arial", color: C.white,
    align: "left", valign: "middle"
  });
  s.addText("1", {
    x: 12.0, y: 7.1, w: 0.8, h: 0.4,
    fontSize: 10, fontFace: "Arial", bold: true, color: C.white,
    align: "right", valign: "middle"
  });
}
