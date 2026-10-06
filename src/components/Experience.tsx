"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar, CheckCircle2 } from "lucide-react";

const experiences = [
  {
    role: "IT Intern",
    organization: "CCRAS (Central Council for Research in Ayurvedic Sciences)",
    affiliation: "Ministry of Ayush, Govt. of India",
    period: "Dec 2025 – Jan 2026",
    location: "New Delhi, India",
    description:
      "Engineered full-scale enterprise management tooling and AI document analysis solutions.",
    keyAchievements: [
      "Engineered METER, a web platform leveraging FastAPI and PostgreSQL for orchestrating institutional meetings, trainings, and event records.",
      "Designed and deployed 30+ REST APIs supporting 3 user roles, dual-stage approval workflows, and real-time audit logging.",
      "Initiated MultiOCR, an OCR ensemble system targeting historical Sanskrit and Ayurveda literature with custom spell correction.",
    ],
    technologies: ["FastAPI", "PostgreSQL", "Python", "REST APIs", "OCR", "Pydantic"],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="experience" className="relative py-20 sm:py-28 border-t border-white/[0.06]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-14 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-zinc-400 uppercase tracking-widest mb-2">
            <span className="w-2 h-2 rounded-xs bg-zinc-600" />
            Experience
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Professional work & internships
          </h2>
        </div>

        {/* Experience Timeline / Cards */}
        <div ref={ref} className="space-y-6">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.organization}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="card-base rounded-2xl p-6 sm:p-8"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-white/[0.06]">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-2 py-0.5 rounded-md bg-zinc-900 border border-white/[0.08] text-xs font-mono text-zinc-300">
                      {exp.role}
                    </span>
                    <span className="text-xs font-mono text-zinc-500">{exp.location}</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white">
                    {exp.organization}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 mt-0.5 font-mono">
                    {exp.affiliation}
                  </p>
                </div>

                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 border border-white/[0.06] text-xs font-mono text-zinc-300 self-start sm:self-auto">
                  <Calendar className="w-3.5 h-3.5 text-zinc-400" />
                  <span>{exp.period}</span>
                </div>
              </div>

              {/* Achievements */}
              <div className="py-6 space-y-3">
                {exp.keyAchievements.map((achievement, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-zinc-400 shrink-0 mt-0.5" />
                    <p className="text-sm text-zinc-300 leading-relaxed">
                      {achievement}
                    </p>
                  </div>
                ))}
              </div>

              {/* Tech stack */}
              <div className="pt-4 border-t border-white/[0.06] flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-md bg-zinc-900 border border-white/[0.05] text-xs font-mono text-zinc-400"
                  >
                    {tech}
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