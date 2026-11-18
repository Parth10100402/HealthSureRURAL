import { pptx } from "./deck_setup.mjs";
import { buildSlide1 } from "./slide1.mjs";
import { buildSlide2 } from "./slide2.mjs";
import { buildSlide3 } from "./slide3.mjs";
import { buildSlide4 } from "./slide4.mjs";
import { buildSlide5 } from "./slide5.mjs";
import { buildSlide6 } from "./slide6.mjs";
import { buildSlide7 } from "./slide7.mjs";
import { buildSlide8 } from "./slide8.mjs";
import { buildSlide9 } from "./slide9.mjs";
import { buildSlide10 } from "./slide10.mjs";

console.log("Compiling HealthSure JAI 2026 Hackathon Presentation (10 Slides)...");

buildSlide1();
buildSlide2();
buildSlide3();
buildSlide4();
buildSlide5();
buildSlide6();
buildSlide7();
buildSlide8();
buildSlide9();
buildSlide10();

const outputFile = "HealthSure_JAI_2026_Hackathon.pptx";
pptx.writeFile({ fileName: outputFile })
  .then(() => {
    console.log(`[SUCCESS] Presentation written successfully to: ${outputFile}`);
  })
  .catch((err) => {
    console.error("[ERROR] Failed to save presentation:", err);
    process.exit(1);
  });
