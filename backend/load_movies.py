"""
load_movies.py

Loads the TMDB dataset into ChromaDB with enriched metadata.
"""

import json
import pandas as pd
from tqdm import tqdm

from database import collection
from embeddings import create_embedding


# -----------------------------
# Load datasets
# -----------------------------

movies = pd.read_csv("../data/tmdb_5000_movies.csv")
credits = pd.read_csv("../data/tmdb_5000_credits.csv")

movies = movies.merge(
    credits,
    left_on="id",
    right_on="movie_id"
)

movies = movies.dropna(
    subset=["title_x", "overview", "genres", "cast", "crew"]
)

print(f"Loaded {len(movies)} movies.")


# -----------------------------
# Skip if database already exists
# -----------------------------

if collection.count() > 0:
    print(f"Database already contains {collection.count()} movies.")
    exit()


# -----------------------------
# Helper functions
# -----------------------------

def extract_genres(genres_json):
    try:
        genres = json.loads(genres_json)
        return ", ".join(g["name"] for g in genres)
    except Exception:
        return "Unknown"


def extract_cast(cast_json):
    try:
        cast = json.loads(cast_json)
        return ", ".join(actor["name"] for actor in cast[:5])
    except Exception:
        return ""


def extract_director(crew_json):
    try:
        crew = json.loads(crew_json)

        for member in crew:
            if member["job"] == "Director":
                return member["name"]

        return ""

    except Exception:
        return ""


print("Generating embeddings and storing movies...")


# -----------------------------
# Store movies
# -----------------------------

for index, row in tqdm(movies.iterrows(), total=len(movies)):

    genres = extract_genres(row["genres"])
    cast = extract_cast(row["cast"])
    director = extract_director(row["crew"])

    document = f"""
Title: {row['title_x']}

Genres:
{genres}

Director:
{director}

Main Cast:
{cast}

Overview:
{row['overview']}
"""

    embedding = create_embedding(document)

    collection.add(
        ids=[str(index)],
        documents=[document],
        embeddings=[embedding],
        metadatas=[{
            "title": row["title_x"],
            "genre": genres,
            "director": director,
            "cast": cast,
            "rating": float(row["vote_average"]),
            "overview": row["overview"],
        }]
    )

print("\n✅ Finished loading movies!")
print(f"Movies stored: {collection.count()}")