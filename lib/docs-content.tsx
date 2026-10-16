import Link from "next/link";
import type { ReactNode } from "react";
import { CopyCommand } from "@/components/copy-command";
import { Icon } from "@/components/icon";
import type { DocSection } from "@/components/docs/document";
import { docHref, getDocPage, type DocSlug } from "@/lib/docs";
import { site } from "@/lib/site";

function Note({ title, children }: { title: string; children: ReactNode }) {
  return (
    <aside role="note" className="docs-notice">
      <p className="docs-notice-title">
        <span className="size-1 bg-accent" />
        {title}
      </p>
      <div>{children}</div>
    </aside>
  );
}

function Commands({
  value,
  title = "terminal",
  note = null,
}: {
  value: string;
  title?: string;
  note?: string | null;
}) {
  return (
    <div className="docs-code">
      <CopyCommand
        value={value}
        title={title}
        note={note}
        copyLabel={`Copy ${title} commands`}
      />
    </div>
  );
}

function ReadNext({ slugs }: { slugs: DocSlug[] }) {
  return (
    <div className="docs-reading-list">
      {slugs.map((slug) => {
        const page = getDocPage(slug)!;
        return (
          <Link href={docHref(slug)} key={slug}>
            <div>
              <span>{page.title}</span>
              <p>{page.description}</p>
            </div>
            <Icon name="arrow-right" className="size-4 shrink-0 text-accent" />
          </Link>
        );
      })}
    </div>
  );
}

