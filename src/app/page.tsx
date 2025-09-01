// src/app/page.tsx

import AboutSection from "@/components/sections/AboutSection";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
export default function Home() {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      {/* Other page sections will go here later */}
    </main>
  );
}
