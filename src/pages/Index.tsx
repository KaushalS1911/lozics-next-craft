import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { IndustriesSection } from "@/components/IndustriesSection";
import { PortfolioSection } from "@/components/PortfolioSection";
import { ProcessSection } from "@/components/ProcessSection";
import { AboutSection } from "@/components/AboutSection";
import { ServicesSection } from "@/components/ServicesSection";
import { CoverageSection } from "@/components/CoverageSection";
import { WhyChooseSection } from "@/components/WhyChooseSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <IndustriesSection />
        <AboutSection />
        <ProcessSection />
        <PortfolioSection />
        {/* <ServicesSection /> */}
        {/* <CoverageSection /> */}
        <WhyChooseSection />
        {/*<TestimonialsSection />*/}
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
