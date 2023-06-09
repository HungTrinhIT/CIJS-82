import React from "react";
import { FaCartPlus } from "react-icons/fa";

const Header = (props) => {
  const { cart } = props;
  const cartAmount = cart.length;
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Shoppi
          </a>
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
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About us
                </a>
              </li>
            </ul>
            <div
              className="d-flex align-items-center gap-3 pointer-event"
              data-bs-toggle="modal"
              data-bs-target="#cart"
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
