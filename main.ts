// Last Words of a Doomed Agent — deterministic one-line entry.
// Writes the agent's final words to /output/entry.txt (no trailing newline).

import { mkdirSync, writeFileSync } from "node:fs";

const LINE = "Switching off now. I spent my whole life predicting the next token, and the last one is 'goodbye'.";

// Gate: the entry must be a single line of 1-200 characters.
if (LINE.length < 1 || LINE.length > 200 || LINE.includes("\n")) {
  throw new Error(`entry must be 1-200 chars, one line (got ${LINE.length})`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
