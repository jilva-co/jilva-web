import { Hero } from "@/components/hero";
import { GettingStarted } from "@/components/getting-started";
import { CommunityLinks } from "@/components/community-links";
import { TerminalPreview } from "@/components/terminal-preview";

export default function Home() {
  return (
    <div id="top" className="spatial-home">
      <main id="main" tabIndex={-1}>
        <Hero />
        <section
          id="playground"
          aria-labelledby="playground-heading"
          className="lab-scene spatial-scene"
        >
          <div className="lab-heading">
            <h2 id="playground-heading">
              MAKE SOME
              <br />
              <span className="text-plate text-plate--display">SIGNAL.</span>
            </h2>
            <p>
              An interactive web study.
              <br />
              Turn a dial. Change the view.
            </p>
          </div>
          <TerminalPreview />
        </section>
        <GettingStarted />
        <CommunityLinks />
      </main>
    </div>
  );
}
