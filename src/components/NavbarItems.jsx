import React from "react";
import { Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const NavbarItems = () => {
  return (
    <div className="navbaritems">
      <Nav className="me-auto d-none d-md-flex">
        <NavDropdown title="Home" id="navbarScrollingDropdown">
          <NavDropdown.Item as="span">
            <Link to="/" className="dropdown-item">
              Home Page
            </Link>
          </NavDropdown.Item>
          <NavDropdown.Item as="span">
            <Link to="/registration" className="dropdown-item">
              Login
            </Link>
          </NavDropdown.Item>
          <NavDropdown.Item as="span">
            <Link to="/dashboard" className="dropdown-item">
              Dashboard
            </Link>
          </NavDropdown.Item>
          <NavDropdown.Item as="span">
            <Link to="/about/workexperience" className="dropdown-item">
              Work Experience
            </Link>
          </NavDropdown.Item>
          <NavDropdown.Item as="span">
            <Link to="/about/technicalskills" className="dropdown-item">
              Technical Skills
            </Link>
          </NavDropdown.Item>
        </NavDropdown>
        <Nav.Link as="span">
          <HashLink smooth to="#about">
            About Me
          </HashLink>
        </Nav.Link>
        <Nav.Link as="span">
          <HashLink smooth to="#portofolio">
            Portofolio
          </HashLink>
        </Nav.Link>
        <Nav.Link as="span">
          <HashLink smooth to="#contact">
            Contact
          </HashLink>
        </Nav.Link>
      </Nav>
    </div>
  );
};

export default NavbarItems;
