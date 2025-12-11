import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

type NavbarProps = {};
const Navbar: React.FC<NavbarProps> = () => {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="logo">
          <h1>BEAM</h1>
        </div>
        <ul className="links">
          <li>
            <Link to="/docs/getting-started/whatIsBeam">Docs</Link>
          </li>
          <li>
            <Link to="/templates">Templates</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="https://github.com/jDelille/CAST" target="blank">
              Github
            </Link>
          </li>
        </ul>
        {/* <div className="controls">
          <input type="text" placeholder="Search documentation..." />
        </div> */}
      </div>
    </nav>
  );
};

export default Navbar;
