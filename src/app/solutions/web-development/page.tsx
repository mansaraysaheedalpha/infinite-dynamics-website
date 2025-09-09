// src/app/solutions/web-development/page.tsx

"use client";

import PageLayout from "@/components/layout/PageLayout";
import ProjectShowcase from "@/components/sections/ProjectShowcase";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaSearch, FaPalette, FaCode, FaRocket } from "react-icons/fa";

// Data for our sections to keep the JSX clean
const processSteps = [
  {
    icon: <FaSearch className="h-8 w-8 text-brand-yellow" />,
    title: "Discovery & Strategy",
    description:
      "We begin by understanding your vision, goals, and target audience to craft a comprehensive project roadmap.",
  },
  {
    icon: <FaPalette className="h-8 w-8 text-brand-yellow" />,
    title: "UI/UX Design",
    description:
      "Our design team creates intuitive, beautiful interfaces that provide an exceptional user experience.",
  },
  {
    icon: <FaCode className="h-8 w-8 text-brand-yellow" />,
    title: "Development & Testing",
    description:
      "Our engineers build your application with clean, scalable code, followed by rigorous testing to ensure quality.",
  },
  {
    icon: <FaRocket className="h-8 w-8 text-brand-yellow" />,
    title: "Deployment & Support",
    description:
      "We handle the seamless launch of your product and provide ongoing support to ensure its success.",
  },
];

const technologies = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "NestJS",
  "PostgreSQL",
  "React Native",
  "Tailwind CSS",
];

const WebDevelopmentPage = () => {
  return (
    <PageLayout
      title="Web & Mobile Development"
      subtitle="Crafting bespoke digital experiences that drive results."
    >
      {/* === Section 1: The Core Philosophy === */}
      <motion.section
        className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-foreground">
            {" "}
            {/* Corrected text color */}
            From Concept to Creation
          </h2>
          <p className="text-lg text-muted-foreground">
            {" "}
            {/* Corrected text color */}
            At Infinite Dynamics, we don&apos;t just write code; we architect
            solutions. Our philosophy is rooted in a deep understanding of your
            business objectives, ensuring that every line of code serves a
            purpose and every feature delivers value. We build digital products
            that are not only technically excellent but are also intuitive,
            engaging, and built to scale.
          </p>
        </div>
        <div className="relative w-full h-80 rounded-lg overflow-hidden shadow-lg">
          <video
            className="absolute inset-0 w-full h-full object-cover" // The definitive fix for black bars
            src="/service-web-dev2.mp4" // Using the specific video for this service
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
      </motion.section>

      {/* === Section 2: Our Development Process === */}
      <motion.section
        className="mt-24"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        <div className="text-center">
          <h2 className="text-3xl font-bold text-foreground">
            Our Proven Process
          </h2>{" "}
          {/* Corrected text color */}
          <p className="mt-2 text-lg text-muted-foreground max-w-2xl mx-auto">
            {" "}
            {/* Corrected text color */}A transparent and collaborative journey
            from idea to launch.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step) => (
            <div
              key={step.title}
              className="bg-brand-secondary p-6 rounded-lg border border-white/10 text-center"
            >
              <div className="flex justify-center mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold text-white">{step.title}</h3>
              <p className="mt-2 text-gray-400">{step.description}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* === Section 3: Technology Showcase === */}
      <motion.section
        className="mt-24"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        <div className="text-center">
          <h2 className="text-3xl font-bold text-foreground">
            Technologies We Master
          </h2>{" "}
          {/* Corrected text color */}
          <p className="mt-2 text-lg text-muted-foreground">
            {" "}
            {/* Corrected text color */}
            Leveraging the best tools for the job.
          </p>
        </div>
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          {technologies.map((tech) => (
            <div
              key={tech}
              className="bg-secondary text-secondary-foreground font-semibold py-2 px-4 rounded-full border"
            >
              {tech}
            </div>
          ))}
        </div>
      </motion.section>

      <ProjectShowcase />

      {/* === Section 4: Project Inquiry CTA === */}
      <motion.section
        className="mt-24 bg-brand-secondary rounded-lg p-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold text-white">
          Have a Project in Mind?
        </h2>{" "}
        {/* Corrected text color */}
        <p className="mt-2 text-lg text-gray-300">
          {" "}
          {/* Corrected text color */}
          Let&apos;s discuss how we can bring your vision to life.
        </p>
        <Button asChild size="lg" className="mt-6">
          <Link href="/contact">Contact Us Today</Link>
        </Button>
      </motion.section>
    </PageLayout>
  );
};

export default WebDevelopmentPage;
