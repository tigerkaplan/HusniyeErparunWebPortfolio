//React-router linking
import { Link, NavLink } from "react-router-dom";
// css classes
import "../Header/Navbar.css";

export const Navbar = () => {
  return (
    <nav>
      <Link to="/" className="title">
        Website
      </Link>
      <ul>
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
