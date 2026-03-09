"use client";

import { motion } from "framer-motion";
import {
  ExternalLink,
  Layers,
  Coffee,
  GitBranch,
  Terminal,
  ArrowUpRight,
} from "lucide-react";

const projects = [
  {
    id: "01",
    name: "PlotPoint",
    tagline: "Sistema de gestión de alto rendimiento",
    description:
      "Arquitectura escalable con gestión de datos complejos. Diseñado para alto rendimiento y mantenibilidad, con lógica de negocio robusta en el backend.",
    icon: <Layers className="w-5 h-5" />,
    stack: ["React", "Node.js", "MySQL"],
    stackColors: ["#61dafb", "#8bc34a", "#3b82f6"],
    href: "https://github.com/Niwin07/PlotPoint.git",
    featured: true,
  },
  {
    id: "02",
    name: "Café Encuentro",
    tagline: "Plataforma integral de gestión",
    description:
      "Optimización de flujos de trabajo en el backend y conexión impecable con el frontend. Gestión de inventario, pedidos y reportes en tiempo real.",
    icon: <Coffee className="w-5 h-5" />,
    stack: ["Express", "React", "MySQL"],
    stackColors: ["#a0a0a0", "#61dafb", "#3b82f6"],
    href: "https://github.com/Niwin07/Cafe-Encuentro.git",
    featured: false,
  },
  {
    id: "03",
    name: "Difusión La Roca",
    tagline: "Sistema de comunicación centralizada",
    description:
      "Manejo de concurrencia y entrega eficiente de información masiva. Arquitectura orientada a eventos para broadcasting de alta disponibilidad.",
    icon: <GitBranch className="w-5 h-5" />,
    stack: ["Node.js", "React", "Express"],
    stackColors: ["#8bc34a", "#61dafb", "#a0a0a0"],
    href: "https://github.com/Niwin07/Difusion-La-Roca.git",
    featured: false,
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 px-4 sm:px-8 max-w-7xl mx-auto w-full relative z-10"
    >
      {/* Section label */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex items-center gap-3 mb-10"
      >
        <Terminal className="w-4 h-4 text-[#8b5cf6]" />
        <span className="text-xs font-mono text-white/30 tracking-[0.2em] uppercase">
          projects.work
        </span>
        <div className="flex-1 h-px bg-white/5" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">
          Sistemas <span className="text-[#c084fc]">Construidos</span>
        </h2>
        <p className="text-white/50 max-w-xl text-base leading-relaxed">
          Lógica de negocio robusta traducida en aplicaciones reales. Código
          fuente disponible en cada proyecto.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {projects.map((project, i) => (
          <motion.a
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            whileHover={{ y: -4 }}
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`group relative flex flex-col rounded-3xl border transition-all duration-300 overflow-hidden ${
              project.featured
                ? "bg-gradient-to-br from-[#8b5cf6]/10 via-[#111] to-[#111] border-[#8b5cf6]/25 hover:border-[#8b5cf6]/50"
                : "bg-[#111111] border-white/5 hover:border-white/15"
            }`}
          >
            {/* Glow for featured */}
            {project.featured && (
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#8b5cf6] opacity-[0.07] blur-[60px] rounded-full pointer-events-none" />
            )}

            <div className="p-7 flex flex-col flex-1 relative z-10">
              {/* Top row */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center border transition-all duration-300 ${
                      project.featured
                        ? "bg-[#8b5cf6]/20 border-[#8b5cf6]/30 text-[#c084fc] group-hover:bg-[#8b5cf6]/30"
                        : "bg-white/5 border-white/8 text-white/50 group-hover:text-[#c084fc] group-hover:bg-[#8b5cf6]/10 group-hover:border-[#8b5cf6]/20"
                    }`}
                  >
                    {project.icon}
                  </div>
                  <span className="text-xs font-mono text-white/20">
                    {project.id}
                  </span>
                </div>
                <ArrowUpRight
                  className={`w-4 h-4 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${
                    project.featured
                      ? "text-[#8b5cf6]/50 group-hover:text-[#c084fc]"
                      : "text-white/15 group-hover:text-white/50"
                  }`}
                />
              </div>

              <div className="flex-1">
                <p className="text-[10px] font-mono text-white/25 tracking-[0.15em] mb-2 uppercase">
                  {project.tagline}
                </p>
                <h3
                  className={`text-xl font-bold mb-3 transition-colors duration-300 ${
                    project.featured
                      ? "text-white group-hover:text-[#c084fc]"
                      : "text-white/90 group-hover:text-white"
                  }`}
                >
                  {project.name}
                </h3>
                <p className="text-sm text-white/40 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Stack pills */}
              <div className="flex gap-2 flex-wrap mt-6 pt-5 border-t border-white/5">
                {project.stack.map((tech, ti) => (
                  <span
                    key={tech}
                    className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-white/5 border border-white/8 flex items-center gap-1.5"
                    style={{ color: project.stackColors[ti] }}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full"
                      style={{
                        background: project.stackColors[ti],
                        opacity: 0.8,
                      }}
                    />
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.a>
        ))}
      </div>

      {/* GitHub CTA */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="mt-8 flex justify-center"
      >
        <a
          href="https://github.com/Niwin07"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-white/30 hover:text-white/60 transition-colors font-mono"
        >
          <span>Ver todos los repositorios en GitHub</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      </motion.div>
    </section>
  );
}
