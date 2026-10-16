export function SectionLabel({
  number,
  children,
}: {
  number: string;
  children: React.ReactNode;
}) {
  return (
    <p className="section-label flex items-center gap-3">
      <span className="text-dim">{number}</span>
      <span className="h-3 border-l border-line" aria-hidden="true" />
      {children}
    </p>
  );
}
