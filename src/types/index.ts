import { PortableTextBlock } from "@portabletext/types";

export interface SanitySlug {
  current: string;
}

export interface SanityImage {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
}

export interface SanityAuthor {
  name: string;
  image: SanityImage;
}

export interface SanityPost {
  _id: string;
  title: string;
  subtitle?: string;
  slug: SanitySlug;
  author: SanityAuthor;
  mainImage: SanityImage;
  category: string;
  publishedAt: string;
  body: PortableTextBlock[];
}

export interface SanityJob {
  _id: string;
  title: string;
  slug: SanitySlug;
  department: string;
  location: string;
  type?: string;
  description: PortableTextBlock[];
}
