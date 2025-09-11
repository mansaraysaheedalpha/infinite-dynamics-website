// src/app/work/[id]/page.tsx

import { caseStudies } from "@/lib/work-data";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Metadata } from "next";
import { ExternalLink, Layers, Palette, ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";

export function generateStaticParams() {
  return caseStudies.map((study) => ({ id: study.id }));
}

export function generateMetadata({
  params,
}: {
  params: { id: string };
}): Metadata {
  const study = caseStudies.find((s) => s.id === params.id);
  if (!study) return { title: "Case Study Not Found" };
  return { title: `${study.title} | Our Work`, description: study.overview };
}

export default function CaseStudyPage({ params }: { params: { id: string } }) {
  const study = caseStudies.find((s) => s.id === params.id);

  if (!study) {
    notFound();
  }

  return (
    <div className="bg-background">
      {/* === Section 1: Immersive Hero === */}
      <section className="relative h-[60vh] w-full">
        <Image
          src={study.imageUrl}
          alt={study.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
        <div className="relative z-10 container mx-auto flex h-full flex-col justify-end text-white p-4 md:p-8">
          <p className="text-brand-yellow font-semibold">{study.subtitle}</p>
          <h1 className="mt-2 text-4xl md:text-6xl font-extrabold max-w-4xl">
            {study.title}
          </h1>
        </div>
      </section>

      {/* === Section 2: Project Overview === */}
      <section className="py-16 md:py-24 border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-foreground">
                Project Brief
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                {study.overview}
              </p>
            </div>
            <aside className="lg:col-span-1">
              <div className="sticky top-28 bg-card border rounded-lg p-6 space-y-4">
                <div>
                  <h4 className="font-semibold text-card-foreground">
                    Services
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {study.services.join(", ")}
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-card-foreground">
                    Tech Stack
                  </h4>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {study.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-secondary text-secondary-foreground text-xs font-medium px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col gap-4 border-t pt-4">
                  {/* ✅ ADDED "View Live Project" button */}
                  {study.liveUrl && study.liveUrl !== "#" && (
                    <Button asChild className="w-full">
                      <a
                        href={study.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Live Project{" "}
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  )}
                  {study.repoUrl && (
                    <Button asChild variant="outline" className="w-full">
                      <a
                        href={study.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Code on GitHub{" "}
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Conditionally render deep-dive sections */}
      {study.architectureDetails && (
        <section className="py-16 md:py-24 bg-card border-b">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <Layers className="mx-auto h-12 w-12 text-brand-yellow" />
              <h2 className="mt-4 text-3xl font-bold text-foreground">
                Architecting for Scale
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                {study.architectureDetails}
              </p>
            </div>
          </div>
        </section>
      )}

      {study.designDetails && (
        <section className="py-16 md:py-24 border-b">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <Palette className="mx-auto h-12 w-12 text-brand-yellow" />
              <h2 className="mt-4 text-3xl font-bold text-foreground">
                Design & User Experience
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                {study.designDetails}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* ✅ ADDED Gallery Section */}
      {study.gallery && study.gallery.length > 0 && (
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <ImageIcon className="mx-auto h-12 w-12 text-brand-yellow" />
              <h2 className="mt-4 text-3xl font-bold text-foreground">
                Project Gallery
              </h2>
            </div>
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-8">
              {study.gallery.map((image, index) => (
                <motion.div
                  key={image}
                  className="relative h-80 w-full rounded-lg overflow-hidden border shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Image
                    src={image}
                    alt={`${study.title} gallery image ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
