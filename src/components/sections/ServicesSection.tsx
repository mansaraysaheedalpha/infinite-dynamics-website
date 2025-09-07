// src/components/sections/ServicesSection.tsx

"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { services } from "@/lib/data";
import { Button } from "../ui/Button";
import { Parallax } from "react-scroll-parallax";

const ServicesSection = () => {
  return (
    <section className="overflow-hidden bg-brand-primary py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-20">
          <h2 className="text-base font-semibold uppercase tracking-wider text-brand-yellow">
            Our Expertise
          </h2>
          <p className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Solutions That Drive Innovation
          </p>
        </div>

        <div className="space-y-20">
          {services.map((service, index) => {
            const ServiceIcon = service.icon;
            const isReversed = index % 2 === 1;

            return (
              <motion.div
                key={service.title}
                className="grid items-center gap-12 lg:grid-cols-2 lg:gap-24"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                {/* === Image Column (Now with Video) === */}
                <div
                  className={`relative h-96 w-full rounded-xl shadow-2xl overflow-hidden ${
                    isReversed ? "lg:order-2" : ""
                  }`}
                >
                  <Parallax speed={-15} className="h-full w-full">
                    {/* The div is replaced with a video tag */}
                    <video
                      className="h-[150%] w-full object-cover"
                      src={service.image.replace(".png", ".mp4")} // Assumes video has same name
                      autoPlay
                      loop
                      muted
                      playsInline
                    />
                  </Parallax>
                </div>

                {/* === Text Content Column === */}
                <div className={`${isReversed ? "lg:order-1" : ""}`}>
                  <div className="flex items-center gap-4">
                    <ServiceIcon className="h-8 w-8 text-brand-yellow" />
                    <h3 className="text-2xl font-bold text-white">
                      {service.title}
                    </h3>
                  </div>
                  <p className="mt-6 text-lg text-gray-300">
                    {service.description}
                  </p>
                  <Button asChild className="mt-8">
                    <Link href={`/solutions/${service.slug}`}>Learn More</Link>
                  </Button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
