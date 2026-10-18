import { CopyCommand } from "@/components/copy-command";
import { site, setupCommand } from "@/lib/site";

export function GettingStarted() {
  return (
    <section
      id="getting-started"
      aria-labelledby="getting-started-heading"
      className="source-scene spatial-scene"
    >
      <div className="source-layout">
        <div className="source-intro">
          <h2 id="getting-started-heading">
            IT STARTS
            <br />
            WITH <span>YOU.</span>
          </h2>
          <p>
            The foundations are open. Clone the workspace with Git and Rust
            stable, and help shape what comes next.
          </p>
          <a href={site.gettingStarted} className="large-text-link">
            THE SETUP GUIDE <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="source-window">
          <CopyCommand
            value={setupCommand}
            title="START AT THE SOURCE"
            showTitle={false}
            note={null}
          />
          <a href={site.framework} className="source-repo-link">
            jilva-co / jilva-rs <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
