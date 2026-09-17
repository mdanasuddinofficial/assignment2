const MovieCard = ({ movie, onDetails }) => {
  return (
    <div className="card bg-base-100 shadow-xl border border-base-200 flex flex-col h-full">
      <figure className="px-4 pt-4">
        <img
          src={movie.image?.medium || "https://via.placeholder.com/210x295?text=No+Image"}
          alt={movie.name}
          className="rounded-xl h-64 w-full object-cover"
        />
      </figure>
      <div className="card-body flex flex-col justify-between grow">
        <div>
          <h2 className="card-title text-lg font-bold">{movie.name}</h2>
          <div className="flex justify-between text-sm text-gray-500 my-2">
            <span>⭐ {movie.rating?.average || "N/A"}</span>
            <span>📅 {movie.premiered ? movie.premiered.split("-")[0] : "N/A"}</span>
          </div>
        </div>
        <div className="card-actions justify-end mt-4">
          <button 
            onClick={() => onDetails(movie)}
            className="btn btn-primary btn-sm w-full"
          >
            See Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;