import React from "react";
import { Link } from "react-router-dom";

import Dropdown from "./components/Dropdown.jsx";

const Navbar = () => {
  return (
    <nav className="navbar bg-dark mb-3 sticky-top border-bottom border-dark-subtle">
      <div className="container-fluid">
        <Link to="/">
          <span className="navbar-brand mx-5 my-3 h1">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/5a/Star_Wars_Logo..png"
              alt="logo"
              width="120"
              height="70"
            />
          </span>
        </Link>
        <Dropdown />
      </div>
    </nav>
  );
};

export default Navbar;
