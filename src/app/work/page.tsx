// src/app/work/page.tsx

import { Metadata } from "next";
import FeaturedProjects from "@/components/work/FeaturedProjects";
import GlobalConnectShowcase from "@/components/work/GlobalConnectShowcase";
import DesignShowcase from "@/components/work/DesignShowcase"; // 1. Import DesignShowcase
import { caseStudies } from "@/lib/work-data";
import { designTemplates } from "@/lib/design-data"; // 2. Import design data

export const metadata: Metadata = {
  title: "Our Work | Infinite Dynamics",
  description:
    "Explore the craftsmanship, technology, and strategic thinking behind our world-class software solutions.",
};

const WorkPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative flex items-center justify-center h-[60vh] text-center text-white overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          src="/work-hero-bg.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-brand-primary/70 z-10" />
        <div className="relative z-20 container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            The Anatomy of Innovation
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-gray-300">
            We don&apos;t just build software; we architect solutions. Explore
            the craftsmanship and strategic thinking behind our work.
          </p>
        </div>
      </section>

      {/* GlobalConnect Showcase */}
      <section className="py-24 bg-brand-secondary">
        <GlobalConnectShowcase />
      </section>

      {/* Featured Projects */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold">Our Craft in Action</h2>
            <p className="mt-4 text-lg max-w-2xl mx-auto text-muted-foreground">
              From foundational marketing sites to full-stack e-commerce
              platforms, our principles of quality and performance are
              universal.
            </p>
          </div>
          <div className="mt-12">
            <FeaturedProjects caseStudies={caseStudies} />
          </div>
        </div>
      </section>

      {/* 3. Add the new Design Studio section */}
      <section className="py-24 bg-card border-t">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold">The Design Studio</h2>
            <p className="mt-4 text-lg max-w-2xl mx-auto text-muted-foreground">
              Explore our versatile design templates, crafted with creativity
              and precision. We use these as a starting point to deliver custom,
              world-class visuals for our clients.
            </p>
          </div>
          <div className="mt-12">
            <DesignShowcase templates={designTemplates} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default WorkPage;
