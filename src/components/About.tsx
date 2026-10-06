"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Briefcase, Code, MapPin } from "lucide-react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="relative py-20 sm:py-28 border-t border-white/[0.06]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-14 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-zinc-400 uppercase tracking-widest mb-2">
            <span className="w-2 h-2 rounded-xs bg-zinc-600" />
            About Me
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Engineering scalable systems & practical AI products
          </h2>
        </div>

        <div
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
        >
          {/* Left Column: Photo & Quick Meta */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-4"
          >
            <div className="card-base rounded-2xl p-2.5 overflow-hidden group">
              <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-zinc-900">
                <img
                  src="/profilepic.png"
                  alt="Lakshay Rathore"
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-lg bg-zinc-950/70 backdrop-blur-md border border-white/[0.08]">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white text-sm font-semibold">Lakshay Rathore</p>
                      <p className="text-zinc-400 text-xs font-mono">Delhi Technological University</p>
                    </div>
                    <div className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-emerald-950/60 border border-emerald-500/20 text-[11px] font-mono text-emerald-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      Active
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Meta Cards */}
            <div className="grid grid-cols-2 gap-3">
              <div className="card-base p-4 rounded-xl">
                <div className="flex items-center gap-2 text-zinc-400 text-xs mb-1">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Location</span>
                </div>
                <p className="text-zinc-200 text-sm font-medium">New Delhi, India</p>
              </div>

              <div className="card-base p-4 rounded-xl">
                <div className="flex items-center gap-2 text-zinc-400 text-xs mb-1">
                  <GraduationCap className="w-3.5 h-3.5" />
                  <span>Education</span>
                </div>
                <p className="text-zinc-200 text-sm font-medium">DTU, B.Tech</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Bio & Core Experience Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="card-base p-6 sm:p-8 rounded-2xl space-y-4">
              <h3 className="text-xl font-semibold text-white">
                Background & Expertise
              </h3>

              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
                I'm a full stack engineer passionate about backend architecture, API design,
                and applied artificial intelligence. I enjoy building systems that solve tangible problems with high reliability and performance.
              </p>

              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
                During my IT internship at <span className="text-zinc-200 font-medium">CCRAS</span> (Ministry of Ayush), I engineered <span className="text-zinc-200 font-medium">METER</span> — a comprehensive platform handling meeting workflows, 30+ REST APIs, and multi-stage approval systems. I also pioneered <span className="text-zinc-200 font-medium">MultiOCR</span>, an intelligent multi-engine OCR pipeline with specialized Sanskrit lexicon correction.
              </p>

              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
                I continuously explore modern distributed architecture, LLM pipelines, vector databases, and full stack web development with Next.js and FastAPI.
              </p>

              {/* Focus tags */}
              <div className="pt-4 border-t border-white/[0.06]">
                <p className="text-xs font-mono uppercase tracking-wider text-zinc-500 mb-3">Core Stack</p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "TypeScript",
                    "Next.js",
                    "React",
                    "FastAPI",
                    "Python",
                    "PostgreSQL",
                    "Prisma",
                    "C++",
                    "Docker",
                    "Tailwind CSS",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md bg-zinc-900 border border-white/[0.06] text-xs font-mono text-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}