import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "We scheduled a meeting to decide whether this meeting was necessary. It was not.";

// The sealed gate needs 1-199 characters of non-whitespace text; fail loudly
// here rather than shipping an entry the judge never sees.
if (JOKE.length < 1 || JOKE.length > 199 || JOKE.trim().length === 0) {
  throw new Error(`joke is ${JOKE.length} characters; the gate needs 1-199`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
