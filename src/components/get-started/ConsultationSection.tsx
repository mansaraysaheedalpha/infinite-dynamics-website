// src/components/get-started/ConsultationSection.tsx

"use client";

import { Motion } from "../layout/Motion";
import { InlineWidget } from "react-calendly";
import { Lightbulb, Code, Target } from "lucide-react";

const consultationTopics = [
  {
    icon: <Lightbulb className="h-6 w-6 text-brand-yellow" />,
    text: "Product Strategy & Roadmap Planning",
  },
  {
    icon: <Code className="h-6 w-6 text-brand-yellow" />,
    text: "Technology Stack & Architecture Review",
  },
  {
    icon: <Target className="h-6 w-6 text-brand-yellow" />,
    text: "Go-to-Market & MVP Scoping",
  },
];

const ConsultationSection = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">
          Schedule a Strategic Consultation
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Book a complimentary session with our senior engineers to discuss your
          challenges and explore potential solutions.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Column: Value Proposition */}
        <Motion
          className="space-y-6"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-semibold text-foreground">
            A productive conversation can cover:
          </h3>
          <ul className="space-y-4">
            {consultationTopics.map((topic) => (
              <li key={topic.text} className="flex items-center gap-4">
                {topic.icon}
                <span className="text-lg text-muted-foreground">
                  {topic.text}
                </span>
              </li>
            ))}
          </ul>
          <p className="text-muted-foreground pt-4">
            This is your opportunity to leverage our expertise and gain clarity
            on your project&apos;s direction.
          </p>
        </Motion>

        {/* Right Column: Calendly Embed */}
        <Motion
          className="rounded-lg border bg-card overflow-hidden min-h-[650px]"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          <InlineWidget
            url="https://calendly.com/infinite-dynamics-info/30min" // <-- IMPORTANT: REPLACE WITH YOUR CALENDLY LINK
            styles={{ height: "650px" }}
          />
        </Motion>
      </div>
    </div>
  );
};

export default ConsultationSection;
