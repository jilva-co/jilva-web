const principles = [
  {
    number: "01",
    title: "Small by design",
    detail: "A focused core. Deliberate rendering. Room to build your own way.",
  },
  {
    number: "02",
    title: "Made to be read",
    detail:
      "An API that puts your idea first and keeps the details out of the way.",
  },
  {
    number: "03",
    title: "A little character",
    detail:
      "Thoughtful defaults, useful interactions, and care in the small things.",
  },
];

export function FeatureStrip() {
  return (
    <section
      id="principles"
      aria-label="The ideas behind Jilva"
      className="principles"
    >
      {principles.map((item) => (
        <div key={item.number} className="principle">
          <span className="small-number" aria-hidden="true">
            {item.number}
          </span>
          <h2>{item.title}</h2>
          <p>{item.detail}</p>
        </div>
      ))}
    </section>
  );
}
