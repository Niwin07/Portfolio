"use client";

import Hero from "@/components/Hero";
import About from "@/components/About";
import Stack from "@/components/Stack";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-white p-3 sm:p-5 font-sans selection:bg-purple-500/30 overflow-hidden scroll-smooth space-y-2">
      <Hero />
      <About />
      <Stack />
      <Projects />
      <Footer />
    </main>
  );
}
