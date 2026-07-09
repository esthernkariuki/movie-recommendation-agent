"""
Test the recommendation engine.
"""

from recommendation import recommend_movies

result = recommend_movies(
    "I want an emotional science fiction movie with space travel."
)

print("\nUser Query")
print("-" * 50)
print(result["query"])

print("\nRecommended Movies")
print("-" * 50)

for movie in result["recommendations"]:
    print(f"Title : {movie['title']}")
    print(f"Genre : {movie['genre']}")
    print(f"Rating: {movie['rating']}")
    print()

print("\nGemini Explanation")
print("-" * 50)
print(result["explanation"])