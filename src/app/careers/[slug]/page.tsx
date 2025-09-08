// src/app/careers/[slug]/page.tsx

import { sanityClient } from "@/lib/sanity";
import { Metadata } from "next";
import JobDetailClientView from "@/components/careers/JobDetailClientView";
import { SanityJob  } from "@/types";

const jobQuery = `*[_type == "job" && slug.current == $slug][0]`;

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const job = await sanityClient.fetch<SanityJob>(jobQuery, {
    slug: params.slug,
  });
  return {
    title: `${job.title} | Careers at Infinite Dynamics`,
    description: `Apply for the ${job.title} position at Infinite Dynamics.`,
  };
}

type Props = {
  params: { slug: string };
}

const JobDetailPage = async ({ params }: Props ) => {
  const job = await sanityClient.fetch<SanityJob>(jobQuery, {
    slug: params.slug,
  });

  // Server component fetches data and passes it to the client component for rendering
  return <JobDetailClientView job={job} />;
};

export default JobDetailPage;
