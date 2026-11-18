import { pptx, C, applySlideTemplate } from "./deck_setup.mjs";

export function buildSlide2() {
  const s = pptx.addSlide();
  s.background = { color: C.white };
  applySlideTemplate(s, "PROBLEM STATEMENT & MOTIVATION", "The Crippling Last-Mile Divide in India's Rural & Primary Healthcare Delivery", 2);

  // Left Column: 5 Rural Healthcare Pain Points
  s.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
    x: 0.6, y: 1.4, w: 4.8, h: 4.6, r: 0.15,
    fill: { color: C.grayLight },
    line: { color: C.cardBorder, width: 1 }
  });
  s.addShape(pptx.shapes.RECTANGLE, {
    x: 0.6, y: 1.4, w: 4.8, h: 0.45,
    fill: { color: C.navy }
  });
  s.addText("WHAT RURAL PATIENTS FACE TODAY", {
    x: 0.6, y: 1.4, w: 4.8, h: 0.45,
    fontSize: 11, fontFace: "Arial", bold: true, color: C.white,
    align: "center", valign: "middle"
  });

  const painPoints = [
    { n: "1", title: "POOR CONNECTIVITY & DIGITAL ILLITERACY", desc: "Weak 2G/3G connectivity & smartphone complexity prevent rural patients from accessing conventional portals." },
    { n: "2", title: "SEVERE SPECIALIST ACCESS DEFICIT", desc: "79.5% specialist shortfall at CHCs (MoHFW RHS 2025-26); forces patients into distant, crowded city hospitals." },
    { n: "3", title: "LONG-DISTANCE TRAVEL & LOST WAGES", desc: "Consultations require 40–90 km travel, spending ₹800–₹1,500 on transit and losing critical daily livelihoods." },
    { n: "4", title: "MEDICINE STOCKOUTS & TRIP WASTE", desc: "Required drugs frequently stock out at sub-centres, causing repeated failed trips and interrupted treatment regimens." },
    { n: "5", title: "FRAGMENTED PAPER RECORDS", desc: "Paper slips get lost or damaged; zero longitudinal clinical continuity between Sub-Centres, PHCs, and District Hospitals." }
  ];

  painPoints.forEach((p, idx) => {
    const yPos = 1.95 + (idx * 0.78);
    s.addShape(pptx.shapes.OVAL, {
      x: 0.8, y: yPos + 0.05, w: 0.36, h: 0.36,
      fill: { color: idx % 2 === 0 ? C.blue : C.tealPrimary }
    });
    s.addText(p.n, {
      x: 0.8, y: yPos + 0.05, w: 0.36, h: 0.36,
      fontSize: 10, fontFace: "Arial", bold: true, color: C.white,
      align: "center", valign: "middle"
    });
    s.addText([
      { text: `${p.title}\n`, options: { bold: true, fontSize: 9.5, color: C.navy } },
      { text: p.desc, options: { fontSize: 8.5, color: C.slate } }
    ], {
      x: 1.25, y: yPos, w: 4.0, h: 0.75,
      valign: "top"
    });
  });

  // Top Right: The Broken Patient Journey Today
  s.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
    x: 5.6, y: 1.4, w: 7.133, h: 2.1, r: 0.15,
    fill: { color: C.white },
    line: { color: C.cardBorder, width: 1 }
  });
  s.addShape(pptx.shapes.RECTANGLE, {
    x: 5.6, y: 1.4, w: 7.133, h: 0.45,
    fill: { color: C.tealDark }
  });
  s.addText("THE PATIENT JOURNEY TODAY (WITHOUT HEALTHSURE)", {
    x: 5.6, y: 1.4, w: 7.133, h: 0.45,
    fontSize: 11, fontFace: "Arial", bold: true, color: C.white,
    align: "center", valign: "middle"
  });

  const stepsBroken = [
    { n: "1", title: "Health\nIssue" },
    { n: "2", title: "Can't Access\nDigital Help" },
    { n: "3", title: "Travel Far\n& Spend More" },
    { n: "4", title: "Medicine\nNot Available" },
    { n: "5", title: "Treatment\nDelayed" }
  ];

  stepsBroken.forEach((st, idx) => {
    const xPos = 5.9 + (idx * 1.35);
    s.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
      x: xPos, y: 2.0, w: 1.15, h: 1.35, r: 0.1,
      fill: { color: C.redLight },
      line: { color: C.red, width: 1 }
    });
    s.addShape(pptx.shapes.OVAL, {
      x: xPos + 0.38, y: 2.1, w: 0.38, h: 0.38,
      fill: { color: C.red }
    });
    s.addText(st.n, {
      x: xPos + 0.38, y: 2.1, w: 0.38, h: 0.38,
      fontSize: 11, fontFace: "Arial", bold: true, color: C.white,
      align: "center", valign: "middle"
    });
    s.addText(st.title, {
      x: xPos + 0.05, y: 2.55, w: 1.05, h: 0.75,
      fontSize: 9, fontFace: "Arial", bold: true, color: C.red,
      align: "center", valign: "top"
    });
    if (idx < 4) {
      s.addText("→", {
        x: xPos + 1.12, y: 2.45, w: 0.25, h: 0.4,
        fontSize: 14, fontFace: "Arial", bold: true, color: C.red,
        align: "center", valign: "middle"
      });
    }
  });

  // Bottom Right: Motivation Callout Box
  s.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
    x: 5.6, y: 3.65, w: 7.133, h: 2.35, r: 0.15,
    fill: { color: C.tealLight },
    line: { color: C.tealPrimary, width: 1.5 }
  });
  s.addText("CORE MOTIVATION & HACKATHON MISSION", {
    x: 5.8, y: 3.75, w: 6.7, h: 0.35,
    fontSize: 12, fontFace: "Arial", bold: true, color: C.tealDark
  });
  s.addText([
    { text: "• Why should geographical isolation dictate health outcomes in 2026?\n", options: { bold: true, fontSize: 10.5, color: C.navy } },
    { text: "   Rural citizens deserve the exact same specialist access as urban metro residents.\n", options: { fontSize: 10, color: C.slate } },
    { text: "• Autonomous Agentic AI bridges the literacy & connectivity chasm:\n", options: { bold: true, fontSize: 10.5, color: C.navy } },
    { text: "   Instead of forcing rural citizens to learn UI navigation, our system speaks their mother tongue, understands contextual intent, queries live healthcare infrastructure, and handles logistics autonomously.\n", options: { fontSize: 10, color: C.slate } },
    { text: "• Direct alignment with UN SDG 3 (Good Health & Well-being) and National Health Policy 2017.", options: { bold: true, fontSize: 9.5, color: C.tealPrimary } }
  ], {
    x: 5.8, y: 4.15, w: 6.7, h: 1.8,
    valign: "top"
  });

  // Bottom Red Banner
  s.addShape(pptx.shapes.RECTANGLE, {
    x: 0.6, y: 6.15, w: 12.133, h: 0.5,
    fill: { color: C.redLight },
    line: { color: C.red, width: 1 }
  });
  s.addText("RESULT OF STATUS QUO: DELAYED CARE • CATASTROPHIC OUT-OF-POCKET EXPENDITURE • POOR HEALTH OUTCOMES", {
    x: 0.6, y: 6.15, w: 12.133, h: 0.5,
    fontSize: 11, fontFace: "Arial", bold: true, color: C.red,
    align: "center", valign: "middle"
  });
}
