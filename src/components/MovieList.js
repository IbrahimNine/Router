import "./MovieList.css";
import React from "react";
import MovieCard from "./MovieCard";

function MovieList({ filteredMovies }) {
  return (
    <div className="MovieList">
      {filteredMovies.map((movie) => (
        <MovieCard key={movie.id} {...movie} />
      ))}
    </div>
  );
}


export default MovieList;
