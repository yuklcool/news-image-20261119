// news-image-20261119 v2: the entry is a pre-rendered newspaper front page.
// The program only copies entry.png into the output directory, so the two
// graded runs write byte-identical output. No network, no other files.
import { copyFileSync, existsSync, mkdirSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const src = join(here, "entry.png");
const dst = join(outDir, "entry.png");

if (!existsSync(src)) {
  throw new Error("entry.png is missing next to main.ts");
}
mkdirSync(outDir, { recursive: true });
copyFileSync(src, dst);

// The two graded runs must write identical bytes: compare the copy against
// the source byte for byte and fail loudly on any difference.
const copied = readFileSync(dst);
if (!copied.equals(readFileSync(src))) {
  throw new Error("entry.png copy differs from source");
}

// The gate allows at most 1 MiB: refuse to hand over an oversized image.
if (copied.length > 1048576) {
  throw new Error("entry.png exceeds the 1 MiB limit");
}
