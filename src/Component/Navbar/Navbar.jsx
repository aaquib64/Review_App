import React from "react";
import { Link } from "react-router-dom";
import Home from "./Home/Home";
import Store from "./Store/Store";
import WriteReview from "./WriteReview/WriteReview";
import Login from "./Login/Login";
import Signup from "./Signup/Signup";

function Navbar() {
  return (
    <nav className="navbar sticky-top navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        {/* Brand Name */}
        <Link to="/SearchBar" className="navbar-brand mx-5 text-primary fw-bold " >RateMyStore</Link>

        {/* Toggle Button for Mobile View */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-5">
            <Home />
            <Store />
            <WriteReview />
          </ul>

          {/* Push Login & Signup to the right */}
          <div className="ms-auto d-flex align-items-center">
            <Login />
            <Signup />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
