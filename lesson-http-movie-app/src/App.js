import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./layouts/Header/Header";
import Home from "./pages/Home/Home";
import AboutUs from "./pages/AboutUs/AboutUs";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import MovieDetail from "./pages/MovieDetail/MovieDetail";
function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/movies/:movieId" element={<MovieDetail />} />

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

/**
 *
 *  / => Trang chủ
 *  /about-us => Trang AboutUs
 */
