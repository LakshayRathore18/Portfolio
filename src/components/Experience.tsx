"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    title: "IT Intern",
    company: "CCRAS (Central Council for Research in Ayurvedic Sciences)",
    period: "Dec 2025 - Jan 2026",
    description:
      "Engineered METER, a FastAPI and PostgreSQL-based web platform for managing meetings, trainings, and events with role-based access, approval workflows, and centralized record management. Implemented 30+ REST APIs supporting 3 user roles, dual-stage approvals, real-time notifications, and video transcription workflows. Initiated MultiOCR, a multi-engine OCR system for Sanskrit and Ayurveda-domain documents.",
    tags: ["FastAPI", "PostgreSQL", "REST APIs", "OCR", "Python"],
  },
];

function TimelineCard({
  experience,
  index,
}: {
  experience: (typeof experiences)[0];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div className="relative flex items-start gap-8 group">
      {/* Timeline dot */}
      <div className="hidden md:flex flex-col items-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ duration: 0.4, delay: index * 0.2 }}
          className="w-4 h-4 rounded-full bg-primary ring-4 ring-primary/20 z-10"
        />
        <div className="w-0.5 h-full bg-gradient-to-b from-primary/50 to-transparent absolute top-4" />
      </div>

      {/* Card */}
      <motion.div
        ref={ref}
        initial={{ opacity: 0, x: -30 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, delay: index * 0.2 }}
        className="flex-1"
      >
        <div className="glass rounded-xl p-6 border border-white/5 hover:border-primary/20 transition-all group-hover:translate-x-1 duration-300">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
            <div>
              <h3 className="text-lg font-semibold text-white">{experience.title}</h3>
              <p className="text-primary text-sm">{experience.company}</p>
            </div>
            <span className="text-xs text-zinc-500 whitespace-nowrap px-3 py-1 rounded-full bg-white/5">
              {experience.period}
            </span>
          </div>
          <p className="text-sm text-zinc-400 leading-relaxed mb-4">
            {experience.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {experience.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 text-xs rounded-full bg-primary/10 text-primary"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase">
            Experience
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3">
            Work{" "}
            <span className="text-gradient">Experience</span>
          </h2>
          <div className="w-20 h-1 animated-gradient rounded-full mx-auto mt-6" />
          <p className="text-zinc-400 mt-4 max-w-xl mx-auto">
            My professional journey building digital products and engineering solutions.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="space-y-8 ml-0 md:ml-8">
          {experiences.map((exp, i) => (
            <TimelineCard key={exp.title} experience={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}