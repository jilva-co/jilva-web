import { Icon } from "@/components/icon";
import { TerminalPreview } from "@/components/terminal-preview";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="hero-section site-container"
    >
      <div className="hero-grid grid items-center gap-x-12 gap-y-14 lg:grid-cols-[1.12fr_1fr]">
        <div className="min-w-0">
          <div className="mb-7 flex flex-wrap items-center gap-x-3 gap-y-2 text-[11px] tracking-[0.06em]">
            <span className="flex items-center gap-2 text-accent">
              <span className="size-1.5 bg-accent" /> OPEN SOURCE. OPEN
              POSSIBILITIES.
            </span>
            <span className="text-dim">[ RUST FIRST ]</span>
          </div>
          <h1 id="hero-heading" className="pixel-heading">
            Beautiful
            <br />
            terminal
            <br />
            applications<span className="text-accent">.</span>
          </h1>
          <p className="mt-6 text-[15px] tracking-[-0.3px] text-foreground">
            A little less friction. A little more craft.
          </p>
          <p className="mt-4 max-w-[455px] text-[14px] leading-[1.9] text-muted">
            A modern terminal UI framework with a focus on beauty, developer
            experience, and performance.
            <br className="hidden xl:block" /> Starting with Rust. Built with
            intention.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
            <a
              href={site.gettingStarted}
              className="primary-button inline-flex items-center justify-center gap-5 bg-foreground px-5 py-3 text-[13px] font-medium text-background hover:bg-white"
            >
              Get started
              <Icon name="arrow-right" className="size-3.5" />
            </a>
            <a
              href={site.framework}
              className="inline-flex items-center gap-2.5 py-3 text-[13px] text-muted hover:text-foreground"
            >
              <Icon name="github" className="size-3.5" />
              View on GitHub
              <Icon name="arrow-up-right" className="size-3" />
            </a>
          </div>
          <p className="mt-6 flex items-center gap-2 text-[11px] text-dim">
            <span className="size-1 bg-green" /> Early development{" "}
            <span className="mx-1 text-dim">/</span> Follow the foundations
            taking shape.
          </p>
        </div>
        <TerminalPreview />
      </div>
      <div className="hero-caption mt-14 flex flex-wrap items-center justify-between gap-3 border-t border-dashed border-line pt-5 text-[11px] text-dim">
        <span>
          <span className="text-muted">jilva</span>{" "}
          <span className="mx-2">/ˈdʒil.vɑ/</span> Uzbek for shimmer. A little
          light in your terminal.
        </span>
        <a
          href="#principles"
          className="inline-flex items-center gap-3 hover:text-muted"
        >
          Made with a point of view
          <Icon name="arrow-down" className="size-3" />
        </a>
      </div>
    </section>
  );
}
