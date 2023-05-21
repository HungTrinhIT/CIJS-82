export const PREFIX_IMAGE = "https://image.tmdb.org/t/p/original";

export const BASE_API_URL = "https://api.themoviedb.org/3";
export const API_KEY = "f5604f45a67acfff1cd1e7f5065da619";

// API endpoints
export const API_MOVIES_URL = {
  popular: `${BASE_API_URL}/movie/popular?api_key=${API_KEY}`,
  upcoming: `${BASE_API_URL}/movie/top_rated?api_key=${API_KEY}`,
  topRated: `${BASE_API_URL}/movie/upcoming?api_key=${API_KEY}`,
};
