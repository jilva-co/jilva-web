import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { FeatureStrip } from "@/components/feature-strip";
import { GettingStarted } from "@/components/getting-started";
import { Ecosystem } from "@/components/ecosystem";
import { CommunityLinks } from "@/components/community-links";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div id="top" className="page-shell">
      <Header />
      <main id="main" tabIndex={-1}>
        <Hero />
        <FeatureStrip />
        <GettingStarted />
        <Ecosystem />
        <CommunityLinks />
      </main>
      <Footer />
    </div>
  );
}
