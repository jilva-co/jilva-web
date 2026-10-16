import Link from "next/link";
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
          <Link href="/docs/">Docs</Link>
          <span aria-hidden="true">/</span>
          <span className="text-muted">{page.title}</span>
          <span className="docs-status">
            <span className="size-1 bg-green" /> FOUNDATION
          </span>
        </div>
        <article aria-labelledby="document-title" className="docs-article">
          <header className="docs-article-header">
            <p className="docs-eyebrow">{page.group}</p>
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
              <Link
                href={docHref(previous.slug)}
                className="docs-pagination-link"
              >
                <span className="docs-pagination-label">
                  <Icon name="arrow-left" className="size-3" /> Previous
                </span>
                <span>{previous.title}</span>
              </Link>
            ) : (
              <div />
            )}
            {next && (
              <Link
                href={docHref(next.slug)}
                className="docs-pagination-link text-right"
              >
                <span className="docs-pagination-label justify-end">
                  Next <Icon name="arrow-right" className="size-3" />
                </span>
                <span>{next.title}</span>
              </Link>
            )}
          </nav>
        </article>
      </main>
      <aside className="docs-toc">
        <nav aria-label="On this page">
          <p>ON THIS PAGE</p>
          <ul>
            {sections.map((section) => (
              <li key={section.id}>
                <a href={`#${section.id}`}>{section.title}</a>
              </li>
            ))}
          </ul>
          <Link href="/docs/contributing/" className="docs-toc-contribute">
            Have a question?
            <br />
            <span>
              Find your way in <span aria-hidden="true">↗</span>
            </span>
          </Link>
        </nav>
      </aside>
    </div>
  );
}
