import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

const MovieCard = ({ movie }) => {
    const toMovieDetailPage = `/movie/${movie.id}`
  return (
    <div
      style={{
        padding: "24px",
        border: "1px solid black",
        width: "30%",
      }}
    >
      MovieCard: {movie.title}
      <Link to={toMovieDetailPage}>
        <Button variant="primary">Xem chi tiết</Button>
      </Link>
    </div>
  );
};

export default MovieCard;
