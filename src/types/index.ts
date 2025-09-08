// src/types/index.ts

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
  slug: SanitySlug;
  author: SanityAuthor;
  mainImage: SanityImage;
  category: string;
  publishedAt: string;
  body: any[]; // Portable Text is complex, `any` is acceptable here for now
}

export interface SanityPost {
  _id: string;
  title: string;
  subtitle?: string; // <-- ADD THIS LINE
  slug: SanitySlug;
  author: SanityAuthor;
  mainImage: SanityImage;
  category: string;
  publishedAt: string;
  body: any[];
}
