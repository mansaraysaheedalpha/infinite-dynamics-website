// src/components/layout/Header.tsx

"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/Button";
import MobileNav from "./MobileNav";
import { services } from "@/lib/data";
import { cn } from "@/lib/utils";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/insights", label: "Insights" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
];

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      {/* This main div is now a 3-item flex container on desktop */}
      <div className="container mx-auto flex h-20 items-center justify-between">
        {/* === ITEM 1: LOGO === */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo_5.png"
            alt="Infinite Dynamics Logo"
            width={160}
            height={65}
          />
        </Link>

        {/* === ITEM 2: DESKTOP NAVIGATION (now separate) === */}
        <div className="hidden md:flex">
          <NavigationMenu>
            <NavigationMenuList className="gap-2">
              {" "}
              {/* Added gap for spacing between nav items */}
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <NavigationMenuItem key={link.href}>
                    <NavigationMenuLink asChild>
                      <Link
                        href={link.href}
                        className={cn(
                          "border-b-2 pb-1 text-base font-semibold text-brand-secondary transition-all duration-300 hover:border-brand-yellow hover:text-brand-secondary/80",
                          "bg-transparent px-3 py-2",
                          isActive
                            ? "border-brand-yellow"
                            : "border-transparent"
                        )}
                      >
                        {link.label}
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                );
              })}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="border-b-2 border-transparent pb-1 text-base font-semibold text-brand-secondary">
                  Solutions
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {services.map((service) => (
                      <li key={service.title}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={`/solutions/${service.slug}`}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">
                              {service.title}
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              {service.description}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* === ITEM 3: GET STARTED BUTTON (now separate) === */}
        <div className="hidden md:flex">
          <Button asChild size="lg" className="w-full">
            <Link href="/get-started">Get Started</Link>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <MobileNav links={navLinks} />
        </div>
      </div>
    </header>
  );
};

export default Header;
