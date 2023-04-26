import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
const generateAPIGetMovieDetail = (movieId) => {
  return `https://api.themoviedb.org/3/movie/${movieId}?api_key=f5604f45a67acfff1cd1e7f5065da619`;
};
const MovieDetailPage = () => {
  const { id } = useParams();
  const [movieDetail, setMovieDetail] = useState({});

  useEffect(() => {
    const getMovieDetail = async () => {
      const apiURL = generateAPIGetMovieDetail(id);
      const movieDetailResponse = await axios.get(apiURL);
      setMovieDetail(movieDetailResponse.data);
    };

    getMovieDetail();
  }, []);

  return (
    <div>
      <h1>{movieDetail.title}</h1>
      <p>Rating: {movieDetail.vote_average}</p>
    </div>
  );
};

export default MovieDetailPage;
