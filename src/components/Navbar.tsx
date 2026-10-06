"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = navItems.map((item) => item.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 160) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 py-3 sm:py-4 px-4 sm:px-6 transition-all duration-300"
    >
      <div
        className={cn(
          "max-w-5xl mx-auto px-4 sm:px-6 rounded-2xl transition-all duration-300 flex items-center justify-between h-14",
          scrolled
            ? "bg-zinc-950/80 backdrop-blur-md border border-white/[0.08] shadow-lg shadow-black/40"
            : "bg-transparent border border-transparent"
        )}
      >
        {/* Monogram Logo */}
        <a
          href="#home"
          className="flex items-center gap-2 text-sm font-semibold tracking-tight text-zinc-200 hover:text-white transition-colors"
        >
          <span className="w-7 h-7 rounded-lg bg-zinc-900 border border-white/[0.12] flex items-center justify-center font-mono text-xs font-bold text-zinc-100">
            LR
          </span>
          <span className="font-mono text-xs text-zinc-400 hidden sm:inline-block">lakshay.dev</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1 bg-zinc-900/60 p-1 rounded-full border border-white/[0.06]">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.slice(1);
            return (
              <a
                key={item.href}
                href={item.href}
                className={cn(
                  "relative px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-200",
                  isActive
                    ? "text-white"
                    : "text-zinc-400 hover:text-zinc-200 hover:bg-white/[0.03]"
                )}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeNavTab"
                    className="absolute inset-0 bg-zinc-800 rounded-full border border-white/[0.1] shadow-xs"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </a>
            );
          })}
        </nav>

        {/* Action Link */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="#contact"
            className="px-3.5 py-1.5 rounded-full text-xs font-medium bg-zinc-100 text-zinc-900 hover:bg-white transition-all shadow-xs"
          >
            Get in touch
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden w-8 h-8 rounded-lg bg-zinc-900/80 border border-white/[0.08] flex items-center justify-center text-zinc-300"
          aria-label="Toggle menu"
        >
          <div className="flex flex-col gap-1 w-4">
            <span
              className={cn(
                "h-0.5 w-full bg-zinc-300 transition-all duration-300",
                mobileOpen && "rotate-45 translate-y-1.5"
              )}
            />
            <span
              className={cn(
                "h-0.5 w-full bg-zinc-300 transition-all duration-300",
                mobileOpen && "opacity-0"
              )}
            />
            <span
              className={cn(
                "h-0.5 w-full bg-zinc-300 transition-all duration-300",
                mobileOpen && "-rotate-45 -translate-y-1.5"
              )}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden max-w-5xl mx-auto mt-2 p-3 bg-zinc-950/95 backdrop-blur-xl rounded-2xl border border-white/[0.1] shadow-xl"
          >
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "px-4 py-2.5 rounded-xl text-sm font-medium transition-colors",
                    activeSection === item.href.slice(1)
                      ? "bg-zinc-800 text-white"
                      : "text-zinc-400 hover:text-white hover:bg-white/[0.04]"
                  )}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="mt-2 text-center py-2.5 rounded-xl text-sm font-medium bg-zinc-100 text-zinc-900"
              >
                Get in touch
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}