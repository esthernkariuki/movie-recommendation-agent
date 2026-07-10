"""
database.py
"""

import chromadb

client = chromadb.PersistentClient(path="../chroma_db")

collection = client.get_or_create_collection(
    name="movies"
)

print("=" * 50)
print("Movies in database:", collection.count())
print("=" * 50)