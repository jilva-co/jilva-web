import { site } from "@/lib/site";

export function Ecosystem() {
  return (
    <div className="roadmap-note">
      <span className="status-pixel" aria-hidden="true" />
      <p>
        <strong>Rust first.</strong> Go and TypeScript are planned after a
        usable Rust alpha.{" "}
        <a href={site.roadmap}>
          Follow the roadmap <span aria-hidden="true">→</span>
        </a>
      </p>
    </div>
  );
}
