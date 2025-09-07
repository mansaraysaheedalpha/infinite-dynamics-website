// src/components/sections/AboutSection.tsx

import Link from "next/link";
import { Button } from "../ui/Button";

const AboutSection = () => {
  return (
    <section className="bg-background py-16 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="relative w-full h-80 md:h-96 rounded-lg overflow-hidden shadow-lg">
          {" "}
          {/* Adjusted height for mobile */}
          <video
            className="absolute inset-0 w-full h-full object-cover"
            src="/about_us_img.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
        <div className="text-center md:text-left">
          {" "}
          {/* Center text on mobile */}
          <h2 className="text-base font-semibold uppercase tracking-wider text-brand-yellow">
            Who We Are
          </h2>
          <p className="mt-2 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Driven by Innovation, Defined by Excellence.
          </p>
          <p className="mt-6 text-lg text-muted-foreground">
            Infinite Dynamics is a Sierra Leone-based collective of passionate
            technologists, designers, and strategists dedicated to building
            robust, scalable, and user-centric software solutions.
          </p>
          <div className="mt-8 flex justify-center md:justify-start">
            {" "}
            {/* Center button on mobile */}
            <Button asChild size="lg">
              <Link href="/about">Learn More About Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
