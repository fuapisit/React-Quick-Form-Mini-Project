export default function MovieRadio({ movies, selectedMovie, onChange, error }) {
  return (
    <div className="mb-4">
      <h3 className="block text-sm font-medium mb-2 text-left">เลือกหนังที่คุณชอบ *</h3>
      {movies.map((movie) => (
        <label key={movie.title} className="block mb-2 flex items-center space-x-2 cursor-pointer hover:bg-gray-200 p-2">
          <input
            type="radio"
            name="movie"
            value={movie.title}
            checked={selectedMovie === movie.title}
            onChange={onChange}
            className="mr-2"
          />
          <span className="block text-left">
            {movie.title} ({movie.year}) 
            <br />
            <span className="text-xs">Director: {movie.director}</span>
          </span>
        </label>
      ))}
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
}
