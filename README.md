# Jilva web

The first website for [Jilva](https://github.com/jilva-co/jilva-rs), a Rust-first framework for beautiful terminal applications. Built with Next.js App Router, TypeScript, and Tailwind CSS.

## Run locally

Use Node.js **20.9 or newer** and npm. Node.js 24 LTS is recommended.

```sh
npm ci
npm run dev
```

Open **http://127.0.0.1:3000**. The development server reloads on changes.

```sh
npm run typecheck
npm run build
npm start
```

`build` creates a static export in `out/`. `start` serves that production export at **http://127.0.0.1:3000** with a small dependency-free preview server. Set `PORT` to use a different port. Production hosting should serve `out/` using its own static server, including `404.html` for missing paths. No application server, database, API key, or runtime environment variable is needed.

## Structure

```text
app/
  layout.tsx             Global layout, local fonts, and metadata
  page.tsx               Homepage composition
  globals.css            Tailwind tokens, typography, and responsive rules
  icon.png               Existing Jilva logo
  not-found.tsx          Custom 404
  robots.ts              Static crawler policy
  docs/
    layout.tsx           Documentation shell and shared branding
    docs.css             Responsive documentation typography and layout
    [[...slug]]/page.tsx  Seven statically generated documentation routes
components/
  docs/
    sidebar.tsx          Searchable page navigation and mobile disclosure
    document.tsx         Article layout, contents, and previous/next links
  header.tsx             Navigation and mobile disclosure
  hero.tsx               Asymmetric introduction
  terminal-preview.tsx   Interactive terminal design study
  feature-strip.tsx      Four design principles
  getting-started.tsx    Contributor onboarding
  copy-command.tsx       Clipboard interaction with selection fallback
  ecosystem.tsx          Rust-first roadmap
  community-links.tsx    Community links and project notes
  footer.tsx             Credits and source links
  logo.tsx               Existing logo and wordmark
  icon.tsx               Small inline SVG icon set
  section-label.tsx      Shared section annotation
lib/site.ts              Project URLs, metadata copy, and setup command
lib/docs.ts              Documentation routes and navigation metadata
lib/docs-content.tsx     Public guides, concepts, and roadmap content
public/jilva-logo.png     Original, unmodified Jilva logo
scripts/serve.mjs         Local production preview
.openai/hosting.json      Sites identity and static output configuration
```

## Design

- Near-black canvas, off-white type, muted blue links, square controls, and thin dividers.
- An asymmetric hero and a terminal design study give the project a clear, original identity. Later sections follow a quieter documentation rhythm.
- Silkscreen is limited to the hero. Geist Mono handles the rest. Both fonts are bundled locally through Fontsource; no Google Fonts requests are made at runtime or build time.
- The existing organization logo is reused without altering the source image. CSS crops its original padding and adapts it to the dark surface.
- Mobile navigation uses a small disclosure. The terminal tabs support arrow keys, Home, and End. Controls have visible focus states, the page includes a skip link, and reduced-motion preferences are respected.

## Content and release status

Jilva is in its **foundation phase**, with no published framework release. The four principles describe design goals, not shipped capabilities or benchmarks. Go and TypeScript are planned after a usable Rust alpha; no release dates are implied.

The terminal checklist is an explicitly labeled **interactive design study**, implemented in React for this website. It is not a running Jilva application or a released Rust API. Its “The idea” tab is conceptual prose, not runnable code. Checklist changes stay in the current page session.

The setup block contains real contributor commands. It deliberately uses a source checkout rather than a premature `cargo add jilva` command. Public documentation lives on this website under `/docs/`; the Rust repository remains the source of framework code and contributor design records.

## Documentation

The documentation is part of the website, with no GitHub redirect or runtime Markdown fetch:

- `/docs/` — introduction and project status
- `/docs/getting-started/` — toolchain, source checkout, and workspace verification
- `/docs/development/` — daily checks, local API reference, and troubleshooting
- `/docs/architecture/` — crate boundaries, dependencies, and intended frame lifecycle
- `/docs/api-design/` — API principles, facade contract, and a real foundation-level Rust test
- `/docs/roadmap/` — the seven phases and future language plans
- `/docs/contributing/` — useful contributions, design proposals, and project links

Content is maintained in `lib/docs-content.tsx`, with navigation metadata in `lib/docs.ts`. To add a guide, add its metadata and sections; the optional catch-all route statically generates each page. Guides include local table-of-contents anchors, copyable commands, previous/next navigation, and a page filter. The sidebar becomes a small disclosure on mobile.

The website contains the complete public guides. GitHub links are reserved for source code and issue discussions; reading documentation does not require leaving the site. Framework status is based on the current foundation sources, and planned APIs are explicitly labeled.

**No placeholder logo, invented adoption statistics, fake posts, or dead `#` links are included.** Blog navigation leads to the homepage's workbench note, which links to actual architecture documentation. The Examples link leads to the labeled design study while the framework is still being built. Replace these anchors with dedicated routes when real articles and runnable examples exist.

Update project links in `lib/site.ts` when documentation or community destinations change. Before assigning a custom domain, add the real canonical origin and social image to `app/layout.tsx`. No domain is assumed in the source.

GitHub Discussions is not enabled for the project yet, so community conversation links use the active issue tracker. Change `site.discussions` when a dedicated forum is available. Website source: [jilva-co/jilva-web](https://github.com/jilva-co/jilva-web).

## License

MIT. See [LICENSE](LICENSE).
