"""
app.py

FastAPI application for the AI Movie Recommendation Agent.

This API receives a user's movie request,
retrieves similar movies using ChromaDB,
and generates AI explanations using Gemini.
"""

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

from recommendation import recommend_movies

# Create the FastAPI application
app = FastAPI(
    title="CineMind AI",
    description="AI-powered Movie Recommendation System",
    version="1.0.0"
)

# Allow requests from the frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],      # Change to your frontend URL when deploying
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Request model
class MovieRequest(BaseModel):
    query: str


@app.get("/")
def home():
    """
    Health check endpoint.
    """
    return {
        "message": "🎬 Welcome to CineMind AI!"
    }


@app.post("/recommend")
def recommend(request: MovieRequest):
    """
    Generate movie recommendations based on a user's query.
    """

    result = recommend_movies(request.query)

    return result