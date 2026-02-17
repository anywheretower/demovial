import HeroSection from "@/components/sections/HeroSection";
import IntroSection from "@/components/sections/IntroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import InvestmentSection from "@/components/sections/InvestmentSection";
import ClosingSection from "@/components/sections/ClosingSection";
import SectionDivider from "@/components/ui/SectionDivider";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <SectionDivider color="#3b82f6" />
      <IntroSection />
      <SectionDivider color="#3b82f6" />
      <ServicesSection />
      <SectionDivider color="#f59e0b" />
      <InvestmentSection />
      <SectionDivider color="#f59e0b" />
      <ClosingSection />
    </main>
  );
}
