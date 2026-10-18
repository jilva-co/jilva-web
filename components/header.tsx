import { Logo } from "@/components/logo";
import { site } from "@/lib/site";

export function Header() {
  return (
    <header className="site-header">
      <div className="site-container header-inner">
        <Logo />
        <nav aria-label="Main navigation" className="main-nav">
          <a href={site.docs}>Docs</a>
          <a href="/#playground">Playground</a>
          <a href={site.framework}>
            Source <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
