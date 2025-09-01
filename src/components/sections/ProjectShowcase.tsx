// src/components/sections/ProjectShowcase.tsx

"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const placeholderProjects = [
  {
    title: "Enterprise Fintech Platform",
    description:
      "A secure, scalable web platform for financial data analytics.",
    image: "/placeholder-project-1.jpg",
    tags: ["Next.js", "TypeScript", "PostgreSQL"],
  },
  {
    title: "E-Commerce Mobile App",
    description: "A cross-platform mobile app for a major retail brand.",
    image: "/placeholder-project-2.jpg",
    tags: ["React Native", "Node.js", "MongoDB"],
  },
  {
    title: "SaaS Dashboard UI/UX",
    description:
      "A complete redesign of a B2B software-as-a-service dashboard.",
    image: "/placeholder-project-3.jpg",
    tags: ["Figma", "React", "Tailwind CSS"],
  },
];

const ProjectShowcase = () => {
  return (
    <motion.section
      className="mt-24"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      <div className="text-center">
        <h2 className="text-3xl font-bold text-foreground">Our Recent Work</h2>
        <p className="mt-2 text-lg text-muted-foreground max-w-2xl mx-auto">
          A glimpse into the solutions we've crafted for our clients.
        </p>
      </div>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {placeholderProjects.map((project, index) => (
          <div
            key={index}
            className="bg-card border rounded-lg overflow-hidden group"
          >
            <div className="relative h-56 w-full">
              <Image
                src={`https://placehold.co/600x400/0D253F/FFC700?text=Project+${
                  index + 1
                }`}
                alt={project.title}
                fill // 'layout="fill"' is now just 'fill'
                className="object-cover transition-transform duration-300 group-hover:scale-105" // 'object-cover' is now a class
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-card-foreground">
                {project.title}
              </h3>
              <p className="mt-2 text-muted-foreground text-sm">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-secondary text-secondary-foreground text-xs font-medium px-2.5 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default ProjectShowcase;
