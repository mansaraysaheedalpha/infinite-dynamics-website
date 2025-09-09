// src/app/careers/[slug]/page.tsx

import { sanityClient } from "@/lib/sanity";
import { Metadata } from "next";
import JobDetailClientView from "@/components/careers/JobDetailClientView";
import { SanityJob } from "@/types";

const jobQuery = `*[_type == "job" && slug.current == $slug][0]`;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
   const job = await sanityClient.fetch<SanityJob>(jobQuery, {
     slug: slug,
   });
  return {
    title: `${job?.title || "Career"} | Infinite Dynamics`,
    description: `Apply for the ${
      job?.title || "position"
    } at Infinite Dynamics.`,
  };
}

export default async function JobDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const job = await sanityClient.fetch<SanityJob>(jobQuery, {
    slug: slug,
  });

  if (!job) {
    return (
      <div className="container mx-auto py-20 text-center">
        <h1 className="text-2xl font-bold">Job Not Found</h1>
        <p>The position you are looking for may have been filled or moved.</p>
      </div>
    );
  }

  return <JobDetailClientView job={job} />;
}
