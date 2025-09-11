// src/lib/work-data.ts

import { CaseStudy } from "@/types";

export const caseStudies: CaseStudy[] = [
  {
    id: "saloneamazon",
    title: "SaloneAmazon E-commerce Platform",
    subtitle: "Full-Stack Development & Enterprise Architecture",
    imageUrl: "/work/saloneamazon-hero.png",
    technologies: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "MongoDB",
      "Redux",
      "Tailwind CSS",
      "Docker",
    ],
    services: [
      "API Design",
      "Backend Engineering",
      "Frontend Development",
      "System Architecture",
    ],
    // Using your detailed analysis for new, richer content fields
    overview:
      "A full-stack e-commerce application built with a modern technology stack and a well-organized, modular monolith architecture to ensure maintainability and scalability.",
    architectureDetails:
      "The backend is a Node.js application using Express.js and Mongoose for MongoDB, with JWT for secure authentication. The architecture is guided by ADRs, emphasizing a clear separation of concerns, security, and a scalable foundation for future growth. The system exposes a versioned RESTful API defined by an OpenAPI specification.",
    designDetails:
      "The frontend is a dynamic single-page application (SPA) built with React and Vite. We utilized Redux Toolkit for robust state management and Tailwind CSS for rapid, utility-first UI development, creating an intuitive and responsive interface for administrators.",
    gallery: [
      // We can add more screenshots here later
      "/work/saloneamazon-gallery-1.png",
      "/work/saloneamazon-gallery-2.png",
    ],
    repoUrl: "https://github.com/mansaraysaheedalpha/my-ecommerce-app",
  },
  {
    id: "ecotech",
    title: "ECOTECH SOLUTIONS Marketing Site",
    subtitle: "Frontend Development & Responsive Design",
    imageUrl: "/work/ecotech-hero.png",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    services: ["UI/UX Design", "Frontend Development", "Responsive Design"],
    overview:
      "A promotional single-page website designed to be modern, professional, and user-friendly, showcasing the company's services, values, and client testimonials to attract potential clients.",
    designDetails:
      "We leveraged the Bootstrap framework to build a responsive, mobile-first design that looks great on all devices. To enhance the user experience, we implemented custom JavaScript for smooth scrolling and subtle animations, making the site feel interactive and polished. The result is a comprehensive and professional-looking website that serves as an excellent portfolio piece.",
    // This project doesn't have a complex backend, so we omit the 'architectureDetails'
    gallery: ["/work/ecotech-gallery-1.png", "/work/ecotech-gallery-2.png"],
    repoUrl: "https://github.com/mansaraysaheedalpha/First-Biggest-Project",
  },
];
