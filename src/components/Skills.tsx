"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Server, Database, Terminal, Cpu, Layout } from "lucide-react";

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: { name: string; level?: string }[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    icon: <Terminal className="w-4 h-4 text-zinc-400" />,
    skills: [
      { name: "C++" },
      { name: "Python" },
      { name: "TypeScript" },
      { name: "JavaScript" },
      { name: "SQL" },
    ],
  },
  {
    title: "Frontend Development",
    icon: <Layout className="w-4 h-4 text-zinc-400" />,
    skills: [
      { name: "Next.js" },
      { name: "React.js" },
      { name: "Tailwind CSS" },
      { name: "HTML5 / CSS3" },
      { name: "Framer Motion" },
    ],
  },
  {
    title: "Backend & Systems",
    icon: <Server className="w-4 h-4 text-zinc-400" />,
    skills: [
      { name: "FastAPI" },
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "REST APIs" },
      { name: "Microservices" },
    ],
  },
  {
    title: "Databases & ORM",
    icon: <Database className="w-4 h-4 text-zinc-400" />,
    skills: [
      { name: "PostgreSQL" },
      { name: "MongoDB" },
      { name: "MySQL" },
      { name: "Prisma ORM" },
      { name: "Redis" },
    ],
  },
  {
    title: "AI & Tools",
    icon: <Cpu className="w-4 h-4 text-zinc-400" />,
    skills: [
      { name: "LLM Orchestration" },
      { name: "Gemini API" },
      { name: "Ollama" },
      { name: "SentenceTransformers" },
      { name: "Git / GitHub" },
    ],
  },
  {
    title: "Core Computer Science",
    icon: <Code2 className="w-4 h-4 text-zinc-400" />,
    skills: [
      { name: "Data Structures & Algorithms" },
      { name: "Object Oriented Programming" },
      { name: "Operating Systems" },
      { name: "Database Management (DBMS)" },
      { name: "Computer Networks" },
    ],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="skills" className="relative py-20 sm:py-28 border-t border-white/[0.06]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-14 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-zinc-400 uppercase tracking-widest mb-2">
            <span className="w-2 h-2 rounded-xs bg-zinc-600" />
            Skills & Stack
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Technical proficiencies & toolset
          </h2>
        </div>

        {/* Skills Grid */}
        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {skillCategories.map((category, i) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="card-base rounded-2xl p-5 sm:p-6"
            >
              <div className="flex items-center gap-2.5 mb-4 pb-3 border-b border-white/[0.06]">
                <div className="p-2 rounded-lg bg-zinc-900 border border-white/[0.08]">
                  {category.icon}
                </div>
                <h3 className="text-sm font-semibold text-zinc-200">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="px-2.5 py-1 rounded-lg bg-zinc-900/90 hover:bg-zinc-800 border border-white/[0.05] hover:border-white/[0.12] text-xs font-mono text-zinc-300 transition-colors duration-150"
                  >
                    {skill.name}
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