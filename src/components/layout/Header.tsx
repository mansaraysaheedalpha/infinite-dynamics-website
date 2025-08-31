// src/components/layout/Header.tsx
"use client";

import { useState } from "react";
import { usePathname } from "next/navigation"; // Import usePathname hook
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { HiOutlineBars3, HiOutlineXMark } from "react-icons/hi2";
import MobileNav from "./MobileNav";
import { cn } from "@/lib/utils"; // Import our cn utility

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/solutions", label: "Solutions" },
  { href: "/about", label: "About Us" },
  { href: "/insights", label: "Insights" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname(); // Get the current URL path

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur-sm">
        <div className="container mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo - Updated to use the new transparent PNG */}
          <Link href="/" className="flex items-center" onClick={closeMenu}>
            <Image
              src="/logo_5.png" // Use the new logo
              alt="Infinite Dynamics Logo"
              width={150} // Increased width for better clarity
              height={70}
              className="h-auto" // Control size with Tailwind
            />
          </Link>

          {/* Desktop Navigation - Updated styling */}
          <nav className="hidden items-center space-x-8 md:flex">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "border-b-2 pb-1 text-base font-semibold text-brand-secondary transition-all duration-300 hover:border-brand-yellow hover:text-brand-secondary/80",
                    isActive ? "border-brand-yellow" : "border-transparent"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden items-center md:flex">
            <Button>GET STARTED</Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="rounded-md p-2 text-brand-primary transition-colors hover:text-brand-yellow"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <HiOutlineXMark className="h-7 w-7" />
              ) : (
                <HiOutlineBars3 className="h-7 w-7" />
              )}
            </button>
          </div>
        </div>
      </header>

      {isMenuOpen && <MobileNav links={navLinks} onClose={closeMenu} />}
    </>
  );
};

export default Header;
