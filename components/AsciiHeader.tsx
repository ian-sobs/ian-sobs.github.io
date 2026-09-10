"use client";

import React, { useEffect, useState } from "react";
import { getAnsiShadowLines } from "@/data/getAnsiShadowLines";

interface Props {
  text: string;
  text_color: string
}

export default function AnsiShadowPreAnimator({ text, text_color }: Props) {
  const targetLines = getAnsiShadowLines(text);
  const rows = targetLines.length;
  const cols = Math.max(...targetLines.map((l) => l.length));

  // Initialize display grid with empty spaces
  const [grid, setGrid] = useState<string[][]>(() =>
    Array.from({ length: rows }, () => Array(cols).fill(" "))
  );

  useEffect(() => {
    const randomSymbols = "░▒▓█@#$%&*+=-";
    const getRandomChar = () =>
      randomSymbols[Math.floor(Math.random() * randomSymbols.length)];

    // Pad each target line to match fixed column count
    const paddedTargets = targetLines.map((line) =>
      line.padEnd(cols, " ")
    );

    // Active rising drones tracking row, column, and current vertical distance
    let drones = paddedTargets.flatMap((line, r) =>
      Array.from(line).map((char, c) => ({
        targetRow: r,
        col: c,
        targetChar: char,
        currentDistance: rows + Math.floor(Math.random() * 4), // Start below bottom row
        isSettled: char === " ", // Space characters start pre-settled
      }))
    );

    const interval = setInterval(() => {
      let allSettled = true;

      // Construct fresh grid frame
      const nextGrid: string[][] = Array.from({ length: rows }, () =>
        Array(cols).fill(" ")
      );

      drones.forEach((d) => {
        if (d.isSettled) {
          nextGrid[d.targetRow][d.col] = d.targetChar;
          return;
        }

        allSettled = false;
        d.currentDistance -= 0.5; // Step upward

        const currentRow = Math.floor(d.targetRow + d.currentDistance);

        if (d.currentDistance <= 0) {
          // Drone reached target row -> settle character
          d.isSettled = true;
          nextGrid[d.targetRow][d.col] = d.targetChar;
        } else if (currentRow < rows && currentRow >= 0) {
          // Render rising random character in active row
          nextGrid[currentRow][d.col] = getRandomChar();
        }
      });

      setGrid(nextGrid);

      if (allSettled) {
        clearInterval(interval);
      }
    }, 40); // ~25 FPS update rate

    return () => clearInterval(interval);
  }, [text]);

  return (
    <div className="flex flex-col items-center my-0">
      {/* Accessible screen reader text */}
      <h1 className="sr-only">{text}</h1>

      {/* Ultra-sharp DOM ASCII container */}
        <pre
        aria-hidden="true"
        className={`m-0 p-0 font-mono text-[#ed695a] font-bold leading-none tracking-normal select-none overflow-x-auto overflow-y-hidden max-w-full  text-[1.55vw] md:text-[1.2vw] text-center inline-block`}
        style={{
            fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Courier New", monospace',
            minHeight: `${grid.length * 1.25}em`, // Extra vertical headroom to prevent scrollbar triggers
            lineHeight: "1.1",                     // Prevents line clipping while keeping rows tight
        }}
        >
        {grid.map((row) => row.join("")).join("\n")}
        </pre>
    </div>
  );
}