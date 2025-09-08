// src/app/insights/page.tsx

import PageLayout from "@/components/layout/PageLayout";
import { sanityClient } from "@/lib/sanity";
import InsightsClientPage from "@/components/insights/InsightClientPage";
import SubscriptionCTA from "@/components/sections/SubscriptionCTA";
import { SanityPost } from "@/types";   
// This is the GROQ query to fetch our posts from Sanity
const postsQuery = `*[_type == "post"] | order(publishedAt desc) {
  title,
  "slug": slug.current,
  "category": category,
  "mainImage": mainImage,
  "publishedAt": publishedAt,
  "author": author->{name, "image": image}
}`;

// This is our Server Component for fetching data
const InsightsPage = async () => {
  const articles = await sanityClient.fetch<SanityPost[]>(postsQuery);
  const featuredPost = articles[0];

  return (
    <PageLayout
      title="Infinite Insights"
      subtitle="The architecture, design, and technology behind our products."
    >
      {/* We render the client component and pass the data down as props */}
      <InsightsClientPage articles={articles} featuredPost={featuredPost} />
      <SubscriptionCTA />
    </PageLayout>
  );
};

export default InsightsPage;
