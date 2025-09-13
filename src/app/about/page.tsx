// src/app/about/page.tsx

"use client";

import PageLayout from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/Button";
import { Motion } from "@/components/layout/Motion";
import Link from "next/link";
import Image from "next/image";
import { FaLightbulb, FaMountain, FaBolt } from "react-icons/fa";

const teamMembers = [
  {
    name: "Saheed Alpha Mansaray",
    role: "Co-Founder & CEO",
    location: "Freetown, Sierra Leone",
    bio: "The visionary architect behind our technology. A self-taught engineer with an insatiable curiosity, Saheed leads our product development with a hands-on approach, turning complex challenges into elegant, high-performance software.",
    image: "/saheed-mansaray-ceo.jpg",
  },
  {
    name: "Alpha Saheed Mansaray",
    role: "Co-Founder & Chairman",
    location: "United States",
    bio: "The strategic mind guiding our global vision. With decades of experience in leadership and strategy, Alpha provides the foundational wisdom and direction that steers our company towards sustainable growth and international impact.",
    image: "/alpha-mansaray-chairman.jpg",
  },
];

const values = [
  {
    icon: <FaLightbulb className="h-8 w-8 text-brand-yellow" />,
    title: "Insatiable Curiosity",
    description:
      "We are driven by the question what if? We constantly explore new technologies and challenge assumptions to find better solutions.", // ✅ Fixed single quotes
  },
  {
    icon: <FaMountain className="h-8 w-8 text-brand-yellow" />,
    title: "Unyielding Perseverance",
    description:
      "We believe the most rewarding challenges are the hardest. We face complexity with grit and determination until excellence is achieved.",
  },
  {
    icon: <FaBolt className="h-8 w-8 text-brand-yellow" />,
    title: "Passionate Hard Work",
    description:
      "Our passion for technology is matched only by our dedication to our craft. We are builders at heart, committed to delivering exceptional results.",
  },
];

const AboutPage = () => {
  return (
    <PageLayout
      title="Our Story"
      subtitle="The minds, mission, and motivation behind the code."
    >
      {/* === Section 1: The Mission & Origin === */}
      <Motion
        type="section"
        className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Bridging Continents with Code
          </h2>
          <p className="text-lg text-muted-foreground">
            Infinite Dynamics was born from a simple yet powerful idea: to unite
            experience and ambition across the globe. Founded by a father-son
            duo, we are a testament to the power of global collaboration, fusing
            strategic wisdom with vibrant, self-taught ingenuity to build
            tomorrow&apos;s digital landscape. {/* ✅ Fixed apostrophe */}
          </p>
        </div>
        <div className="relative w-full h-80 rounded-lg overflow-hidden shadow-lg">
          <video
            className="absolute inset-0 w-full h-full object-cover"
            src="/global-connection.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
      </Motion>

      {/* === Section 2: Our Core Formula === */}
      <Motion
        type="section"
        className="mt-20 md:mt-24 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold text-foreground">
          Engineers + AI = Flagship Products
        </h2>
        <p className="mt-2 text-lg text-muted-foreground max-w-3xl mx-auto">
          This is our core formula. We believe that the future is built by
          augmenting human ingenuity with the power of artificial intelligence.
          Our engineers are the architects, and AI is their most powerful tool.
        </p>
        <div className="relative w-full h-96 mt-8 rounded-lg overflow-hidden shadow-lg">
          <video
            className="absolute inset-0 w-full h-full object-cover"
            src="/engineers-ai.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
      </Motion>

      {/* === Section 3: The Transitional Subheading (Re-instated) === */}
      <Motion
        type="section"
        className="mt-20 md:mt-24 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-foreground max-w-4xl mx-auto">
          The Minds Behind{" "}
          <span className="text-brand-yellow">the Mission</span>
        </h2>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          Our leadership team combines visionary product engineering with
          decades of strategic experience.
        </p>
      </Motion>

      {/* === Section 4: Meet The Leadership === */}
      <Motion
        type="section"
        className="mt-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="bg-card border rounded-lg p-6 flex flex-col items-center text-center md:flex-row md:items-start md:text-left gap-6"
            >
              <Image
                src={member.image}
                alt={member.name}
                width={150}
                height={150}
                className="rounded-full flex-shrink-0 w-36 h-36 md:w-[150px] md:h-[150px]"
              />
              <div>
                <h3 className="text-2xl font-bold text-card-foreground">
                  {member.name}
                </h3>
                <p className="text-brand-yellow font-semibold">
                  {member.role} - {member.location}
                </p>
                <p className="mt-2 text-muted-foreground">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </Motion>

      {/* === Section 5: Our Guiding Principles === */}
      <Motion
        type="section"
        className="mt-20 md:mt-24"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        <div className="text-center">
          <h2 className="text-3xl font-bold text-foreground">Our Core DNA</h2>
          <p className="mt-2 text-lg text-muted-foreground">
            The values that drive every decision we make.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value) => (
            <div
              key={value.title}
              className="bg-card p-8 rounded-lg border text-center flex flex-col items-center"
            >
              <div className="flex justify-center mb-4">{value.icon}</div>
              <h3 className="text-xl font-semibold text-card-foreground">
                {value.title}
              </h3>
              <p className="mt-2 text-muted-foreground">{value.description}</p>
            </div>
          ))}
        </div>
      </Motion>

      {/* === Section 6: Join Us CTA === */}
      <Motion
        type="section"
        className="mt-20 md:mt-24 bg-card border rounded-lg p-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold text-foreground">Join Our Journey</h2>
        <p className="mt-2 text-lg text-muted-foreground">
          We are always looking for passionate, curious minds to join our
          mission. If you are ready to build the future, we want to hear from
          you.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
          <Button asChild size="lg" className="w-full sm:w-auto">
            <Link href="/careers">View Open Roles</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="w-full sm:w-auto"
          >
            <Link href="/contact">Start a Project</Link>
          </Button>
        </div>
      </Motion>
    </PageLayout>
  );
};

export default AboutPage;
