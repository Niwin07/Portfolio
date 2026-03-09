"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, Server, Database, Terminal, Menu, X } from "lucide-react";

export default function Hero() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false); // Cierra el menú en celular al hacer clic
  };

  return (
    <motion.section
      id="home"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative w-full rounded-[2rem] sm:rounded-[2.5rem] bg-[#111111] border border-white/5 p-6 sm:p-12 overflow-hidden flex flex-col justify-between min-h-[85vh] shadow-2xl"
    >
      <div className="absolute top-0 right-0 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-[#8b5cf6] opacity-20 blur-[100px] sm:blur-[130px] rounded-full pointer-events-none translate-x-1/3 -translate-y-1/3"></div>

      {/* NAVBAR */}
      <nav className="flex items-center justify-between relative z-50">
        <div className="text-xl font-bold tracking-tight flex items-center gap-2">
          <div className="w-6 h-6 bg-gradient-to-br from-[#8b5cf6] to-[#d946ef] rounded-md"></div>
          Nehuen Mesias
        </div>

        {/* Links Desktop */}
        <div className="hidden md:flex gap-8 text-sm font-medium text-white/60">
          <a
            href="#home"
            onClick={handleScroll}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Inicio
          </a>
          <a
            href="#about"
            onClick={handleScroll}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Sobre Mí
          </a>
          <a
            href="#projects"
            onClick={handleScroll}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Proyectos
          </a>
        </div>

        {/* Botón Contactar Desktop */}
        <a
          href="#contact"
          onClick={handleScroll}
          className="hidden md:inline-flex bg-[#8b5cf6] text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-[#7c3aed] transition-colors shadow-[0_0_20px_rgba(139,92,246,0.3)] cursor-pointer"
        >
          Contactar
        </a>

        {/* Botón Menú Mobile */}
        <button
          className="md:hidden p-2 text-white/80 hover:text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </nav>

      {/* MENÚ DESPLEGABLE MOBILE */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-20 left-4 right-4 bg-[#1a1a1a] border border-white/10 rounded-2xl p-6 flex flex-col gap-4 z-50 shadow-2xl md:hidden"
          >
            <a
              href="#home"
              onClick={handleScroll}
              className="text-lg font-medium text-white/80 hover:text-white"
            >
              Inicio
            </a>
            <a
              href="#about"
              onClick={handleScroll}
              className="text-lg font-medium text-white/80 hover:text-white"
            >
              Sobre Mí
            </a>
            <a
              href="#projects"
              onClick={handleScroll}
              className="text-lg font-medium text-white/80 hover:text-white"
            >
              Proyectos
            </a>
            <hr className="border-white/5 my-2" />
            <a
              href="#contact"
              onClick={handleScroll}
              className="text-center bg-[#8b5cf6] text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-[#7c3aed] transition-colors"
            >
              Contactar
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CONTENIDO PRINCIPAL */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mt-16 sm:mt-20 relative z-10 gap-10">
        <div className="max-w-3xl">
          <p className="text-base sm:text-lg font-medium mb-3 sm:mb-4 text-white/60">
            Ingeniería de Software
          </p>
          <h1 className="text-6xl sm:text-8xl lg:text-[120px] leading-[1] sm:leading-[0.9] font-extrabold tracking-tighter">
            Fullstack
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8b5cf6] to-[#c084fc]">
              Developer
            </span>
          </h1>
        </div>

        <div className="max-w-xs md:pb-6">
          <h2 className="text-xl sm:text-2xl font-bold mb-3">
            Sistemas <span className="text-[#c084fc]">Robustos</span>
          </h2>
          <p className="text-sm text-white/60 leading-relaxed">
            Creando soluciones eficientes y con un impacto verdadero.
            Especializado en el stack MERN para construir arquitecturas
            escalables.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#projects"
              onClick={handleScroll}
              className="bg-[#8b5cf6] px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-[#7c3aed] transition-all shadow-[0_0_15px_rgba(139,92,246,0.4)] cursor-pointer"
            >
              Ver Proyectos
            </a>
          </div>
        </div>
      </div>

      {/* ESPECIALIDADES */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16 sm:mt-24 border-t border-white/10 pt-8 relative z-10">
        <motion.div
          whileHover={{ y: -5 }}
          className="transition-all flex items-start sm:block gap-4 sm:gap-0"
        >
          <div className="w-10 h-10 shrink-0 rounded-full bg-[#8b5cf6]/10 flex items-center justify-center sm:mb-3 border border-[#8b5cf6]/20">
            <Code2 className="w-4 h-4 text-[#c084fc]" />
          </div>
          <div>
            <p className="text-sm font-semibold">Frontend</p>
            <p className="text-xs text-white/50 mt-1">
              React, Next.js, Integración UI
            </p>
          </div>
        </motion.div>

        <motion.div
          whileHover={{ y: -5 }}
          className="transition-all flex items-start sm:block gap-4 sm:gap-0"
        >
          <div className="w-10 h-10 shrink-0 rounded-full bg-[#8b5cf6]/10 flex items-center justify-center sm:mb-3 border border-[#8b5cf6]/20">
            <Server className="w-4 h-4 text-[#c084fc]" />
          </div>
          <div>
            <p className="text-sm font-semibold">Backend</p>
            <p className="text-xs text-white/50 mt-1">
              Node.js, Express, APIs REST
            </p>
          </div>
        </motion.div>

        <motion.div
          whileHover={{ y: -5 }}
          className="transition-all flex items-start sm:block gap-4 sm:gap-0"
        >
          <div className="w-10 h-10 shrink-0 rounded-full bg-[#8b5cf6]/10 flex items-center justify-center sm:mb-3 border border-[#8b5cf6]/20">
            <Database className="w-4 h-4 text-[#c084fc]" />
          </div>
          <div>
            <p className="text-sm font-semibold">Bases de Datos</p>
            <p className="text-xs text-white/50 mt-1">
              MySQL, Modelado Relacional
            </p>
          </div>
        </motion.div>

        <motion.div
          whileHover={{ y: -5 }}
          className="transition-all flex items-start sm:block gap-4 sm:gap-0"
        >
          <div className="w-10 h-10 shrink-0 rounded-full bg-[#8b5cf6]/10 flex items-center justify-center sm:mb-3 border border-[#8b5cf6]/20">
            <Terminal className="w-4 h-4 text-[#c084fc]" />
          </div>
          <div>
            <p className="text-sm font-semibold">Versatilidad</p>
            <p className="text-xs text-white/50 mt-1">Java, Python, PHP</p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
