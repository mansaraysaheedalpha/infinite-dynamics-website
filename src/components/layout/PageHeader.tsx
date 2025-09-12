// src/components/layout/PageHeader.tsx

"use client";

import { Motion } from "./Motion";

interface PageHeaderProps {
  title: string;
  subtitle: string;
}

const PageHeader = ({ title, subtitle }: PageHeaderProps) => {
  return (
    <section className="relative h-72 w-full overflow-hidden bg-brand-primary">
      {/* Background Image */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center opacity-20"
        style={{ backgroundImage: "url(/page-header-bg.png)" }}
      />
      {/* Dark Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/30" />

      {/* Content */}
      <div className="relative z-10 container mx-auto flex h-full flex-col items-center justify-center text-center">
        <Motion
          type="h1"
          className="text-4xl md:text-5xl font-extrabold tracking-tight text-white drop-shadow-md"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {title}
        </Motion>
        <Motion
          type="p"
          className="mt-4 max-w-2xl text-lg text-gray-300 drop-shadow-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          {subtitle}
        </Motion>
      </div>
    </section>
  );
};

export default PageHeader;
