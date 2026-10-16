export const docsPages = [
  {
    slug: "",
    title: "Introduction",
    group: "Start here",
    description:
      "Meet Jilva, a Rust-first framework for beautiful terminal applications. Understand the direction, the foundations, and what you can do today.",
  },
  {
    slug: "getting-started",
    title: "Getting started",
    group: "Start here",
    description:
      "Set up the Rust toolchain, clone the workspace, and make your first check. A small, honest starting point.",
  },
  {
    slug: "development",
    title: "Development",
    group: "Start here",
    description:
      "The everyday workflow: workspace checks, documentation, formatting, and a few things to know on Windows.",
  },
  {
    slug: "architecture",
    title: "Architecture",
    group: "The foundations",
    description:
      "Three small crates, clear responsibilities, and one direction of dependencies. A map of the framework beneath the surface.",
  },
  {
    slug: "api-design",
    title: "API principles",
    group: "The foundations",
    description:
      "Intent over mechanics. Explicit state. Thoughtful defaults. The principles shaping Jilva's future public API.",
  },
  {
    slug: "roadmap",
    title: "Roadmap",
    group: "The project",
    description:
      "From the foundation to the first usable alpha. Seven phases, without promises on a calendar.",
  },
  {
    slug: "contributing",
    title: "Contributing",
    group: "The project",
    description:
      "Help make the foundations better through questions, precise feedback, documentation, and small, considered changes.",
  },
] as const;

export type DocSlug = (typeof docsPages)[number]["slug"];
export type DocPage = (typeof docsPages)[number];

export function docHref(slug: string) {
  return slug ? `/docs/${slug}/` : "/docs/";
}

export function getDocPage(slug: string) {
  return docsPages.find((page) => page.slug === slug);
}
