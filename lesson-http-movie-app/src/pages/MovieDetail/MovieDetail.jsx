import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import Loading from "../../components/Loading/Loading";
import { PREFIX_IMAGE } from "../../utils/constants";
import "./MovieDetail.css";
const MovieDetail = () => {
  const params = useParams();
  const { movieId } = params;
  const movieDetailAPIUrl = `https://api.themoviedb.org/3/movie/${movieId}?api_key=f5604f45a67acfff1cd1e7f5065da619`;

  const { data: movieDetail, isLoading } = useFetch(movieDetailAPIUrl, {});
  const { title, backdrop_path, overview } = movieDetail;
  console.log("🚀 movieDetail:", movieDetail);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="movie-detail">
      <div className="movie-img">
        <img src={`${PREFIX_IMAGE}${backdrop_path}`} alt="title" />
      </div>
      <div className="movie-info">
        <h4>{title}</h4>
        <p>{overview}</p>
      </div>
    </div>
  );
};

export default MovieDetail;
