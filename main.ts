import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname } from 'node:path';

/**
 * Competition: One Letter for Your Day (u-puan-one-letter-for-your-day-e54e9c36)
 * Output contract: /output/entry.txt must be exact 1 UTF-8 character (A to Z),
 * non-whitespace, with no trailing newline, no gloss, and no punctuation.
 */

const DEFAULT_OUTPUT_PATH = '/output/entry.txt';
const SELECTED_LETTER = 'J';

function resolveOutputPath(argv: readonly string[]): string {
  const outFlagIndex = argv.indexOf('--out');
  if (outFlagIndex !== -1) {
    const candidate = argv[outFlagIndex + 1];
    if (!candidate) {
      throw new Error('Missing path argument after --out');
    }
    return candidate;
  }
  return DEFAULT_OUTPUT_PATH;
}

function validateEntry(letter: string): void {
  const codePoints = Array.from(letter);
  if (codePoints.length !== 1) {
    throw new Error(`Expected exactly 1 Unicode character, got ${codePoints.length}`);
  }
  if (!/^[A-Z]$/.test(letter)) {
    throw new Error(`Expected a single uppercase ASCII letter A-Z, got ${JSON.stringify(letter)}`);
  }
  const byteLength = Buffer.byteLength(letter, 'utf8');
  if (byteLength !== 1) {
    throw new Error(`Expected 1 UTF-8 byte, got ${byteLength}`);
  }
}

function writeDeterministicEntry(outputPath: string, letter: string): void {
  validateEntry(letter);
  const outputDir = dirname(outputPath);
  if (!existsSync(outputDir)) {
    mkdirSync(outputDir, { recursive: true });
  }
  writeFileSync(outputPath, letter, { encoding: 'utf8', mode: 0o644 });

  const written = readFileSync(outputPath);
  if (written.length !== 1 || written[0] !== letter.charCodeAt(0)) {
    throw new Error(`Verification failed for ${outputPath}: expected 1 byte "${letter}"`);
  }
}

function main(): void {
  const outputPath = resolveOutputPath(process.argv.slice(2));
  writeDeterministicEntry(outputPath, SELECTED_LETTER);
}

main();
