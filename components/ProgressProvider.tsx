"use client";

import NextNProgress from "nextjs-progressbar";

export default function ProgressProvider() {
  return (
    <NextNProgress
      color="#06b6d4"
      startPosition={0.3}
      stopDelayMs={200}
      height={3}
    />
  );
}
