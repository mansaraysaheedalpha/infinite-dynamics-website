// src/app/solutions/corporate-training/page.tsx

"use client";

import PageLayout from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/Button";
import { Motion } from "@/components/layout/Motion";
import Link from "next/link";
import {
  FaChalkboardTeacher,
  FaUsers,
  FaCertificate,
  FaBrain,
} from "react-icons/fa";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Data for the learning framework section
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

// Data for the interactive curriculum explorer
const trainingAreas = [
  {
    id: "web-dev",
    title: "Web Development Fundamentals",
    description:
      "Master the building blocks of the modern web, from semantic HTML and responsive CSS to core JavaScript concepts.",
    outcomes: [
      "Build static and dynamic websites",
      "Understand the DOM",
      "Master CSS Flexbox & Grid",
    ],
  },
  {
    id: "react-next",
    title: "Advanced React & Next.js",
    description:
      "Dive deep into the most powerful frontend framework. Learn about hooks, state management, and server-side rendering with Next.js.",
    outcomes: [
      "Build complex SPAs",
      "Optimize performance with SSR",
      "Manage state with Redux Toolkit",
    ],
  },
  {
    id: "ui-ux",
    title: "UI/UX Design Principles",
    description:
      "Learn the fundamentals of user-centric design, from wireframing and prototyping in Figma to creating intuitive user flows.",
    outcomes: [
      "Conduct user research",
      "Create high-fidelity prototypes",
      "Understand accessibility standards",
    ],
  },
  {
    id: "cloud-aws",
    title: "Cloud Essentials (AWS)",
    description:
      "An introduction to cloud computing. Understand core AWS services like EC2, S3, and Lambda to build and deploy scalable applications.",
    outcomes: [
      "Host applications on AWS",
      "Understand serverless architecture",
      "Manage cloud storage and databases",
    ],
  },
];

const CorporateTrainingPage = () => {
  return (
    <PageLayout
      title="Corporate Training"
      subtitle="Empowering your team with the digital skills of tomorrow."
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
            Investing in Your People
          </h2>
          <p className="text-lg text-muted-foreground">
            In a rapidly evolving digital world, your team&apos;s skill set is
            your greatest asset. Our corporate training programs are designed to
            upskill and empower your workforce, transforming them into a more
            efficient, innovative, and competitive team. We bridge the gap
            between existing knowledge and future needs.
          </p>
        </div>
        <div className="relative w-full h-80 rounded-lg overflow-hidden shadow-lg">
          <video
            className="absolute inset-0 w-full h-full object-cover"
            src="/service-training.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
      </Motion>

      {/* === Section 2: Our Learning Framework === */}
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
      </Motion>

      {/* === Section 3: Interactive Curriculum Explorer === */}
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
            Explore Our Curriculum
          </h2>
          <p className="mt-2 text-lg text-muted-foreground">
            Click on a topic to see the key learning outcomes.
          </p>
        </div>
        <div className="mt-12 max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {trainingAreas.map((area) => (
              <AccordionItem key={area.id} value={area.id}>
                <AccordionTrigger className="text-xl font-semibold hover:no-underline text-left">
                  {area.title}
                </AccordionTrigger>
                <AccordionContent className="pt-2">
                  <p className="text-muted-foreground">{area.description}</p>
                  <ul className="mt-4 list-disc list-inside space-y-1 text-muted-foreground">
                    {area.outcomes.map((outcome) => (
                      <li key={outcome}>{outcome}</li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
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
        <h2 className="text-3xl font-bold text-foreground">
          Ready to Upskill Your Team?
        </h2>
        <p className="mt-2 text-lg text-muted-foreground">
          Let&apos;s design a custom training program that fits your needs.
        </p>
        <Button asChild size="lg" className="mt-6">
          <Link href="/contact">Request a Consultation</Link>
        </Button>
      </Motion>
    </PageLayout>
  );
};

export default CorporateTrainingPage;
