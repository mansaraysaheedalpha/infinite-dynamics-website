// src/app/solutions/cloud-devops/page.tsx

"use client";

import PageLayout from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/Button";
import { Motion } from "@/components/layout/Motion";
import Link from "next/link";
import { FaCloud, FaServer, FaShieldAlt, FaInfinity } from "react-icons/fa";
import ProjectShowcase from "@/components/sections/ProjectShowcase";

// Data for the Cloud & DevOps page
const processSteps = [
  {
    icon: <FaCloud className="h-8 w-8 text-brand-yellow" />,
    title: "Infrastructure Architecture",
    description:
      "We design a secure, scalable, and cost-effective cloud architecture tailored to your specific application needs.",
  },
  {
    icon: <FaServer className="h-8 w-8 text-brand-yellow" />,
    title: "CI/CD Automation",
    description:
      "We implement robust Continuous Integration & Deployment pipelines to automate your build, test, and release cycles.",
  },
  {
    icon: <FaShieldAlt className="h-8 w-8 text-brand-yellow" />,
    title: "Security & Compliance",
    description:
      "Security is built-in, not bolted-on. We ensure your infrastructure adheres to best practices and compliance standards.",
  },
  {
    icon: <FaInfinity className="h-8 w-8 text-brand-yellow" />,
    title: "Monitoring & Optimization",
    description:
      "We provide 24/7 monitoring and continuous optimization to ensure high availability and peak performance.",
  },
];

const technologies = [
  "AWS",
  "Google Cloud",
  "Azure",
  "Docker",
  "Kubernetes",
  "Terraform",
  "Jenkins",
  "GitHub Actions",
];

const CloudDevopsPage = () => {
  return (
    <PageLayout
      title="Cloud & DevOps"
      subtitle="Building resilient, scalable infrastructure for the modern web."
    >
      {/* === Section 1: The Core Philosophy === */}
      <Motion
        type="section"
        className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-foreground">
            Infrastructure as Code
          </h2>
          <p className="text-lg text-muted-foreground">
            We believe that a powerful application is only as strong as its
            foundation. Our DevOps philosophy centers on automation,
            reliability, and scalability. We treat infrastructure as code,
            creating reproducible and resilient systems that allow your
            development teams to innovate faster and deploy with confidence.
          </p>
        </div>
        <div className="relative w-full h-80 rounded-lg overflow-hidden shadow-lg">
          <video
            className="absolute inset-0 w-full h-full object-cover"
            src="/service-devops.mp4" // Use the DevOps video
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
      </Motion>

      {/* === Section 2: Our DevOps Lifecycle === */}
      <Motion
        type="section"
        className="mt-24"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        <div className="text-center">
          <h2 className="text-3xl font-bold text-foreground">
            Our Automation Process
          </h2>
          <p className="mt-2 text-lg text-muted-foreground max-w-2xl mx-auto">
            From code commit to live production, seamlessly.
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
      </Motion>

      {/* === Section 3: Platforms We Support === */}
      <Motion
        type="section"
        className="mt-24"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        <div className="text-center">
          <h2 className="text-3xl font-bold text-foreground">
            Platforms We Support
          </h2>
          <p className="mt-2 text-lg text-muted-foreground">
            Multi-cloud and cloud-agnostic solutions.
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
      </Motion>

      <ProjectShowcase />

      {/* === Section 4: Project Inquiry CTA === */}
      <Motion
        type="section"
        className="mt-24 bg-card border rounded-lg p-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold text-foreground">Ready to Scale?</h2>
        <p className="mt-2 text-lg text-muted-foreground">
          Let&apos;s build a rock-solid foundation for your application.
        </p>
        <Button asChild size="lg" className="mt-6">
          <Link href="/contact">Optimize My Infrastructure</Link>
        </Button>
      </Motion>
    </PageLayout>
  );
};

export default CloudDevopsPage;
