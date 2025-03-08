import React from "react";
import { Link } from "react-router-dom";

function Store() {
  return (
    <li className="nav-item mx-3">
      <Link to='/Store' className="nav-link" >Store</Link>
    </li>
  );
}

export default Store;
