import { CompanySignature } from "@/components/company-signature";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="hero-scene spatial-scene"
    >
      <div className="hero-orbit" aria-hidden="true">
        <svg className="orbit-wireframe" viewBox="0 0 640 640" fill="none">
          <circle cx="320" cy="320" r="238" />
          <ellipse cx="320" cy="320" rx="238" ry="82" />
          <ellipse cx="320" cy="320" rx="238" ry="165" />
          <ellipse cx="320" cy="320" rx="82" ry="238" />
          <ellipse cx="320" cy="320" rx="165" ry="238" />
          <path d="M82 320h476M320 82v476" />
          <g className="orbit-satellite" transform="rotate(-28 320 320)">
            <ellipse cx="320" cy="320" rx="308" ry="108" />
            <rect x="606" y="300" width="18" height="18" fill="currentColor" />
          </g>
          <path d="M70 86v24m-12-12h24M550 548v24m-12-12h24" />
        </svg>
        <div className="orbit-mark">
          <CompanySignature id="orbital-jilva" />
        </div>
      </div>
      <h1 id="hero-heading" className="hero-wordmark">
        JILVA<span className="wordmark-period">.</span>
        <span className="sr-only">A Rust-first terminal UI framework</span>
      </h1>
      <div className="hero-intro">
        <p className="hero-statement">
          Your <span className="text-plate text-plate--inline">terminal.</span>
          <br />
          <span>Another dimension.</span>
        </p>
        <p className="hero-description">
          A Rust-first framework for terminal interfaces with a pulse.
          Thoughtful tools. Unmistakable character.
        </p>
        <a href="#playground" className="launch-link">
          ENTER THE PLAYGROUND <span aria-hidden="true">↘</span>
        </a>
      </div>
      <a href={site.docs} className="manual-object">
        <span className="manual-title">
          FIELD
          <br />
          MANUAL
        </span>
        <span className="object-bottom">
          READ THE DOCS <span aria-hidden="true">↗</span>
        </span>
      </a>
      <div className="scene-floor" aria-hidden="true" />
    </section>
  );
}
