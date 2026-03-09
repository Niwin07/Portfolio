"use client";

import { Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="w-full py-12 border-t border-white/5 flex flex-col items-center justify-center gap-6 text-white/40 text-sm mt-12 relative z-10"
    >
      <div className="flex gap-6">
        <a
          href="https://github.com/Niwin07"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-[#c084fc] transition-colors"
        >
          <Github className="w-4 h-4" /> GitHub
        </a>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-[#c084fc] transition-colors"
        >
          <Linkedin className="w-4 h-4" /> LinkedIn
        </a>
      </div>
      <p>© 2026 Nehuen Mesias.</p>
    </footer>
  );
}
