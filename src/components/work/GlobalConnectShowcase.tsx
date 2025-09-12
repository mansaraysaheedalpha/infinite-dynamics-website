// src/components/work/GlobalConnectShowcase.tsx

"use client";

import Image from "next/image";
import { Motion } from "../layout/Motion";
import {
  Users,
  CalendarDays,
  Zap,
  BrainCircuit,
  Bot,
  GitBranch,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";

// Data representing your microservices
const services = [
  {
    icon: <Users className="h-8 w-8 text-cyan-300" />,
    name: "User & Org Service",
    description:
      "Handles authentication, profiles, and multi-tenant organizations.",
    tech: "NestJS, PostgreSQL, JWT",
    details:
      "The core of the platform, providing secure and scalable identity management. It supports everything from user registration and login to complex organizational hierarchies and role-based access control (RBAC).",
  },
  {
    icon: <CalendarDays className="h-8 w-8 text-cyan-300" />,
    name: "Event Service",
    description:
      "Manages the full event lifecycle using an Event Sourcing pattern.",
    tech: "NestJS, Event Sourcing, Redis",
    details:
      "Built on a robust event sourcing pattern, this service provides a complete audit trail for every action. It manages event creation, scheduling, speaker and venue booking, and registration, treating all resources as dynamic, bookable assets.",
  },
  {
    icon: <Zap className="h-8 w-8 text-cyan-300" />,
    name: "Real-Time Service",
    description:
      "Powers live chat, polls, Q&A, and real-time dashboard updates.",
    tech: "WebSocket, Redis Pub/Sub",
    details:
      "The engine for live engagement. This service uses a high-performance WebSocket architecture to handle thousands of concurrent connections for features like live chat with moderation, real-time polls and Q&A, and live analytics for event organizers.",
  },
  {
    icon: <BrainCircuit className="h-8 w-8 text-cyan-300" />,
    name: "Oracle AI Service",
    description:
      "Provides AI-powered predictions, analytics, and recommendations.",
    tech: "Python, TensorFlow, Kafka",
    details:
      "Our intelligent layer. The Oracle service consumes real-time data streams to provide predictive analytics, from forecasting event attendance and calculating success probability to offering personalized networking suggestions and content recommendations.",
  },
];

// Data for the "Features in Focus" section
const features = [
  {
    icon: <Zap className="h-10 w-10 text-brand-yellow" />,
    title: "Real-Time Interactivity",
    description:
      "A live chat feed demo showing the power of our WebSocket architecture.",
    visual: (
      <Image
        src="/work/feature-real-time-chat.gif"
        alt="Real-Time Chat Animation"
        width={500}
        height={281}
        unoptimized
        className="w-full h-40 object-cover rounded-md mt-4"
      />
    ),
  },
  {
    icon: <Bot className="h-10 w-10 text-brand-yellow" />,
    title: "AI Matchmaking",
    description:
      "Visualizing how our Oracle AI service connects attendees based on shared interests.",
    visual: (
      <Image
        src="/work/feature-ai-matchmaking.gif"
        alt="AI Matchmaking Animation"
        width={500}
        height={281}
        unoptimized
        className="w-full h-40 object-cover rounded-md mt-4"
      />
    ),
  },
  {
    icon: <GitBranch className="h-10 w-10 text-brand-yellow" />,
    title: "Event Sourcing",
    description:
      "A timeline showcasing the robust, auditable history of an event's lifecycle.",
    visual: (
      <Image
        src="/work/feature-event-sourcing.gif"
        alt="Event Sourcing Animation"
        width={500}
        height={281}
        unoptimized
        className="w-full h-40 object-cover rounded-md mt-4"
      />
    ),
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
            <Dialog key={service.name}>
              <DialogTrigger asChild>
                <Motion
                  type="button"
                  className="bg-brand-primary border border-brand-secondary rounded-lg p-6 text-left group transition-all duration-300 hover:border-brand-yellow hover:-translate-y-2 focus:outline-none focus:ring-2 focus:ring-brand-yellow h-full"
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
                  <p className="mt-4 text-gray-400 text-sm h-20">
                    {service.description}
                  </p>
                  <p className="mt-4 text-xs font-mono tracking-wider text-cyan-400">
                    {service.tech}
                  </p>
                </Motion>
              </DialogTrigger>
              <DialogContent className="bg-card text-foreground">
                <DialogHeader>
                  <DialogTitle className="flex items-center gap-3 text-2xl">
                    {service.icon} {service.name}
                  </DialogTitle>
                  {/* ✅ FIX: Use asChild and a div to prevent nested <p> tags */}
                  <DialogDescription asChild>
                    <div className="text-left pt-4">
                      <p className="text-base text-muted-foreground">
                        {service.details}
                      </p>
                      <p className="mt-4 text-sm font-mono text-brand-yellow">
                        {service.tech}
                      </p>
                    </div>
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>

      {/* Features in Focus section */}
      <div className="mt-24">
        <h3 className="text-2xl font-semibold text-white">Features in Focus</h3>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Motion
              key={feature.title}
              className="bg-brand-primary border border-brand-secondary rounded-lg p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="flex items-center gap-4">
                {feature.icon}
                <h4 className="text-xl font-bold text-gray-100">
                  {feature.title}
                </h4>
              </div>
              <p className="mt-2 text-gray-400 text-sm h-20">
                {feature.description}
              </p>
              {feature.visual}
            </Motion>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GlobalConnectShowcase;
