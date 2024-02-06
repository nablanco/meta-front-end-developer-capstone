import "./navigation.css";

import { HashLink } from "react-router-hash-link";

const Navigation = () => {
  return (
    <nav className="navigation">
      <ul>
        <li>
          <HashLink to="/" className="navigation-navlink">
            Home
          </HashLink>
        </li>
        <li>
          <HashLink to="/#about" className="navigation-navlink">
            About
          </HashLink>
        </li>
        <li>
          <HashLink to="/#menu" className="navigation-navlink">
            Menu
          </HashLink>
        </li>
        <li>
          <HashLink
            to="/reservations"
            className="navigation-navlink"
            name="navigation-navlink"
          >
            Reservations
          </HashLink>
        </li>
        <li>
          <HashLink to="/#order-online" className="navigation-navlink">
            Order Online
          </HashLink>
        </li>
        <li>
          <HashLink to="/#login" className="navigation-navlink">
            Login
          </HashLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
