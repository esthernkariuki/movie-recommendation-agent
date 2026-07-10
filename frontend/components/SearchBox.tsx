"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import api from "@/services/api";
import RecommendationList from "./RecommendationList";
import { RecommendationResponse } from "@/types/movie";

const EXAMPLE_PROMPTS = [
  "An emotional science fiction movie",
  "Something like Inception but slower paced",
  "A lighthearted comedy for a rainy afternoon",
  "A true story about resilience",
];

export default function SearchBox() {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<RecommendationResponse | null>(null);
  const [error, setError] = useState("");

  const handleExampleClick = (prompt: string) => {
    setQuery(prompt);
    textareaRef.current?.focus();
  };

  const handleSubmit = async () => {
    if (!query.trim() || loading) return;

    setLoading(true);
    setError("");
    setResult(null);

    try {
      const response = await api.post("/recommend", {
        query,
      });

      console.log("API Response:", response.data);

      setResult(response.data);
    } catch (err) {
      console.error(err);

      setError(
        "Something went wrong while fetching recommendations."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLTextAreaElement>
  ) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div className="w-full">
      <textarea
        ref={textareaRef}
        rows={5}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Describe the movie you'd like to watch..."
        className="w-full rounded-2xl border border-slate-700 bg-slate-900 p-5 text-white placeholder-slate-500 outline-none transition focus:border-blue-500"
      />

      {!result && (
        <div className="mt-5">
          <p className="mb-3 text-xs uppercase tracking-widest text-slate-500">
            Try one of these
          </p>

          <div className="flex flex-wrap gap-2">
            {EXAMPLE_PROMPTS.map((prompt) => (
              <button
                key={prompt}
                type="button"
                onClick={() => handleExampleClick(prompt)}
                className="rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-400 transition hover:border-blue-500 hover:text-white"
              >
                {prompt}
              </button>
            ))}
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={handleSubmit}
        disabled={loading || !query.trim()}
        className="mt-6 w-full rounded-xl bg-blue-600 py-4 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {loading ? "Finding Recommendations..." : "🎬 Get Recommendations"}
      </button>

      {error && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-4 rounded-lg border border-red-500/40 bg-red-500/10 p-3 text-red-400"
        >
          {error}
        </motion.div>
      )}

      {result && (
        <RecommendationList
          data={result}
        />
      )}
    </div>
  );
}