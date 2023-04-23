import React from "react";
import { FaCartPlus } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Header = (props) => {
  const { cart } = props;

  // React hooks được cung cấp từ thư viện react-router-dom
  const navigate = useNavigate();
  const cartAmount = cart.length;

  const onNavigateToCartPage = () => {
    console.log(" I am here");
    navigate("/cart");
  };
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Shoppi
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about-us">
                  About us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/admin">
                  Admin
                </Link>
              </li>
            </ul>
            <div
              className="d-flex align-items-center gap-3 pointer-event"
              onClick={onNavigateToCartPage}
            >
              <FaCartPlus />
              <span>({cartAmount})</span>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

// Custom hooks => reuse Logic
// Component => reuse UI
