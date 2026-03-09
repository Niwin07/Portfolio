"use client";

import { motion } from "framer-motion";
import { GraduationCap, Building2, MapPin, Mail } from "lucide-react";

export default function About() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeUp}
      className="py-24 px-4 sm:px-8 max-w-7xl mx-auto w-full relative z-10"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Texto principal */}
        <div>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-6">
            Más allá del <span className="text-[#c084fc]">Código</span>
          </h2>
          <p className="text-white/60 text-lg leading-relaxed mb-6">
            No me limito a escribir líneas de código; construyo la arquitectura
            detrás de productos digitales que escalan. Establezco el puente
            entre el diseño de producto y la lógica del servidor.
          </p>
          <p className="text-white/60 text-lg leading-relaxed">
            Como{" "}
            <strong className="text-white">Co-fundador de Light & Code</strong>,
            transformo ideas conceptuales en ecosistemas web completos,
            trabajando la ingeniería mientras el diseño cobra vida.
          </p>
        </div>

        {/* Tarjetas de Datos Duros */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-6 rounded-3xl bg-[#111111] border border-white/5 hover:border-[#8b5cf6]/30 transition-colors">
            <GraduationCap className="w-6 h-6 text-[#c084fc] mb-4" />
            <h3 className="font-bold text-white mb-1">
              Tecnico en Programacion
            </h3>
            <p className="text-sm text-white/50">
              C.T.P.O.B.A. Formación sólida en algoritmos y sistemas.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-[#111111] border border-white/5 hover:border-[#8b5cf6]/30 transition-colors">
            <Building2 className="w-6 h-6 text-[#c084fc] mb-4" />
            <h3 className="font-bold text-white mb-1">Light & Code</h3>
            <p className="text-sm text-white/50">
              Agencia propia. Diseño y desarrollo web.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-[#111111] border border-white/5 hover:border-[#8b5cf6]/30 transition-colors">
            <MapPin className="w-6 h-6 text-[#c084fc] mb-4" />
            <h3 className="font-bold text-white mb-1">Base de Operaciones</h3>
            <p className="text-sm text-white/50">
              Ushuaia, Argentina. Exportando código desde el Fin del Mundo.
            </p>
          </div>

          <a
            href="mailto:nehuenmesiasrios@gmail.com"
            className="group p-6 rounded-3xl bg-gradient-to-br from-[#8b5cf6]/10 to-transparent border border-[#8b5cf6]/20 hover:border-[#8b5cf6]/50 transition-all cursor-pointer flex flex-col justify-center"
          >
            <Mail className="w-6 h-6 text-[#c084fc] mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="font-bold text-white mb-1">Hablemos</h3>
            <p className="text-sm text-[#c084fc]">nehuenmesiasrios@gmail.com</p>
          </a>
        </div>
      </div>
    </motion.section>
  );
}
