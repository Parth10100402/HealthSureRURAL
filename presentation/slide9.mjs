import { pptx, C, applySlideTemplate } from "./deck_setup.mjs";

export function buildSlide9() {
  const s = pptx.addSlide();
  s.background = { color: C.white };
  applySlideTemplate(s, "HACKATHON THEME RELEVANCE", "Why HealthSure is a True Autonomous Agentic AI Solution (Track 2: Healthcare)", 9);

  // Left Box: Passive Chatbots vs HealthSure Autonomous Agent
  s.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
    x: 0.6, y: 1.45, w: 5.9, h: 5.35, r: 0.15,
    fill: { color: C.white },
    line: { color: C.tealPrimary, width: 1.5 }
  });
  s.addShape(pptx.shapes.RECTANGLE, {
    x: 0.6, y: 1.45, w: 5.9, h: 0.45,
    fill: { color: C.tealDark }
  });
  s.addText("PASSIVE CHATBOT VS. HEALTHSURE AGENTIC AI", {
    x: 0.6, y: 1.45, w: 5.9, h: 0.45,
    fontSize: 11, fontFace: "Arial", bold: true, color: C.white,
    align: "center", valign: "middle"
  });

  const comparison = [
    {
      aspect: "Tool Use & API Execution",
      dumb: "Static responses, external links, zero actions.",
      agent: "Autonomously executes live tools: reads doctor schedules, checks medicine stock, creates real appointment tokens in DB."
    },
    {
      aspect: "Multi-Turn Context & Pronouns",
      dumb: "Forgets previous turns; treats each query independently.",
      agent: "Resolves ambiguous references across turns ('unke saath agla slot', 'pehla wala doctor', 'kal dopahar 2 baje')."
    },
    {
      aspect: "Mutating Action Safety Guardrail",
      dumb: "Hallucinates answers or executes risky actions blindly.",
      agent: "Strict verification gate: prepares action payload, prompts explicit confirmation ('Haan ya Naa'), allows instant cancellation."
    },
    {
      aspect: "Clinical Triage & Emergency Bypass",
      dumb: "May give generic medical text for severe symptoms.",
      agent: "Heuristic safety interceptor: triggers immediate 108 Emergency SOS guidance and PHC emergency room routing."
    }
  ];

  comparison.forEach((c, idx) => {
    const yPos = 2.05 + (idx * 1.15);
    s.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
      x: 0.8, y: yPos, w: 5.5, h: 1.05, r: 0.1,
      fill: C.grayLight,
      line: { color: C.cardBorder, width: 1 }
    });
    s.addText(c.aspect, {
      x: 0.9, y: yPos + 0.05, w: 5.3, h: 0.25,
      fontSize: 9.5, fontFace: "Arial", bold: true, color: C.navy
    });
    s.addText([
      { text: "❌ Traditional Bot: ", options: { bold: true, fontSize: 8, color: C.red } },
      { text: `${c.dumb}\n`, options: { fontSize: 8, color: C.slate } },
      { text: "✔ HealthSure Agent: ", options: { bold: true, fontSize: 8, color: C.tealPrimary } },
      { text: c.agent, options: { bold: true, fontSize: 8, color: C.dark } }
    ], {
      x: 0.9, y: yPos + 0.3, w: 5.3, h: 0.72,
      valign: "top"
    });
  });

  // Right Box: Alignment with JAI 2026 Tracks
  s.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
    x: 6.8, y: 1.45, w: 5.9, h: 5.35, r: 0.15,
    fill: { color: C.white },
    line: { color: C.blue, width: 1.5 }
  });
  s.addShape(pptx.shapes.RECTANGLE, {
    x: 6.8, y: 1.45, w: 5.9, h: 0.45,
    fill: { color: C.navy }
  });
  s.addText("DIRECT ALIGNMENT WITH JAI 2026 THEMES", {
    x: 6.8, y: 1.45, w: 5.9, h: 0.45,
    fontSize: 11, fontFace: "Arial", bold: true, color: C.white,
    align: "center", valign: "middle"
  });

  const tracks = [
    {
      name: "PRIMARY: Track 2 — Agentic AI for Healthcare",
      body: "HealthSure directly implements the track's core mandate: an autonomous agent that assists with healthcare decision support (slot discovery, outreach matching), clinical information management (longitudinal EHR, ABHA), patient interaction (bilingual voice dialogue), and workflow automation (token generation, referral tracking).",
      color: C.tealPrimary, bg: C.tealLight
    },
    {
      name: "SECONDARY: Track 3 — Agentic AI for NLP",
      body: "Engineered with Deepgram Nova-3 multilingual model (&language=multi) to autonomously handle real-world Indian code-switching (Hinglish/Hindi/English) and colloquial medical phrasing without rigid syntax constraints.",
      color: C.blue, bg: C.blueLight
    },
    {
      name: "SECONDARY: Track 4 — Open Innovation",
      body: "Combines modern Web APIs, open-source relational databases, and legacy telephony (PSTN/GSM IVR) into an autonomous multi-tier architecture solving an acute national challenge.",
      color: C.purple, bg: "F3E8FF"
    }
  ];

  tracks.forEach((tr, idx) => {
    const yPos = 2.05 + (idx * 1.55);
    s.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
      x: 7.0, y: yPos, w: 5.5, h: 1.45, r: 0.1,
      fill: tr.bg,
      line: { color: tr.color, width: 1 }
    });
    s.addText(tr.name, {
      x: 7.15, y: yPos + 0.08, w: 5.2, h: 0.3,
      fontSize: 10, fontFace: "Arial", bold: true, color: tr.color
    });
    s.addText(tr.body, {
      x: 7.15, y: yPos + 0.4, w: 5.2, h: 0.98,
      fontSize: 8.5, fontFace: "Arial", color: C.dark,
      valign: "top"
    });
  });
}
