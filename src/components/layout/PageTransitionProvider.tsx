// src/components/layout/PageTransitionProvider.tsx

"use client";

import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { Motion } from "./Motion";

const PageTransitionProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <Motion
        key={pathname} // Keying by pathname triggers animation on route change
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        {children}
      </Motion>
    </AnimatePresence>
  );
};

export default PageTransitionProvider;
