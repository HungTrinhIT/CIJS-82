import React, { useEffect, useState } from "react";
import MovieList from "../../components/MovieList/MovieList";

// Functional Component (Stateless component)
// Class-based component (Statefull component)
// useFetch

const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [upComingMovies, setupComingMovies] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  //   UseEffect sẽ được gọi sau lần render đầu tiên
  useEffect(() => {
    fetchAllPopularMovie();
    fetchAllTopRatedMovie();
    fetchAllUpcomingMovie();
  }, []);

  const fetchAllPopularMovie = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/popular?api_key=f5604f45a67acfff1cd1e7f5065da619"
      );
      const data = await response.json();
      setPopularMovies(data.results);
      setIsLoading(false);
    } catch (error) {
      console.log("somethings went wrong:", error);
    }
  };
  const fetchAllTopRatedMovie = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/top_rated?api_key=f5604f45a67acfff1cd1e7f5065da619"
      );
      const data = await response.json();
      setTopRatedMovies(data.results);
      setIsLoading(false);
    } catch (error) {
      console.log("somethings went wrong:", error);
    }
  };
  const fetchAllUpcomingMovie = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/upcoming?api_key=f5604f45a67acfff1cd1e7f5065da619"
      );
      const data = await response.json();
      setupComingMovies(data.results);
      setIsLoading(false);
    } catch (error) {
      console.log("somethings went wrong:", error);
    }
  };

  return (
    <div>
      Homepage , hello mindx
      {isLoading === true ? (
        <div>Loading popular movie... </div>
      ) : (
        <main>
          <MovieList listTitle="Popular Movie" movieData={popularMovies} />
          <MovieList listTitle="Top Rated Movie" movieData={topRatedMovies} />
          <MovieList listTitle="Up Coming Movie" movieData={upComingMovies} />
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
*/
