import { Icon } from "@/components/icon";
import { SectionLabel } from "@/components/section-label";

const principles = [
  {
    icon: "bolt",
    title: "Performant",
    description:
      "A small core. Deliberate rendering. Performance from the foundations.",
  },
  {
    icon: "code",
    title: "Simple API",
    description: "Describe what you want to build. Leave the cell math behind.",
  },
  {
    icon: "sparkles",
    title: "Beautiful by default",
    description:
      "Thoughtful type, spacing, and color. Good taste as a starting point.",
  },
  {
    icon: "globe",
    title: "Cross-platform",
    description:
      "One approach for Linux, macOS, and Windows. Terminal quirks considered.",
  },
] as const;

export function FeatureStrip() {
  return (
    <section
      id="principles"
      aria-labelledby="principles-heading"
      className="section-block border-y border-line"
    >
      <div className="site-container">
        <div className="mb-9 flex flex-wrap items-center justify-between gap-4">
          <SectionLabel number="01">THE PRINCIPLES</SectionLabel>
          <h2
            id="principles-heading"
            className="text-[11px] font-normal text-dim"
          >
            The things we&apos;re building toward.
          </h2>
        </div>
        <div className="grid gap-x-7 gap-y-9 sm:grid-cols-2 lg:grid-cols-4">
          {principles.map((principle) => (
            <div key={principle.title} className="principle-item">
              <Icon name={principle.icon} className="mb-5 size-5 text-muted" />
              <h3 className="mb-3 text-[14px] font-medium text-foreground">
                {principle.title}
              </h3>
              <p className="max-w-[245px] text-[13px] leading-[1.85] text-muted">
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
