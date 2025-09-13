// src/app/careers/page.tsx

import { sanityClient } from "@/lib/sanity";
import JobListings from "@/components/careers/JobListings";
import CultureSection from "@/components/careers/CultureSection";
import { FaLightbulb, FaMountain, FaBolt } from "react-icons/fa";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { Metadata } from "next";
import { SanityJob } from "@/types";
import Image from "next/image"; // Import the Image component

export const metadata: Metadata = {
  title: "Careers | Infinite Dynamics",
  description:
    "Join our mission to build the future of technology. Explore open roles in engineering, design, and more at Infinite Dynamics.",
  openGraph: {
    title: "Careers | Infinite Dynamics",
    description: "Join our mission to build the future of technology.",
    images: [{ url: "/careers-hero.png" }],
  },
};

const jobsQuery = `*[_type == "job"] | order(_createdAt desc) {
  _id,
  title,
  "slug": slug.current,
  department,
  location,
  type
}`;

const values = [
  {
    icon: <FaLightbulb className="h-8 w-8 text-brand-yellow" />,
    title: "Insatiable Curiosity",
    description:
      "We are driven by the question 'what if?' We provide learning stipends and encourage our team to explore new technologies on company time.",
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
      "Our passion for technology is matched by our dedication to our craft. We are builders at heart, committed to delivering exceptional results.",
  },
];

// ✅ NEW: Data for the "Meet the Team" section
const teamMembers = [
  {
    name: "Saheed Alpha Mansaray",
    role: "Co-Founder & CEO",
    image: "/saheed-mansaray-ceo.jpg",
    quote:
      "We're not just building software; we're building opportunities. The most exciting part of my day is collaborating with the team to solve a problem that hasn't been solved before.",
  },
  {
    name: "Alpha Saheed Mansaray",
    role: "Co-Founder & Chairman",
    image: "/alpha-mansaray-chairman.jpg",
    quote:
      "Our vision is global, but our foundation is people. Investing in our team's growth and well-being is the most critical component of our long-term strategy and success.",
  },
];

const CareersPage = async () => {
  const jobs = await sanityClient.fetch<SanityJob[]>(jobsQuery);

  return (
    <div>
      {/* --- Hero Section --- */}
      <section className="relative h-[60vh] w-full overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          src="/careers-hero.mp4"
          autoPlay
          loop
          muted
          playsInline
          aria-hidden="true"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-10" />
        <div className="relative z-20 container mx-auto flex h-full flex-col items-center justify-center text-center text-white">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight drop-shadow-md">
            Build the Future With Us
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-300 drop-shadow-sm">
            We&apos;re looking for passionate minds to join our mission and
            shape the future of technology, from Freetown to the world.
          </p>
        </div>
      </section>

      <main className="container mx-auto py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        {/* --- Why Join Us Section --- */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-foreground">
            Why Join Infinite Dynamics?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            We&apos;re not just building products; we&apos;re building a culture
            of innovation, growth, and global impact. Here, your work matters.
          </p>
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
                <p className="mt-2 text-muted-foreground text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ✅ NEW: Meet the Team Section */}
        <section className="mt-24">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground">
              Meet Some of the Team
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              We are a collective of strategists, engineers, and designers
              passionate about building what&apos;s next.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {teamMembers.map((member) => (
              <div key={member.name} className="bg-card p-6 rounded-lg border">
                <div className="flex items-center gap-6">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={80}
                    height={80}
                    className="rounded-full w-20 h-20 object-cover"
                  />
                  <div>
                    <h3 className="text-xl font-bold text-card-foreground">
                      {member.name}
                    </h3>
                    <p className="text-brand-yellow font-semibold">
                      {member.role}
                    </p>
                  </div>
                </div>
                <blockquote className="mt-6 border-l-4 border-brand-yellow pl-4 text-muted-foreground italic">
                  &quot;{member.quote}&quot;
                </blockquote>
              </div>
            ))}
          </div>
        </section>

        {/* --- Open Positions Section --- */}
        <section id="open-positions" className="mt-24 scroll-mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground">
              Open Positions
            </h2>
            <p className="mt-2 text-lg text-muted-foreground">
              Find the role where you can make an impact.
            </p>
          </div>
          <JobListings jobs={jobs} />
        </section>

        <CultureSection />

        {/* --- CTA Section --- */}
        <section className="mt-24 bg-card border rounded-lg p-12 text-center">
          <h2 className="text-3xl font-bold text-foreground">
            Don&apos;t See a Role For You?
          </h2>
          <p className="mt-2 text-lg text-muted-foreground">
            We&apos;re always looking for exceptional talent. Introduce yourself
            and let&apos;s see what we can build together.
          </p>
          <Button asChild size="lg" className="mt-6">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </section>
      </main>
    </div>
  );
};

export default CareersPage;
