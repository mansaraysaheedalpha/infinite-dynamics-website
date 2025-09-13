// src/app/solutions/ui-ux-design/page.tsx

import PageLayout from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { designTemplates } from "@/lib/design-data";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Motion } from "@/components/layout/Motion";

const UIUXPage = () => {
  // We'll feature the first 3 templates from your data file
  const featuredDesigns = designTemplates.slice(0, 3);

  return (
    <PageLayout
      title="UI/UX & Graphics Design"
      subtitle="Crafting intuitive and beautiful experiences that captivate users."
    >
      {/* --- Intro Section --- */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-foreground">
            Design That Solves Problems
          </h2>
          <p className="text-lg text-muted-foreground">
            Our design philosophy is simple: beautiful aesthetics must serve a
            purpose. We focus on user-centric design to create interfaces that
            are not only visually stunning but also intuitive, accessible, and
            aligned with your business goals.
          </p>
        </div>
        <div className="relative w-full h-80 rounded-lg overflow-hidden shadow-lg">
          <video
            className="absolute inset-0 w-full h-full object-cover"
            src="/service-design2.mp4" // You can generate a video for this
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
      </section>

      {/* --- Design Showcase Section --- */}
      <section className="mt-24">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-foreground">
            Our Design Style
          </h2>
          <p className="mt-2 text-lg text-muted-foreground max-w-2xl mx-auto">
            A glimpse into our versatile design capabilities, from corporate
            branding to event marketing.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredDesigns.map((template, index) => (
            <Motion
              key={template.id}
              className="bg-card border rounded-lg overflow-hidden group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="relative h-80 w-full overflow-hidden">
                <Image
                  src={template.imageUrl}
                  alt={template.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <p className="text-sm font-semibold text-brand-yellow">
                  {template.category}
                </p>
                <h3 className="mt-1 text-xl font-bold text-card-foreground">
                  {template.title}
                </h3>
              </div>
            </Motion>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button asChild size="lg">
            <Link href="/work#design-studio">
              Explore the Full Design Studio{" "}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* --- CTA Section --- */}
      <Motion
        className="mt-24 bg-brand-secondary rounded-lg p-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold text-white">
          Have a Design Challenge?
        </h2>
        <p className="mt-2 text-lg text-gray-300">
          Let&apos;s collaborate to create a stunning visual identity for your
          brand.
        </p>
        <Button asChild size="lg" className="mt-6">
          <Link href="/get-started">Start a Project</Link>
        </Button>
      </Motion>
    </PageLayout>
  );
};

export default UIUXPage;
