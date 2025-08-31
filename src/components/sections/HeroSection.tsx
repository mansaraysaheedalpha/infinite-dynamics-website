// src/components/sections/HeroSection.tsx

import { Button } from "@/components/ui/Button";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="relative flex h-[calc(100vh-4rem)] items-center justify-center">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source
          src="/Futuristic_Golden_Circuit_Animation.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-brand-primary/70 backdrop-blur-sm"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center text-white">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          Building Tomorrow's Digital Landscape
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-gray-300 md:text-xl">
          Innovative Software Solutions for a Connected World. Infinite Dynamics
          turns your vision into reality with cutting-edge technology and expert
          development.
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <Link href="/contact">
            <Button size="lg">Get a Quote</Button>
          </Link>
          <Link href="/solutions">
            <Button size="lg" variant="outline">
              Explore Our Work
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
