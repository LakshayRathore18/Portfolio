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
      setScrolled(window.scrollY > 50);

      const sections = navItems.map((item) => item.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150) {
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
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "glass shadow-lg backdrop-blur-xl"
          : "bg-transparent"
      )}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <motion.a
            href="#home"
            className="text-xl sm:text-2xl font-bold"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-gradient">{'<LR />'}</span>
          </motion.a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={cn(
                  "relative px-4 py-2 text-sm font-medium rounded-full transition-colors",
                  activeSection === item.href.slice(1)
                    ? "text-white"
                    : "text-zinc-400 hover:text-white"
                )}
              >
                {activeSection === item.href.slice(1) && (
                  <motion.span
                    layoutId="activeNav"
                    className="absolute inset-0 bg-primary/20 rounded-full border border-primary/30"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden relative w-10 h-10 flex items-center justify-center"
            aria-label="Toggle menu"
          >
            <div className="flex flex-col gap-1.5">
              <motion.span
                animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                className="block w-6 h-0.5 bg-zinc-300 rounded-full"
              />
              <motion.span
                animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
                className="block w-6 h-0.5 bg-zinc-300 rounded-full"
              />
              <motion.span
                animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                className="block w-6 h-0.5 bg-zinc-300 rounded-full"
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden glass border-t border-white/5 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item) => {
                const sectionId = item.href.slice(1);
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      setMobileOpen(false);
                      setTimeout(() => {
                        const el = document.getElementById(sectionId);
                        if (el) {
                          const offset = 80;
                          const top = el.getBoundingClientRect().top + window.scrollY - offset;
                          window.scrollTo({ top, behavior: "smooth" });
                        }
                      }, 300);
                    }}
                    className={cn(
                      "w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-colors block",
                      activeSection === sectionId
                        ? "bg-primary/20 text-white border border-primary/30"
                        : "text-zinc-400 hover:bg-white/5 hover:text-white"
                    )}
                  >
                    {item.label}
                  </a>
                );
              })}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}