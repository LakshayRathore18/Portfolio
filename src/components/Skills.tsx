"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function SkillCard({
  category,
  skills,
  icon,
  index,
}: {
  category: string;
  skills: string[];
  icon: string;
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      whileHover={{ y: -8 }}
      className="glass rounded-2xl p-6 border border-white/5 hover:border-primary/20 transition-all group"
    >
      <div className="text-3xl mb-4">{icon}</div>
      <h3 className="text-lg font-semibold text-white mb-4">{category}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1 text-xs rounded-full bg-white/5 text-zinc-400 group-hover:bg-primary/10 group-hover:text-primary transition-colors"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

const skillCategories = [
  {
    category: "Languages",
    icon: "💻",
    skills: ["C++", "Python", "JavaScript", "TypeScript"],
  },
  {
    category: "Frameworks",
    icon: "⚛️",
    skills: ["React.js", "Next.js", "Node.js", "Express.js", "FastAPI"],
  },
  {
    category: "Databases / Tools",
    icon: "🗄️",
    skills: ["PostgreSQL", "MongoDB", "MySQL", "Prisma"],
  },
  {
    category: "Core CS",
    icon: "🧠",
    skills: ["DSA", "OOP", "OS", "DBMS", "CN"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-32">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase">
            Skills & Expertise
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3">
            Technologies I{" "}
            <span className="text-gradient">Work With</span>
          </h2>
          <div className="w-20 h-1 animated-gradient rounded-full mx-auto mt-6" />
        </motion.div>

        {/* Skill Categories */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {skillCategories.map((cat, i) => (
            <SkillCard key={cat.category} {...cat} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}