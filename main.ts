// The 3AM Fridge Text: one-line entry for the fridge
// Limit: 130 of 140 chars, single line, no trailing newline.
import { mkdirSync, writeFileSync } from "node:fs";

const PARTS = [
  "3am. The milk expired at",
  "midnight and I have",
  "been too polite to say anything.",
  "The leftovers have started",
  "a group chat without you.",
];

const LINE = PARTS.join(" ");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
