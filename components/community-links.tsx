import { Icon } from "@/components/icon";
import { SectionLabel } from "@/components/section-label";
import { site } from "@/lib/site";

const links = [
  {
    label: "GitHub",
    detail: "Read the source. Leave your mark.",
    href: site.framework,
  },
  {
    label: "Discussions",
    detail: "Questions and ideas, via GitHub issues.",
    href: site.discussions,
  },
  {
    label: "Project notes",
    detail: "Decisions, written in the open.",
    href: "#notes",
  },
  {
    label: "Documentation",
    detail: "Understand the foundations.",
    href: site.docs,
  },
];

export function CommunityLinks() {
  return (
    <section
      id="community"
      aria-labelledby="community-heading"
      className="section-block site-container scroll-mt-8"
    >
      <SectionLabel number="04">BETTER, TOGETHER</SectionLabel>
      <div className="mt-7 grid gap-x-20 gap-y-9 lg:grid-cols-[0.9fr_1fr]">
        <div>
          <h2 id="community-heading" className="section-heading">
            Built in the open.
            <br />
            Room for you.
          </h2>
          <p className="mt-5 max-w-[370px] text-[13px] leading-[1.9] text-muted">
            Good tools grow through thoughtful conversations.
            <br />
            Follow along, challenge an idea, or build with us.
          </p>
          <a
            href={site.discussions}
            className="mt-6 inline-flex items-center gap-3 text-[13px] text-accent hover:text-accent-hover"
          >
            Join the conversation
            <Icon name="arrow-up-right" className="size-3" />
          </a>
        </div>
        <aside
          id="notes"
          aria-labelledby="notes-heading"
          className="scroll-mt-8 border-l border-line py-1 pl-6"
        >
          <p className="mb-4 flex items-center gap-2 text-[10px] tracking-wider text-dim">
            <span className="size-1 bg-accent" /> FROM THE WORKBENCH
          </p>
          <h3 id="notes-heading" className="text-[13px] text-foreground">
            Starting with the foundations.
          </h3>
          <p className="mt-3 max-w-[400px] text-[13px] leading-[1.9] text-muted">
            The first chapter is about the details beneath the surface: crate
            boundaries, terminal behavior, and an API that reads like intent.
          </p>
          <a
            href={site.architecture}
            className="mt-5 inline-flex items-center gap-3 text-[11px] text-accent hover:text-accent-hover"
          >
            Read the architecture notes
            <Icon name="arrow-up-right" className="size-3" />
          </a>
          <p className="mt-4 text-[10px] leading-relaxed text-dim">
            The foundations, documented here as they take shape.
          </p>
        </aside>
      </div>
      <div className="mt-12 grid grid-cols-1 gap-x-8 sm:grid-cols-2 lg:grid-cols-4">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="group border-t border-line py-5"
          >
            <span className="flex items-center justify-between text-[13px] text-muted group-hover:text-foreground">
              {link.label}
              <Icon
                name="arrow-up-right"
                className="size-3 text-dim group-hover:text-accent"
              />
            </span>
            <span className="mt-2 block text-[10px] leading-relaxed text-dim">
              {link.detail}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
