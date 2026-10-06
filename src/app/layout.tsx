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
  title: "Lakshay Rathore | Full Stack Developer",
  description:
    "Portfolio of Lakshay Rathore — Full stack developer specializing in scalable web apps, backend architecture, and AI systems.",
  keywords: ["developer", "portfolio", "full stack", "react", "next.js", "fastapi", "postgresql", "python"],
  openGraph: {
    title: "Lakshay Rathore | Full Stack Developer",
    description: "Full stack developer specializing in scalable web apps, backend architecture, and AI systems.",
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
      className={`${geistSans.variable} ${geistMono.variable} dark scroll-smooth`}
    >
      <body className="bg-[#09090b] text-[#fafafa] font-sans antialiased min-h-screen selection:bg-zinc-800 selection:text-white">
        {children}
      </body>
    </html>
  );
}