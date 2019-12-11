import React from "react";
import {Link} from "react-router-dom";

function Header() {
  return (
    <h1>
      Welcome to Terence's portfolio website
      <Link to="/new">Add project</Link>
    </h1>
  );
}

export default Header;
