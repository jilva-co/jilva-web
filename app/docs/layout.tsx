import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import "./docs.css";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div id="top" className="page-shell">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
