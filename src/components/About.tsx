"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

function AnimatedSection({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <AnimatedSection>
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-medium tracking-wider uppercase">
              About Me
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3">
              Turning Ideas Into{" "}
              <span className="text-gradient">Digital Reality</span>
            </h2>
            <div className="w-20 h-1 animated-gradient rounded-full mx-auto mt-6" />
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Image */}
          <AnimatedSection>
            <div className="relative">
              <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden neon-border">
                <img
                  src="/profilepic.jpeg"
                  alt="Lakshay Rathore"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h4 className="text-white text-xl font-bold">Lakshay Rathore</h4>
                  <p className="text-zinc-300 text-sm">Full Stack Developer</p>
                </div>
              </div>

              {/* Floating badge */}
              <motion.div
                className="absolute -bottom-4 -right-4 glass rounded-xl p-4 border border-primary/20"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  <div>
                    <p className="text-white text-sm font-medium">Available</p>
                    <p className="text-zinc-400 text-xs">For Work</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </AnimatedSection>

          {/* Right - Content */}
          <AnimatedSection>
            <div className="space-y-6">
              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                Developer & Problem Solver
              </h3>
              <p className="text-zinc-400 leading-relaxed">
                I'm Lakshay Rathore, a full stack developer at Delhi Technological University.
                I love building performant web applications, engineering clean REST APIs,
                and optimizing backend workflows.
              </p>
              <p className="text-zinc-400 leading-relaxed">
                I recently interned at CCRAS (Central Council for Research in Ayurvedic Sciences)
                where I engineered METER — a FastAPI and PostgreSQL-based platform for meeting management.
                I also initiated MultiOCR, a multi-engine OCR system for Sanskrit documents.
              </p>
              <p className="text-zinc-400 leading-relaxed">
                When I'm not coding, I'm solving DSA problems, building AI-powered tools
                like FocusTube — an LLM-powered YouTube playlist study platform, or exploring new technologies.
              </p>

              {/* Skills summary */}
              <div className="flex flex-wrap gap-3 pt-4">
                {["Next.js", "React", "TypeScript", "Node.js", "FastAPI", "PostgreSQL", "Python", "C++"].map(
                  (skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-xs rounded-full glass border border-primary/10 text-zinc-300"
                    >
                      {skill}
                    </span>
                  )
                )}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}