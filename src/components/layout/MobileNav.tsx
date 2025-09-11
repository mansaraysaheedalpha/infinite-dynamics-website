// src/components/layout/MobileNav.tsx

"use client";

import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
  SheetTitle, // 1. Re-import SheetTitle
  SheetDescription, // 1. Re-import SheetDescription
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "../ui/Button";
import { services } from "@/lib/data";

interface MobileNavProps {
  links: { href: string; label: string }[];
}

const MobileNav = ({ links }: MobileNavProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const handleNavigate = (href: string) => {
    router.push(href);
    setIsOpen(false);
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Open Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="flex flex-col">
        <SheetHeader className="flex-row items-center justify-between">
          <Link
            href="/"
            className="flex items-center"
            onClick={() => handleNavigate("/")}
          >
            <Image
              src="/logo_5.png"
              alt="Infinite Dynamics Logo"
              width={140}
              height={57}
            />
          </Link>

          {/* 2. Add a visually hidden title and description for accessibility */}
          <div className="sr-only">
            <SheetTitle>Menu</SheetTitle>
            <SheetDescription>
              Main navigation menu for the website.
            </SheetDescription>
          </div>
        </SheetHeader>

        <nav className="mt-8 flex flex-1 flex-col justify-between">
          <div className="space-y-4">
            {links.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavigate(link.href)}
                className={`w-full text-left text-xl font-medium transition-colors hover:text-brand-yellow ${
                  pathname === link.href
                    ? "text-brand-yellow"
                    : "text-foreground"
                }`}
              >
                {link.label}
              </button>
            ))}

            <div className="sm:hidden">
              <Accordion type="single" collapsible>
                <AccordionItem value="solutions">
                  <AccordionTrigger className="text-xl font-medium">
                    Solutions
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="flex flex-col space-y-3 pl-4">
                      {services.map((service) => (
                        <button
                          key={service.slug}
                          onClick={() =>
                            handleNavigate(`/solutions/${service.slug}`)
                          }
                          className="w-full text-left text-lg text-muted-foreground transition-colors hover:text-brand-yellow"
                        >
                          {service.title}
                        </button>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
