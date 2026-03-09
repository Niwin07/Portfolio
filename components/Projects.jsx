"use client";

import { motion } from "framer-motion";
import {
  ExternalLink,
  GitBranch,
  Layers,
  Coffee,
  Code2,
  Server,
  Database,
} from "lucide-react";

export default function Projects() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="projects"
      className="py-24 px-4 sm:px-8 max-w-7xl mx-auto w-full relative z-10"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="mb-16"
      >
        <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">
          Sistemas <span className="text-[#c084fc]">Complejos</span>
        </h2>
        <p className="text-white/60 max-w-2xl text-lg leading-relaxed">
          Explora el código fuente de mis desarrollos más destacados. Lógica de
          negocio robusta traducida en aplicaciones reales y funcionales.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* PlotPoint */}
        <motion.a
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          href="https://github.com/Niwin07/PlotPoint.git"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col p-8 rounded-3xl bg-[#111111] border border-white/5 hover:border-[#8b5cf6]/50 hover:bg-[#161616] transition-all duration-300 relative overflow-hidden shadow-lg hover:shadow-[0_0_30px_rgba(139,92,246,0.15)] min-h-[300px]"
        >
          <div className="flex justify-between items-start mb-6">
            <div className="w-12 h-12 rounded-full bg-[#8b5cf6]/10 flex items-center justify-center text-[#c084fc] group-hover:scale-110 group-hover:bg-[#8b5cf6]/20 transition-all duration-300 border border-[#8b5cf6]/20">
              <Layers className="w-5 h-5" />
            </div>
            <ExternalLink className="w-5 h-5 text-white/20 group-hover:text-white/60 transition-colors" />
          </div>
          <h3 className="text-xl font-bold mb-3 text-white group-hover:text-[#c084fc] transition-colors">
            PlotPoint
          </h3>
          <p className="text-sm text-white/50 leading-relaxed mb-6 flex-grow">
            Arquitectura escalable y gestión de datos complejos. Un sistema
            robusto diseñado para alto rendimiento y mantenibilidad.
          </p>
          <div className="flex gap-2 flex-wrap mt-auto pt-4 border-t border-white/5">
            <span className="flex items-center gap-1 text-xs font-mono px-2.5 py-1 rounded-md bg-[#8b5cf6]/10 text-[#c084fc] border border-[#8b5cf6]/20">
              <Code2 className="w-3 h-3" /> React
            </span>
            <span className="flex items-center gap-1 text-xs font-mono px-2.5 py-1 rounded-md bg-white/5 text-white/60 border border-white/5">
              <Server className="w-3 h-3" /> Node.js
            </span>
            <span className="flex items-center gap-1 text-xs font-mono px-2.5 py-1 rounded-md bg-white/5 text-white/60 border border-white/5">
              <Database className="w-3 h-3" /> MySQL
            </span>
          </div>
        </motion.a>

        {/* Cafe Encuentro */}
        <motion.a
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ delay: 0.1 }}
          href="https://github.com/Niwin07/Cafe-Encuentro.git"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col p-8 rounded-3xl bg-[#111111] border border-white/5 hover:border-[#8b5cf6]/50 hover:bg-[#161616] transition-all duration-300 relative overflow-hidden shadow-lg hover:shadow-[0_0_30px_rgba(139,92,246,0.15)] min-h-[300px]"
        >
          <div className="flex justify-between items-start mb-6">
            <div className="w-12 h-12 rounded-full bg-[#8b5cf6]/10 flex items-center justify-center text-[#c084fc] group-hover:scale-110 group-hover:bg-[#8b5cf6]/20 transition-all duration-300 border border-[#8b5cf6]/20">
              <Coffee className="w-5 h-5" />
            </div>
            <ExternalLink className="w-5 h-5 text-white/20 group-hover:text-white/60 transition-colors" />
          </div>
          <h3 className="text-xl font-bold mb-3 text-white group-hover:text-[#c084fc] transition-colors">
            Café Encuentro
          </h3>
          <p className="text-sm text-white/50 leading-relaxed mb-6 flex-grow">
            Plataforma integral de gestión. Optimización de flujos de trabajo en
            el backend y conexión impecable con el frontend.
          </p>
          <div className="flex gap-2 flex-wrap mt-auto pt-4 border-t border-white/5">
            <span className="flex items-center gap-1 text-xs font-mono px-2.5 py-1 rounded-md bg-[#8b5cf6]/10 text-[#c084fc] border border-[#8b5cf6]/20">
              <Server className="w-3 h-3" /> Express
            </span>
            <span className="flex items-center gap-1 text-xs font-mono px-2.5 py-1 rounded-md bg-white/5 text-white/60 border border-white/5">
              <Code2 className="w-3 h-3" /> React
            </span>
            <span className="flex items-center gap-1 text-xs font-mono px-2.5 py-1 rounded-md bg-white/5 text-white/60 border border-white/5">
              <Database className="w-3 h-3" /> MySQL
            </span>
          </div>
        </motion.a>

        {/* Difusión La Roca */}
        <motion.a
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ delay: 0.2 }}
          href="https://github.com/Niwin07/Difusion-La-Roca.git"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col p-8 rounded-3xl bg-[#111111] border border-white/5 hover:border-[#8b5cf6]/50 hover:bg-[#161616] transition-all duration-300 relative overflow-hidden shadow-lg hover:shadow-[0_0_30px_rgba(139,92,246,0.15)] min-h-[300px]"
        >
          <div className="flex justify-between items-start mb-6">
            <div className="w-12 h-12 rounded-full bg-[#8b5cf6]/10 flex items-center justify-center text-[#c084fc] group-hover:scale-110 group-hover:bg-[#8b5cf6]/20 transition-all duration-300 border border-[#8b5cf6]/20">
              <GitBranch className="w-5 h-5" />
            </div>
            <ExternalLink className="w-5 h-5 text-white/20 group-hover:text-white/60 transition-colors" />
          </div>
          <h3 className="text-xl font-bold mb-3 text-white group-hover:text-[#c084fc] transition-colors">
            Difusión La Roca
          </h3>
          <p className="text-sm text-white/50 leading-relaxed mb-6 flex-grow">
            Sistema de comunicación centralizada. Manejo de concurrencia y
            entrega eficiente de información masiva.
          </p>
          <div className="flex gap-2 flex-wrap mt-auto pt-4 border-t border-white/5">
            <span className="flex items-center gap-1 text-xs font-mono px-2.5 py-1 rounded-md bg-[#8b5cf6]/10 text-[#c084fc] border border-[#8b5cf6]/20">
              <Server className="w-3 h-3" /> Node.js
            </span>
            <span className="flex items-center gap-1 text-xs font-mono px-2.5 py-1 rounded-md bg-white/5 text-white/60 border border-white/5">
              <Code2 className="w-3 h-3" /> React
            </span>
            <span className="flex items-center gap-1 text-xs font-mono px-2.5 py-1 rounded-md bg-white/5 text-white/60 border border-white/5">
              <Server className="w-3 h-3" /> Express
            </span>
          </div>
        </motion.a>
      </div>
    </section>
  );
}
