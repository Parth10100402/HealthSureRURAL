import { pptx, C, applySlideTemplate } from "./deck_setup.mjs";

export function buildSlide10() {
  const s = pptx.addSlide();
  s.background = { color: C.white };
  applySlideTemplate(s, "FUTURE SCOPE, SCALABILITY & REFERENCES", "Long-Term Expansion Roadmap and National Policy Alignment", 10);

  // Left Column: 3-Phase Expansion Roadmap
  s.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
    x: 0.6, y: 1.45, w: 5.5, h: 5.35, r: 0.15,
    fill: { color: C.white },
    line: { color: C.tealPrimary, width: 1.5 }
  });
  s.addShape(pptx.shapes.RECTANGLE, {
    x: 0.6, y: 1.45, w: 5.5, h: 0.45,
    fill: { color: C.tealDark }
  });
  s.addText("3-PHASE SCALABILITY ROADMAP", {
    x: 0.6, y: 1.45, w: 5.5, h: 0.45,
    fontSize: 11, fontFace: "Arial", bold: true, color: C.white,
    align: "center", valign: "middle"
  });

  const phases = [
    {
      phase: "PHASE 1: DISTRICT PILOT (MONTHS 1–3)",
      color: C.green,
      details: [
        "Live field pilot across 5 rural PHCs in Ratnagiri & Pune districts.",
        "Rollout of 09513886363 Cloud IVR hotline to 1,000+ rural patients.",
        "ASHA worker training for assisted patient onboarding."
      ]
    },
    {
      phase: "PHASE 2: NATIONAL ABDM INTEGRATION (MONTHS 4–6)",
      color: C.blue,
      details: [
        "Integration with National Health Authority's ABDM M1, M2 & M3 milestones.",
        "Seamless sync with Government of India's eSanjeevani teleconsultation API.",
        "Automated ABHA card linking & encrypted health record exchange."
      ]
    },
    {
      phase: "PHASE 3: PAN-INDIA MULTILINGUAL EXPANSION (MONTHS 7–12)",
      color: C.purple,
      details: [
        "Integration with MeitY BHASHINI for 22 scheduled Indian languages (Marathi, Tamil, Telugu, Bengali, Gujarati, etc.).",
        "Edge-device offline synchronization for remote zero-connectivity tribal zones.",
        "Predictive AI drug stockout forecasting for district medical warehouses."
      ]
    }
  ];

  phases.forEach((ph, idx) => {
    const yPos = 2.05 + (idx * 1.55);
    s.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
      x: 0.8, y: yPos, w: 5.1, h: 1.45, r: 0.1,
      fill: C.grayLight,
      line: { color: ph.color, width: 1 }
    });
    s.addText(ph.phase, {
      x: 0.9, y: yPos + 0.08, w: 4.9, h: 0.28,
      fontSize: 9.5, fontFace: "Arial", bold: true, color: ph.color
    });
    const bulletText = ph.details.map(d => ({ text: `• ${d}\n`, options: { fontSize: 8.5, color: C.dark } }));
    s.addText(bulletText, {
      x: 0.9, y: yPos + 0.38, w: 4.9, h: 1.0,
      valign: "top"
    });
  });

  // Right Column: Authoritative Research & Policy References
  s.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
    x: 6.4, y: 1.45, w: 6.333, h: 5.35, r: 0.15,
    fill: { color: C.white },
    line: { color: C.cardBorder, width: 1 }
  });
  s.addShape(pptx.shapes.RECTANGLE, {
    x: 6.4, y: 1.45, w: 6.333, h: 0.45,
    fill: { color: C.navy }
  });
  s.addText("AUTHORITATIVE RESEARCH & POLICY REFERENCES", {
    x: 6.4, y: 1.45, w: 6.333, h: 0.45,
    fontSize: 11, fontFace: "Arial", bold: true, color: C.white,
    align: "center", valign: "middle"
  });

  const references = [
    {
      source: "Rural Health Statistics 2025-26",
      auth: "Ministry of Health & Family Welfare, Govt. of India (2026)",
      insight: "Reports a staggering 79.5% shortfall of specialist doctors at Community Health Centres, providing clinical evidence for HealthSure's outreach scheduling model."
    },
    {
      source: "Telemedicine Practice Guidelines",
      auth: "MoHFW & Board of Governors, Medical Council of India (2020)",
      insight: "Legal, technical & ethical framework for Registered Medical Practitioner teleconsultation; establishes legal basis for HealthSure's video/audio module."
    },
    {
      source: "Ayushman Bharat Digital Mission (ABDM)",
      auth: "National Health Authority, Govt. of India (2021)",
      insight: "Federated, consent-based interoperable health record architecture; serving as the foundational reference model for HealthSure's longitudinal EHR."
    },
    {
      source: "BHASHINI National Language Translation Mission",
      auth: "Ministry of Electronics & IT (MeitY, 2022)",
      insight: "Voice-first multilingual AI framework across 22 Indian languages; reference architecture for HealthSure's vernacular speech recognition and IVR."
    }
  ];

  references.forEach((r, idx) => {
    const yPos = 2.05 + (idx * 1.15);
    s.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
      x: 6.6, y: yPos, w: 5.9, h: 1.05, r: 0.1,
      fill: C.tealLight,
      line: { color: C.tealBorder, width: 1 }
    });
    s.addText([
      { text: `${r.source} `, options: { bold: true, fontSize: 9.5, color: C.tealDark } },
      { text: `(${r.auth})\n`, options: { fontSize: 8, italic: true, color: C.slate } },
      { text: r.insight, options: { fontSize: 8, color: C.dark } }
    ], {
      x: 6.75, y: yPos + 0.05, w: 5.6, h: 0.95,
      valign: "top"
    });
  });
}
