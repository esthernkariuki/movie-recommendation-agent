"use client";

import { motion } from "framer-motion";
import SearchBox from "@/components/SearchBox";

const TECH_STACK = [
  "ChromaDB",
  "Sentence Transformers",
  "Gemini AI",
  "Semantic Search",
];

export default function Hero() {
  return (
    <main className="relative z-10 flex min-h-screen w-full items-center justify-center px-4 py-8 sm:px-8 sm:py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative flex min-h-[calc(100vh-4rem)] w-full max-w-[1080px] flex-col items-center overflow-hidden rounded-[2rem] border border-[#334155] bg-[#0a1120] px-6 py-12 sm:px-14 sm:py-16"
      >
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(circle 480px at 50% 0%, rgba(37, 99, 235, 0.14), transparent 65%)",
          }}
        />

        <div className="relative flex items-center gap-2 rounded-full border border-[#334155] bg-[#111827] px-4 py-2 sm:px-5">
          <span className="h-1.5 w-1.5 rounded-full bg-[#2563EB]" />
          <span className="text-[11px] font-medium uppercase tracking-[0.14em] text-slate-400 sm:text-xs">
            Powered by semantic search &amp; generative AI
          </span>
        </div>

        <div className="relative flex w-full flex-1 flex-col items-center justify-center">
          <div className="flex w-full max-w-[720px] flex-col items-center text-center">
            <span className="text-6xl sm:text-7xl lg:text-8xl">🎬</span>

            <h1
              className="mt-7 text-[2.75rem] font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              CineMind AI
            </h1>

            <p className="mt-4 text-base font-medium tracking-tight text-slate-300 sm:text-lg">
              AI Movie Recommendation System
            </p>

            <p className="mt-7 max-w-[520px] text-[15px] leading-[1.7] text-slate-400 sm:text-base">
              Discover your next favorite movie using semantic search, ChromaDB,
              Sentence Transformers and Gemini AI.
            </p>

            <div className="mt-10 w-full sm:mt-12">
              <SearchBox />
            </div>
          </div>
        </div>

        <div className="relative flex w-full max-w-[720px] flex-col items-center gap-6">
          <div className="h-px w-full max-w-[320px] bg-[#334155]" />
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {TECH_STACK.map((tech) => (
              <span
                key={tech}
                className="text-[11px] font-medium uppercase tracking-[0.12em] text-slate-500 sm:text-xs"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </main>
  );
}