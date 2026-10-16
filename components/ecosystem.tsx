import { Icon } from "@/components/icon";
import { SectionLabel } from "@/components/section-label";
import { site } from "@/lib/site";

const languages = [
  {
    name: "Rust",
    code: "rs",
    note: "The reference implementation.",
    status: "In development",
    current: true,
  },
  {
    name: "Go",
    code: "go",
    note: "The same care. A different language.",
    status: "Planned",
    current: false,
  },
  {
    name: "TypeScript",
    code: "ts",
    note: "A familiar place for new ideas.",
    status: "Planned",
    current: false,
  },
  {
    name: "More later",
    code: "··",
    note: "Good foundations come first.",
    status: "One step at a time",
    current: false,
  },
];

export function Ecosystem() {
  return (
    <section
      id="ecosystem"
      aria-labelledby="ecosystem-heading"
      className="section-block border-y border-line"
    >
      <div className="site-container">
        <SectionLabel number="03">
          ONE PHILOSOPHY. MORE POSSIBILITIES.
        </SectionLabel>
        <div className="mt-7 flex flex-wrap items-start justify-between gap-x-12 gap-y-5">
          <h2 id="ecosystem-heading" className="section-heading">
            Rust first.
            <br className="sm:hidden" /> A wider horizon.
          </h2>
          <p className="max-w-[390px] text-[13px] leading-[1.9] text-muted">
            We&apos;re proving the foundations in Rust. Go and TypeScript will
            follow after a usable Rust alpha. Shared principles. APIs that feel
            at home.
          </p>
        </div>
        <div className="mt-10 grid gap-y-7 sm:grid-cols-2 lg:grid-cols-4">
          {languages.map((language) => (
            <div
              key={language.name}
              className="language-item border-t border-line pt-6 lg:pr-6"
            >
              <div className="mb-6 flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className={`flex size-7 items-center justify-center border text-[11px] ${language.current ? "border-[#4d4033] text-sand" : "border-line text-dim"}`}
                >
                  {language.code}
                </span>
                <h3
                  className={`text-[13px] ${language.current ? "text-foreground" : "text-muted"}`}
                >
                  {language.name}
                </h3>
              </div>
              <p className="text-[11px] leading-relaxed text-muted">
                {language.note}
              </p>
              <p
                className={`mt-4 inline-flex items-center gap-2 text-[10px] ${language.current ? "text-green" : "text-dim"}`}
              >
                <span
                  className={`size-1 ${language.current ? "bg-green" : "bg-dim"}`}
                />
                {language.status}
              </p>
            </div>
          ))}
        </div>
        <a
          href={site.roadmap}
          className="mt-9 inline-flex items-center gap-3 text-[11px] text-accent hover:text-accent-hover"
        >
          Follow the roadmap
          <Icon name="arrow-up-right" className="size-3" />
        </a>
      </div>
    </section>
  );
}
