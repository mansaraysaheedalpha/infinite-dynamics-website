// src/components/sections/ServicesSection.tsx

"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { services } from "@/lib/data"; // <-- Import data from central file
import { Button } from "../ui/Button"; // Make sure you have your Button component

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
            const ServiceIcon = service.icon; // Get the icon component
            const isReversed = index % 2 === 1; // Check if the layout should be reversed

            return (
              <motion.div
                key={service.title}
                className="grid items-center gap-12 lg:grid-cols-2 lg:gap-24"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                {/* Image Column */}
                <div
                  className={`relative h-96 w-full rounded-xl shadow-2xl ${
                    isReversed ? "lg:order-2" : ""
                  }`}
                >
                  <Image
                    src={service.image}
                    alt={`${service.title} visual representation`}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-xl"
                  />
                </div>

                {/* Text Content Column */}
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
