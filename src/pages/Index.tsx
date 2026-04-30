import { Header } from "@/components/Header";
import { TickerBar } from "@/components/TickerBar";
import { Hero } from "@/components/Hero";
import { PromoSlider } from "@/components/PromoSlider";
import { GamesSection } from "@/components/GamesSection";
import { Features } from "@/components/Features";
import { HowItWorks } from "@/components/HowItWorks";
import { Testimonials } from "@/components/Testimonials";
import { CTABanner } from "@/components/CTABanner";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { WhatsAppChatbot } from "@/components/WhatsAppChatbot";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <TickerBar />
      <Header />
      <main>
        <Hero />
        <PromoSlider />
        <GamesSection />
        <Features />
        <HowItWorks />
        <Testimonials />
        <CTABanner />
        <FAQ />
      </main>
      <Footer />
      <WhatsAppChatbot />
    </div>
  );
};

export default Index;
