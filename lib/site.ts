export const site = {
  name: "Jilva",
  description:
    "Beautiful terminal applications, effortlessly. Jilva is an early-stage, Rust-first terminal UI framework built around thoughtful defaults and a simple developer experience.",
  framework: "https://github.com/jilva-co/jilva-rs",
  docs: "https://github.com/jilva-co/jilva-rs/tree/main/docs",
  gettingStarted:
    "https://github.com/jilva-co/jilva-rs/blob/main/docs/GETTING_STARTED.md",
  architecture:
    "https://github.com/jilva-co/jilva-rs/blob/main/docs/ARCHITECTURE.md",
  roadmap: "https://github.com/jilva-co/jilva-rs/blob/main/docs/ROADMAP.md",
  // GitHub Discussions is not enabled yet; issues are the current conversation space.
  discussions: "https://github.com/jilva-co/jilva-rs/issues",
  examples: "https://github.com/jilva-co/jilva-rs/tree/main/examples",
  license: "https://github.com/jilva-co/jilva-rs/blob/main/LICENSE",
} as const;

export const setupCommand =
  "git clone https://github.com/jilva-co/jilva-rs.git\ncd jilva-rs\ncargo check --workspace";
