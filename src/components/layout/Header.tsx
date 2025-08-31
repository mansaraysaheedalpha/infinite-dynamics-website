// src/components/layout/Header.tsx

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/solutions", label: "Solutions" },
  { href: "/about", label: "About Us" },
  { href: "/insights", label: "Insights" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
];

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.jpg" // Assumes your logo is in public/logo.png
            alt="Infinite Dynamics Logo"
            width={48}
            height={48}
            className="h-10 w-auto" // Control size via className
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center space-x-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gray-600 transition-colors hover:text-brand-yellow"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden items-center md:flex">
          <Button>GET STARTED</Button>
        </div>

        {/* Mobile Menu Button (we'll add functionality later) */}
        <div className="md:hidden">
          {/* We'll add a hamburger menu icon here in the next step */}
        </div>
      </div>
    </header>
  );
};

export default Header;
