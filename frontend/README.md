CineMind AI — Frontend

Next.js 15 + TypeScript + Tailwind v4 frontend for the CineMind AI movie recommender.

Setup

bashcd frontend
npm install
npm run dev

Runs on http://localhost:3000 and calls the FastAPI backend at http://127.0.0.1:8000/recommend.

Make sure your FastAPI backend is running on port 8000 first (with CORS enabled for localhost:3000).