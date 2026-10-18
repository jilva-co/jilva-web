import { Logo } from "@/components/logo";
import "./docs.css";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div id="top" className="docs-shell">
      <div className="docs-home-link">
        <Logo />
      </div>
      {children}
    </div>
  );
}
