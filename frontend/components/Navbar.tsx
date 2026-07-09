export default function Navbar() {
  return (
    <nav className="border-b border-gray-800 bg-black">
      <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">

        <div>
          <h1 className="text-3xl font-bold">
            🎬 CineMind AI
          </h1>

          <p className="text-gray-400 text-sm">
            AI Movie Recommendation System
          </p>
        </div>

      </div>
    </nav>
  );
}