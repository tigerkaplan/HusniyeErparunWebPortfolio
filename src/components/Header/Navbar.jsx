//React-router linking
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav>
      <Link to="/" className="title"> Website </Link>
      <ul>
        <li>
          {" "}<Link to="/About"> About </Link>{" "}
        </li>
        <li>
          {" "}<Link to="/Portfolio"> Portfolio </Link>{" "}
        </li>
        <li>
          {" "}<Link to="/Contact"> Contact </Link>{" "}
        </li>
      </ul>
    </nav>
  );
};
