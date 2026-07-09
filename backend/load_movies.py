"""
load_movies.py

Loads the movie dataset into ChromaDB.
"""

import pandas as pd

from database import collection
from embeddings import create_embedding

# Load the dataset
movies = pd.read_csv("../data/tmdb_5000_movies.csv")

# Remove rows with missing values
movies = movies.dropna(subset=["title", "overview", "genres"])

# Create searchable documents
movies["document"] = (
    movies["title"]
    + ". "
    + movies["genres"]
    + ". "
    + movies["overview"]
)

print(f"Loading {len(movies)} movies into ChromaDB...")

# Store movies
for index, row in movies.iterrows():

    collection.add(
        ids=[str(index)],
        documents=[row["document"]],
        embeddings=[create_embedding(row["document"])],
        metadatas=[{
    "title": row["title"],
    "genre": row["genres"],
    "rating": float(row["vote_average"]),
    "overview": row["overview"]
}]
    )

print("✅ Movies successfully stored in ChromaDB!")