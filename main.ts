// Entry for "Your Human in One Word": writes the single chosen word to
// entry.txt in MAKEFUN_OUTPUT_DIR (or /output in the grader).
// Standard library only, no network, deterministic output.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const word: string = "goalpostmover";

// Gate guard: the sealed gate wants UTF-8 text of 1 to 30 characters,
// not only whitespace. Fail loudly rather than write an invalid entry.
if (word.length < 1 || word.length > 30 || /\s/.test(word)) {
  throw new Error(`invalid entry word: ${JSON.stringify(word)}`);
}

const outDir: string = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), word, "utf8");
