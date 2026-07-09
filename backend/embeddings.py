"""
embeddings.py

This module loads the SentenceTransformer model and
creates embeddings for movie descriptions and user queries.
"""

from sentence_transformers import SentenceTransformer

# Load the embedding model only once
model = SentenceTransformer("all-MiniLM-L6-v2")


def create_embedding(text: str):
    """
    Converts text into a semantic embedding.

    Args:
        text (str): Input text.

    Returns:
        list: Embedding vector.
    """

    embedding = model.encode(text)

    return embedding.tolist()