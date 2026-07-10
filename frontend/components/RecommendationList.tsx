import { RecommendationResponse } from "@/types/movie";
import MovieCard from "./MovieCard";
import AIExplanation from "./AIExplanation";

interface Props {
  data: RecommendationResponse;
}

export default function RecommendationList({ data }: Props) {
  if (!data) return null;

  return (
    <div className="mt-16">

      <h2 className="mb-8 text-3xl font-bold text-white">
        Recommended Movies
      </h2>

      <div className="space-y-6">
        {data.recommendations?.map((movie, index) => (
          <MovieCard
            key={index}
            movie={movie}
          />
        ))}
      </div>

      <AIExplanation
        explanation={data.explanation}
      />

    </div>
  );
}