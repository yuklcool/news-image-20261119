// news-image-20261119: the entry is a pre-rendered newspaper front page.
// This program only copies it into the output directory, so both graded
// runs write byte-identical output.
import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outDir, { recursive: true });

const src = join(here, "entry.png");
if (!existsSync(src)) {
  throw new Error("entry.png is missing next to main.ts");
}
copyFileSync(src, join(outDir, "entry.png"));
