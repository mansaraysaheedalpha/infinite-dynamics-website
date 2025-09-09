// src/lib/sanity.ts

import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImage } from "@/types";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;
const apiVersion = "2023-05-03";

export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
});

const builder = imageUrlBuilder(sanityClient);

export function urlFor(source: SanityImage) {
  return builder.image(source);
}
