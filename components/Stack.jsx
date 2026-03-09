"use client";

import { motion } from "framer-motion";

export default function Stack() {
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
      id="stack"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeUp}
      className="flex flex-col md:flex-row items-center justify-between gap-8 px-8 py-16 border-b border-white/5 text-white/50 max-w-7xl mx-auto w-full"
    >
      <div className="flex flex-col items-start shrink-0">
        <p className="text-sm font-medium text-white/80">Stack Principal</p>
        <p className="text-xs mt-1">Arquitectura MERN + SQL</p>
      </div>

      <div className="flex flex-wrap justify-center w-full gap-x-8 gap-y-4 items-center">
        <span className="text-lg font-bold flex items-center gap-2 hover:text-white transition-colors">
          <div className="w-2 h-2 rounded-full bg-[#c084fc]"></div> React
        </span>
        <span className="text-lg font-bold flex items-center gap-2 hover:text-white transition-colors">
          <div className="w-2 h-2 rounded-full bg-[#8b5cf6]"></div> Node.js
        </span>
        <span className="text-lg font-bold flex items-center gap-2 hover:text-white transition-colors">
          <div className="w-2 h-2 rounded-full bg-white/40"></div> Express
        </span>
        <span className="text-lg font-bold flex items-center gap-2 hover:text-white transition-colors">
          <div className="w-2 h-2 rounded-sm bg-[#3b82f6]"></div> MySQL
        </span>
      </div>

      <div className="hidden md:block w-px h-12 bg-white/10 mx-4"></div>

      <div className="flex flex-col items-start md:items-end shrink-0 min-w-[140px]">
        <p className="text-xs font-medium text-white/40 mb-2">
          Conocimientos extra:
        </p>
        <div className="flex gap-3 text-sm font-mono">
          <span className="hover:text-[#e32c2e] transition-colors cursor-default">
            Java
          </span>
          <span>·</span>
          <span className="hover:text-[#fcd34d] transition-colors cursor-default">
            Python
          </span>
          <span>·</span>
          <span className="hover:text-[#8b92d0] transition-colors cursor-default">
            PHP
          </span>
        </div>
      </div>
    </motion.section>
  );
}
