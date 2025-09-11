// src/app/layout.tsx

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ClientOnly from "@/components/layout/ClientOnly"; // Import ClientOnly

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Infinite Dynamics",
  description: "Building Tomorrow's Digital Landscape",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientOnly>
          <Header />
        </ClientOnly>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
