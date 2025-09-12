// src/app/layout.tsx

"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ParallaxProvider } from "react-scroll-parallax";
import PageTransitionProvider from "@/components/layout/PageTransitionProvider";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ParallaxProvider>
          <Header />
          <main>
            <PageTransitionProvider>{children}</PageTransitionProvider>{" "}
            {/* <-- This closing tag is now correct */}
          </main>
          <Footer />
        </ParallaxProvider>
        <Toaster richColors />
      </body>
    </html>
  );
}
