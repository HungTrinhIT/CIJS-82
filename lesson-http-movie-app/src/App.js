import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./layouts/Header/Header";
import Home from "./pages/Home/Home";
import AboutUs from "./pages/AboutUs/AboutUs";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import MovieDetail from "./pages/MovieDetail/MovieDetail";

// SPA: Single Page Application
function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/movies/:movieId" element={<MovieDetail />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;

/**
 *
 *  / => Trang chủ
 *  /about-us => Trang AboutUs
 *  ReactJS is a library  !== framework (vuejs, angular)
 */
