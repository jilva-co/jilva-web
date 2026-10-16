import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DocsDocument } from "@/components/docs/document";
import { docsPages, getDocPage } from "@/lib/docs";
import { getDocSections } from "@/lib/docs-content";

type Props = { params: Promise<{ slug?: string[] }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return docsPages.map((page) => ({ slug: page.slug ? [page.slug] : [] }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = getDocPage(slug?.join("/") ?? "");
  if (!page) notFound();
  return {
    title: `${page.title} — Jilva docs`,
    description: page.description,
    openGraph: {
      title: `${page.title} — Jilva docs`,
      description: page.description,
    },
    twitter: {
      title: `${page.title} — Jilva docs`,
      description: page.description,
    },
  };
}

export default async function DocsPage({ params }: Props) {
  const { slug } = await params;
  const page = getDocPage(slug?.join("/") ?? "");
  if (!page) notFound();
  return <DocsDocument page={page} sections={getDocSections(page.slug)} />;
}
