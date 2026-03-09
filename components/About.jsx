"use client";

import { motion } from "framer-motion";
import { GraduationCap, Building2, MapPin, Mail, Terminal } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function About() {
  const cards = [
    {
      icon: <GraduationCap className="w-5 h-5 text-[#c084fc]" />,
      label: "FORMACIÓN",
      title: "Técnico en Programación",
      sub: "C.T.P.O.B.A. · Algoritmos y Sistemas",
    },
    {
      icon: <Building2 className="w-5 h-5 text-[#c084fc]" />,
      label: "EMPRESA",
      title: "Light & Code",
      sub: "Co-fundador · Diseño & Desarrollo Web",
    },
    {
      icon: <MapPin className="w-5 h-5 text-[#c084fc]" />,
      label: "UBICACIÓN",
      title: "Ushuaia, Argentina",
      sub: "Exportando código desde el Fin del Mundo",
    },
  ];

  return (
    <motion.section
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={stagger}
      className="py-24 px-4 sm:px-8 max-w-7xl mx-auto w-full relative z-10"
    >
      {/* Section label */}
      <motion.div variants={fadeUp} className="flex items-center gap-3 mb-12">
        <Terminal className="w-4 h-4 text-[#8b5cf6]" />
        <span className="text-xs font-mono text-white/30 tracking-[0.2em] uppercase">
          perfil.sobre
        </span>
        <div className="flex-1 h-px bg-white/5" />
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
        {/* Left: Texto */}
        <motion.div variants={fadeUp} className="lg:col-span-3 space-y-8">
          <div>
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-6 leading-tight">
              Más allá del{" "}
              <span
                style={{
                  WebkitTextStroke: "1.5px #c084fc",
                  color: "transparent",
                }}
              >
                Código
              </span>
            </h2>
            <p className="text-white/55 text-lg leading-relaxed">
              No escribo líneas de código — construyo la{" "}
              <span className="text-white/80 font-medium">arquitectura</span>{" "}
              detrás de productos digitales que escalan. Establezco el puente
              entre diseño de producto y lógica de servidor.
            </p>
          </div>

          <div className="relative pl-5 border-l border-[#8b5cf6]/30">
            <p className="text-white/55 text-lg leading-relaxed">
              Como{" "}
              <span className="text-white font-semibold">
                Co-fundador de Light & Code
              </span>
              , transformo ideas conceptuales en ecosistemas web completos,
              manejando la ingeniería mientras el diseño cobra vida.
            </p>
          </div>

          {/* Terminal block */}
          <div className="bg-[#0d0d0d] border border-white/8 rounded-2xl overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5">
              <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
              <span className="ml-2 text-xs font-mono text-white/20">
                nehuen@lightcode ~ whoami
              </span>
            </div>
            <div className="p-5 font-mono text-sm space-y-1.5">
              <p className="text-white/30">
                <span className="text-[#8b5cf6]">$</span>{" "}
                <span className="text-white/60">role</span>
                <span className="text-white/25"> =</span>{" "}
                <span className="text-emerald-400">"Fullstack Developer"</span>
              </p>
              <p className="text-white/30">
                <span className="text-[#8b5cf6]">$</span>{" "}
                <span className="text-white/60">stack</span>
                <span className="text-white/25"> =</span>{" "}
                <span className="text-amber-400">
                  ["React", "Node.js", "MySQL"]
                </span>
              </p>
              <p className="text-white/30">
                <span className="text-[#8b5cf6]">$</span>{" "}
                <span className="text-white/60">founded</span>
                <span className="text-white/25"> =</span>{" "}
                <span className="text-sky-400">"Light & Code"</span>
              </p>
              <p className="text-white/30">
                <span className="text-[#8b5cf6]">$</span>{" "}
                <span className="text-white/60">location</span>
                <span className="text-white/25"> =</span>{" "}
                <span className="text-[#c084fc]">"Ushuaia, Argentina 🌍"</span>
              </p>
              <p className="flex items-center gap-1.5 mt-2">
                <span className="text-[#8b5cf6]">$</span>{" "}
                <span className="inline-block w-2 h-4 bg-white/60 animate-pulse" />
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right: Cards */}
        <motion.div
          variants={stagger}
          className="lg:col-span-2 flex flex-col gap-4"
        >
          {cards.map((c) => (
            <motion.div
              key={c.label}
              variants={fadeUp}
              whileHover={{ x: 4 }}
              className="group flex items-start gap-4 p-5 rounded-2xl bg-[#111111] border border-white/5 hover:border-[#8b5cf6]/30 transition-all duration-300"
            >
              <div className="w-10 h-10 shrink-0 rounded-xl bg-[#8b5cf6]/10 flex items-center justify-center border border-[#8b5cf6]/15 group-hover:bg-[#8b5cf6]/20 transition-colors">
                {c.icon}
              </div>
              <div>
                <p className="text-[10px] font-mono text-white/25 tracking-[0.15em] mb-1">
                  {c.label}
                </p>
                <p className="text-sm font-bold text-white">{c.title}</p>
                <p className="text-xs text-white/40 mt-0.5">{c.sub}</p>
              </div>
            </motion.div>
          ))}

          {/* CTA Card */}
          <motion.a
            variants={fadeUp}
            href="mailto:nehuenmesiasrios@gmail.com"
            whileHover={{ scale: 1.02 }}
            className="group flex items-center justify-between p-5 rounded-2xl bg-gradient-to-br from-[#8b5cf6]/15 to-[#6d28d9]/5 border border-[#8b5cf6]/25 hover:border-[#8b5cf6]/50 transition-all duration-300"
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 shrink-0 rounded-xl bg-[#8b5cf6]/20 flex items-center justify-center border border-[#8b5cf6]/30">
                <Mail className="w-5 h-5 text-[#c084fc]" />
              </div>
              <div>
                <p className="text-[10px] font-mono text-white/25 tracking-[0.15em] mb-1">
                  CONTACTO
                </p>
                <p className="text-sm font-bold text-white">Hablemos</p>
                <p className="text-xs text-[#c084fc] mt-0.5">
                  nehuenmesiasrios@gmail.com
                </p>
              </div>
            </div>
            <div className="text-[#8b5cf6]/40 group-hover:text-[#c084fc] group-hover:translate-x-1 transition-all">
              →
            </div>
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
}
