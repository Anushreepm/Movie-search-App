import React from "react";
import MovieCards from "./MovieCards";
import SearchMovies from "./searchMovies";

function MovieContainer() {
  return (
  <div className="movie-container">
    <SearchMovies />
    <MovieCards />
  </div>
  )};

export default MovieContainer;
