import React, { useState } from "react";

//React-router linking
import { Link, NavLink } from "react-router-dom";
// css classes
import "../Header/Navbar.css";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav>
      <Link to="/" className="title">
        Website
      </Link>
      <div className="menu">
        <span />
        <span />
        <span />
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to="/About"> About </NavLink>
        </li>
        <li>
          <NavLink to="/Portfolio"> Portfolio </NavLink>
        </li>
        <li>
          <NavLink to="/Contact"> Contact </NavLink>
        </li>
      </ul>
    </nav>
  );
};
