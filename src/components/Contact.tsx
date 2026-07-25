"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/LakshayRathore18",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/lakshayrathore18/",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: "LeetCode",
    url: "https://leetcode.com/u/lakshay1879/",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.824l4.319-4.38c.467-.467 1.125-.645 1.837-.645s1.357.195 1.823.662l2.697 2.606c.514.515.528 1.365.013 1.88-.514.515-1.365.529-1.88.013L13.5 12.93l-1.523 1.523 2.71 2.71c.515.514.529 1.365.013 1.88-.514.515-1.365.529-1.88.013zM12.174 1.597c-5.674 0-10.273 4.599-10.273 10.273s4.599 10.273 10.273 10.273c2.54 0 4.864-.92 6.666-2.452.515-.463.555-1.25.092-1.765-.463-.515-1.25-.555-1.765-.092-1.43 1.28-3.26 1.984-5.303 1.984-4.46 0-8.078-3.618-8.078-8.078s3.618-8.078 8.078-8.078c2.043 0 3.873.704 5.303 1.984.515.463 1.302.423 1.765-.092.463-.515.423-1.302-.092-1.765-1.802-1.532-4.126-2.452-6.666-2.452z"/>
      </svg>
    ),
  },
  {
    name: "Email",
    url: "mailto:lakshayrathore1879@gmail.com",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32">
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
            Contact
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3">
            Let's{" "}
            <span className="text-gradient">Connect</span>
          </h2>
          <div className="w-20 h-1 animated-gradient rounded-full mx-auto mt-6" />
          <p className="text-zinc-400 mt-4 max-w-xl mx-auto">
            Have a project in mind or just want to chat? Drop me a message!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-zinc-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-zinc-700 text-white placeholder-zinc-500 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-300 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-zinc-700 text-white placeholder-zinc-500 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-300 mb-2">
                  Message
                </label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-zinc-700 text-white placeholder-zinc-500 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              <motion.button
                type="submit"
                className="relative w-full px-8 py-3.5 rounded-xl font-medium text-sm overflow-hidden group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="absolute inset-0 animated-gradient" />
                <span className="relative z-10 text-white">
                  {submitted ? "✓ Message Sent!" : "Send Message"}
                </span>
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info & Social */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col justify-between"
          >
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  Get in Touch
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-zinc-400">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-zinc-500">Email</p>
                      <p className="text-white">lakshayrathore1879@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-zinc-400">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-zinc-500">Location</p>
                      <p className="text-white">New Delhi, India</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  Follow Me
                </h3>
                <div className="flex gap-3">
                  {socialLinks.map((link) => (
                    <motion.a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-xl glass flex items-center justify-center text-zinc-400 hover:text-primary hover:border-primary/30 transition-all"
                      whileHover={{ scale: 1.1, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                      title={link.name}
                    >
                      {link.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>

            {/* Decorative element */}
            <div className="hidden lg:block mt-12">
              <div className="glass rounded-2xl p-6 border border-primary/10">
                <p className="text-zinc-400 text-sm leading-relaxed">
                  &ldquo;Let's build something amazing together.
                  I'm always open to new opportunities and
                  collaborations.&rdquo;
                </p>
                <div className="flex items-center gap-3 mt-4">
                  <div className="w-8 h-8 rounded-full animated-gradient" />
                  <div>
                    <p className="text-white text-sm font-medium">Lakshay Rathore</p>
                    <p className="text-zinc-500 text-xs">Full Stack Developer</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}