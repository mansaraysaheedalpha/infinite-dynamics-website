// src/components/layout/MobileNav.tsx

import Link from "next/link";
import { Button } from "@/components/ui/Button";

// Define the shape of our props
interface MobileNavProps {
  links: { href: string; label: string }[];
  onClose: () => void; // A function to close the menu
}

const MobileNav = ({ links, onClose }: MobileNavProps) => {
  return (
    <div className="fixed inset-0 top-16 z-40 bg-white md:hidden">
      <div className="container mx-auto flex h-full flex-col items-center justify-center space-y-8 px-4">
        <nav className="flex flex-col items-center space-y-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={onClose} // Close menu on link click
              className="text-2xl font-medium text-gray-700 transition-colors hover:text-brand-yellow"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Button size="lg" onClick={onClose}>
          GET STARTED
        </Button>
      </div>
    </div>
  );
};

export default MobileNav;
