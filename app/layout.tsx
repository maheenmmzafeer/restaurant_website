import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lasania Pakistan | Restaurant Frontend Demo",
  description:
    "A restaurant website frontend demo built with Next.js, React, TypeScript and Tailwind CSS.",
  keywords: [
    "restaurant",
    "frontend demo",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Lasania Pakistan",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[#050B14] text-[#E6F1FF] antialiased">
        {children}
      </body>
    </html>
  );
}
