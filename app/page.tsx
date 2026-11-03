import { About } from "@/components/site/About";
import { AnnouncementBar } from "@/components/site/AnnouncementBar";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { GovernmentBand } from "@/components/site/GovernmentBand";
import { Hero } from "@/components/site/Hero";
import { Industries } from "@/components/site/Industries";
import { Navbar } from "@/components/site/Navbar";
import { Process } from "@/components/site/Process";
import { RevealObserver } from "@/components/site/RevealObserver";
import { Services } from "@/components/site/Services";
import { TrustStrip } from "@/components/site/TrustStrip";

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only z-60 rounded-ui bg-white px-4 py-2 font-heading text-sm text-navy focus:not-sr-only focus:fixed focus:top-2 focus:left-2"
      >
        Skip to content
      </a>
      <AnnouncementBar />
      <Navbar />
      <main id="main">
        <Hero />
        <TrustStrip />
        <Services />
        <About />
        <Industries />
        <GovernmentBand />
        <Process />
        <Contact />
      </main>
      <Footer />
      <RevealObserver />
    </>
  );
}
