"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface ProjectType {
  title: string;
  description: string;
  tags: string[];
  image: string;
  color: string;
  github?: string;
  live?: string;
}

const projects: ProjectType[] = [
  {
    title: "MultiOCR",
    description:
      "Concurrent multi-model OCR ensemble with Sanskrit spelling correction engine over a 360K+ word dictionary, semantic vector search, and error-learning module.",
    tags: ["FastAPI", "OCR", "Ollama", "PostgreSQL", "SentenceTransformers"],
    image: "🔍",
    color: "from-purple-500 to-indigo-500",
    github: "https://github.com/LakshayRathore18/MultiOCR",
  },
  {
    title: "FocusTube",
    description:
      "Full-stack platform to convert YouTube playlists into structured courses with AI-generated summaries, quizzes, progress tracking, and a non-destructive playlist sync engine.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Gemini API"],
    image: "🎯",
    color: "from-blue-500 to-cyan-500",
    live: "https://focus-tube-eight.vercel.app/dashboard",
  },
  {
    title: "Universal Watcher",
    description:
      "A self-healing web monitoring platform tracking user-defined targets via natural-language prompts. Features cached CSS selectors, 9 trigger types, and Google OAuth security.",
    tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Firecrawl", "Gemini API"],
    image: "👁️",
    color: "from-emerald-500 to-teal-500",
    github: "https://github.com/LakshayRathore18/universal-watcher",
    live: "https://universal-watcher.vercel.app",
  },
];

function ProjectCard({
  project,
  index,
}: {
  project: ProjectType;
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative"
    >
      <div className="glass rounded-2xl overflow-hidden border border-white/5 hover:border-primary/20 transition-all duration-500 h-full">
        {/* Image area */}
        <div className="relative h-48 overflow-hidden">
          <div
            className={cn(
              "absolute inset-0 bg-gradient-to-br opacity-60 transition-transform duration-700",
              project.color,
              isHovered && "scale-110"
            )}
          />
          <div className="relative z-10 flex items-center justify-center h-full">
            <motion.span
              className="text-6xl"
              animate={isHovered ? { scale: 1.2, rotate: 10 } : { scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              {project.image}
            </motion.span>
          </div>

          {/* Hover overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
            className="absolute inset-0 bg-black/60 flex flex-col gap-3 items-center justify-center z-20"
          >
            {project.live && (
              <motion.a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ y: 20, opacity: 0 }}
                animate={isHovered ? { y: 0, opacity: 1 } : {}}
                transition={{ delay: 0.1 }}
                className="px-6 py-2 rounded-full bg-white text-black text-sm font-medium hover:bg-zinc-200 transition-colors w-32 text-center"
              >
                Live Demo
              </motion.a>
            )}
            {project.github && (
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ y: 20, opacity: 0 }}
                animate={isHovered ? { y: 0, opacity: 1 } : {}}
                transition={{ delay: 0.15 }}
                className="px-6 py-2 rounded-full bg-zinc-800 border border-zinc-700 text-white text-sm font-medium hover:bg-zinc-700 transition-colors w-32 text-center"
              >
                GitHub
              </motion.a>
            )}
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <p className="text-sm text-zinc-400 leading-relaxed mb-4">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 text-xs rounded-full bg-white/5 text-zinc-400"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase">
            My Work
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3">
            Featured{" "}
            <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-20 h-1 animated-gradient rounded-full mx-auto mt-6" />
        </motion.div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}