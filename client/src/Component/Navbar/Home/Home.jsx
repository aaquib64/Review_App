import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <li className="nav-item mx-3">
      <Link to="/SearchBar" className="nav-link active" > Home </Link>
    </li>
  );
}

export default Home;
