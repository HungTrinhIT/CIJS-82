import React from "react";
import MovieCard from "../MovieCard/MovieCard";

const MovieList = ({ title, movieList = [] }) => {
  console.log("movieList:", movieList);
  return (
    <div>
      <h5>{title}</h5>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        {movieList &&
          movieList.map((movie) => {
            return <MovieCard movie={movie} />;
          })}
      </div>
    </div>
  );
};

export default MovieList;
