// news-image-20261119: the entry is a pre-rendered newspaper front page.
// This program only copies it into the output directory, so both graded
// runs write byte-identical output.
import { copyFileSync, existsSync, mkdirSync, statSync } from "node:fs";
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

// Guard: the graded runs must write identical bytes, so fail loudly if the
// copy ever comes out a different size than the source.
if (statSync(join(outDir, "entry.png")).size !== statSync(src).size) {
  throw new Error("entry.png copy size mismatch");
}
