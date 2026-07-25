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
  title: "Lakshay | Full Stack Developer & Creative Thinker",
  description:
    "Portfolio of Lakshay — a passionate full stack developer crafting beautiful, performant, and accessible web applications.",
  keywords: ["developer", "portfolio", "full stack", "react", "next.js", "web development"],
  openGraph: {
    title: "Lakshay | Full Stack Developer",
    description: "Crafting digital experiences that blend creativity with technology.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}
    >
      <body className="bg-[#0f0f1a] text-[#e2e8f0] font-sans antialiased min-h-screen">
        {children}
      </body>
    </html>
  );
}