import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Homepage</Link>
          <Link to="/search">Search page</Link>
          <Link to="/about-us">About us</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
