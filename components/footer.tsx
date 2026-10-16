import { Logo } from "@/components/logo";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="site-container flex min-h-24 flex-wrap items-center justify-between gap-x-8 gap-y-4 py-7 text-[10px] text-dim">
        <div className="flex items-center gap-4">
          <Logo compact />
          <span>© {new Date().getUTCFullYear()} Jilva contributors.</span>
        </div>
        <p className="hidden md:block">A little light in the terminal.</p>
        <div className="flex items-center gap-6">
          <a href={site.license} className="hover:text-muted">
            MIT licensed
          </a>
          <a href={site.framework} className="hover:text-muted">
            GitHub <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
