// src/app/page.tsx

import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      {/* Other page sections will go here later */}
    </main>
  );
}
