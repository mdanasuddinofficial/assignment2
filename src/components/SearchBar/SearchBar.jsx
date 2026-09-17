const SearchBar = ({ search, setSearch }) => {
  return (
    <div className="flex justify-center my-6">
      <input
        type="text"
        placeholder="Search for a movie..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="input input-bordered input-primary w-full max-w-md shadow-sm"
      />
    </div>
  );
};

export default SearchBar;