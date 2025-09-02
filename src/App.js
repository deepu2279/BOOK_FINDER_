import { useState } from "react";

export default function BookFinder() {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const searchBooks = async () => {
    if (!query.trim()) return;
    setLoading(true);
    setError("");
    setBooks([]);

    try {
      const response = await fetch(
        `https://openlibrary.org/search.json?title=${encodeURIComponent(query)}`
      );
      const data = await response.json();

      if (data.docs.length === 0) {
        setError("No books found. Try another search.");
      } else {
        setBooks(data.docs.slice(0, 12)); // limit results
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6 text-indigo-600">
        📚 Book Finder
      </h1>

      <div className="flex gap-2 w-full max-w-md">
        <input
          type="text"
          placeholder="Search for a book..."
          className="flex-1 p-3 rounded-xl border border-gray-300 shadow-sm"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && searchBooks()}
        />
        <button
          onClick={searchBooks}
          className="px-4 py-2 bg-indigo-600 text-white rounded-xl shadow hover:bg-indigo-700 transition"
        >
          Search
        </button>
      </div>

      {loading && <p className="mt-4 text-gray-600">Loading...</p>}
      {error && <p className="mt-4 text-red-500">{error}</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 w-full max-w-5xl">
        {books.map((book, idx) => {
          const coverId = book.cover_i;
          const coverUrl = coverId
            ? `https://covers.openlibrary.org/b/id/${coverId}-M.jpg`
            : "https://via.placeholder.com/150x200?text=No+Cover";

          return (
            <div
              key={idx}
              className="bg-white p-4 rounded-2xl shadow hover:shadow-lg transition"
            >
              <img
                src={coverUrl}
                alt={book.title}
                className="w-full h-60 object-cover rounded-lg mb-4"
              />
              <h2 className="font-semibold text-lg">{book.title}</h2>
              <p className="text-gray-600 text-sm">
                {book.author_name
                  ? book.author_name.join(", ")
                  : "Unknown Author"}
              </p>
              <p className="text-gray-500 text-sm">
                First published: {book.first_publish_year || "N/A"}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
