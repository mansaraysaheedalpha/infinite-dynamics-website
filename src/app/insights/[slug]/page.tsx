// src/app/insights/[slug]/page.tsx

import { sanityClient, urlFor } from "@/lib/sanity";
import Image from "next/image";
import PortableTextComponent from "@/components/PortableTextComponent";
import { Metadata } from "next";
import { SanityPost } from "@/types";

// Note: Added subtitle to the GROQ query
const postQuery = `*[_type == "post" && slug.current == $slug][0] {
    title,
    subtitle, 
    mainImage,
    body,
    publishedAt,
    "author": author->{name, image},
    "slug": slug.current
}`;

// This function tells Next.js which pages to build
export async function generateStaticParams() {
  // Use a more specific type instead of any[]
  const posts = await sanityClient.fetch<{ slug: string }[]>(
    `*[_type == "post"]{"slug": slug.current}`
  );
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// This function generates metadata for each page
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await sanityClient.fetch<SanityPost>(postQuery, {
    slug: slug,
  });
  return {
    title: `${post.title} | Infinite Insights`,
    description: post.subtitle || "A deep-dive article from Infinite Dynamics.", // Fallback description
  };
}

const ArticlePage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const post = await sanityClient.fetch<SanityPost>(postQuery, {
    slug: slug,
  });

  return (
    <div>
      {/* Page Header */}
      <section className="relative h-[50vh] w-full overflow-hidden">
        <Image
          src={urlFor(post.mainImage).width(1920).url()}
          alt={post.title}
          fill
          className="object-cover z-0"
          priority // Prioritize loading the hero image
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-10" />
        <div className="relative z-20 container mx-auto flex h-full flex-col items-center justify-center text-center text-white">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight drop-shadow-md">
            {post.title}
          </h1>
          <div className="mt-6 flex items-center gap-4">
            <Image
              src={urlFor(post.author.image).width(96).url()}
              alt={post.author.name}
              width={48}
              height={48}
              className="rounded-full border-2 border-white"
            />
            <div>
              <p className="font-semibold">{post.author.name}</p>
              <p className="text-sm text-gray-300">
                {new Date(post.publishedAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <main className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <article className="prose prose-invert lg:prose-xl max-w-3xl mx-auto">
          {post.body ? (
            <PortableTextComponent value={post.body} />
          ) : (
            <p>Content is not available.</p>
          )}
        </article>
      </main>
    </div>
  );
};

export default ArticlePage;
