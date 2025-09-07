import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import AboutSection from "@/components/sections/AboutSection";

// The homepage component should only return the sections for the main page.
// The Header, Footer, andProviders are handled by layout.tsx.
export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <AboutSection />
    </>
  );
}
