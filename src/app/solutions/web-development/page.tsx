// src/app/solutions/web-development/page.tsx

import PageLayout from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { FaSearch, FaPalette, FaCode, FaRocket } from "react-icons/fa";
import { caseStudies } from "@/lib/work-data";
import ServiceProjectShowcase from "@/components/solutions/ServiceProjectShowcase";
import { Motion } from "@/components/layout/Motion"; // 1. Import your custom Motion component

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
  const relevantProjects = caseStudies.filter(
    (study) => study.id === "saloneamazon" || study.id === "ecotech"
  );

  return (
    <PageLayout
      title="Web & Mobile Development"
      subtitle="Crafting bespoke digital experiences that drive results."
    >
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-foreground">
            From Concept to Creation
          </h2>
          <p className="text-lg text-muted-foreground">
            At Infinite Dynamics, we don&apos;t just write code; we architect
            solutions. Our philosophy is rooted in a deep understanding of your
            business objectives, ensuring every line of code serves a purpose
            and every feature delivers value.
          </p>
        </div>
        <div className="relative w-full h-80 rounded-lg overflow-hidden shadow-lg">
          <video
            className="absolute inset-0 w-full h-full object-cover"
            src="/service-web-dev2.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
      </section>

      <section className="mt-24">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-foreground">
            Our Proven Process
          </h2>
          <p className="mt-2 text-lg text-muted-foreground max-w-2xl mx-auto">
            A transparent and collaborative journey from idea to launch.
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
      </section>

      <section className="mt-24">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-foreground">
            Technologies We Master
          </h2>
          <p className="mt-2 text-lg text-muted-foreground">
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
      </section>

      <section className="mt-24">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-foreground">
            Our Recent Work
          </h2>
          <p className="mt-2 text-lg text-muted-foreground">
            A look at some of the solutions we&apos;ve engineered.
          </p>
        </div>
        <ServiceProjectShowcase projects={relevantProjects} />
      </section>

      {/* 2. Replace <motion.section> with your custom <Motion> component */}
      <Motion
        type="section"
        className="mt-24 bg-brand-secondary rounded-lg p-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold text-white">
          Have a Project in Mind?
        </h2>
        <p className="mt-2 text-lg text-gray-300">
          Let&apos;s discuss how we can bring your vision to life.
        </p>
        <Button asChild size="lg" className="mt-6">
          <Link href="/contact">Contact Us Today</Link>
        </Button>
      </Motion>
    </PageLayout>
  );
};

export default WebDevelopmentPage;
