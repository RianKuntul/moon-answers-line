// The Moon finally answers back.
// After four billion years of wishes, howls and late-night promises,
// the Moon confesses what it has actually been doing with them.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: the Moon's reply to everyone who ever wished on it.
const ENTRY =
  "I've heard every wish you've ever made. Trust me, you're better off with me ignoring most of them.";

// The gate: 1 to 240 characters, not only whitespace.
if (ENTRY.length < 1 || ENTRY.length > 240 || ENTRY.trim().length === 0) {
  throw new Error(`entry fails the gate: ${ENTRY.length} characters`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
// No trailing newline: the file holds exactly the entry text.
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
