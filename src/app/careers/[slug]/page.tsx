// src/app/careers/[slug]/page.tsx

import { sanityClient } from "@/lib/sanity";
import { Metadata, ResolvingMetadata } from "next"; // 1. Import ResolvingMetadata
import JobDetailClientView from "@/components/careers/JobDetailClientView";
import { SanityJob } from "@/types";

const jobQuery = `*[_type == "job" && slug.current == $slug][0]`;

// 2. Define a shared props type
type Props = {
  params: { slug: string };
};

// 3. Use the correct, full signature for generateMetadata
export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
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

// 4. Use the same shared Props type for the page component
export default async function JobDetailPage({ params }: Props) {
  const job = await sanityClient.fetch<SanityJob>(jobQuery, {
    slug: params.slug,
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
