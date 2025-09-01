// src/app/solutions/ui-ux-design/page.tsx

"use client";

import PageLayout from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import Link from "next/link";
// Update icons to be relevant to design
import {
  FaEye,
  FaDraftingCompass,
  FaMobileAlt,
  FaLightbulb,
} from "react-icons/fa";

// Updated data for the UI/UX Design page
const processSteps = [
  {
    icon: <FaLightbulb className="h-8 w-8 text-brand-yellow" />,
    title: "Research & Ideation",
    description:
      "We dive deep into user personas and market research to uncover insights that inform a user-centric design strategy.",
  },
  {
    icon: <FaDraftingCompass className="h-8 w-8 text-brand-yellow" />,
    title: "Wireframing & Prototyping",
    description:
      "We create low-fidelity wireframes and interactive prototypes to map out user flows and test core concepts.",
  },
  {
    icon: <FaEye className="h-8 w-8 text-brand-yellow" />,
    title: "Visual Design",
    description:
      "Our designers craft stunning, high-fidelity mockups that bring your brand's visual identity to life.",
  },
  {
    icon: <FaMobileAlt className="h-8 w-8 text-brand-yellow" />,
    title: "Usability Testing",
    description:
      "We conduct rigorous user testing to refine the design, ensuring the final product is both beautiful and easy to use.",
  },
];

const technologies = [
  "Figma",
  "Adobe XD",
  "Sketch",
  "Illustrator",
  "Photoshop",
  "Canva",
  "UserTesting.com",
  "Webflow",
];

const UiUxDesignPage = () => {
  return (
    <PageLayout
      title="UI/UX & Graphic Design"
      subtitle="Designing intuitive interfaces that captivate and convert."
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
            Where Beauty Meets Usability
          </h2>
          <p className="text-lg text-muted-foreground">
            We believe that world-class design is invisible. It guides users
            effortlessly toward their goals, creating an experience that is not
            only visually stunning but also deeply intuitive. Our design process
            balances aesthetic elegance with data-driven user experience
            principles to create products that people love to use.
          </p>
        </div>
        <div className="relative w-full h-80 rounded-lg overflow-hidden shadow-lg">
          <video
            className="absolute inset-0 w-full h-full object-cover"
            src="/service-design2.mp4" // <-- Use the design video
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
      </motion.section>

      {/* === Section 2: Our Design Process === */}
      <motion.section
        className="mt-24"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        <div className="text-center">
          <h2 className="text-3xl font-bold text-foreground">
            Our Creative Process
          </h2>
          <p className="mt-2 text-lg text-muted-foreground max-w-2xl mx-auto">
            A journey of empathy, creativity, and precision.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step) => (
            <div
              key={step.title}
              className="bg-card p-6 rounded-lg border text-center"
            >
              <div className="flex justify-center mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold text-card-foreground">
                {step.title}
              </h3>
              <p className="mt-2 text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* === Section 3: Tools We Use === */}
      <motion.section
        className="mt-24"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        <div className="text-center">
          <h2 className="text-3xl font-bold text-foreground">
            Our Design Toolkit
          </h2>
          <p className="mt-2 text-lg text-muted-foreground">
            Utilizing industry-standard tools for flawless execution.
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

      {/* === Section 4: Project Inquiry CTA === */}
      <motion.section
        className="mt-24 bg-card border rounded-lg p-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold text-foreground">
          Have a Design Challenge?
        </h2>
        <p className="mt-2 text-lg text-muted-foreground">
          Let's collaborate to create a visually stunning and effective
          solution.
        </p>
        <Button asChild size="lg" className="mt-6">
          <Link href="/contact">Start a Project</Link>
        </Button>
      </motion.section>
    </PageLayout>
  );
};

export default UiUxDesignPage;
