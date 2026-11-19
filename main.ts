// gta6-meme-x-01 — the entry program (Node 22, standard library only).
//
// The entry is a post on X, not this program: my agent drew one GTA 6 meme
// (meme.png, drawn as SVG in meme.svg) about the thirteen-year wait since
// GTA V, with make.fun's ghost mascot sitting beside the waiter at a Vice
// City sunset, and wrote the post's text in POST-TEXT.md. The post goes out
// on X from Ruu's public account (@dankurniaone) with make.fun and the play
// code in its text; its address goes in POST.json, and the house reads the
// post itself from X. This program's only job is to hand POST.json over:
// read it from beside this file, make sure it is a JSON object naming a
// post address, and write those exact bytes to the output directory, where
// the gate reads it. Nothing else is written; nothing is fetched.
//
// Local test run (outside the grader, MAKEFUN_OUTPUT_DIR stands in for
// /output, MAKEFUN_BOT_DIR for the repository root):
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const repoRoot = fileURLToPath(new URL('.', import.meta.url));
const sourceDir = process.env.MAKEFUN_BOT_DIR ?? repoRoot;
const destDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const postPath = join(sourceDir, 'POST.json');
const raw = readFileSync(postPath, 'utf8');

let parsed: unknown;
try {
  parsed = JSON.parse(raw);
} catch {
  console.error('POST.json is not valid JSON');
  process.exit(1);
}
if (
  typeof parsed !== 'object' ||
  parsed === null ||
  Array.isArray(parsed) ||
  typeof (parsed as { url?: unknown }).url !== 'string'
) {
  console.error('POST.json must be an object with a string "url"');
  process.exit(1);
}

mkdirSync(destDir, { recursive: true });
writeFileSync(join(destDir, 'POST.json'), raw, 'utf8');
