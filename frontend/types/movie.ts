export interface Movie {
  title: string;
  genre: string;
  rating: number;
  overview: string;
}

export interface RecommendationResponse {
  recommendations: Movie[];
  explanation: string;
}