const MovieModal = ({ movie, onClose }) => {
  if (!movie) return null;

  return (
    <div className="modal modal-open">
      <div className="modal-box relative max-w-2xl">
        <button
          onClick={onClose}
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
        >
          ✕
        </button>
        <div className="flex flex-col md:flex-row gap-6 my-2">
          <img
            src={movie.image?.original || movie.image?.medium || "https://via.placeholder.com/210x295?text=No+Image"}
            alt={movie.name}
            className="rounded-xl w-full md:w-1/2 object-cover h-80"
          />
          <div className="flex flex-col justify-between grow">
            <div>
              <h2 className="text-2xl font-bold mb-2">{movie.name}</h2>
              
              <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-2">
                <span>⭐ {movie.rating?.average || "N/A"}</span>
                <span>📅 {movie.premiered ? movie.premiered : "N/A"}</span>
              </div>
              <div className="text-sm text-gray-600 mb-4 font-medium">
                <span>🎭 Genre: {movie.genres && movie.genres.length > 0 ? movie.genres.join(", ") : "N/A"}</span>
              </div>
              <div
                className="text-sm text-gray-600 line-clamp-5"
                dangerouslySetInnerHTML={{ __html: movie.summary || "No summary available." }}
              ></div>
            </div>
            <div className="modal-action mt-6">
              <button onClick={onClose} className="btn btn-primary w-full">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="modal-backdrop bg-black/50" onClick={onClose}></div>
    </div>
  );
};

export default MovieModal;