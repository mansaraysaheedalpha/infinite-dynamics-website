// src/app/careers/[slug]/page.tsx

import { sanityClient } from "@/lib/sanity";
import { Metadata } from "next";
import JobDetailClientView from "@/components/careers/JobDetailClientView";
import { SanityJob } from "@/types";

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
    title: `${job?.title || "Career"} | Infinite Dynamics`,
    description: `Apply for the ${
      job?.title || "position"
    } at Infinite Dynamics.`,
  };
}

// THIS IS THE KEY FIX: We define the props type directly (inline)
// instead of using a separate 'type PageProps' alias.
const JobDetailPage = async ({ params }: { params: { slug: string } }) => {
  const job = await sanityClient.fetch<SanityJob>(jobQuery, {
    slug: params.slug,
  });

  if (!job) {
    // A fallback for when a job is not found
    return (
      <div className="container mx-auto py-20 text-center">
        <h1 className="text-2xl font-bold">Job Not Found</h1>
        <p>The position you are looking for may have been filled or moved.</p>
      </div>
    );
  }

  // Server component fetches data and passes it to the client component for rendering
  return <JobDetailClientView job={job} />;
};

export default JobDetailPage;
