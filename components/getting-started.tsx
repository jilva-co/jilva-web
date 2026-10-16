import { CopyCommand } from "@/components/copy-command";
import { Icon } from "@/components/icon";
import { SectionLabel } from "@/components/section-label";
import { setupCommand, site } from "@/lib/site";

const steps = [
  {
    number: "01",
    title: "Get the foundations",
    description: "Clone the Rust workspace and check it locally.",
  },
  {
    number: "02",
    title: "Find your bearings",
    description: "Explore the architecture, API principles, and RFCs.",
  },
  {
    number: "03",
    title: "Help shape what comes next",
    description: "Bring a small idea, a question, or a contribution.",
  },
];

export function GettingStarted() {
  return (
    <section
      id="getting-started"
      aria-labelledby="getting-started-heading"
      className="section-block site-container scroll-mt-8"
    >
      <SectionLabel number="02">FROM THE FIRST LINE</SectionLabel>
      <div className="mt-7 grid grid-cols-1 gap-x-20 gap-y-10 lg:grid-cols-[0.9fr_1fr]">
        <div>
          <h2 id="getting-started-heading" className="section-heading">
            Start small.
            <br />
            Make it yours.
          </h2>
          <p className="mt-5 max-w-[370px] text-[13px] leading-[1.9] text-muted">
            Jilva is taking shape in the open. There isn&apos;t a published
            framework release yet. For now, the best way in is through the
            source.
          </p>
          <a
            href={site.gettingStarted}
            className="mt-6 inline-flex items-center gap-3 text-[13px] text-accent hover:text-accent-hover"
          >
            Read the contributor guide
            <Icon name="arrow-up-right" className="size-3" />
          </a>
        </div>
        <div>
          <ol className="mb-7 space-y-5">
            {steps.map((step) => (
              <li key={step.number} className="flex gap-4">
                <span className="pt-0.5 text-[11px] text-dim">
                  {step.number}
                </span>
                <div>
                  <h3 className="text-[13px] font-medium text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-1.5 text-[11px] leading-relaxed text-muted">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
          <CopyCommand value={setupCommand} />
        </div>
      </div>
    </section>
  );
}
