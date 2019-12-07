import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <h1>
        Welcome to Terence's portfolio website
      </h1>
      <Link to="/">Login</Link>
    </div>
  );
}

export default Header;
