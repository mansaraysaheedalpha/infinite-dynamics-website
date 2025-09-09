// src/components/layout/Footer.tsx

"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/Button";
import { services } from "@/lib/data";
import { FaLinkedin, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useState, useEffect } from "react";

const Footer = () => {
  const [currentYear, setCurrentYear] = useState<number | null>(null);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const companyLinks = [
    { href: "/about", label: "About Us" },
    { href: "/careers", label: "Careers" },
    { href: "/insights", label: "Insights" },
    { href: "/contact", label: "Contact Us" },
  ];

  return (
    <footer className="bg-brand-primary border-t border-brand-secondary/50 text-white">
      <div className="relative z-10">
        <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 border-b border-brand-secondary/30 pb-12">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Ready to Build the Future?
            </h2>
            <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
              {/* ✅ Corrected apostrophe here */}
              Let&apos;s transform your ideas into reality. Partner with
              Infinite Dynamics to unlock your potential and create something
              extraordinary.
            </p>
            <Button
              asChild
              size="lg"
              className="mt-8 transition-transform hover:scale-105"
            >
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 gap-12 text-center md:text-left md:grid-cols-2 lg:grid-cols-10">
            <div className="lg:col-span-3 flex flex-col items-center md:items-start">
              <Link href="/" className="inline-block mb-4">
                <Image
                  src="/logo_5.png"
                  alt="Infinite Dynamics Logo"
                  width={160}
                  height={65}
                />
              </Link>
              <p className="text-gray-400 text-sm">
                Building tomorrow&apos;s digital landscape, today. We are a
                collective of innovators dedicated to crafting elegant,
                high-performance software solutions.
              </p>
            </div>
            <div className="lg:col-span-2">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-yellow">
                Solutions
              </h3>
              <ul className="mt-4 space-y-3">
                {services.map((service) => (
                  <li key={service.slug}>
                    <Link
                      href={`/solutions/${service.slug}`}
                      className="text-base text-gray-300 transition-colors hover:text-brand-yellow hover:underline"
                    >
                      {service.title.split("&")[0]}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-2">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-yellow">
                Company
              </h3>
              <ul className="mt-4 space-y-3">
                {companyLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-base text-gray-300 transition-colors hover:text-brand-yellow hover:underline"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-3 flex flex-col items-center md:items-start">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-yellow">
                Connect With Us
              </h3>
              <div className="mt-4 space-y-3 text-base text-gray-300">
                <p>Freetown, Sierra Leone</p>
                <p>info@infinite-dynamics.com</p>
                <p>+232 75 254 262</p>
              </div>
              <div className="flex mt-6 space-x-6">
                <a
                  href="#"
                  className="text-gray-400 hover:text-brand-yellow transition-transform hover:scale-110"
                >
                  <span className="sr-only">X/Twitter</span>
                  <FaXTwitter className="h-6 w-6" />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-brand-yellow transition-transform hover:scale-110"
                >
                  <span className="sr-only">LinkedIn</span>
                  <FaLinkedin className="h-6 w-6" />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-brand-yellow transition-transform hover:scale-110"
                >
                  <span className="sr-only">Facebook</span>
                  <FaFacebook className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-brand-secondary/30 py-6 mt-16">
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>
              &copy; {currentYear || new Date().getFullYear()} Infinite
              Dynamics. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                href="/privacy-policy"
                className="hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-of-service"
                className="hover:text-white transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
