// src/app/layout.tsx

"use client"; // <-- Add this to make the layout a client component

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ParallaxProvider } from "react-scroll-parallax"; // <-- Import the provider

const inter = Inter({ subsets: ["latin"] });

// Note: Metadata export is not supported in client components,
// so we remove it or manage it differently (e.g., in page components)
// export const metadata: Metadata = { ... };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ParallaxProvider>
          {" "}
          {/* <-- Wrap everything in the provider */}
          <Header />
          <main>{children}</main>
          <Footer />
        </ParallaxProvider>
      </body>
    </html>
  );
}
