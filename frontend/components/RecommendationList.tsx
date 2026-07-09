"use client";

import { motion } from "framer-motion";
import { RecommendationResponse } from "@/types/movie";
import MovieCard from "@/components/MovieCard";

interface RecommendationListProps {
  data: RecommendationResponse;
}

export default function RecommendationList({ data }: RecommendationListProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="mt-10 w-full text-left"
    >
      <h2 className="mb-4 text-[11px] font-medium uppercase tracking-[0.14em] text-slate-500">
  Recommended Movies
</h2>

      <div className="flex flex-col gap-4">
        {data.recommendations.map((movie, index) => (
          <MovieCard key={movie.title + index} movie={movie} index={index} />
        ))}
      </div>

      <div className="mt-8">
        <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.14em] text-slate-500">
  AI Explanation
</h2>
        <div className="rounded-2xl border border-[#334155] bg-[#111827] p-6">
  <p className="text-[15px] leading-[1.7] text-slate-300">
    {data.explanation}
  </p>
</div>
      </div>
    </motion.div>
  );
}