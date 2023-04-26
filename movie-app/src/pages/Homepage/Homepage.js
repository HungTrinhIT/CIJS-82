import { useEffect, useState } from "react";
import axios from "axios";
import MovieList from "../../components/MovieList/MovieList";
const API_GET_TRENDING_MOVIE =
  "https://api.themoviedb.org/3/trending/movie/day?api_key=f5604f45a67acfff1cd1e7f5065da619";
const Homepage = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    const getTrendingMovie = async () => {
      const trendingResponse = await axios.get(API_GET_TRENDING_MOVIE);
      setTrendingMovies(trendingResponse?.data.results);
    };

    getTrendingMovie();
  }, []);
  return (
    <div>
      <MovieList title="Trending" movieList={trendingMovies} />
    </div>
  );
};

export default Homepage;
