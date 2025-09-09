// src/app/careers/page.tsx

import { sanityClient } from "@/lib/sanity";
import JobListings from "@/components/careers/JobListings";
import CultureSection from "@/components/careers/CultureSection";
import { FaLightbulb, FaMountain, FaBolt } from "react-icons/fa";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { Metadata } from "next";
import { SanityJob } from "@/types"; // 1. Import our SanityJob type

// SEO & Metadata
export const metadata: Metadata = {
  title: "Careers | Infinite Dynamics",
  description:
    "Join our mission to build the future of technology. Explore open roles in engineering, design, and more at Infinite Dynamics.",
  openGraph: {
    title: "Careers | Infinite Dynamics",
    description: "Join our mission to build the future of technology.",
    images: [
      { url: "/careers-hero.png" }, // Make sure this image exists in /public
    ],
  },
};

// Use a more specific query to only get the fields we need for the listing
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
  },
  {
    icon: <FaMountain className="h-8 w-8 text-brand-yellow" />,
    title: "Unyielding Perseverance",
  },
  {
    icon: <FaBolt className="h-8 w-8 text-brand-yellow" />,
    title: "Passionate Hard Work",
  },
];

const CareersPage = async () => {
  const jobs = await sanityClient.fetch<SanityJob[]>(jobsQuery);

  return (
    <div>
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
            {/* 3. Fixed unescaped apostrophes */}
            We&apos;re looking for passionate minds to join our mission and
            shape the future of technology, from Freetown to the world.
          </p>
        </div>
      </section>

      <main className="container mx-auto py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        {/* Employer Branding Section */}
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
              </div>
            ))}
          </div>
        </section>

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
