export default function NotFound() {
  return (
    <div className="lost-scene">
      <main id="main" tabIndex={-1} className="lost-content">
        <h1>
          404<span aria-hidden="true">_</span>
        </h1>
        <p className="lost-message">No signal at these coordinates.</p>
        <a href="/" className="launch-link">
          BACK TO JILVA <span aria-hidden="true">↖</span>
        </a>
      </main>
    </div>
  );
}
