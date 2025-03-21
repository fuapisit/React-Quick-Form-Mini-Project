import { useState } from "react";
import movies from "../assets/MovieList"

export default function RadioButtonExample() {
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
        <h3 className="block text-sm font-medium mb-4 mt-6 text-left">เลือกหนังที่คุณชอบ *</h3>
      <form>
        {movies.map((movie) => (
          <label 
          key={movie.title} 
          className="block mb-2 flex items-center space-x-2 cursor-pointer hover:bg-gray-200 p-2"
          >
            <input
              type="radio"
              name="movie"
              value={movie.title}
              checked={selectedOption === movie.title}
              onChange={handleChange}
              className="mr-2"
            />
            <span className="block text-left">
              {movie.title} ({movie.year}) 
              <br />
              <span className="text-xs">Director: {movie.director}</span>
            </span>
          </label>
        ))}
      </form>
    </div>
  );
}
