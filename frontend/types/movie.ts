export interface Movie {
  title: string;
  genre: string;
  director: string;
  cast: string;
  rating: number;
  overview: string;
}

export interface RecommendationResponse {
  recommendations: Movie[];
  explanation: string;
}