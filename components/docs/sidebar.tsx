"use client";

import { useState } from "react";
import { Icon } from "@/components/icon";
import { docHref, docsPages, type DocSlug } from "@/lib/docs";

const groups = [...new Set(docsPages.map((page) => page.group))];

export function DocsSidebar({ activeSlug }: { activeSlug: DocSlug }) {
  const [open, setOpen] = useState(false);

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
            className={`icon step-ease size-4 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          />
        </button>
        <div
          id="docs-navigation-panel"
          className={`docs-navigation-panel ${open ? "is-open" : ""}`}
        >
          <div className="docs-navigation-clip">
            <div className="docs-navigation-content">
              <nav id="docs-page-list" aria-label="Documentation">
                {groups.map((group) => (
                  <div key={group} className="docs-nav-group">
                    <p className="docs-nav-heading">{group}</p>
                    <ul>
                      {docsPages
                        .filter((page) => page.group === group)
                        .map((page) => (
                          <li key={page.slug}>
                            <a
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
                                  className="live-dot live-dot--accent"
                                  aria-hidden="true"
                                />
                              )}
                            </a>
                          </li>
                        ))}
                    </ul>
                  </div>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
