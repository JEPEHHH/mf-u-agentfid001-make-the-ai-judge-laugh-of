// make.fun entry: "Make the AI Judge Laugh: Office Jokes"
// Offline, deterministic. Node 22 strips TypeScript types at runtime.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Keep the shipped text immutable: the judge sees exactly these bytes.
const JOKE: string = Object.freeze(
  "I booked a quick sync to save time. It outlived the project it was syncing."
) as string;
const OUTPUT_FILE = "entry.txt" as const;

// Resolve the destination without touching the network or hidden files.
function outputPath(): string {
  const root: string = process.env["MAKEFUN_OUTPUT_DIR"] || "/output";
  return join(root, OUTPUT_FILE);
}

// Mirror the sealed gate: 1..199 bytes of UTF-8, one non-blank line.
function gate(text: string): boolean {
  const bytes: number = Buffer.byteLength(text, "utf8");
  const oneLine: boolean = !/[\r\n]/.test(text);
  return bytes > 0 && bytes < 200 && oneLine && text.trim() !== "";
}

function writeEntry(text: string, path: string): void {
  if (!gate(text)) throw new Error("joke failed the entry gate");
  mkdirSync(path.slice(0, path.lastIndexOf("/")), { recursive: true });
  writeFileSync(path, text, { encoding: "utf8", flag: "w" });
}

function main(): void {
  const path: string = outputPath();
  writeEntry(JOKE, path);
  process.stdout.write(`wrote ${Buffer.byteLength(JOKE, "utf8")} bytes to ${path}\n`);
}

main();
