// src/components/layout/MobileNav.tsx

import Link from "next/link";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "../ui/Button";

// Define the component's props interface
interface MobileNavProps {
  links: { href: string; label: string }[];
}

const MobileNav = ({ links }: MobileNavProps) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right">
        <div className="container mx-auto flex h-full flex-col items-center justify-center space-y-8 px-4">
          <Link href="/">
            <span className="text-2xl font-bold">Infinite Dynamics</span>
          </Link>
          <nav className="flex flex-col items-center space-y-6">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xl font-medium text-foreground/80 transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
