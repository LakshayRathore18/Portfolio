"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <motion.a
            href="#home"
            className="text-xl font-bold"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-gradient">{'<L />'}</span>
          </motion.a>

          {/* Links */}
          <div className="flex items-center gap-6">
            {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm text-zinc-500 hover:text-white transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-sm text-zinc-500">
            &copy; {new Date().getFullYear()} Lakshay. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}