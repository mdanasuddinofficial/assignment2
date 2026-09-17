import { useState, useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import SearchBar from "../../components/SearchBar/SearchBar";
import MovieGrid from "../../components/MovieGrid/MovieGrid";
import MovieModal from "../../components/MovieModal/MovieModal";

const Movies = () => {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const fetchMovies = async () => {
      setLoading(true);
      setError(null);

      try {
        const url =
          search.trim() === ""
            ? "https://api.tvmaze.com/shows"
            : `https://api.tvmaze.com/search/shows?q=${encodeURIComponent(search)}`;

        const res = await fetch(url);
        if (!res.ok) {
          throw new Error("Failed to fetch movies. Please try again later.");
        }
        const data = await res.json();

        if (isMounted) {
          setMovies(data);
          setLoading(false);
        }
      } catch (err) {
        if (isMounted) {
          console.error("Error fetching data:", err);
          setError(err.message);
          setLoading(false);
        }
      }
    };

    fetchMovies();

    return () => {
      isMounted = false;
    };
  }, [search]);

  return (
    <div className="flex flex-col min-h-screen bg-base-100">
      <Navbar />
      
      {/* Main Content Area */}
      <main className="grow max-w-7xl mx-auto px-4 py-10 w-full">
        <div className="text-center my-8">
          <h1 className="text-4xl font-bold mb-2">Explore Movies</h1>
          <p className="text-gray-500">Find your next favorite movie</p>
        </div>

        {/* Search Bar Component */}
        <SearchBar search={search} setSearch={setSearch} />

        {/* Error Message */}
        {error && (
          <div className="alert alert-error max-w-md mx-auto my-6 text-center">
            <span>{error}</span>
          </div>
        )}

        {/* Loading Indicator */}
        {loading && (
          <div className="flex justify-center items-center my-16">
            <span className="loading loading-spinner loading-lg text-primary"></span>
          </div>
        )}

        {/* No Movies Found Message */}
        {!loading && !error && movies.length === 0 && (
          <div className="alert alert-info max-w-md mx-auto my-12 text-center">
            <div>
              <h3 className="font-bold">No movies found</h3>
              <p className="text-sm">Try searching with a different title.</p>
            </div>
          </div>
        )}

        {/* Movie Grid Component with onDetails Callback */}
        {!loading && !error && movies.length > 0 && (
          <MovieGrid movies={movies} onDetails={setSelectedMovie} />
        )}
      </main>

      {/* Movie Details Modal Component */}
      <MovieModal 
        movie={selectedMovie} 
        onClose={() => setSelectedMovie(null)} 
      />

      <Footer />
    </div>
  );
};

export default Movies;