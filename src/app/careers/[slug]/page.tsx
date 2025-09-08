// src/app/careers/[slug]/page.tsx

import { sanityClient } from "@/lib/sanity";
import { Metadata } from "next";
import JobDetailClientView from "@/components/careers/JobDetailClientView";
import { SanityJob } from "@/types";

const jobQuery = `*[_type == "job" && slug.current == $slug][0]`;

// This props type is for generateMetadata
type MetadataProps = {
  params: { slug: string };
};

export async function generateMetadata({
  params,
}: MetadataProps): Promise<Metadata> {
  const job = await sanityClient.fetch<SanityJob>(jobQuery, {
    slug: params.slug,
  });
  return {
    title: `${job?.title || "Career"} | Infinite Dynamics`,
    description: `Apply for the ${
      job?.title || "position"
    } at Infinite Dynamics.`,
  };
}

// This props type is for the page component itself
type PageProps = {
  params: { slug: string };
};

const JobDetailPage = async ({ params }: PageProps) => {
  const job = await sanityClient.fetch<SanityJob>(jobQuery, {
    slug: params.slug,
  });

  if (!job) {
    // Handle the case where the job is not found
    return <div>Job not found.</div>;
  }

  return <JobDetailClientView job={job} />;
};

export default JobDetailPage;
