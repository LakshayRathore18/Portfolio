"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowUpRight, Terminal, Sparkles } from "lucide-react";
import { GithubIcon } from "./Icons";

const roles = [
  "Full Stack Developer",
  "AI & Systems Builder",
  "Backend & API Architect",
  "Problem Solver",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && text === currentRole) {
      timeout = setTimeout(() => setDeleting(true), 2400);
    } else if (deleting && text === "") {
      setDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    } else {
      timeout = setTimeout(
        () => {
          setText(
            deleting
              ? currentRole.slice(0, text.length - 1)
              : currentRole.slice(0, text.length + 1)
          );
        },
        deleting ? 40 : 80
      );
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, roleIndex]);

  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 overflow-hidden bg-grid-pattern"
    >
      {/* Subtle radial spotlight overlay */}
      <div className="absolute inset-0 bg-radial-gradient pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#09090b]/60 to-[#09090b] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-white/[0.08] text-xs text-zinc-300 mb-8 shadow-xs"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="font-mono text-[11px] text-zinc-400">Available for Opportunities</span>
        </motion.div>

        {/* Hero Name & Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white mb-6"
        >
          Lakshay Rathore
        </motion.h1>

        {/* Role with Dynamic Typing */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="h-9 sm:h-11 flex items-center justify-center mb-6"
        >
          <div className="inline-flex items-center gap-2 font-mono text-lg sm:text-2xl text-zinc-300">
            <Terminal className="w-5 h-5 text-zinc-500" />
            <span>{text}</span>
            <span className="inline-block w-2 h-5 sm:h-6 bg-zinc-400 animate-pulse" />
          </div>
        </motion.div>

        {/* Brief Intro */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed mb-10"
        >
          Software engineer & full stack developer crafting high-performance backend systems,
          scalable web applications, multi-step AI pipelines, and clean REST APIs.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-3.5"
        >
          <a
            href="#projects"
            className="group px-6 py-3 rounded-xl font-medium text-sm bg-zinc-100 text-zinc-950 hover:bg-white transition-all duration-200 flex items-center gap-2 shadow-xs hover:shadow-md"
          >
            <span>Explore Projects</span>
            <ArrowUpRight className="w-4 h-4 text-zinc-700 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>

          <a
            href="https://github.com/LakshayRathore18"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl font-medium text-sm bg-zinc-900/80 border border-white/[0.08] text-zinc-300 hover:text-white hover:bg-zinc-800/80 hover:border-white/[0.16] transition-all duration-200 flex items-center gap-2"
          >
            <GithubIcon className="w-4 h-4" />
            <span>GitHub</span>
          </a>

          <a
            href="#contact"
            className="px-6 py-3 rounded-xl font-medium text-sm bg-transparent border border-zinc-800 text-zinc-400 hover:text-zinc-200 hover:border-zinc-700 transition-all duration-200"
          >
            Contact Me
          </a>
        </motion.div>

        {/* Quick Highlights Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 pt-8 border-t border-white/[0.06] flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs text-zinc-500 font-mono"
        >
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-600" />
            <span>FastAPI & Python</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-600" />
            <span>Next.js & TypeScript</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-600" />
            <span>PostgreSQL & Prisma</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-600" />
            <span>AI Orchestration</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}