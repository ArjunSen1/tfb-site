import { NavBar } from "@/components/nav-bar";
import { HeroSection } from "@/components/hero-section";
import { InvisibleEconomySection } from "@/components/invisible-economy-section";
import { ApproachSection } from "@/components/approach-section";
import { BookSection } from "@/components/book-section";
import { SocialProofSection } from "@/components/social-proof-section";
import { FounderSection } from "@/components/founder-section";
import { ServicesSection } from "@/components/services-section";
import { FinalCtaSection } from "@/components/final-cta-section";

export default function Home() {
  return (
    <main className="bg-[#0C0A09] min-h-screen">
      <NavBar />
      <HeroSection />
      <InvisibleEconomySection />
      <ApproachSection />
      <BookSection />
      <SocialProofSection />
      <FounderSection />
      <ServicesSection />
      <FinalCtaSection />
    </main>
  );
}
