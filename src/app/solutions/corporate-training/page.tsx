// src/app/solutions/corporate-training/page.tsx

"use client";

import PageLayout from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  FaChalkboardTeacher,
  FaUsers,
  FaCertificate,
  FaBrain,
} from "react-icons/fa";
import ProjectShowcase from "@/components/sections/ProjectShowcase";

// Data for the Corporate Training page
const processSteps = [
  {
    icon: <FaUsers className="h-8 w-8 text-brand-yellow" />,
    title: "Needs Assessment",
    description:
      "We work with you to understand your team's specific skill gaps and business goals to design a tailored curriculum.",
  },
  {
    icon: <FaChalkboardTeacher className="h-8 w-8 text-brand-yellow" />,
    title: "Custom Curriculum",
    description:
      "Our experts develop engaging, hands-on training modules using real-world projects and best practices.",
  },
  {
    icon: <FaBrain className="h-8 w-8 text-brand-yellow" />,
    title: "Interactive Training",
    description:
      "We deliver dynamic training sessions, either in-person or online, focused on practical application and knowledge retention.",
  },
  {
    icon: <FaCertificate className="h-8 w-8 text-brand-yellow" />,
    title: "Certification & Support",
    description:
      "We offer certification upon completion and provide ongoing resources to support your team's continued growth.",
  },
];

const technologies = [
  "Web Development Fundamentals",
  "Advanced React & Next.js",
  "UI/UX Design Principles",
  "Cloud Essentials (AWS)",
  "DevOps & CI/CD",
  "Agile Project Management",
  "Data Structures & Algorithms",
  "Microsoft Office Suite",
];

const CorporateTrainingPage = () => {
  return (
    <PageLayout
      title="Corporate Training"
      subtitle="Empowering your team with the digital skills of tomorrow."
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
            Investing in Your People
          </h2>
          <p className="text-lg text-muted-foreground">
            In a rapidly evolving digital world, your team's skill set is your
            greatest asset. Our corporate training programs are designed to
            upskill and empower your workforce, transforming them into a more
            efficient, innovative, and competitive team. We bridge the gap
            between existing knowledge and future needs.
          </p>
        </div>
        <div className="relative w-full h-80 rounded-lg overflow-hidden shadow-lg">
          <video
            className="absolute inset-0 w-full h-full object-cover"
            src="/service-training.mp4" // Use the training video
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
      </motion.section>

      {/* === Section 2: Our Training Methodology === */}
      <motion.section
        className="mt-24"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        <div className="text-center">
          <h2 className="text-3xl font-bold text-foreground">
            Our Learning Framework
          </h2>
          <p className="mt-2 text-lg text-muted-foreground max-w-2xl mx-auto">
            A structured approach to building lasting expertise.
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

      {/* === Section 3: Core Training Areas === */}
      <motion.section
        className="mt-24"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        <div className="text-center">
          <h2 className="text-3xl font-bold text-foreground">
            Core Training Areas
          </h2>
          <p className="mt-2 text-lg text-muted-foreground">
            From technical skills to design thinking.
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
        className="mt-24 bg-card border rounded-lg p-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold text-foreground">
          Ready to Upskill Your Team?
        </h2>
        <p className="mt-2 text-lg text-muted-foreground">
          Let's design a custom training program that fits your needs.
        </p>
        <Button asChild size="lg" className="mt-6">
          <Link href="/contact">Request a Consultation</Link>
        </Button>
      </motion.section>
    </PageLayout>
  );
};

export default CorporateTrainingPage;
