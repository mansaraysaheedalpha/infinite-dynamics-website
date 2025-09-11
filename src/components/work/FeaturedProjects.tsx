// src/components/work/FeaturedProjects.tsx

"use client";

import { motion, Variants } from "framer-motion"; // 1. Import the 'Variants' type
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { CaseStudy } from "@/types";

interface FeaturedProjectsProps {
  caseStudies: CaseStudy[];
}

// 2. Explicitly apply the 'Variants' type to our object
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const FeaturedProjects = ({ caseStudies }: FeaturedProjectsProps) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
      {caseStudies.map((study, i) => (
        <motion.div
          key={study.id}
          custom={i}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={cardVariants}
        >
          {/* We'll link to a future case study page */}
          <Link
            href={`/work/${study.id}`}
            className="block bg-card border rounded-lg overflow-hidden group transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
          >
            <div className="relative w-full h-80 overflow-hidden">
              <Image
                src={study.imageUrl}
                alt={study.title}
                fill
                className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
              />
            </div>
            <div className="p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-bold text-foreground">
                {study.title}
              </h3>
              <p className="text-brand-yellow font-semibold text-sm mt-1">
                {study.subtitle}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {study.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="bg-secondary text-secondary-foreground text-xs font-medium px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-6 font-semibold text-primary flex items-center gap-2 group-hover:text-brand-yellow transition-colors">
                View Case Study
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 ease-in-out group-hover:rotate-45" />
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
};

export default FeaturedProjects;
