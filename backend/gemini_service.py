"""
This module is responsible for communicating with the Gemini API.
"""

import google.generativeai as genai
from config import GEMINI_API_KEY

# Configure Gemini
genai.configure(api_key=GEMINI_API_KEY)

# Load the model
model = genai.GenerativeModel("gemini-2.5-flash")


def generate_explanation(user_query, movies):
    """
    Generates an explanation for why the retrieved movies
    match the user's request.
    """

    prompt = f"""
You are an intelligent movie recommendation assistant.

The user requested:

{user_query}

The recommendation engine returned:

{movies}

Explain why each movie is a good recommendation.
Keep your answer concise and conversational.
"""

    response = model.generate_content(prompt)

    return response.text