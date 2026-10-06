"use client";

import { motion, useInView } from "framer-motion";
import { useState, useRef } from "react";
import { Mail, MapPin, Send, Check, ArrowUpRight } from "lucide-react";

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/LakshayRathore18",
    handle: "@LakshayRathore18",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/lakshayrathore18/",
    handle: "in/lakshayrathore18",
  },
  {
    name: "LeetCode",
    url: "https://leetcode.com/u/lazytourist/",
    handle: "u/lazytourist",
  },
  {
    name: "Email",
    url: "mailto:lakshayrathore1879@gmail.com",
    handle: "lakshayrathore1879@gmail.com",
  },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 3000);
  };

  return (
    <section id="contact" className="relative py-20 sm:py-28 border-t border-white/[0.06]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-14 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-zinc-400 uppercase tracking-widest mb-2">
            <span className="w-2 h-2 rounded-xs bg-zinc-600" />
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Let's discuss new projects & engineering roles
          </h2>
        </div>

        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 card-base rounded-2xl p-6 sm:p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2">
                  Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-2.5 rounded-xl bg-zinc-900 border border-white/[0.08] text-white text-sm placeholder-zinc-500 focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 transition-colors"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2">
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-2.5 rounded-xl bg-zinc-900 border border-white/[0.08] text-white text-sm placeholder-zinc-500 focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2">
                  Message
                </label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-4 py-2.5 rounded-xl bg-zinc-900 border border-white/[0.08] text-white text-sm placeholder-zinc-500 focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 transition-colors resize-none"
                  placeholder="Tell me about what you are building or hiring for..."
                />
              </div>

              <button
                type="submit"
                disabled={submitted}
                className="w-full mt-2 py-3 px-6 rounded-xl font-medium text-sm bg-zinc-100 text-zinc-950 hover:bg-white disabled:bg-zinc-800 disabled:text-zinc-400 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs"
              >
                {submitted ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span>Message Sent Successfully</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </motion.div>

          {/* Contact Details & Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-5 space-y-4"
          >
            <div className="card-base rounded-2xl p-6 space-y-4">
              <h3 className="text-base font-semibold text-white">Direct Contacts</h3>
              
              <div className="space-y-3">
                <a
                  href="mailto:lakshayrathore1879@gmail.com"
                  className="flex items-center gap-3 p-3 rounded-xl bg-zinc-900/60 hover:bg-zinc-900 border border-white/[0.05] hover:border-white/[0.12] transition-all group"
                >
                  <div className="p-2 rounded-lg bg-zinc-800 text-zinc-300">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-zinc-500 font-mono">Email</p>
                    <p className="text-xs sm:text-sm text-zinc-200 truncate group-hover:text-white">
                      lakshayrathore1879@gmail.com
                    </p>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-zinc-300" />
                </a>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-zinc-900/60 border border-white/[0.05]">
                  <div className="p-2 rounded-lg bg-zinc-800 text-zinc-300">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs text-zinc-500 font-mono">Location</p>
                    <p className="text-xs sm:text-sm text-zinc-200">New Delhi, India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social profiles */}
            <div className="card-base rounded-2xl p-6">
              <h3 className="text-base font-semibold text-white mb-3">Profiles & Code</h3>
              <div className="grid grid-cols-1 gap-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-zinc-900/60 hover:bg-zinc-900 border border-white/[0.05] hover:border-white/[0.12] text-xs font-mono transition-all group"
                  >
                    <span className="text-zinc-300 group-hover:text-white font-medium">
                      {social.name}
                    </span>
                    <span className="text-zinc-500 group-hover:text-zinc-400 flex items-center gap-1">
                      {social.handle}
                      <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}