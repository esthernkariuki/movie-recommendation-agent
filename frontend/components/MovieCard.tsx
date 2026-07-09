"use client";

import { motion } from "framer-motion";
import { Movie } from "@/types/movie";

interface MovieCardProps {
  movie: Movie;
  index: number;
}

export default function MovieCard({ movie, index }: MovieCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="group rounded-2xl border border-[#334155] bg-[#111827] p-6 transition-all duration-200 hover:-translate-y-1 hover:border-slate-500 hover:shadow-xl hover:shadow-black/30"
    >
      <div className="flex items-start justify-between gap-4">
        <h3
          className="text-xl font-semibold tracking-tight text-white"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {movie.title}
        </h3>
        <span className="flex shrink-0 items-center gap-1 rounded-full border border-[#334155] bg-[#0f172a] px-2.5 py-1 text-xs font-medium text-slate-300">
          ★ {movie.rating.toFixed(1)}
        </span>
      </div>

      <span className="mt-2.5 inline-block rounded-full bg-[#2563EB]/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.1em] text-blue-400">
        {movie.genre}
      </span>

      <p className="mt-4 text-[15px] leading-[1.7] text-slate-400">
        {movie.overview}
      </p>
    </motion.div>
  );
}