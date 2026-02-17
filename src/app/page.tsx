import { services } from "@/data/services";
import HeroSection from "@/components/sections/HeroSection";
import IntroSection from "@/components/sections/IntroSection";
import ServiceSection from "@/components/sections/ServiceSection";
import InvestmentSection from "@/components/sections/InvestmentSection";
import ClosingSection from "@/components/sections/ClosingSection";
import SectionDivider from "@/components/ui/SectionDivider";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <SectionDivider color="#6366f1" />
      <IntroSection />
      <SectionDivider color="#6366f1" />

      {services.map((service, i) => (
        <div key={service.slug}>
          <ServiceSection service={service} index={i} />
          <SectionDivider color={service.color} />
        </div>
      ))}

      <InvestmentSection />
      <SectionDivider color="#f59e0b" />
      <ClosingSection />
    </main>
  );
}
