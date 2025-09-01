// src/components/layout/MobileNav.tsx

"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "../ui/Button";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { services } from "@/lib/data";
import { cn } from "@/lib/utils";

interface MobileNavProps {
  links: { href: string; label: string }[];
}

const MobileNav = ({ links }: MobileNavProps) => {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="flex h-full flex-col bg-background p-0"
      >
        <SheetHeader className="p-6 pb-4">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo_5.png"
              alt="Infinite Dynamics Logo"
              width={120}
              height={48}
            />
          </Link>
          <VisuallyHidden>
            <SheetTitle>Main Menu</SheetTitle>
            <SheetDescription>
              Navigation links for Infinite Dynamics.
            </SheetDescription>
          </VisuallyHidden>
        </SheetHeader>

        <div className="flex-grow overflow-y-auto px-6">
          <nav className="flex flex-col space-y-2">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <SheetClose asChild key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      "w-full py-3 text-lg font-medium text-foreground/80 transition-colors hover:text-foreground",
                      isActive && "text-brand-yellow font-semibold"
                    )}
                  >
                    {link.label}
                  </Link>
                </SheetClose>
              );
            })}

            {/* Solutions Accordion */}
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="solutions">
                <AccordionTrigger className="py-3 text-lg font-medium text-foreground/80 transition-colors hover:text-foreground hover:no-underline">
                  Solutions
                </AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-col space-y-1 pl-4">
                    {services.map((service) => (
                      <SheetClose asChild key={service.slug}>
                        <Link
                          href={`/solutions/${service.slug}`}
                          className="block py-2 text-base text-muted-foreground transition-colors hover:text-foreground"
                        >
                          {service.title}
                        </Link>
                      </SheetClose>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </nav>
        </div>

        <div className="mt-auto border-t p-6">
          <Button asChild size="lg" className="w-full">
            <Link href="/contact">Get Started</Link>
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
