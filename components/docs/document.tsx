import type { ReactNode } from "react";
import { DocsSidebar } from "@/components/docs/sidebar";
import { Icon } from "@/components/icon";
import { docHref, docsPages, type DocPage } from "@/lib/docs";

export type DocSection = { id: string; title: string; content: ReactNode };

export function DocsDocument({
  page,
  sections,
}: {
  page: DocPage;
  sections: DocSection[];
}) {
  const index = docsPages.findIndex((item) => item.slug === page.slug);
  const previous = docsPages[index - 1];
  const next = docsPages[index + 1];

  return (
    <div className="docs-grid site-container">
      <DocsSidebar activeSlug={page.slug} />
      <main id="main" tabIndex={-1} className="docs-main">
        <div className="docs-breadcrumb">
          <a href="/docs/">Docs</a>
          <span aria-hidden="true">/</span>
          <span className="text-muted">{page.title}</span>
        </div>
        <article aria-labelledby="document-title" className="docs-article">
          <header className="docs-article-header">
            <h1 id="document-title">
              {page.title}
              <span className="text-accent">.</span>
            </h1>
            <p className="docs-lead">{page.description}</p>
          </header>
          <div className="docs-prose">
            {sections.map((section) => (
              <section
                key={section.id}
                id={section.id}
                aria-labelledby={`heading-${section.id}`}
                className="docs-section"
              >
                <h2 id={`heading-${section.id}`}>
                  <a href={`#${section.id}`} className="docs-heading-link">
                    <span aria-hidden="true">#</span>
                    {section.title}
                  </a>
                </h2>
                {section.content}
              </section>
            ))}
          </div>
          <nav
            aria-label="Documentation pagination"
            className="docs-pagination"
          >
            {previous ? (
              <a
                href={docHref(previous.slug)}
                className="docs-pagination-link link-arrow"
              >
                <span className="docs-pagination-label">
                  <Icon name="arrow-left" className="size-3" /> Previous
                </span>
                <span>{previous.title}</span>
              </a>
            ) : (
              <div />
            )}
            {next && (
              <a
                href={docHref(next.slug)}
                className="docs-pagination-link link-arrow text-right"
              >
                <span className="docs-pagination-label justify-end">
                  Next <Icon name="arrow-right" className="size-3" />
                </span>
                <span>{next.title}</span>
              </a>
            )}
          </nav>
        </article>
      </main>
      <aside className="docs-toc">
        <nav aria-label="On this page">
          <ul>
            {sections.map((section) => (
              <li key={section.id}>
                <a href={`#${section.id}`}>{section.title}</a>
              </li>
            ))}
          </ul>
          <a href="/docs/contributing/" className="docs-toc-contribute">
            Have a question?
            <br />
            <span>
              Find your way in <span aria-hidden="true">↗</span>
            </span>
          </a>
        </nav>
      </aside>
    </div>
  );
}
