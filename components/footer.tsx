import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-container footer-inner">
        <p>
          jilva <span aria-hidden="true">/</span> a little light in the
          terminal.
        </p>
        <div>
          <a href={site.license}>MIT licensed</a>
          <a href="#top">
            Back to top <span aria-hidden="true">↑</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
