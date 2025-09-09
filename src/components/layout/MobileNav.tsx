// src/components/layout/MobileNav.tsx

"use client";

import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetDescription, // Added for accessibility
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "../ui/Button";
import { services } from "@/lib/data"; // Ensure this import is correct

// Props interface including the main nav links
interface MobileNavProps {
  links: { href: string; label: string }[];
}

const MobileNav = ({ links }: MobileNavProps) => {
  const [isOpen, setIsOpen] = useState(false); // 1. Control the sheet's open state
  const router = useRouter();
  const pathname = usePathname();

  // 2. Create a function to handle navigation and closing the sheet
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
        <SheetHeader>
          <SheetTitle className="text-left text-2xl font-bold text-brand-secondary">
            Navigation
          </SheetTitle>
          <SheetDescription className="hidden">
            Mobile navigation menu
          </SheetDescription>
        </SheetHeader>

        {/* Navigation Links */}
        <nav className="mt-8 flex flex-1 flex-col justify-between">
          <div className="space-y-4">
            {/* 3. Update main links to use our handleNavigate function */}
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

            {/* Solutions Accordion */}
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

          {/* CTA Button at the bottom */}
          <div className="mt-8 border-t pt-6">
            {/* 4. Update the "Get Started" button as well */}
            <Button
              onClick={() => handleNavigate("/get-started")}
              size="lg"
              className="w-full"
            >
              Get Started
            </Button>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
