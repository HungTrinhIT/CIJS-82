import React from "react";
import { PREFIX_IMAGE } from "../../utils/constants";
import { Link } from "react-router-dom";

const MovieItem = (props) => {
  const { movie } = props;
  const { title, backdrop_path, overview, vote_average, id } = movie;
  return (
    <div className="movie-item">
      <img src={`${PREFIX_IMAGE}${backdrop_path}`} alt={title} />
      <Link to={`/movies/${id}`}>
        <h6 className="movie-item-title">{title}</h6>
      </Link>
    </div>
  );
};

export default MovieItem;
