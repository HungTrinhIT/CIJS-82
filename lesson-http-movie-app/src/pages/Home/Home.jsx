import React from "react";
import MovieList from "../../components/MovieList/MovieList";
import useFetch from "../../hooks/useFetch";
import { API_MOVIES_URL } from "../../utils/constants";
import Loading from "../../components/Loading/Loading";

// Functional Component (Stateless component)
// Class-based component (Statefull component)

const Home = () => {
  const { data: popularMovies, isLoading: popularMovieLoading } = useFetch(
    API_MOVIES_URL.popular
  );
  const { data: upComingMovies, isLoading: upcomingMovieLoading } = useFetch(
    API_MOVIES_URL.upcoming
  );
  const { data: topRatedMovies, isLoading: topRatedMovieLoading } = useFetch(
    API_MOVIES_URL.topRated
  );

  const isLoading =
    popularMovieLoading || upcomingMovieLoading || topRatedMovieLoading;

  const VOUCHER_CODES = {
    ABC: 0.1,
    sdasd: 0.2,
  };

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <main>
          <MovieList
            listTitle="Popular Movie"
            movieData={popularMovies.results}
          />
          <MovieList
            listTitle="Top Rated Movie"
            movieData={topRatedMovies.results}
          />
          <MovieList
            listTitle="Up Coming Movie"
            movieData={upComingMovies.results}
          />
        </main>
      )}
    </div>
  );
};

export default Home;

// Hàm .then().catch() để xử lý những đối tượng promise
// const fetchAllPopularMovie = () => {
//     fetch(
//       "https://api.themoviedb.org/3/movie/popular?api_key=f5604f45a67acfff1cd1e7f5065da619"
//     )
//       .then((response) => {
//         return response.json();
//       })
//       .then((data) => {
//         setPopularMovies(data?.result);
//       })
//       .catch((error) => {
//         console.log("Calling API failed", error);
//       });
//   };
// crash trang => trắng trang

/*
    Lifecycle reactjs => Vòng đời của 1 component
    Phrase
        Mounting (khởi tạo)
        Updating (Cập nhật)
        Un-Mounting (Gỡ bỏ khỏi DOM Tree)


    reactjs
        + component là gì
        + props là gì
        + jsx là gì
        + cách mà truyền nhận dữ liệu giữa các component thông qua props
        + state => quản lý trạng thái của 1 component 
        + event handling: onClick, onFocus
        + Form Handling: onChange, onSubmit
        + List: cách mình render 1 cái list
        + Conditional rendering

    3 projects:    
        Todolist
        Cart Project
        Expense App

    Bài test cá nhân
     1. Problem solving: JS 
     2. Problem solving: JS 
     3. Requirement , Design, API
        + Code 1 ứng dụng
        + Form, state, props, list, event handling,...

  Best practices khi viết React Component
  ReactJS => component-based

  1. UI => JSX (Javascript XML) (HTML + syntax của JSX)
  2. Xử lý logic: event-handling, mapping data
  3. State and Hooks

  => Muốn tái sử dụng UI => tách thành component
  => Muốn tái sử dụng logic của component => viết những logic đó trong 1 customHooks

*/
