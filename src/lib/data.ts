// src/lib/data.ts

import {
  FaCode,
  FaCloud,
  FaPaintBrush,
  FaChalkboardTeacher,
} from "react-icons/fa";

export const services = [
  {
    slug: "web-development",
    icon: FaCode, // Note: We pass the component itself, not JSX
    title: "Web & Mobile Development",
    description:
      "Crafting bespoke, high-performance applications for web and mobile platforms that drive user engagement and business growth.",
    image: "/service-web-dev.png",
  },
  {
    slug: "ui-ux-design",
    icon: FaPaintBrush,
    title: "UI/UX & Graphic Design",
    description:
      "Designing intuitive, beautiful interfaces and compelling brand identities that captivate your audience from the first click.",
    image: "/service-design.png",
  },
  {
    slug: "cloud-devops",
    icon: FaCloud,
    title: "Cloud & DevOps",
    description:
      "Architecting scalable, resilient cloud infrastructure and automating workflows to accelerate your development lifecycle.",
    image: "/service-devops.png",
  },
  {
    slug: "corporate-training",
    icon: FaChalkboardTeacher,
    title: "Corporate Training",
    description:
      "Upskilling your team with cutting-edge tech knowledge through bespoke training programs designed for the modern workplace.",
    image: "/service-training.png",
  },
];
