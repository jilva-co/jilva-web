import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function NotFound() {
  return (
    <div className="page-shell">
      <Header />
      <main
        id="main"
        tabIndex={-1}
        className="site-container flex min-h-[65vh] flex-col items-start justify-center py-20"
      >
        <p className="section-label text-accent">[ 404 / NOT FOUND ]</p>
        <h1 className="section-heading mt-6">Nothing at this address.</h1>
        <p className="mt-5 text-sm text-muted">
          Let&apos;s get you back to the beginning.
        </p>
        <Link
          href="/"
          className="mt-8 text-sm text-accent hover:text-accent-hover"
        >
          Back to Jilva <span aria-hidden="true">→</span>
        </Link>
      </main>
      <Footer />
    </div>
  );
}
