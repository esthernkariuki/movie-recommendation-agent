import { Movie } from "@/types/movie";
import {
  Star,
  Film,
  User,
  Clapperboard,
} from "lucide-react";

interface Props {
  movie: Movie;
}

export default function MovieCard({ movie }: Props) {
  return (
    <div className="rounded-2xl border border-slate-700 bg-slate-900/70 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500 hover:shadow-xl hover:shadow-indigo-500/10">

      <h3 className="flex items-center gap-2 text-2xl font-bold text-white">
        <Film size={22} />
        {movie.title}
      </h3>

      <div className="mt-4 flex flex-wrap gap-3">

        <span className="rounded-full bg-slate-800 px-3 py-1 text-sm text-slate-300">
          🎭 {movie.genre}
        </span>

        <span className="flex items-center gap-1 rounded-full bg-yellow-500/10 px-3 py-1 text-sm text-yellow-400">
          <Star size={15} />
          {movie.rating}
        </span>

      </div>

      <div className="mt-5 space-y-3">

        <p className="flex items-center gap-2 text-sm text-slate-300">
          <Clapperboard
            size={17}
            className="text-indigo-400"
          />

          <span className="font-semibold text-white">
            Director:
          </span>

          {movie.director}
        </p>

        <p className="flex items-start gap-2 text-sm text-slate-300">
          <User
            size={17}
            className="mt-0.5 text-indigo-400"
          />

          <span>
            <span className="font-semibold text-white">
              Cast:
            </span>{" "}
            {movie.cast}
          </span>
        </p>

      </div>

      <p className="mt-6 leading-7 text-slate-300">
        {movie.overview}
      </p>

    </div>
  );
}