// src/app/layout.tsx

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer"; // <-- Import the Footer

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
        <Header />
        <main>{children}</main>{" "}
        {/* It's good practice to wrap children in a main tag */}
        <Footer /> {/* <-- Add the Footer here */}
      </body>
    </html>
  );
}
