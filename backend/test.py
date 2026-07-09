from gemini_service import generate_explanation

movies = """
Interstellar
The Martian
Arrival
"""

print(generate_explanation(
    "I want an emotional space movie.",
    movies
))