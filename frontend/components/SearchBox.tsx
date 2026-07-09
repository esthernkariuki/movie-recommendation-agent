"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import api from "@/services/api";
import { RecommendationResponse } from "@/types/movie";
import RecommendationList from "@/components/RecommendationList";

const EXAMPLE_PROMPTS = [
  "An emotional science fiction movie",
  "Something like Inception but slower paced",
  "A lighthearted comedy for a rainy afternoon",
  "A true story about resilience",
];

export default function SearchBox() {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<RecommendationResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleExampleClick = (prompt: string) => {
    setQuery(prompt);
    textareaRef.current?.focus();
  };

  const handleSubmit = async () => {
    if (!query.trim() || loading) return;

    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const response = await api.post<RecommendationResponse>("/recommend", {
        query,
      });
      setResult(response.data);
    } catch (err) {
      setError(
        "Something went wrong while fetching recommendations. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div className="w-full">
      <textarea
        ref={textareaRef}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        rows={5}
        placeholder="Describe the movie you'd like to watch..."
        className="w-full rounded-2xl border border-[#334155] bg-[#111827] p-5 text-sm text-white placeholder-slate-500 outline-none transition-colors focus:border-[#2563EB] sm:text-base"
      />

      {!result && (
        <div className="mt-5">
          <p className="mb-2.5 text-[11px] font-medium uppercase tracking-[0.12em] text-slate-500">
            Try one of these
          </p>
          <div className="flex flex-wrap gap-2">
            {EXAMPLE_PROMPTS.map((prompt) => (
              <button
                key={prompt}
                type="button"
                onClick={() => handleExampleClick(prompt)}
                className="rounded-full border border-[#334155] bg-transparent px-4 py-2 text-xs text-slate-400 transition-colors hover:border-[#2563EB] hover:text-slate-200 sm:text-sm"
              >
                {prompt}
              </button>
            ))}
          </div>
        </div>
      )}

      <button
        onClick={handleSubmit}
        disabled={!query.trim() || loading}
        className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-[#2563EB] py-4 text-sm font-semibold tracking-wide text-white transition-colors hover:bg-[#1d4ed8] disabled:cursor-not-allowed disabled:bg-[#1e3a8a] disabled:opacity-60 sm:text-base"
      >
        {loading ? (
          <>
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
            Finding recommendations...
          </>
        ) : (
          "Get Recommendations"
        )}
      </button>

      {error && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-4 text-sm text-red-400"
        >
          {error}
        </motion.p>
      )}

      {result && <RecommendationList data={result} />}
    </div>
  );
}