const sections: Record<DocSlug, DocSection[]> = {
  "": [
    {
      id: "what-is-jilva",
      title: "What is Jilva?",
      content: (
        <>
          <p>
            Jilva is a modern framework for building terminal user interfaces.
            The aim is simple: a small, expressive API, thoughtful visual
            defaults, and the foundations to make both feel dependable.
          </p>
          <p>
            The first implementation is written in Rust. Layout, components,
            events, and themes are being designed together so that applications
            can describe intent instead of terminal mechanics.
          </p>
          <Note title="EARLY, AND IN THE OPEN">
            <p>
              Jilva is in <strong>Phase 1 — Foundation</strong>. The workspace
              and its boundaries exist. There is no released application engine,
              renderer, or widget set yet. These docs explain what exists today
              and the direction of the design.
            </p>
          </Note>
        </>
      ),
    },
    {
      id: "the-point-of-view",
      title: "The point of view",
      content: (
        <>
          <ul>
            <li>
              <strong>Beauty is a feature.</strong> Calm defaults and readable
              interfaces should be part of the starting point.
            </li>
            <li>
              <strong>Intent over mechanics.</strong> Describe a layout and its
              behavior, rather than managing coordinates and escape sequences.
            </li>
            <li>
              <strong>Correctness underneath.</strong> Unicode, input, resize,
              and terminal restoration belong in the foundations.
            </li>
            <li>
              <strong>Small, explicit boundaries.</strong> Keep the public
              surface understandable and the internals testable.
            </li>
          </ul>
          <p>
            These are design goals. Performance measurements and platform
            support claims will follow working implementations and tests.
          </p>
        </>
      ),
    },
    {
      id: "what-you-can-do-today",
      title: "What you can do today",
      content: (
        <>
          <p>
            Check out the source, verify the Cargo workspace, read the design,
            and help improve the decisions before they become API contracts.
          </p>
          <div className="docs-table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Available now</th>
                  <th>Still ahead</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Three-crate Rust workspace</td>
                  <td>Application run loop and terminal engine</td>
                </tr>
                <tr>
                  <td>Foundation types and backend boundaries</td>
                  <td>Renderer, layout engine, and usable widgets</td>
                </tr>
                <tr>
                  <td>Architecture and API principles</td>
                  <td>Final public API and framework release</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            Start with the{" "}
            <Link href="/docs/getting-started/">setup guide</Link>. You do not
            need a terminal application idea to make a useful contribution.
          </p>
        </>
      ),
    },
    {
      id: "rust-first",
      title: "Rust first, a wider horizon",
      content: (
        <>
          <p>
            Rust is the reference implementation. The component model, design
            vocabulary, and terminal behavior will be proven here before Go or
            TypeScript implementations begin.
          </p>
          <p>
            Future implementations should share the philosophy while keeping
            APIs idiomatic to each language. They are planned after a usable
            Rust alpha, with no promised release dates.
          </p>
          <p>
            See the <Link href="/docs/roadmap/">roadmap</Link> for the full
            progression.
          </p>
        </>
      ),
    },
    {
      id: "find-your-way",
      title: "Find your way",
      content: (
        <ReadNext slugs={["getting-started", "architecture", "contributing"]} />
      ),
    },
  ],
  "getting-started": [
    {
      id: "before-you-start",
      title: "Before you start",
      content: (
        <>
          <p>
            This guide sets up a contributor checkout. There is no published
            Jilva release to install with Cargo yet, and no terminal application
            to launch.
          </p>
          <ul>
            <li>
              <strong>Git</strong> for the source checkout.
            </li>
            <li>
              <strong>Rust through rustup.</strong> The repository pins Rust{" "}
              <code>1.98.1</code> and uses edition <code>2024</code>.
            </li>
            <li>
              <strong>rustfmt and Clippy</strong>, requested by the checked-in
              toolchain configuration.
            </li>
          </ul>
          <p>
            If Rust is new to your machine, the{" "}
            <a href="https://rustup.rs/">official rustup installer</a> is the
            starting point. Inside the checkout, rustup reads{" "}
            <code>rust-toolchain.toml</code> automatically.
          </p>
        </>
      ),
    },
    {
      id: "clone-the-workspace",
      title: "1. Clone the workspace",
      content: (
        <>
          <Commands
            title="source checkout"
            value={
              "git clone https://github.com/jilva-co/jilva-rs.git\ncd jilva-rs"
            }
          />
          <p>
            Run the remaining commands from the repository root. It contains a
            Cargo workspace, not an application package.
          </p>
        </>
      ),
    },
    {
      id: "verify-the-toolchain",
      title: "2. Verify the toolchain",
      content: (
        <>
          <Commands
            title="Rust toolchain"
            value={
              "rustup toolchain install 1.98.1\nrustc --version\ncargo --version"
            }
          />
          <p>
            The checkout pins <code>1.98.1</code>. The project&apos;s long-term
            minimum supported Rust version is still a design decision; nightly
            features are not part of the foundation contract.
          </p>
        </>
      ),
    },
    {
      id: "check-the-foundations",
      title: "3. Check the foundations",
      content: (
        <>
          <Commands
            title="workspace verification"
            value={"cargo check --workspace\ncargo test --workspace"}
          />
          <p>
            The check verifies the crate graph and compilation. Tests exercise
            the current foundation surface; they do not imply that a renderer or
            widget system has shipped.
          </p>
          <Note title="WHAT SUCCESS LOOKS LIKE">
            <p>
              A workspace that checks and tests cleanly. There is no{" "}
              <code>cargo run</code> step for a Jilva application yet.
            </p>
          </Note>
        </>
      ),
    },
    {
      id: "your-next-step",
      title: "Your next step",
      content: (
        <>
          <p>
            Explore the <Link href="/docs/architecture/">crate boundaries</Link>
            , then read the <Link href="/docs/api-design/">API principles</Link>
            . For the daily check sequence and troubleshooting, continue to the
            development guide.
          </p>
          <ReadNext slugs={["development", "architecture"]} />
        </>
      ),
    },
  ],
  development: [
    {
      id: "everyday-checks",
      title: "The everyday check sequence",
      content: (
        <>
          <p>
            From the workspace root, use the standard Cargo tools. No custom
            task runner or extra service is required.
          </p>
          <Commands
            title="development checks"
            value={
              "cargo fmt --all -- --check\ncargo check --workspace --all-targets\ncargo clippy --workspace --all-targets -- -D warnings\ncargo test --workspace --all-targets\ncargo doc --workspace --no-deps"
            }
          />
          <p>
            Formatting comes first, followed by compilation, linting, tests, and
            generated API documentation. Fix warnings rather than silencing them
            globally.
          </p>
        </>
      ),
    },
    {
      id: "work-on-one-crate",
      title: "Work on one crate",
      content: (
        <>
          <p>
            Use targeted checks while iterating, then run the complete workspace
            sequence before proposing a change.
          </p>
          <Commands
            title="targeted checks"
            value={
              "cargo check -p jilva\ncargo check -p jilva-core\ncargo check -p jilva-terminal\ncargo test -p jilva-core"
            }
          />
        </>
      ),
    },
    {
      id: "local-api-reference",
      title: "Generate the local API reference",
      content: (
        <>
          <p>
            The website explains setup, concepts, and project direction. For the
            exact types present in your checkout, build Rust&apos;s generated
            reference locally.
          </p>
          <Commands
            title="local API reference"
            value="cargo doc --workspace --no-deps --open"
          />
          <p>Run doctests separately when editing public examples:</p>
          <Commands title="facade doctests" value="cargo test -p jilva --doc" />
        </>
      ),
    },
    {
      id: "windows",
      title: "Windows and PowerShell",
      content: (
        <>
          <p>
            The Cargo commands above also work in PowerShell. When denying
            documentation warnings, set the environment variable using your
            shell&apos;s own syntax.
          </p>
          <Commands
            title="PowerShell documentation check"
            value={
              '$env:RUSTDOCFLAGS = "-D warnings"\ncargo doc --workspace --no-deps\nRemove-Item Env:\\RUSTDOCFLAGS'
            }
          />
          <p>
            Keep the repository&apos;s LF line endings. Let{" "}
            <code>.editorconfig</code> and your editor handle them rather than
            bulk-converting the checkout.
          </p>
        </>
      ),
    },
    {
      id: "troubleshooting",
      title: "A few common fixes",
      content: (
        <>
          <div className="docs-table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Symptom</th>
                  <th>Check</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>rustfmt or Clippy is missing</td>
                  <td>
                    <code>rustup component add rustfmt clippy</code>
                  </td>
                </tr>
                <tr>
                  <td>Unexpected compiler version</td>
                  <td>
                    Run from the checkout root and inspect{" "}
                    <code>rust-toolchain.toml</code>.
                  </td>
                </tr>
                <tr>
                  <td>Formatting changes in untouched files</td>
                  <td>Check that your editor respects LF line endings.</td>
                </tr>
                <tr>
                  <td>Confusing errors after a toolchain change</td>
                  <td>
                    Rebuild from a fresh target directory with{" "}
                    <code>cargo clean</code>, then run the checks again.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            If a problem persists, open a{" "}
            <a href={site.discussions}>GitHub issue</a> with the command, full
            error, OS, and toolchain version.
          </p>
        </>
      ),
    },
  ],
  architecture: [
    {
      id: "three-small-crates",
      title: "Three crates, clear boundaries",
      content: (
        <>
          <p>
            The Phase 1 workspace has three crates. Each has a narrow
            responsibility, and each boundary should be usable without a real
            terminal.
          </p>
          <div className="docs-table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Crate</th>
                  <th>Responsibility</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <code>jilva</code>
                  </td>
                  <td>
                    The public facade. Curated re-exports and documentation; no
                    rendering or application logic.
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>jilva-core</code>
                  </td>
                  <td>
                    Platform-independent foundations for lifecycle, events,
                    geometry, rendering models, and style.
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>jilva-terminal</code>
                  </td>
                  <td>
                    The terminal backend seam, capability model, and in-memory
                    test double. Real terminal contact belongs here.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </>
      ),
    },
    {
      id: "dependency-direction",
      title: "Dependencies flow one way",
      content: (
        <>
          <div
            className="docs-diagram"
            aria-label="The public facade depends on core and terminal. Core and terminal do not depend on one another. Applications depend on the facade."
          >
            <pre>
              {
                "application / examples / tests\n              │\n            jilva\n          ┌───┴────┐\n          ▼        ▼\n     jilva-core   jilva-terminal"
              }
            </pre>
          </div>
          <ul>
            <li>
              Applications, examples, and integration tests import the{" "}
              <code>jilva</code> facade.
            </li>
            <li>
              <code>jilva-core</code> does not name a concrete terminal backend
              or branch on platform details.
            </li>
            <li>
              <code>jilva-core</code> and <code>jilva-terminal</code> do not
              depend on each other. Wiring happens at the facade or application
              edge.
            </li>
            <li>The facade never becomes a second implementation layer.</li>
          </ul>
          <p>
            These seams let rendering and event behavior be tested with an
            in-memory terminal rather than a TTY.
          </p>
        </>
      ),
    },
    {
      id: "the-frame-lifecycle",
      title: "The intended frame lifecycle",
      content: (
        <>
          <p>
            The planned flow is unidirectional: an event changes state, the
            application describes a frame, layout resolves regions, and the
            renderer produces terminal instructions.
          </p>
          <div className="docs-flow">
            <span>event</span>
            <span aria-hidden="true">→</span>
            <span>update</span>
            <span aria-hidden="true">→</span>
            <span>layout</span>
            <span aria-hidden="true">→</span>
            <span>render</span>
            <span aria-hidden="true">→</span>
            <span>backend</span>
          </div>
          <p>
            Components do not write directly to the terminal or mutate sibling
            state. The run loop owns setup and teardown, including restoring
            terminal state on normal returns and error paths.
          </p>
          <Note title="A DESIGN CONTRACT">
            <p>
              The full loop, renderer, and component system are planned work.
              This flow describes the architecture they must follow.
            </p>
          </Note>
        </>
      ),
    },
    {
      id: "geometry-and-styling",
      title: "Geometry and styling",
      content: (
        <>
          <p>
            Layout resolves intent into integer terminal cells. It consumes
            measured text; it does not perform text shaping or interpret ANSI
            sequences.
          </p>
          <p>
            Styling uses semantic intent such as accent, muted, and selected
            states. The terminal backend reports capabilities; theme resolution
            chooses suitable attributes. Exact token schemas and fallback rules
            are still being settled.
          </p>
        </>
      ),
    },
    {
      id: "workspace-map",
      title: "The workspace map",
      content: (
        <>
          <div className="docs-diagram">
            <pre>
              {
                "jilva-rs/\n├── Cargo.toml        workspace manifest\n├── crates/\n│   ├── jilva/        public facade\n│   ├── jilva-core/   platform-free foundations\n│   └── jilva-terminal/\n├── examples/         facade-only examples\n├── tests/            integration tests\n└── docs/             contributor design sources"
              }
            </pre>
          </div>
          <p>
            Contributor design sources can remain beside the code. The public
            guides and conceptual documentation live here on the website.
          </p>
          <p>
            Continue to <Link href="/docs/api-design/">API principles</Link> to
            see how the boundaries shape the developer experience.
          </p>
        </>
      ),
    },
  ],
  "api-design": [
    {
      id: "intent-over-mechanics",
      title: "Intent over mechanics",
      content: (
        <>
          <p>
            The API should express what an application needs: a row, an accent,
            an input event, or a selected item. Manual cell coordinates and
            terminal escape codes should not become the normal application
            interface.
          </p>
          <p>
            Simple applications should have a clear starting point, while more
            detailed control remains discoverable. Defaults are a beginning, not
            a restriction.
          </p>
          <Note title="PRINCIPLES, NOT A RELEASED API">
            <p>
              The component contract and final public signatures are still under
              design. Names and flows on this page explain intent; they are not
              installation or compatibility promises.
            </p>
          </Note>
        </>
      ),
    },
    {
      id: "the-public-facade",
      title: "One public facade",
      content: (
        <>
          <p>
            The <code>jilva</code> crate is the entry point. Applications should
            not need to understand the internal crate topology to use the
            framework.
          </p>
          <ul>
            <li>Curated re-exports keep everyday paths shallow.</li>
            <li>
              Examples and tests use the facade, keeping its surface honest.
            </li>
            <li>
              Internal implementation changes should stay behind the documented
              boundaries.
            </li>
          </ul>
          <p>
            One small API that exists in the foundation today is the workspace
            version:
          </p>
          <div className="docs-code">
            <CopyCommand
              value={
                '#[test]\nfn facade_reports_workspace_version() {\n    assert_eq!(jilva::version(), "0.0.0");\n}'
              }
              title="Rust · foundation test"
              prompt={false}
              note="The foundation version is unreleased. This is not a terminal application example."
              copyLabel="Copy foundation Rust test"
            />
          </div>
        </>
      ),
    },
    {
      id: "explicit-context",
      title: "Explicit context, no globals",
      content: (
        <>
          <p>
            Terminal handles, app state, and style context are passed
            explicitly. Tests should substitute a backend or a clock through the
            same seams as normal applications.
          </p>
          <p>
            No async runtime is part of the core contract. Synchronous operation
            is the baseline; any async integration belongs in an optional layer
            above it.
          </p>
        </>
      ),
    },
    {
      id: "events-and-errors",
      title: "Events, state, and errors",
      content: (
        <>
          <p>
            Events flow through a documented route, state updates happen
            deliberately, and a new frame reflects the resulting state.
            Intermediate updates should not be painted as separate partial
            frames.
          </p>
          <p>
            Recoverable operations should return meaningful errors. Terminal
            restoration must remain part of the lifecycle so that failures do
            not leave the user&apos;s shell in a broken state.
          </p>
          <p>
            Exact event variants, component contracts, and public error
            signatures remain RFC decisions.
          </p>
        </>
      ),
    },
    {
      id: "compatibility",
      title: "Compatibility grows with the project",
      content: (
        <>
          <p>
            The first usable API will arrive through the alpha process. Before{" "}
            <code>1.0</code>, minor releases may contain documented breaking
            changes; patch releases should preserve compatibility.
          </p>
          <p>
            Breaking design changes need an explicit proposal and migration
            explanation. A stable API is a result of use and review, rather than
            a date on the roadmap.
          </p>
          <p>
            See <Link href="/docs/contributing/">Contributing</Link> for the
            proposal process.
          </p>
        </>
      ),
    },
  ],
  roadmap: [
    {
      id: "where-we-are",
      title: "Where we are",
      content: (
        <>
          <p>
            The current phase is <strong>Foundation</strong>. Workspace
            scaffolding, design boundaries, and contributor workflows are in
            place. The engine, renderer, and usable component set are still
            ahead.
          </p>
          <Note title="NO DATES. CLEAR EXIT CRITERIA.">
            <p>
              A phase moves forward when its work is ready. This roadmap
              describes the order of work, without release dates or claims of
              production readiness.
            </p>
          </Note>
        </>
      ),
    },
    {
      id: "the-seven-phases",
      title: "The seven phases",
      content: (
        <ol className="docs-roadmap">
          {[
            [
              "01",
              "Foundation",
              "Current",
              "Crate boundaries, workspace checks, contributor documentation, and RFCs for scope, components, and theming.",
            ],
            [
              "02",
              "Terminal engine",
              "Planned",
              "Backend capabilities, terminal setup and restoration, input handling, and an in-memory test double.",
            ],
            [
              "03",
              "Rendering engine",
              "Planned",
              "A cell buffer, frame differences, damage tracking, and measured terminal output behavior.",
            ],
            [
              "04",
              "Layout & components",
              "Planned",
              "Intent-based rows and grids, component identity, composition, measured text, and defined overflow behavior.",
            ],
            [
              "05",
              "State & interactivity",
              "Planned",
              "Event dispatch, focus, state updates, lifecycle guarantees, and headless event tests.",
            ],
            [
              "06",
              "Design system",
              "Planned",
              "Semantic theme tokens, capability-aware color, essential visual defaults, and theme snapshots.",
            ],
            [
              "07",
              "First usable alpha",
              "Planned",
              "A coherent public facade, essential widgets, runnable examples, and a published 0.1.0 release.",
            ],
          ].map(([number, title, status, description]) => (
            <li key={number}>
              <span className="docs-roadmap-number">{number}</span>
              <div>
                <div className="docs-roadmap-heading">
                  <h3>{title}</h3>
                  <span
                    className={status === "Current" ? "text-green" : "text-dim"}
                  >
                    {status}
                  </span>
                </div>
                <p>{description}</p>
              </div>
            </li>
          ))}
        </ol>
      ),
    },
    {
      id: "after-the-rust-alpha",
      title: "After the Rust alpha",
      content: (
        <>
          <p>
            Go and TypeScript implementations are planned after the Rust alpha
            is usable. The architecture and theme vocabulary can be shared,
            while each language keeps its own idiomatic API.
          </p>
          <p>
            Additional ecosystems are a later conversation. The priority is a
            solid first implementation.
          </p>
        </>
      ),
    },
    {
      id: "help-the-next-step",
      title: "Help the next step",
      content: (
        <>
          <p>
            The most useful work today is concrete feedback: a confusing
            sentence, a missing boundary, a failure mode from a terminal
            project, or a smaller alternative to a design.
          </p>
          <ReadNext slugs={["contributing"]} />
        </>
      ),
    },
  ],
  contributing: [
    {
      id: "a-useful-first-contribution",
      title: "A useful first contribution",
      content: (
        <>
          <p>
            You do not need to implement a widget to help Jilva. At the
            foundation stage, precise questions and good examples of real
            problems can change the design for the better.
          </p>
          <ul>
            <li>
              <strong>Review a boundary.</strong> Look for missing
              responsibilities, hidden state, or hard-to-test behavior.
            </li>
            <li>
              <strong>Share a pain report.</strong> Describe a concrete terminal
              UI problem you have encountered.
            </li>
            <li>
              <strong>Improve the docs.</strong> Clarify a sentence, fix a
              broken example, or show where an explanation loses you.
            </li>
          </ul>
        </>
      ),
    },
    {
      id: "discuss-before-you-build",
      title: "Discuss before you build",
      content: (
        <>
          <p>
            Start a conversation before a substantial API change, new
            dependency, or new subsystem. The active place for questions and
            proposals is the project&apos;s{" "}
            <a href={site.discussions}>GitHub issue tracker</a>.
          </p>
          <p>
            Dedicated GitHub Discussions are not enabled yet. Issues handle that
            conversation until a forum is available; the documentation itself
            stays on this website.
          </p>
        </>
      ),
    },
    {
      id: "the-rfc-process",
      title: "A proposal with a clear shape",
      content: (
        <>
          <p>
            Substantial design work follows an RFC process:{" "}
            <strong>draft → discussion → accepted</strong>. One proposal should
            answer one focused question.
          </p>
          <ol>
            <li>Explain the problem with a concrete example.</li>
            <li>Describe the proposed behavior and its boundaries.</li>
            <li>Compare prior art and smaller alternatives.</li>
            <li>State the non-goals and unresolved questions.</li>
            <li>
              Explain how the design can be tested without a real terminal.
            </li>
          </ol>
          <p>
            Component behavior, theme contracts, and scope should be agreed
            through that process before implementation is treated as a stable
            public surface.
          </p>
        </>
      ),
    },
    {
      id: "small-changes-clear-checks",
      title: "Small changes, clear checks",
      content: (
        <>
          <p>
            Keep a pull request focused on one concern. Explain what changes,
            why it helps, and which checks you ran. Conventional commit prefixes
            such as <code>docs:</code>, <code>fix:</code>, and{" "}
            <code>feat:</code> make the history easier to follow.
          </p>
          <ul>
            <li>
              Import only the facade from user-facing examples and integration
              tests.
            </li>
            <li>Keep terminal-specific code behind the backend boundary.</li>
            <li>Explain any new third-party dependency.</li>
            <li>Update documentation when behavior or a contract changes.</li>
          </ul>
          <p>
            Use the <Link href="/docs/development/">development guide</Link> for
            the full verification sequence.
          </p>
        </>
      ),
    },
    {
      id: "where-to-go",
      title: "Where to go",
      content: (
        <>
          <div className="docs-resource-links">
            <a href={site.discussions}>
              <span>Questions and proposals</span>
              <Icon name="arrow-up-right" className="size-3.5" />
            </a>
            <a href={site.framework}>
              <span>Framework source</span>
              <Icon name="arrow-up-right" className="size-3.5" />
            </a>
            <a href="https://github.com/jilva-co/jilva-web">
              <span>Website source</span>
              <Icon name="arrow-up-right" className="size-3.5" />
            </a>
          </div>
          <p>
            Jilva is MIT licensed. Bring curiosity, respect other
            contributors&apos; time, and leave the next person a clearer
            explanation.
          </p>
        </>
      ),
    },
  ],
};

export function getDocSections(slug: DocSlug) {
  return sections[slug];
}
