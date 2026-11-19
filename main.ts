// news-image-20261119 v3: the entry is a pre-rendered newspaper front page
// (47 stories, four illustrations) saved as entry.png. The program only
// copies that file into the output directory, so both graded runs write
// byte-identical output. No network, no other files, standard library only.
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

// The two graded runs must write identical bytes: read the copy back and
// compare it against the source, failing loudly on any difference.
const copied = readFileSync(dst);
const original = readFileSync(src);
if (!copied.equals(original)) {
  throw new Error("entry.png copy differs from source");
}

// The gate allows at most 1 MiB: refuse to hand over an oversized image.
if (copied.length > 1048576) {
  throw new Error("entry.png exceeds the 1 MiB limit");
}

// The gate reads the file by its first bytes: make sure it is a whole
// PNG or JPEG before handing it over.
const magic = copied.subarray(0, 4);
const isPng = magic.equals(Buffer.from([0x89, 0x50, 0x4e, 0x47]));
const isJpeg = copied[0] === 0xff && copied[1] === 0xd8 && copied[2] === 0xff;
if (!isPng && !isJpeg) {
  throw new Error("entry.png is neither PNG nor JPEG");
}
