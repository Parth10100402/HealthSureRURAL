import { pptx, C, applySlideTemplate } from "./deck_setup.mjs";

export function buildSlide7() {
  const s = pptx.addSlide();
  s.background = { color: C.white };
  applySlideTemplate(s, "FEASIBILITY AND VIABILITY", "Simple for Patient • Practical for Providers • Sustainable for Government", 7);

  const pillars = [
    {
      num: "1", title: "Economic Viability",
      subtitle: "Low cost. Easy to deploy. High rural impact.",
      bullets: [
        "Open-source, cloud-native architecture.",
        "Zero recurring enterprise licensing fees.",
        "Dramatically reduces administrative paperwork & travel costs.",
        "High social return on investment (SROI) with minimal CapEx."
      ],
      footer: "Cost-effective and sustainable deployment.",
      color: C.green, bg: C.greenLight
    },
    {
      num: "2", title: "Operational Feasibility",
      subtitle: "Simple for patient. Practical for healthcare providers.",
      bullets: [
        "Zero digital learning curve (speaks natural colloquial language).",
        "Seamless integration with existing PHC/CHC clinical workflows.",
        "Integrated appointments, referrals, and longitudinal EHR.",
        "Bilingual voice & IVR hotline eliminates digital illiteracy barrier."
      ],
      footer: "Designed for easy adoption at PHCs and hospitals.",
      color: C.orange, bg: C.orangeLight
    },
    {
      num: "3", title: "Scalability & Sustainability",
      subtitle: "Start small. Scale across districts and states.",
      bullets: [
        "Microservices & API-first decoupled architecture.",
        "Containerized deployment ready for AWS, Azure, or NIC MeghRaj.",
        "Scales effortlessly from district pilot to pan-India national rollout.",
        "Designed for long-term operational and technical sustainability."
      ],
      footer: "A modular platform built for phased regional expansion.",
      color: C.blue, bg: C.blueLight
    },
    {
      num: "4", title: "The Viability Roadmap",
      subtitle: "From working prototype to real-world rural impact.",
      bullets: [
        "IDEA: Identify last-mile rural clinical gap & specialist deficit.",
        "FEASIBLE: Build turn-based voice pipeline & test real healthcare queries.",
        "VIABLE: Prove clinical accuracy, low-latency, and zero hallucination.",
        "USABLE: Deploy with rural ASHA workers & community pilot.",
        "SCALABLE: Expand to 22 vernacular Indian languages via BHASHINI."
      ],
      footer: "Empowering public healthcare delivery across all tiers.",
      color: C.tealPrimary, bg: C.tealLight
    }
  ];

  pillars.forEach((p, idx) => {
    const col = idx % 2;
    const row = Math.floor(idx / 2);
    const xPos = 0.6 + (col * 6.2);
    const yPos = 1.45 + (row * 2.75);

    s.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
      x: xPos, y: yPos, w: 5.9, h: 2.55, r: 0.15,
      fill: { color: C.white },
      line: { color: p.color, width: 1.5 }
    });

    s.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
      x: xPos, y: yPos, w: 5.9, h: 0.55, r: 0.15,
      fill: { color: p.bg }
    });
    s.addShape(pptx.shapes.OVAL, {
      x: xPos + 0.15, y: yPos + 0.1, w: 0.35, h: 0.35,
      fill: { color: p.color }
    });
    s.addText(p.num, {
      x: xPos + 0.15, y: yPos + 0.1, w: 0.35, h: 0.35,
      fontSize: 10, fontFace: "Arial", bold: true, color: C.white,
      align: "center", valign: "middle"
    });
    s.addText(p.title, {
      x: xPos + 0.6, y: yPos + 0.05, w: 5.1, h: 0.25,
      fontSize: 11, fontFace: "Arial", bold: true, color: p.color
    });
    s.addText(p.subtitle, {
      x: xPos + 0.6, y: yPos + 0.28, w: 5.1, h: 0.22,
      fontSize: 8.5, fontFace: "Arial", color: C.slate
    });

    const bulletText = p.bullets.map(b => ({ text: `• ${b}\n`, options: { fontSize: 8.5, color: C.dark } }));
    s.addText(bulletText, {
      x: xPos + 0.2, y: yPos + 0.65, w: 5.5, h: 1.45,
      valign: "top"
    });

    s.addShape(pptx.shapes.RECTANGLE, {
      x: xPos, y: yPos + 2.15, w: 5.9, h: 0.4,
      fill: { color: p.bg }
    });
    s.addText(p.footer, {
      x: xPos, y: yPos + 2.15, w: 5.9, h: 0.4,
      fontSize: 8.5, fontFace: "Arial", bold: true, color: p.color,
      align: "center", valign: "middle"
    });
  });
}
