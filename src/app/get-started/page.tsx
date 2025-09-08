// src/app/get-started/page.tsx

"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
// We no longer need PageLayout for this specific page
import EngagementPathways from "@/components/get-started/EngagementPathways";
import ProjectIntakeForm from "@/components/get-started/ProjectIntakeForm";
import ConsultationSection from "@/components/get-started/ConsultationSection";
import SocialProof from "@/components/get-started/SocialProof";

const GetStartedPage = () => {
  const projectFormRef = useRef<HTMLDivElement>(null);
  const consultationRef = useRef<HTMLDivElement>(null);

  const scrollTo = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };

  return (
    // We use a React Fragment <> because we no longer have a single root div
    <>
      {/* === Section 1: Hero === */}
      <motion.section
        className="relative flex items-center justify-center h-[60vh] text-center text-white overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          src="/get-started-bg.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-brand-primary/70 z-10" />
        <div className="relative z-20 container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            Let&apos;s Build Something Remarkable.
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-gray-300">
            Your vision, engineered with precision and passion. Tell us about
            your goals, and we&apos;ll architect the solution.
          </p>
        </div>
      </motion.section>

      {/* === Section 2: Engagement Pathways === */}
      {/* This section now has its own wrapper with background and padding */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <EngagementPathways
            onSelectProject={() => scrollTo(projectFormRef)}
            onSelectConsultation={() => scrollTo(consultationRef)}
          />
        </div>
      </section>

      {/* === Section 3: Social Proof === */}
      {/* This component already defines its own full-width background */}
      <SocialProof />

      {/* === Section 4: Project Intake Form === */}
      <section ref={projectFormRef} className="py-24 bg-card border-t border-b">
        <div className="container mx-auto px-4">
          <ProjectIntakeForm />
        </div>
      </section>

      {/* === Section 5: Consultation Section === */}
      <section ref={consultationRef} className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <ConsultationSection />
        </div>
      </section>
    </>
  );
};

export default GetStartedPage;
