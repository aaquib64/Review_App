import React from "react";
import { Link } from "react-router-dom";

function WriteReview() {
  return (
    <li className="nav-item mx-3">
      <Link to="/Review" className="nav-link">Write a Review</Link>
    </li>
  );
}

export default WriteReview;
