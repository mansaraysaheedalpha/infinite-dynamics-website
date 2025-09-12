// src/lib/design-data.ts
import { DesignTemplate } from "@/types";

export const designTemplates: DesignTemplate[] = [
  {
    id: "business-01",
    title: "Global Expansion Banner",
    category: "Business",
    imageUrl: "/designs/business-01.jpg", // Matched to your uploaded file
    designDna: {
      typography: ["Poppins Bold", "Lato Regular"],
      colorPalette: ["#0D253F", "#FFC700", "#FFFFFF"],
      principles: [
        "Strong Visual Hierarchy",
        "Dynamic Angled Layouts",
        "Clear Call-to-Action",
      ],
    },
  },
  {
    id: "medical-01",
    title: "Medical Services Brochure",
    category: "Medical",
    imageUrl: "/designs/medical-01.jpg", // Matched to your uploaded file
    designDna: {
      typography: ["Montserrat Semibold", "Roboto Regular"],
      colorPalette: ["#1A2A5E", "#3AC28D", "#FFFFFF"],
      principles: [
        "Trustworthy Color Scheme",
        "Clean & Organized Information",
        "Iconography for Clarity",
      ],
    },
  },
  {
    id: "recruitment-01",
    title: "Hiring Announcement Flyer",
    category: "Recruitment",
    imageUrl: "/designs/recruitment-01.jpg",
    designDna: {
      typography: ["Montserrat Black", "Poppins"],
      colorPalette: ["#0D253F", "#E63946", "#FFFFFF"],
      principles: [
        "Bold Color Blocking",
        "Clear Information Hierarchy",
        "Bulleted Lists for Readability",
      ],
    },
  },
  {
    id: "services-01",
    title: "Computer Repair Services",
    category: "Services",
    imageUrl: "/designs/services-01.jpg",
    designDna: {
      typography: ["Inter Bold", "Roboto"],
      colorPalette: ["#212529", "#457B9D", "#FFFFFF"],
      principles: [
        "Dynamic Wave Graphics",
        "Circular Photo Frames",
        "Clear Service Listing",
      ],
    },
  },
  {
    id: "training-01",
    title: "Hands-On Computer Training",
    category: "Training",
    imageUrl: "/designs/training-01.jpg",
    designDna: {
      typography: ["Arial Black", "Helvetica Neue"],
      colorPalette: ["#1E3A8A", "#FFFFFF", "#F0F0F0"],
      principles: [
        "Photo Collages",
        "Clear Value Proposition",
        "Curved Shape Dividers",
      ],
    },
  },
  {
    id: "events-01",
    title: "Liveband Music Event",
    category: "Events",
    imageUrl: "/designs/entertainment-01.jpg",
    designDna: {
      typography: ["Bebas Neue", "Montserrat"],
      colorPalette: ["#E63946", "#F4A261", "#FFFFFF"],
      principles: [
        "High-Energy Gradient",
        "Focus on Photography",
        "Asymmetrical Layout",
      ],
    },
  },
  {
    id: "services-02",
    title: "Graphic Design Ad",
    category: "Services",
    imageUrl: "/designs/services-04.jpg",
    designDna: {
      typography: ["Montserrat ExtraBold", "Roboto"],
      colorPalette: ["#1D1D1D", "#FFC700", "#A020F0"],
      principles: [
        "3D Illustrations",
        "Geometric Overlays",
        "High Contrast Design",
      ],
    },
  },
  {
    id: "medical-02",
    title: "Medical Clinic Profile",
    category: "Medical",
    imageUrl: "/designs/medical-02.jpg",
    designDna: {
      typography: ["Poppins Semibold", "Lato"],
      colorPalette: ["#1A2A5E", "#FFFFFF", "#F1F1F1"],
      principles: [
        "Trustworthy Imagery",
        "Icon-driven Features",
        "Asymmetrical Photo Layout",
      ],
    },
  },
  {
    id: "education-01",
    title: "School Admission Flyer",
    category: "Education",
    imageUrl: "/designs/services-02.jpg",
    designDna: {
      typography: ["Oswald", "Lato"],
      colorPalette: ["#1E3A8A", "#FFFFFF", "#4A90E2"],
      principles: [
        "Clear Sectional Layouts",
        "Strong Call-to-Action",
        "Use of Checkmarks for Clarity",
      ],
    },
  },
  {
    id: "lifestyle-01",
    title: "Eco-Friendly Living Brochure",
    category: "Lifestyle",
    imageUrl: "/designs/services-03.jpg",
    designDna: {
      typography: ["Playfair Display", "Roboto"],
      colorPalette: ["#A3B18A", "#343A40", "#F8F9FA"],
      principles: [
        "Minimalist Layout",
        "Iconography for Readability",
        "Clean Grid Structure",
      ],
    },
  },
];
