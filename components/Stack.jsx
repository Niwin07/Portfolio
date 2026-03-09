"use client";

import { motion } from "framer-motion";
import { Terminal } from "lucide-react";

const techStack = [
  {
    name: "React",
    level: 90,
    color: "#61dafb",
    category: "Frontend",
    desc: "SPA, hooks, context, estado global",
  },
  {
    name: "Node.js",
    level: 88,
    color: "#8bc34a",
    category: "Backend",
    desc: "APIs REST, middleware, async",
  },
  {
    name: "Express",
    level: 86,
    color: "#a0a0a0",
    category: "Backend",
    desc: "Routing, auth, validaciones",
  },
  {
    name: "MySQL",
    level: 82,
    color: "#3b82f6",
    category: "Database",
    desc: "Diseño relacional, queries complejas",
  },
  {
    name: "Next.js",
    level: 78,
    color: "#e2e8f0",
    category: "Frontend",
    desc: "SSR, SSG, rutas dinámicas",
  },
  {
    name: "Java",
    level: 65,
    color: "#f97316",
    category: "Extra",
    desc: "POO, algoritmos",
  },
  {
    name: "Python",
    level: 60,
    color: "#fcd34d",
    category: "Extra",
    desc: "Scripts, automatización",
  },
  {
    name: "PHP",
    level: 55,
    color: "#8b92d0",
    category: "Extra",
    desc: "Backend legacy, MVC",
  },
];

const categoryColors = {
  Frontend: "text-sky-400 bg-sky-400/10 border-sky-400/20",
  Backend: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
  Database: "text-blue-400 bg-blue-400/10 border-blue-400/20",
  Extra: "text-white/40 bg-white/5 border-white/10",
};

export default function Stack() {
  return (
    <section
      id="stack"
      className="py-24 px-4 sm:px-8 max-w-7xl mx-auto w-full relative z-10"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-3 mb-10"
      >
        <Terminal className="w-4 h-4 text-[#8b5cf6]" />
        <span className="text-xs font-mono text-white/30 tracking-[0.2em] uppercase">
          tecnologias.stack
        </span>
        <div className="flex-1 h-px bg-white/5" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-3">
          Arsenal <span className="text-[#c084fc]">Técnico</span>
        </h2>
        <p className="text-white/50 text-base">
          Herramientas dominadas a lo largo de proyectos reales.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {techStack.map((tech, i) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06, duration: 0.5 }}
            whileHover={{ y: -3 }}
            className="group relative p-5 rounded-2xl bg-[#111111] border border-white/5 hover:border-white/12 transition-all duration-300 overflow-hidden"
          >
            {/* Bar background */}
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${tech.level}%` }}
              viewport={{ once: true }}
              transition={{
                delay: i * 0.06 + 0.4,
                duration: 0.8,
                ease: "easeOut",
              }}
              className="absolute bottom-0 left-0 h-[2px]"
              style={{ background: tech.color, opacity: 0.6 }}
            />

            <div className="flex items-start justify-between mb-4">
              <div
                className="w-3 h-3 rounded-sm mt-0.5"
                style={{ background: tech.color, opacity: 0.8 }}
              />
              <span
                className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${categoryColors[tech.category]}`}
              >
                {tech.category}
              </span>
            </div>

            <p className="text-base font-bold text-white mb-1">{tech.name}</p>
            <p className="text-xs text-white/35 leading-relaxed">{tech.desc}</p>

            <div className="flex items-center justify-between mt-4">
              <div className="flex-1 h-0.5 bg-white/5 rounded-full overflow-hidden mr-3">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${tech.level}%` }}
                  viewport={{ once: true }}
                  transition={{
                    delay: i * 0.06 + 0.4,
                    duration: 0.8,
                    ease: "easeOut",
                  }}
                  className="h-full rounded-full"
                  style={{ background: tech.color, opacity: 0.7 }}
                />
              </div>
              <span className="text-[10px] font-mono text-white/25">
                {tech.level}%
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
