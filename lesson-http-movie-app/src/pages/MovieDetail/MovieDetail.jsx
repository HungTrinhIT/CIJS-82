import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MovieDetail = () => {
  const params = useParams();
  const [movieDetail, setMovieDetail] = useState({});
  const { movieId } = params;

  const fetchMovieDetail = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=f5604f45a67acfff1cd1e7f5065da619`
    );
    const data = await response.json();
    console.log("🚀 ~  data:", data);
    setMovieDetail(data);
  };
  useEffect(() => {
    fetchMovieDetail();
  }, []);

  return (
    <div>
      <h4>{movieDetail.title}</h4>
    </div>
  );
};

export default MovieDetail;
