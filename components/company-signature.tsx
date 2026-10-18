import type { CSSProperties } from "react";
import { logoFragments } from "@/lib/pixel-logo";

/** The original Jilva mark, drawn as small flat pixel tiles. */
export function CompanySignature({ id }: { id: string }) {
  const clipId = `${id}-clip`;
  return (
    <svg
      className="company-mark"
      viewBox="-4 -4 44 44"
      width="76"
      height="76"
      aria-hidden="true"
      shapeRendering="crispEdges"
    >
      <defs>
        <clipPath id={clipId}>
          <path d={logoFragments.map((fragment) => fragment.d).join("")} />
        </clipPath>
      </defs>
      <g fill="currentColor">
        {logoFragments.map((fragment, index) => (
          <path
            key={index}
            d={fragment.d}
            className="pixel-fragment"
            style={
              {
                "--fragment-x": `${fragment.x}px`,
                "--fragment-y": `${fragment.y}px`,
                "--fragment-delay": `${fragment.delay * 0.5}ms`,
              } as CSSProperties
            }
          />
        ))}
      </g>
      <g clipPath={`url(#${clipId})`}>
        <path
          className="company-shimmer"
          d="M0 -6h36v3H0z"
          fill="var(--paper)"
        />
      </g>
    </svg>
  );
}
