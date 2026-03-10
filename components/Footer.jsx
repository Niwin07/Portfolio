"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer
      id="contact"
      className="relative w-full mt-12 px-4 sm:px-8 max-w-7xl mx-auto"
    >
      {/* CTA Banner */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative rounded-3xl bg-[#111] border border-white/8 overflow-hidden p-10 sm:p-14 mb-0 text-center"
      >
        {/* Glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#8b5cf6]/10 via-transparent to-[#6d28d9]/5 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[200px] bg-[#8b5cf6] opacity-[0.08] blur-[80px] rounded-full pointer-events-none" />

        <div className="relative z-10">
          <p className="text-xs font-mono text-white/25 tracking-[0.2em] mb-4 uppercase">
            Open to Work
          </p>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
            ¿Construimos algo <span className="text-[#c084fc]">juntos?</span>
          </h2>
          <p className="text-white/45 text-base mb-8 max-w-md mx-auto">
            Disponible para proyectos freelance, colaboraciones y posiciones
            full-time.
          </p>
          <a
            href="mailto:nehuenmesiasrios@gmail.com"
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#8b5cf6] to-[#7c3aed] text-white px-4 sm:px-8 py-3.5 rounded-full text-xs sm:text-sm font-semibold hover:opacity-90 transition-opacity shadow-[0_0_30px_rgba(139,92,246,0.4)] w-full sm:w-auto"
          >
            <Mail className="w-4 h-4 shrink-0" />
            <span className="truncate">nehuenmesiasrios@gmail.com</span>
          </a>
        </div>
      </motion.div>

      {/* Bottom bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-8 border-t border-white/5 mt-10 text-white/30 text-sm">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 bg-gradient-to-br from-[#8b5cf6] to-[#d946ef] rounded-md" />
          <span className="font-medium text-white/40">Nehuen Mesias</span>
          <span className="hidden sm:inline">·</span>
          <span className="hidden sm:inline text-xs font-mono">© 2026</span>
        </div>

        <div className="flex items-center gap-5">
          <a
            href="https://github.com/Niwin07"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <Github className="w-3.5 h-3.5" /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/henry-nehuen-mesias-rios-41a756297/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <Linkedin className="w-3.5 h-3.5" /> LinkedIn
          </a>
          <button
            onClick={scrollTop}
            className="flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <ArrowUp className="w-3.5 h-3.5" /> Inicio
          </button>
        </div>
      </div>
    </footer>
  );
}
