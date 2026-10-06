"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, ExternalLink, Code2 } from "lucide-react";
import { GithubIcon } from "./Icons";

interface ProjectType {
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  github?: string;
  live?: string;
  highlights: string[];
}

const projects: ProjectType[] = [
  {
    title: "MultiOCR",
    subtitle: "Multi-Model OCR Ensemble & Lexical Correction",
    description:
      "A concurrent OCR ensemble architecture coupled with a Sanskrit spelling correction engine built over a 360K+ word lexicon, semantic vector search, and an error-learning module.",
    tags: ["FastAPI", "OCR", "Ollama", "PostgreSQL", "SentenceTransformers", "Python"],
    github: "https://github.com/LakshayRathore18/MultiOCR",
    highlights: [
      "Concurrent multi-engine OCR voting",
      "360K+ Sanskrit dictionary lookup",
      "Semantic vector indexing with embeddings",
    ],
  },
  {
    title: "FocusTube",
    subtitle: "AI-Powered Course Generation from Playlists",
    description:
      "Full-stack learning platform transforming YouTube playlists into structured study courses with automated AI transcript summarization, interactive quiz modules, and persistent progress tracking.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Gemini API", "Tailwind CSS"],
    live: "https://focus-tube-eight.vercel.app/dashboard",
    highlights: [
      "AI-generated modular summaries & keynotes",
      "Dynamic interactive quiz generators",
      "Non-destructive playlist sync engine",
    ],
  },
  {
    title: "Everything Watcher",
    subtitle: "Self-Healing Intelligent Web Target Monitor",
    description:
      "Autonomous web monitoring engine that tracks user-defined page targets via natural language prompts with cached CSS selector fallbacks, 9 condition triggers, and Google OAuth.",
    tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Firecrawl", "Gemini API"],
    live: "https://everything-watcher.vercel.app",
    highlights: [
      "Natural language target extraction",
      "Self-healing DOM change detection",
      "Multi-channel trigger & alert pipelines",
    ],
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="projects" className="relative py-20 sm:py-28 border-t border-white/[0.06]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-14 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-zinc-400 uppercase tracking-widest mb-2">
            <span className="w-2 h-2 rounded-xs bg-zinc-600" />
            Selected Work
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Featured engineering projects
          </h2>
        </div>

        {/* Projects List */}
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 25 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card-base rounded-2xl p-6 flex flex-col justify-between group"
            >
              <div>
                {/* Header & Links */}
                <div className="flex items-start justify-between gap-2 mb-4">
                  <div className="p-2.5 rounded-xl bg-zinc-900 border border-white/[0.08] text-zinc-300">
                    <Code2 className="w-4 h-4" />
                  </div>

                  <div className="flex items-center gap-1.5">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-zinc-900/80 hover:bg-zinc-800 border border-white/[0.06] text-zinc-400 hover:text-white transition-colors"
                        title="View Source Code"
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-zinc-900/80 hover:bg-zinc-800 border border-white/[0.06] text-zinc-400 hover:text-white transition-colors"
                        title="Open Live App"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-lg font-bold text-white group-hover:text-zinc-200 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs font-mono text-zinc-400 mt-1 mb-3">
                  {project.subtitle}
                </p>

                {/* Description */}
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* Key feature bullet points */}
                <ul className="space-y-1.5 mb-6 text-xs text-zinc-400">
                  {project.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-zinc-600" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tags */}
              <div className="pt-4 border-t border-white/[0.06] flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded-md bg-zinc-900/80 border border-white/[0.05] text-[11px] font-mono text-zinc-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}