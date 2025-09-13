// src/app/solutions/cloud-devops/page.tsx

"use client";

import PageLayout from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/Button";
import { Motion } from "@/components/layout/Motion";
import Link from "next/link";
import Image from "next/image";
import {
  FaCloud,
  FaServer,
  FaShieldAlt,
  FaInfinity,
  FaArrowRight,
  FaArrowDown,
} from "react-icons/fa";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

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

// Updated technologies data with correct logo filenames
const technologies = [
  {
    name: "AWS",
    logoUrl: "/tech-logos/aws.png",
    description: "EC2, S3, Lambda, RDS, VPC",
  },
  {
    name: "Google Cloud",
    logoUrl: "/tech-logos/google-cloud.png",
    description: "Compute Engine, Cloud Storage, Cloud Functions",
  },
  {
    name: "Azure",
    logoUrl: "/tech-logos/azure.png",
    description: "Virtual Machines, Blob Storage, Azure Functions",
  },
  {
    name: "Docker",
    logoUrl: "/tech-logos/docker.svg",
    description: "Containerization & Image Building",
  },
  {
    name: "Kubernetes",
    logoUrl: "/tech-logos/kubernetes.png",
    description: "Container Orchestration & Management",
  },
  {
    name: "Terraform",
    logoUrl: "/tech-logos/terraform.svg",
    description: "Infrastructure as Code",
  },
  {
    name: "Jenkins",
    logoUrl: "/tech-logos/jenkins.svg",
    description: "CI/CD Automation Pipelines",
  }, // NOTE: Add this logo
  {
    name: "GitHub Actions",
    logoUrl: "/tech-logos/github-actions.svg",
    description: "Integrated CI/CD & Workflows",
  }, // NOTE: Add this logo
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
            A powerful application is only as strong as its foundation. Our
            DevOps philosophy centers on automation, reliability, and
            scalability. We treat infrastructure as code, creating reproducible
            systems that allow your teams to innovate faster and deploy with
            confidence.
          </p>
        </div>
        <div className="relative w-full h-80 rounded-lg overflow-hidden shadow-lg">
          <video
            className="absolute inset-0 w-full h-full object-cover"
            src="/service-devops.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
      </Motion>

      {/* === Section 2: Visualized DevOps Lifecycle === */}
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
            Our DevOps Lifecycle
          </h2>
          <p className="mt-2 text-lg text-muted-foreground max-w-2xl mx-auto">
            A continuous cycle of innovation and improvement.
          </p>
        </div>

        <div className="mt-16 max-w-4xl mx-auto relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            {processSteps.map((step, index) => (
              <Motion
                type="div"
                key={step.title}
                className="bg-card p-6 rounded-lg border text-center shadow-lg"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex justify-center mb-4">{step.icon}</div>
                <h3 className="text-xl font-semibold text-card-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 text-muted-foreground text-sm">
                  {step.description}
                </p>
              </Motion>
            ))}
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:block">
            <FaArrowRight
              className="text-gray-300 absolute -top-4 -right-16"
              size={24}
            />
            <FaArrowDown
              className="text-gray-300 absolute -bottom-16 -right-4 rotate-90"
              size={24}
            />
            <FaArrowRight
              className="text-gray-300 absolute -bottom-4 -left-16 rotate-180"
              size={24}
            />
            <FaArrowDown
              className="text-gray-300 absolute -top-16 -left-4 -rotate-90"
              size={24}
            />
          </div>
        </div>
      </Motion>

      {/* === Section 3: Interactive Tech Stack === */}
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
            Platforms & Technologies
          </h2>
          <p className="mt-2 text-lg text-muted-foreground">
            Hover over a logo to see our specific expertise.
          </p>
        </div>
        <div className="mt-12 flex flex-wrap justify-center items-center gap-x-8 gap-y-6 md:gap-x-12">
          <TooltipProvider>
            {technologies.map((tech) => (
              <Tooltip key={tech.name}>
                <TooltipTrigger asChild>
                  <div className="cursor-pointer">
                    <Image
                      src={tech.logoUrl}
                      alt={`${tech.name} logo`}
                      width={80}
                      height={80}
                      className="h-14 w-auto md:h-20 filter grayscale hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{tech.description}</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </TooltipProvider>
        </div>
      </Motion>

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
