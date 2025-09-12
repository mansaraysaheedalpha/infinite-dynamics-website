// src/components/get-started/SocialProof.tsx

"use client";

import { Motion } from "../layout/Motion";
import CountUp from "react-countup";

const stats = [
  { value: 98, label: "Client Satisfaction", suffix: "%" },
  { value: 50, label: "Projects Launched", suffix: "+" },
  { value: 100, label: "Code Quality", suffix: "%" },
  { value: 24, label: "Hour Support", suffix: "/7" },
];

// We'll use placeholders for logos. You can replace these with your actual client logos.
const clientLogos = [
  { name: "Placeholder A", src: "/placeholder-logo-1.svg" },
  { name: "Placeholder B", src: "/placeholder-logo-2.svg" },
  { name: "Placeholder C", src: "/placeholder-logo-3.svg" },
  { name: "Placeholder D", src: "/placeholder-logo-4.svg" },
];

const SocialProof = () => {
  return (
    <Motion
      type="section"
      className="py-24 bg-brand-secondary"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto text-center text-white">
        {/* Animated Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-4xl md:text-5xl font-bold text-brand-yellow">
                <CountUp
                  end={stat.value}
                  duration={3}
                  enableScrollSpy
                  scrollSpyOnce
                />
                {stat.suffix}
              </p>
              <p className="mt-2 text-sm md:text-base text-gray-300">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Client Logos */}
        <div className="mt-20">
          <h3 className="text-xl font-semibold tracking-wide text-gray-200">
            Trusted by Innovators in Sierra Leone and Beyond
          </h3>
          <div className="mt-8 flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
            {clientLogos.map((logo) => (
              <p
                key={logo.name}
                className="text-gray-400 font-medium text-lg italic"
              >
                {/* For now, we use text. When you have logos, replace <p> with <Image> */}
                {/* <Image 
                  src={logo.src}
                  alt={logo.name}
                  width={140}
                  height={60}
                  className="filter grayscale hover:grayscale-0 transition-all duration-300"
                />
                */}
                {logo.name}
              </p>
            ))}
          </div>
        </div>
      </div>
    </Motion>
  );
};

export default SocialProof;
