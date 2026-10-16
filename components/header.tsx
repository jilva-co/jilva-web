"use client";

import { useState } from "react";
import { Icon } from "@/components/icon";
import { Logo } from "@/components/logo";
import { site } from "@/lib/site";

const navigation = [
  { label: "Docs", href: site.docs },
  { label: "Examples", href: "#playground" },
  { label: "Blog", href: "#notes" },
  { label: "Community", href: "#community" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header border-b border-line">
      <div className="site-container flex min-h-[85px] items-center justify-between gap-6">
        <Logo />
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-8 md:flex"
        >
          {navigation.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="nav-link text-[13px] text-muted hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <span className="h-4 border-l border-line" aria-hidden="true" />
          <a
            href={site.framework}
            aria-label="Jilva on GitHub"
            className="text-muted hover:text-foreground"
          >
            <Icon name="github" />
          </a>
        </nav>
        <button
          type="button"
          className="flex size-10 items-center justify-center text-muted md:hidden"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Icon name={menuOpen ? "close" : "menu"} />
        </button>
      </div>
      <nav
        id="mobile-navigation"
        aria-label="Mobile navigation"
        hidden={!menuOpen}
        className="site-container flex flex-wrap gap-x-7 gap-y-5 border-t border-line py-6 text-sm md:hidden"
      >
        {navigation.map((link) => (
          <a
            key={link.label}
            href={link.href}
            onClick={() => setMenuOpen(false)}
            className="text-muted hover:text-foreground"
          >
            {link.label}
          </a>
        ))}
        <a href={site.framework} className="text-muted hover:text-foreground">
          GitHub <span aria-hidden="true">↗</span>
        </a>
      </nav>
    </header>
  );
}
