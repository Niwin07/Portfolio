"use client";

import { useState, useEffect, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
} from "framer-motion";
import {
  Code2,
  Server,
  Database,
  Terminal,
  Menu,
  X,
  ArrowDown,
} from "lucide-react";

export default function Hero() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      setMousePos({
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { href: "#home", label: "Inicio" },
    { href: "#about", label: "Sobre Mí" },
    { href: "#projects", label: "Proyectos" },
  ];

  const specs = [
    {
      icon: <Code2 className="w-4 h-4" />,
      label: "Frontend",
      sub: "React · Next.js",
    },
    {
      icon: <Server className="w-4 h-4" />,
      label: "Backend",
      sub: "Node.js · Express",
    },
    {
      icon: <Database className="w-4 h-4" />,
      label: "Bases de Datos",
      sub: "MySQL · Relacional",
    },
    {
      icon: <Terminal className="w-4 h-4" />,
      label: "Versatilidad",
      sub: "Java · Python · PHP",
    },
  ];

  return (
    <motion.section
      ref={heroRef}
      id="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="relative w-full rounded-[2rem] bg-[#0d0d0d] border border-white/8 overflow-hidden flex flex-col min-h-[92vh] shadow-2xl"
      style={{
        background: `radial-gradient(ellipse at ${mousePos.x}% ${mousePos.y}%, rgba(139,92,246,0.08) 0%, transparent 60%), #0d0d0d`,
      }}
    >
      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Orbs */}
      <div className="absolute top-[-80px] right-[-80px] w-[500px] h-[500px] bg-[#8b5cf6] opacity-[0.12] blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-100px] w-[350px] h-[350px] bg-[#6d28d9] opacity-[0.08] blur-[100px] rounded-full pointer-events-none" />

      {/* NAVBAR */}
      <nav className="flex items-center justify-between relative z-50 px-6 sm:px-10 pt-6 sm:pt-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="flex items-center gap-2.5"
        >
          <div className="w-8 h-8 bg-gradient-to-br from-[#8b5cf6] to-[#d946ef] rounded-lg flex items-center justify-center">
            <div className="w-2 h-2 bg-white rounded-sm" />
          </div>
          <span className="text-base font-bold tracking-tight">N.Mesias</span>
        </motion.div>

        {/* Desktop nav */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="hidden md:flex items-center gap-1 bg-white/5 border border-white/8 rounded-full px-2 py-1.5"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleScroll}
              className="px-4 py-1.5 text-sm text-white/60 hover:text-white hover:bg-white/8 rounded-full transition-all"
            >
              {link.label}
            </a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="flex items-center gap-3"
        >
          <a
            href="#contact"
            onClick={handleScroll}
            className="hidden md:inline-flex items-center gap-2 bg-gradient-to-r from-[#8b5cf6] to-[#7c3aed] text-white px-5 py-2 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity shadow-[0_0_25px_rgba(139,92,246,0.35)]"
          >
            Contactar
          </a>
          <button
            className="md:hidden p-2 text-white/70 hover:text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </motion.div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-20 left-4 right-4 bg-[#141414] border border-white/10 rounded-2xl p-5 flex flex-col gap-3 z-50 shadow-2xl md:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleScroll}
                className="text-base font-medium text-white/70 hover:text-white py-1"
              >
                {link.label}
              </a>
            ))}
            <hr className="border-white/5 my-1" />
            <a
              href="#contact"
              onClick={handleScroll}
              className="text-center bg-[#8b5cf6] text-white px-6 py-2.5 rounded-full text-sm font-semibold"
            >
              Contactar
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* MAIN CONTENT */}
      <div className="flex-1 flex flex-col justify-center px-6 sm:px-10 pt-10 pb-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#8b5cf6]/10 border border-[#8b5cf6]/25 rounded-full px-4 py-1.5 mb-8">
            <div className="w-1.5 h-1.5 bg-[#a78bfa] rounded-full animate-pulse" />
            <span className="text-xs font-medium text-[#c084fc] tracking-wide">
              Disponible para proyectos
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-black tracking-tighter leading-[0.88] mb-6">
            <div className="text-[clamp(2.8rem,8vw,9rem)] text-white">
              Fullstack
            </div>
            <div
              className="text-[clamp(2.8rem,8vw,9rem)]"
              style={{
                WebkitTextStroke: "2px rgba(139,92,246,0.6)",
                color: "transparent",
              }}
            >
              Developer
            </div>
          </h1>

          {/* Sub row */}
          <div className="flex flex-col sm:flex-row sm:items-end gap-6 sm:gap-12 mt-8">
            <p className="text-white/50 text-base sm:text-lg leading-relaxed max-w-md">
              Arquitecto de sistemas MERN. Construyo soluciones escalables desde{" "}
              <span className="text-white/80">Ushuaia</span> para el mundo.
            </p>
            <div className="flex gap-3 flex-shrink-0">
              <a
                href="#projects"
                onClick={handleScroll}
                className="bg-[#8b5cf6] px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-[#7c3aed] transition-all shadow-[0_0_20px_rgba(139,92,246,0.4)]"
              >
                Ver Proyectos
              </a>
              <a
                href="#about"
                onClick={handleScroll}
                className="px-6 py-2.5 rounded-full text-sm font-semibold border border-white/12 text-white/60 hover:text-white hover:border-white/25 transition-all"
              >
                Sobre Mí
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* SPECS BAR */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="grid grid-cols-2 lg:grid-cols-4 border-t border-white/8 relative z-10"
      >
        {specs.map((spec, i) => (
          <motion.div
            key={spec.label}
            whileHover={{ backgroundColor: "rgba(139,92,246,0.05)" }}
            className={`flex items-center gap-3 px-6 py-5 transition-colors ${
              i < specs.length - 1 ? "border-r border-white/8" : ""
            } ${i === 1 ? "border-r-0 lg:border-r border-white/8" : ""}`}
          >
            <div className="w-8 h-8 rounded-lg bg-[#8b5cf6]/10 flex items-center justify-center text-[#c084fc] border border-[#8b5cf6]/15 shrink-0">
              {spec.icon}
            </div>
            <div>
              <p className="text-xs font-semibold text-white">{spec.label}</p>
              <p className="text-[10px] text-white/40 mt-0.5 font-mono">
                {spec.sub}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
