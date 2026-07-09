import { FaHeart } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-6 ml-70">

      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3">

        <h3 className="text-2xl font-bold text-white">
          🎬 CineMind <span className="text-violet-400">AI</span>
        </h3>

        <p className="text-sm text-slate-400 text-center">
          Semantic Movie Recommendation using FastAPI, ChromaDB,
          Sentence Transformers, Gemini AI and Next.js.
        </p>

        <div className="flex flex-wrap justify-center gap-2">

          {[
            "FastAPI",
            "Gemini",
            "ChromaDB",
            "Sentence Transformers",
            "Next.js",
          ].map((item) => (
            <span
              key={item}
              className="rounded-full bg-indigo-500/10 px-3 py-1 text-xs text-indigo-300"
            >
              {item}
            </span>
          ))}

        </div>

        <p className="flex items-center gap-2 text-xs text-slate-500">
          © 2026 Esther Nyambura Kariuki
          <FaHeart className="text-red-500" />
        </p>

      </div>

    </footer>
  );
}