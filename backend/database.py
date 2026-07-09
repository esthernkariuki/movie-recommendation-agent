"""
database.py

This module manages the ChromaDB vector database.
"""

import chromadb

# Create a persistent client
client = chromadb.PersistentClient(path="../chroma_db")

# Create or retrieve the collection
collection = client.get_or_create_collection(
    name="movies"
)