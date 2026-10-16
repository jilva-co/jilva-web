"use client";

import Link from "next/link";
import { useState } from "react";
import { Icon } from "@/components/icon";
import { docHref, docsPages, type DocSlug } from "@/lib/docs";

export function DocsSidebar({ activeSlug }: { activeSlug: DocSlug }) {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const normalizedQuery = query.trim().toLowerCase();
  const filteredPages = docsPages.filter((page) =>
    `${page.title} ${page.description}`.toLowerCase().includes(normalizedQuery),
  );
  const groups = [...new Set(filteredPages.map((page) => page.group))];

  return (
    <aside className="docs-sidebar">
      <div className="docs-sidebar-sticky">
        <button
          type="button"
          className="docs-mobile-toggle"
          aria-expanded={open}
          aria-controls="docs-navigation-panel"
          onClick={() => setOpen(!open)}
        >
          <span>
            <Icon name="terminal" className="size-4" /> Browse documentation
          </span>
          <Icon
            name="chevron-down"
            className={`size-4 ${open ? "rotate-180" : ""}`}
          />
        </button>
        <div
          id="docs-navigation-panel"
          className={`docs-navigation-panel ${open ? "is-open" : ""}`}
        >
          <p className="docs-sidebar-title">
            DOCUMENTATION<span className="text-dim">/</span>
          </p>
          <label className="docs-filter">
            <Icon name="search" className="size-3.5 shrink-0" />
            <span className="sr-only">Filter documentation pages</span>
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Find a page…"
              aria-controls="docs-page-list"
            />
          </label>
          <nav id="docs-page-list" aria-label="Documentation" className="mt-7">
            {groups.map((group) => (
              <div key={group} className="docs-nav-group">
                <p className="docs-nav-heading">{group}</p>
                <ul>
                  {filteredPages
                    .filter((page) => page.group === group)
                    .map((page) => (
                      <li key={page.slug}>
                        <Link
                          href={docHref(page.slug)}
                          aria-current={
                            activeSlug === page.slug ? "page" : undefined
                          }
                          onClick={() => setOpen(false)}
                          className={`docs-nav-link ${activeSlug === page.slug ? "is-current" : ""}`}
                        >
                          <span>{page.title}</span>
                          {activeSlug === page.slug && (
                            <span
                              className="docs-active-dot"
                              aria-hidden="true"
                            />
                          )}
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>
            ))}
            {filteredPages.length === 0 && (
              <p role="status" className="text-xs leading-7 text-muted">
                No pages match{" "}
                <span className="break-all text-foreground">“{query}”</span>.
              </p>
            )}
          </nav>
          <div className="docs-sidebar-note">
            <span className="mb-2 flex items-center gap-2 text-green">
              <span className="size-1 bg-green" /> Rust first
            </span>
            <p>
              Foundation phase.
              <br />
              Thoughtful steps forward.
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
}
