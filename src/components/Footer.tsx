"use client";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] py-10 bg-zinc-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 rounded-md bg-zinc-900 border border-white/[0.1] flex items-center justify-center font-mono text-[10px] font-bold text-zinc-200">
              LR
            </span>
            <p className="text-xs text-zinc-400">
              Lakshay Rathore &mdash; Software Engineer
            </p>
          </div>

          <div className="flex items-center gap-5 text-xs text-zinc-500 font-mono">
            <a href="#home" className="hover:text-zinc-300 transition-colors">
              Top
            </a>
            <a href="#about" className="hover:text-zinc-300 transition-colors">
              About
            </a>
            <a href="#projects" className="hover:text-zinc-300 transition-colors">
              Projects
            </a>
            <a href="#experience" className="hover:text-zinc-300 transition-colors">
              Experience
            </a>
            <a href="#contact" className="hover:text-zinc-300 transition-colors">
              Contact
            </a>
          </div>

          <p className="text-xs text-zinc-600 font-mono">
            &copy; {new Date().getFullYear()} Lakshay. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}