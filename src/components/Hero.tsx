"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const roles = [
  "Full Stack Developer",
  "AI/ML Enthusiast",
  "Problem Solver",
  "Tech Innovator",
];

function FloatingShape({
  className,
  delay = 0,
  duration = 20,
}: {
  className: string;
  delay?: number;
  duration?: number;
}) {
  return (
    <motion.div
      className={`absolute rounded-full opacity-20 ${className}`}
      animate={{
        x: [0, 100, -50, 80, 0],
        y: [0, -80, 50, -30, 0],
        scale: [1, 1.2, 0.9, 1.1, 1],
        rotate: [0, 90, 180, 270, 360],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "linear",
      }}
    />
  );
}

function ParticleField() {
  const [particles, setParticles] = useState<Array<{ x: number; y: number; size: number; delay: number }>>([]);

  useEffect(() => {
    const arr = Array.from({ length: 30 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      delay: Math.random() * 5,
    }));
    setParticles(arr);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-primary/30"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
          }}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 3,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && text === currentRole) {
      timeout = setTimeout(() => setDeleting(true), 2000);
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
        deleting ? 50 : 100
      );
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, roleIndex]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-background" />

      {/* Floating shapes */}
      <FloatingShape className="w-72 h-72 bg-primary blur-3xl top-10 left-10" delay={0} />
      <FloatingShape className="w-96 h-96 bg-accent blur-3xl bottom-20 right-10" delay={5} duration={25} />
      <FloatingShape className="w-60 h-60 bg-purple-500 blur-3xl top-1/2 right-1/3" delay={10} duration={30} />

      {/* Particles */}
      <ParticleField />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Greeting */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-4"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-sm text-zinc-300 border border-primary/20">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Available for opportunities
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl sm:text-6xl md:text-8xl font-bold mb-6 leading-tight"
        >
          Hi, I'm{" "}
          <span className="text-gradient inline-block">Lakshay Rathore</span>
        </motion.h1>

        {/* Typing effect */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="h-12 mb-8"
        >
          <span className="text-xl sm:text-2xl md:text-3xl text-zinc-300">
            {text}
            <span className="inline-block w-0.5 h-7 sm:h-8 md:h-9 bg-primary ml-1 animate-[blink_1s_step-end_infinite]" />
          </span>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Full stack developer passionate about building scalable web applications,
multi-step AI pipelines, API orchestration, clean REST APIs, and
high-performance backend systems.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            href="#projects"
            className="group relative px-8 py-3.5 rounded-full font-medium text-sm overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="absolute inset-0 animated-gradient" />
            <span className="relative z-10 text-white">View My Work</span>
          </motion.a>

          <motion.a
            href="https://github.com/LakshayRathore18"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-8 py-3.5 rounded-full font-medium text-sm border border-zinc-600 text-zinc-300 hover:border-primary/50 hover:text-white transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            GitHub Profile
          </motion.a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-xs text-zinc-500">Scroll</span>
            <div className="w-5 h-8 rounded-full border border-zinc-600 flex justify-center pt-1.5">
              <motion.div
                className="w-1 h-2 rounded-full bg-primary"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}