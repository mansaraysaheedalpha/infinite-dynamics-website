// src/components/sections/HeroSection.tsx

"use client";

import Link from "next/link";
import { Button } from "../ui/Button";
import { Motion } from "../layout/Motion";

const HeroSection = () => {
  return (
    <section className="relative h-[calc(100vh-5rem)] w-full overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src="/Futuristic_Golden_Circuit_Animation.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-10" />
      <div className="relative z-20 container mx-auto flex h-full flex-col items-center justify-center text-center">
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 md:p-12 border border-white/20 shadow-lg">
          {" "}
          {/* Reduced padding on mobile */}
          <Motion
            type="h1"
            className="text-3xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow-md" // Adjusted mobile font size
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Building Tomorrow&apos;s{" "}
            <span className="text-brand-yellow">Digital Landscape</span>
          </Motion>
          <Motion
            type="p"
            className="mt-4 max-w-2xl text-base md:text-xl text-gray-200 drop-shadow-sm" // Adjusted mobile font size
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            We architect and engineer elegant, high-performance software
            solutions that drive innovation and empower businesses to thrive in
            a digital-first world.
          </Motion>
          <Motion
            className="mt-8 flex flex-col sm:flex-row justify-center gap-4" // Stack buttons on very small screens
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          >
            <Button asChild size="lg" className="w-full sm:w-auto">
              <Link href="/work">Explore Our Work</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="w-full sm:w-auto"
            >
              <Link href="/contact">Get a Quote</Link>
            </Button>
          </Motion>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
