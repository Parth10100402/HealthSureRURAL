import { pptx, C, applySlideTemplate } from "./deck_setup.mjs";

export function buildSlide8() {
  const s = pptx.addSlide();
  s.background = { color: C.white };
  applySlideTemplate(s, "REAL-WORLD IMPACT AND BENEFITS", "From Fragmented Rural Care to Connected, Equitable Healthcare", 8);

  // Left Column: 5 Core Impacts
  s.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
    x: 0.6, y: 1.45, w: 5.5, h: 4.5, r: 0.15,
    fill: { color: C.white },
    line: { color: C.tealPrimary, width: 1.5 }
  });
  s.addShape(pptx.shapes.RECTANGLE, {
    x: 0.6, y: 1.45, w: 5.5, h: 0.45,
    fill: { color: C.tealDark }
  });
  s.addText("SYSTEMIC HEALTHCARE IMPACT", {
    x: 0.6, y: 1.45, w: 5.5, h: 0.45,
    fontSize: 11, fontFace: "Arial", bold: true, color: C.white,
    align: "center", valign: "middle"
  });

  const impacts = [
    { n: "1", title: "IMPROVED HEALTH OUTCOMES", desc: "Timely specialist interventions and chronic care follow-ups drastically lower preventable complications." },
    { n: "2", title: "CONNECTED RURAL HEALTHCARE", desc: "Seamless interoperable bridge linking Sub-centres, PHCs, CHCs, and District Hospitals." },
    { n: "3", title: "EQUITY IN ACCESS", desc: "Brings advanced tertiary clinical expertise directly to rural and deep tribal doorsteps." },
    { n: "4", title: "INFORMED RESOURCE PLANNING", desc: "Real-time epidemiological data helps health officials identify medicine deficits & specialist demand." },
    { n: "5", title: "SCALABLE PUBLIC HEALTH MODEL", desc: "Standardized framework readily adaptable across district, state, and national health missions." }
  ];

  impacts.forEach((imp, idx) => {
    const yPos = 2.0 + (idx * 0.76);
    s.addShape(pptx.shapes.OVAL, {
      x: 0.8, y: yPos + 0.05, w: 0.35, h: 0.35,
      fill: { color: C.tealPrimary }
    });
    s.addText(imp.n, {
      x: 0.8, y: yPos + 0.05, w: 0.35, h: 0.35,
      fontSize: 10, fontFace: "Arial", bold: true, color: C.white,
      align: "center", valign: "middle"
    });
    s.addText([
      { text: `${imp.title}\n`, options: { bold: true, fontSize: 9.5, color: C.navy } },
      { text: imp.desc, options: { fontSize: 8.5, color: C.slate } }
    ], {
      x: 1.25, y: yPos, w: 4.7, h: 0.72,
      valign: "top"
    });
  });

  // Right Column: 8 Direct Benefits Grid
  s.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
    x: 6.4, y: 1.45, w: 6.333, h: 4.5, r: 0.15,
    fill: { color: C.white },
    line: { color: C.orange, width: 1.5 }
  });
  s.addShape(pptx.shapes.RECTANGLE, {
    x: 6.4, y: 1.45, w: 6.333, h: 0.45,
    fill: { color: C.orange }
  });
  s.addText("8 KEY STAKEHOLDER BENEFITS", {
    x: 6.4, y: 1.45, w: 6.333, h: 0.45,
    fontSize: 11, fontFace: "Arial", bold: true, color: C.white,
    align: "center", valign: "middle"
  });

  const benefits = [
    { n: "1", title: "FASTER ACCESS", desc: "Instant booking in <60 seconds." },
    { n: "2", title: "CARE CONTINUITY", desc: "Lifelong digital health records." },
    { n: "3", title: "INCLUSIVE VOICE", desc: "Colloquial Hindi/Hinglish & IVR." },
    { n: "4", title: "REDUCED BURDEN", desc: "Zero wasted travels & wage loss." },
    { n: "5", title: "COORDINATION", desc: "Shared records across PHC/DH." },
    { n: "6", title: "PROVIDER TOOLS", desc: "Digital queue & triage for doctors." },
    { n: "7", title: "COST-EFFECTIVE", desc: "Fewer redundant hospitalizations." },
    { n: "8", title: "COMMUNITY TRUST", desc: "Transparent tokens & reliable care." }
  ];

  benefits.forEach((b, idx) => {
    const col = idx % 2;
    const row = Math.floor(idx / 2);
    const xPos = 6.6 + (col * 3.05);
    const yPos = 2.05 + (row * 0.92);

    s.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
      x: xPos, y: yPos, w: 2.9, h: 0.8, r: 0.1,
      fill: { color: C.orangeLight },
      line: { color: C.orange, width: 1 }
    });
    s.addShape(pptx.shapes.OVAL, {
      x: xPos + 0.1, y: yPos + 0.12, w: 0.3, h: 0.3,
      fill: { color: C.orange }
    });
    s.addText(b.n, {
      x: xPos + 0.1, y: yPos + 0.12, w: 0.3, h: 0.3,
      fontSize: 9, fontFace: "Arial", bold: true, color: C.white,
      align: "center", valign: "middle"
    });
    s.addText([
      { text: `${b.title}\n`, options: { bold: true, fontSize: 8.5, color: C.navy } },
      { text: b.desc, options: { fontSize: 7.5, color: C.dark } }
    ], {
      x: xPos + 0.45, y: yPos + 0.08, w: 2.35, h: 0.65,
      valign: "top"
    });
  });

  // Bottom 6-Step Workflow Strip
  s.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
    x: 0.6, y: 6.05, w: 12.133, h: 0.85, r: 0.1,
    fill: { color: C.tealLight },
    line: { color: C.tealPrimary, width: 1 }
  });

  const stepsBottom = [
    "1. Patient Calls / Visits PHC",
    "2. Provider Logs Case",
    "3. Records Shared & Referred",
    "4. Specialist Consult Takes Place",
    "5. Follow-Up Reminders Sent",
    "6. Healthier Rural Community"
  ];

  stepsBottom.forEach((sb, idx) => {
    const xPos = 0.75 + (idx * 2.0);
    s.addText(sb, {
      x: xPos, y: 6.1, w: 1.8, h: 0.75,
      fontSize: 8.5, fontFace: "Arial", bold: true, color: C.tealDark,
      align: "center", valign: "middle"
    });
    if (idx < 5) {
      s.addText("→", {
        x: xPos + 1.75, y: 6.1, w: 0.25, h: 0.75,
        fontSize: 12, fontFace: "Arial", bold: true, color: C.tealPrimary,
        align: "center", valign: "middle"
      });
    }
  });
}
