/** CSS scroll timelines provide progress without scroll listeners or React updates. */
export function ScrollProgress() {
  return <div className="scroll-progress" aria-hidden="true" />;
}
