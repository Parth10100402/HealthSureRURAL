import pptxgen from "pptxgenjs";

export const pptx = new pptxgen();
pptx.layout = "LAYOUT_16x9";
pptx.author = "THE IMMORTALS";
pptx.company = "HealthSure";
pptx.title = "HealthSure - JAI 2026 Hackathon (JIIT Noida)";

export const C = {
  navy: "0A2540",
  tealDark: "073B3A",
  tealPrimary: "087F6D",
  tealLight: "E6F4F1",
  tealBorder: "99D5C9",
  mint: "4FD1C5",
  dark: "17324D",
  slate: "4A5568",
  grayLight: "F8FAFC",
  cardBorder: "DDE8E4",
  red: "DC2626",
  redLight: "FEE2E2",
  orange: "EA580C",
  orangeLight: "FFEDD5",
  blue: "2563EB",
  blueLight: "DBEAFE",
  green: "059669",
  greenLight: "D1FAE5",
  purple: "7C3AED",
  white: "FFFFFF"
};

export function applySlideTemplate(slide, title, subtitle, slideNum) {
  // Top Header Background band
  slide.addShape(pptx.shapes.RECTANGLE, {
    x: 0, y: 0, w: 13.333, h: 1.15,
    fill: { color: C.white }
  });

  // Team Badge (Pill) - Top Left
  slide.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
    x: 0.6, y: 0.18, w: 2.1, h: 0.42, r: 0.2,
    fill: { color: C.white },
    line: { color: C.tealPrimary, width: 1.5 }
  });
  slide.addText("THE IMMORTALS", {
    x: 0.6, y: 0.18, w: 2.1, h: 0.42,
    fontSize: 10, fontFace: "Arial", bold: true, color: C.tealDark,
    align: "center", valign: "middle"
  });

  // Hackathon Badge - Top Right
  slide.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
    x: 9.8, y: 0.18, w: 2.9, h: 0.42, r: 0.2,
    fill: { color: C.tealLight },
    line: { color: C.tealBorder, width: 1 }
  });
  slide.addText("JAI 2026 • JIIT NOIDA", {
    x: 9.8, y: 0.18, w: 2.9, h: 0.42,
    fontSize: 10, fontFace: "Arial", bold: true, color: C.tealDark,
    align: "center", valign: "middle"
  });

  // Slide Title (Centered / Prominent)
  slide.addText(title, {
    x: 0.6, y: 0.48, w: 12.133, h: 0.45,
    fontSize: 22, fontFace: "Arial", bold: true, color: C.navy,
    align: "center", valign: "bottom"
  });

  // Subtitle
  if (subtitle) {
    slide.addText(subtitle, {
      x: 0.6, y: 0.92, w: 12.133, h: 0.3,
      fontSize: 11, fontFace: "Arial", italic: true, color: C.tealPrimary,
      align: "center", valign: "top"
    });
  }

  // Thin separator line
  slide.addShape(pptx.shapes.LINE, {
    x: 0.6, y: 1.25, w: 12.133, h: 0,
    line: { color: C.cardBorder, width: 1 }
  });

  // Footer Band
  slide.addShape(pptx.shapes.RECTANGLE, {
    x: 0, y: 7.1, w: 13.333, h: 0.4,
    fill: { color: C.tealDark }
  });
  slide.addText("@JAI 2026 Idea Submission — Jaypee Agentic AI Hackathon • JIIT Noida", {
    x: 0.6, y: 7.1, w: 10.0, h: 0.4,
    fontSize: 9, fontFace: "Arial", color: C.white,
    align: "left", valign: "middle"
  });
  slide.addText(String(slideNum), {
    x: 12.0, y: 7.1, w: 0.8, h: 0.4,
    fontSize: 10, fontFace: "Arial", bold: true, color: C.white,
    align: "right", valign: "middle"
  });
}
