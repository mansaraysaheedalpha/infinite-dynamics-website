// src/components/work/GlobalConnectShowcase.tsx

"use client";

import { motion } from "framer-motion";
import { Users, CalendarDays, Zap, BrainCircuit } from "lucide-react";

// Data representing your microservices from the API specs
const services = [
  {
    icon: <Users className="h-8 w-8 text-cyan-300" />,
    name: "User & Org Service",
    description:
      "Handles authentication, profiles, and multi-tenant organizations.",
    tech: "NestJS, PostgreSQL, JWT",
  },
  {
    icon: <CalendarDays className="h-8 w-8 text-cyan-300" />,
    name: "Event Service",
    description:
      "Manages the full event lifecycle using an Event Sourcing pattern.",
    tech: "NestJS, Event Sourcing, Redis",
  },
  {
    icon: <Zap className="h-8 w-8 text-cyan-300" />,
    name: "Real-Time Service",
    description:
      "Powers live chat, polls, Q&A, and real-time dashboard updates.",
    tech: "WebSocket, Redis Pub/Sub",
  },
  {
    icon: <BrainCircuit className="h-8 w-8 text-cyan-300" />,
    name: "Oracle AI Service",
    description:
      "Provides AI-powered predictions, analytics, and recommendations.",
    tech: "Python, TensorFlow, Kafka",
  },
];

const GlobalConnectShowcase = () => {
  return (
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-3xl font-bold text-white md:text-4xl">
        Spotlight: <span className="text-brand-yellow">GlobalConnect</span>
      </h2>
      <p className="mt-4 text-lg max-w-3xl mx-auto text-gray-300">
        An intelligent, real-time platform for world-class events, built on a
        scalable microservices architecture.
      </p>

      {/* Interactive Architecture Diagram */}
      <div className="mt-16">
        <h3 className="text-2xl font-semibold text-white">The Architecture</h3>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              className="bg-brand-primary border border-brand-secondary rounded-lg p-6 text-left group transition-all duration-300 hover:border-brand-yellow hover:-translate-y-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: index * 0.15 }}
            >
              <div className="flex items-center gap-4">
                {service.icon}
                <h4 className="text-xl font-bold text-gray-100">
                  {service.name}
                </h4>
              </div>
              <p className="mt-4 text-gray-400 text-sm">
                {service.description}
              </p>
              <p className="mt-4 text-xs font-mono tracking-wider text-cyan-400">
                {service.tech}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GlobalConnectShowcase;
