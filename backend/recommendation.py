"""
recommendation.py

This module coordinates the movie recommendation process.

Workflow:
User Query
    ↓
Sentence Transformer
    ↓
ChromaDB Search
    ↓
Gemini Explanation
    ↓
Final Recommendation
"""

from embeddings import create_embedding
from database import collection
from gemini_service import generate_explanation


def recommend_movies(user_query: str, top_k: int = 5):
    """
    Recommend movies based on the user's natural language query.

    Args:
        user_query (str): The user's request.
        top_k (int): Number of recommendations to retrieve.

    Returns:
        dict: Retrieved movies and Gemini explanation.
    """

    # Step 1: Convert the user's query into an embedding
    query_embedding = create_embedding(user_query)

    # Step 2: Search ChromaDB for similar movies
    results = collection.query(
    query_embeddings=[query_embedding],
    n_results=5)
    print(results)

    # Step 3: Extract movie metadata
    movies = results["metadatas"][0]

    # Step 4: Format the retrieved movies for Gemini
    movie_text = ""

    for movie in movies:
        movie_text += (
    f"Title: {movie['title']}\n"
    f"Genre: {movie['genre']}\n"
    f"Rating: {movie['rating']}\n"
    f"Overview: {movie['overview']}\n\n"
)

    # Step 5: Ask Gemini to explain the recommendations
    explanation = generate_explanation(
        user_query,
        movie_text
    )

    # Step 6: Return everything
    return {
        "query": user_query,
        "recommendations": movies,
        "explanation": explanation
    }
