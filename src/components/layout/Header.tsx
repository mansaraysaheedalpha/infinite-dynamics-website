// src/components/layout/Header.tsx

"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import MobileNav from "./MobileNav";
import { services } from "@/lib/data";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

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
      <div className="container mx-auto flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 mr-4 flex-shrink-0">
          <Image
            src="/logo_5.png"
            alt="Infinite Dynamics Logo"
            width={160}
            height={65}
          />
        </Link>

        {/* === Desktop Navigation === */}
        <div className="hidden flex-1 items-center justify-end gap-x-8 lg:flex">
          <NavigationMenu>
            <NavigationMenuList>
              {navLinks.map((link) => (
                <NavigationMenuItem key={link.href}>
                  {/* ✅ FIX: NavigationMenuLink is now the parent with asChild */}
                  <NavigationMenuLink asChild>
                    <Link
                      href={link.href}
                      className={cn(
                        "group relative inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-base font-semibold text-brand-secondary transition-colors hover:bg-accent hover:text-brand-primary focus:outline-none",
                        "after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-brand-yellow after:transition-transform after:duration-300",
                        pathname === link.href
                          ? "after:scale-x-100" // Active link underline
                          : "after:scale-x-0 group-hover:after:scale-x-100" // Hover underline
                      )}
                    >
                      {link.label}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}

              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-base font-semibold text-brand-secondary">
                  Solutions
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] lg:w-[600px] md:grid-cols-2">
                    {services.map((service) => (
                      <ListItem
                        key={service.title}
                        title={service.title}
                        href={`/solutions/${service.slug}`}
                      >
                        {service.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <Button asChild>
            <Link href="/get-started">Get Started</Link>
          </Button>
        </div>

        {/* === Mobile Navigation === */}
        <div className="flex items-center gap-2 lg:hidden">
          <div className="hidden sm:flex">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[300px] gap-3 p-4">
                      {services.map((service) => (
                        <ListItem
                          key={service.title}
                          title={service.title}
                          href={`/solutions/${service.slug}`}
                        >
                          {service.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          <Button asChild size="sm">
            <Link href="/get-started">Get Started</Link>
          </Button>
          <MobileNav links={navLinks} />
        </div>
      </div>
    </header>
  );
};

const ListItem = ({
  className,
  title,
  children,
  href,
}: {
  className?: string;
  title: string;
  children: React.ReactNode;
  href: string;
}) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
};

export default Header;
