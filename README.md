# Jilva web

The public home of [Jilva](https://github.com/jilva-co/jilva-rs), an early-stage Rust-first terminal UI framework. Built with Next.js App Router, TypeScript, and Tailwind CSS. The site exports to static HTML.

## Run locally

Use Node.js 20.9 or newer and npm.

```powershell
npm ci
npm run dev -- --port 5052
```

Open [http://localhost:5052](http://localhost:5052). For a production preview:

```powershell
npm run typecheck
npm run build
$env:PORT = "5052"
npm start
```

Stop any other server on the selected port first. The production preview serves the latest export in `out/`; run `npm run build` after changing source files. Hosting requires only a static server with the exported `404.html` as its missing-page response. There is no runtime database, API key, or application server.

## Visual direction

The site is a large retro terminal world in Jilva's black-and-white brand palette: a true black canvas, white signals, oversized Silkscreen lettering, wireframe geometry, and a perspective grid. Selected words sit on white plates with black lettering, small pixel cuts, and offset shadows. Grayscale surfaces, floating objects, offset windows, and asymmetric placement create depth. There is no navigation bar or footer on any route, and no colored accents.

The layout omits decorative overlines, numbered section labels, coordinates, status captions, and repeated slogans. Main headings, useful descriptions, and functional controls carry the interface.

- The opening scene places a large Jilva wordmark and the original pixel logo inside a wireframe orbit. A floating field manual opens the documentation, and the main control leads into the playground.
- The signal lab is an interactive web study with Signal, Orbit, and Terrain views. Its energy slider changes the signal height, orbit scale, or terrain height. Pause freezes every animated view. The tabs support arrow keys, Home, and End.
- An angled source window contains actual contributor setup commands and a working copy control. Setup and repository links stay close to that content.
- The final transmission invites visitors into issue discussions and the roadmap.
- The field manual uses larger prose and pixel headings. It includes grouped page links, a mobile disclosure, a table of contents, and previous/next page links. A standalone Jilva mark returns home.
- The 404 is a full-screen lost-signal scene with an explicit return control.

The black theme is the only theme, including native controls and the initial page canvas before CSS arrives. Silkscreen handles headings, smaller interface labels, controls, and short homepage descriptions; Geist Mono keeps code and long documentation readable. Both fonts are local and make no external font requests. Decorative geometry is SVG/CSS; no image generation, animation library, WebGL dependency, or per-frame JavaScript loop is needed.

Reduced-motion preferences disable animations and smooth scrolling. The signal lab also has a visible pause/resume control. Content is server rendered, controls have visible keyboard focus, and the site includes a skip link. With JavaScript disabled, the content, links, commands, and initial signal view remain available; interactive controls require JavaScript.

## Structure

```text
app/
  layout.tsx              Local fonts, black canvas, metadata, and skip link
  page.tsx                Four spatial homepage scenes
  globals.css             Shared palette and retro scene styling
  not-found.tsx           Full-screen lost-signal page
  docs/
    layout.tsx            Field manual shell and standalone home link
    docs.css              Responsive reading layout
    [[...slug]]/page.tsx   Statically generated documentation routes
components/
  hero.tsx                Large wordmark, wireframe orbit, and field manual
  terminal-preview.tsx    Three-view interactive signal lab
  getting-started.tsx     Source window and contributor commands
  community-links.tsx     Discussion and roadmap scene
  copy-command.tsx        Clipboard control with selection fallback
  company-signature.tsx   Original logo rendered as SVG pixel fragments
  docs/                   Grouped sidebar and article layout
lib/
  site.ts                 Project URLs and contributor setup command
  docs.ts                 Documentation navigation metadata
  docs-content.tsx        Public guide content
  pixel-logo.ts           Original logo sampled into SVG fragments
scripts/serve.mjs          Local static production preview
.openai/hosting.json       Existing Site identity and static output configuration
```

The original organization artwork remains in `public/jilva-logo.png`. The smaller display asset and browser icon are retained. Legacy presentation components can remain in the source tree; the homepage, documentation, and 404 do not import the former header or footer.

## Content and project status

Jilva is in its **foundation phase**, with no published framework release. The signal lab is a React/CSS concept study for this website, not a released Jilva application or API. Its state lasts only for the current page session. No benchmark, adoption, release-date, or shipped-capability claims are implied.

The source setup uses a real checkout rather than a premature package-install command. Rust is the first target; Go and TypeScript are planned after a usable Rust alpha.

Public documentation is available on this site:

- `/docs/` — introduction and project status
- `/docs/getting-started/` — toolchain, checkout, and verification
- `/docs/development/` — daily checks and troubleshooting
- `/docs/architecture/` — crate boundaries and intended frame lifecycle
- `/docs/api-design/` — API principles and the foundation-level contract
- `/docs/roadmap/` — the planned phases
- `/docs/contributing/` — contribution guidance and project links

Content lives in `lib/docs-content.tsx`, with page metadata in `lib/docs.ts`. Project destinations live in `lib/site.ts`. GitHub Discussions is not enabled, so discussion links use the issue tracker.

## License

MIT. See [LICENSE](LICENSE).
