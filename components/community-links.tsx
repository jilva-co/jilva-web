import { site } from "@/lib/site";

export function CommunityLinks() {
  return (
    <section
      aria-labelledby="community-heading"
      className="transmission-scene spatial-scene"
    >
      <h2 id="community-heading">
        GOOD THINGS
        <br />
        START <span className="text-plate">IN THE OPEN.</span>
      </h2>
      <div className="transmission-links">
        <a href={site.discussions}>
          BRING AN IDEA <span aria-hidden="true">↗</span>
        </a>
        <a href={site.roadmap}>
          SEE WHAT&apos;S NEXT <span aria-hidden="true">↗</span>
        </a>
      </div>
      <div className="transmission-symbol" aria-hidden="true">
        ✳
      </div>
    </section>
  );
}
