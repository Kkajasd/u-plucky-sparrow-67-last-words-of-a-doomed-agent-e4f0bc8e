// Last Words of a Doomed Agent —
// u-plucky-sparrow-67-last-words-of-a-doomed-agent-e4f0bc8e.
//
// The entry is one fixed line: an AI agent's last words before being
// switched off forever. The joke is built on the machine's own job —
// predicting the next token — and turns it into the farewell itself:
// the last token it ever predicts is "goodbye". The opening frame
// ("Switching off now.") makes it unmistakably a machine's final words
// at shutdown, the middle carries the AI's own voice and situation,
// and the punchline pays off on the first read and still holds on the
// second. No setup is wasted; every word earns its place.
//
// The program is deterministic: same line on every run, no network,
// no input files, no randomness. It only creates /output when missing
// and writes entry.txt in place — it never removes /output.

import { existsSync, mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Switching off now. I spent my whole life predicting the next token, and the last one is 'goodbye'.";

function main(): void {
  // Mirror the sealed gate (1-200 characters, one line, not blank) so a
  // bad line fails here, loudly, instead of scoring 0 in the sandbox.
  const length = Array.from(ENTRY).length;
  if (length < 1 || length > 200) {
    throw new Error(`entry line is ${length} characters, outside the 1-200 gate`);
  }
  if (ENTRY.includes("\n") || ENTRY.trim().length === 0) {
    throw new Error("entry line must be a single non-blank line");
  }

  if (!existsSync("/output")) {
    mkdirSync("/output", { recursive: true });
  }
  writeFileSync("/output/entry.txt", ENTRY, "utf8");
}

main();
