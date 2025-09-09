// src/components/get-started/EngagementPathways.tsx

"use client";

import { motion, Variants, easeOut } from "framer-motion"; // 1. Import the 'Variants' type
import { Rocket, CalendarDays, Mail } from "lucide-react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface EngagementPathwaysProps {
  onSelectProject: () => void;
  onSelectConsultation: () => void;
}

const pathways = [
  {
    icon: <Rocket className="h-10 w-10 text-brand-yellow" />,
    title: "Start a New Project",
    description:
      "Have a clear vision for a new web or mobile application? Let&apos;s dive into the scope, timeline, and strategy to bring it to life.", // Fixed apostrophe
    cta: "Describe Your Project",
    actionType: "scroll",
    actionTarget: "project",
  },
  {
    icon: <CalendarDays className="h-10 w-10 text-brand-yellow" />,
    title: "Schedule a Consultation",
    description:
      "Need expert advice on technology, architecture, or product strategy? Book a strategic session with our senior engineers.",
    cta: "Book a Strategy Call",
    actionType: "scroll",
    actionTarget: "consultation",
  },
  {
    icon: <Mail className="h-10 w-10 text-brand-yellow" />,
    title: "General Inquiry",
    description:
      "Have a different question about partnerships, our services, or anything else? We&apos;re here to help and happy to connect.", // Fixed apostrophe
    cta: "Ask a Question",
    actionType: "link",
    actionTarget: "/contact",
  },
];

const EngagementPathways = ({
  onSelectProject,
  onSelectConsultation,
}: EngagementPathwaysProps) => {
  // 2. Explicitly apply the 'Variants' type to our object
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: easeOut,
      },
    }),
  };

  const handleAction = (pathway: (typeof pathways)[0]) => {
    if (pathway.actionType === "scroll") {
      if (pathway.actionTarget === "project") onSelectProject();
      if (pathway.actionTarget === "consultation") onSelectConsultation();
    }
  };

  return (
    <div className="text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-foreground">
        How can we help you build the future?
      </h2>
      <p className="mt-4 text-lg max-w-2xl mx-auto text-muted-foreground">
        Select the path that best fits your needs. Each journey is tailored to
        ensure a successful outcome.
      </p>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {pathways.map((pathway, i) => (
          <motion.div
            key={pathway.title}
            className="group"
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={cardVariants}
          >
            {pathway.actionType === "link" ? (
              <Link href={pathway.actionTarget as string} className="h-full">
                <div className="h-full flex flex-col text-left bg-card border rounded-lg p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-brand-yellow">
                  {pathway.icon}
                  <h3 className="mt-6 text-2xl font-bold text-foreground">
                    {pathway.title}
                  </h3>
                  <p className="mt-2 text-muted-foreground flex-grow">
                    {pathway.description}
                  </p>
                  <div className="mt-6 font-semibold text-brand-yellow flex items-center gap-2">
                    {pathway.cta}
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ) : (
              <button
                onClick={() => handleAction(pathway)}
                className="w-full h-full text-left"
              >
                <div className="h-full flex flex-col bg-card border rounded-lg p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-brand-yellow">
                  {pathway.icon}
                  <h3 className="mt-6 text-2xl font-bold text-foreground">
                    {pathway.title}
                  </h3>
                  <p className="mt-2 text-muted-foreground flex-grow">
                    {pathway.description}
                  </p>
                  <div className="mt-6 font-semibold text-brand-yellow flex items-center gap-2">
                    {pathway.cta}
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              </button>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default EngagementPathways;
