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

export interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  imageUrl: string;
  technologies: string[];
  services: string[];
  overview: string;
  architectureDetails?: string; // Optional field
  designDetails?: string; // Optional field
  gallery?: string[]; // Optional field
  liveUrl?: string;
  repoUrl?: string;
}

export interface DesignTemplate {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  designDna: {
    typography: string[];
    colorPalette: string[];
    principles: string[];
  };
}
