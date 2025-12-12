import React from "react";
import { Link } from "react-router-dom";
import { NavLink, useLocation } from "react-router-dom";

import "./Navbar.scss";

type NavbarProps = {};
const Navbar: React.FC<NavbarProps> = () => {
  const location = useLocation();
  const isDocs = location.pathname.includes("/docs");
  const isTemplates = location.pathname.includes("/templates");
  const isAbout = location.pathname.includes("/about");


  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="logo">
          <NavLink to={'/'} className={"logo-text"}>BEAM</NavLink>
        </div>
        <ul className="links">
          <li>
            <Link
              to="/docs/getting-started/whatIsBeam"
              className={isDocs ? "active" : "inactive"}
            >
              Docs
            </Link>
          </li>
          <li>
            <Link to="/templates" className={isTemplates ? "active" : "inactive"}>Templates</Link>
          </li>
          <li>
            <Link to="/about" className={isAbout ? "active" : "inactive"}>About</Link>
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
