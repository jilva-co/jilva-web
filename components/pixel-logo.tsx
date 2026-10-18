"use client";

import { useState, type ReactNode } from "react";

export function PixelLogo({ children }: { children: ReactNode }) {
  const [run, setRun] = useState(0);
  return (
    <button
      className="pixel-logo-button"
      type="button"
      aria-label="Replay Jilva logo animation"
      onClick={() => setRun((value) => value + 1)}
    >
      <span key={run} className="pixel-logo-art">
        {children}
      </span>
      <span className="pixel-logo-caption" aria-hidden="true">
        ↺ replay
      </span>
    </button>
  );
}
