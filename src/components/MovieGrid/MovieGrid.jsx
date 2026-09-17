import MovieCard from "../MovieCard/MovieCard";

const MovieGrid = ({ movies, onDetails }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 my-8">
      {movies.map((item) => {
        const movieData = item.show ? item.show : item;
        return (
          <MovieCard 
            key={movieData.id} 
            movie={movieData} 
            onDetails={onDetails} 
          />
        );
      })}
    </div>
  );
};

export default MovieGrid;