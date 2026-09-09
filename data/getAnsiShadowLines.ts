import { ANSI_SHADOW_MAP } from "./ansiShadow";

export function getAnsiShadowLines(text: string): string[] {
  const upper = text.toUpperCase();
  const height = 6;
  const resultLines: string[] = Array(height).fill("");

  for (const char of upper) {
    const charLines = ANSI_SHADOW_MAP[char] || ANSI_SHADOW_MAP[" "];
    for (let row = 0; row < height; row++) {
      resultLines[row] += charLines[row];
    }
  }

  return resultLines;
}