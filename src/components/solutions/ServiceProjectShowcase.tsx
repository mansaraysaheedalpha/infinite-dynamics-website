// src/components/solutions/ServiceProjectShowcase.tsx

"use client";

import { CaseStudy } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/Button";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { Motion } from "../layout/Motion";

interface ServiceProjectShowcaseProps {
  projects: CaseStudy[];
}

const ServiceProjectShowcase = ({ projects }: ServiceProjectShowcaseProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
      {projects.map((project, index) => (
        <Motion
          key={project.id}
          className="bg-card border rounded-lg overflow-hidden flex flex-col"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: index * 0.1 }}
        >
          <div className="relative w-full h-64">
            <Image
              src={project.imageUrl}
              alt={project.title}
              fill
              className="object-cover"
            />
          </div>
          <div className="p-6 flex flex-col flex-grow">
            <h3 className="text-xl font-bold text-card-foreground">
              {project.title}
            </h3>
            <p className="text-sm text-brand-yellow font-semibold mt-1">
              {project.subtitle}
            </p>
            <p className="mt-4 text-muted-foreground text-sm flex-grow">
              {project.overview}
            </p>
            <div className="mt-6 pt-4 border-t flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="bg-secondary text-secondary-foreground text-xs font-medium px-3 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div className="p-6 pt-0 flex flex-col sm:flex-row gap-4">
            <Button asChild variant="outline" className="w-full">
              <Link href={`/work/${project.id}`}>
                View Case Study
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            {project.liveUrl && project.liveUrl !== "#" && (
              <Button asChild className="w-full">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Live Site
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            )}
          </div>
        </Motion>
      ))}
    </div>
  );
};

export default ServiceProjectShowcase;
