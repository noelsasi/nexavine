import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Trust from "@/components/Trust";
import Services from "@/components/Services";
import TradeAISection from "@/components/TradeAISection";
import WhyNexavine from "@/components/WhyNexavine";
import Process from "@/components/Process";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main id="top">
        <Hero />
        <Trust />
        <Services />
        <TradeAISection />
        <WhyNexavine />
        <Process />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
