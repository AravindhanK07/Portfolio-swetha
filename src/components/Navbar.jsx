import React from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md fixed-top navbar-inverse navbar-light">
      <div className="container">
        <button
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#nav"
          aria-controls="nav"
          aria-label="Expand navigation"
        >
          <div className="navbar-toggler-icon"></div>
        </button>
        <div className="collapse navbar-collapse" id="nav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={-56}
                duration={500}
                className="nav-link"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="skills"
                spy={true}
                smooth={true}
                offset={-56}
                duration={500}
                className="nav-link"
              >
                Skills
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                offset={-56}
                duration={500}
                className="nav-link"
              >
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-56}
                duration={500}
                className="nav-link"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
