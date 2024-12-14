import React, { useState } from "react";
import { Offcanvas, Nav, Button } from "react-bootstrap";
import { FiAlignRight } from "react-icons/fi";
import { FaHome } from "react-icons/fa";
import { SiAboutdotme } from "react-icons/si";
import { GrContact } from "react-icons/gr";
import { MdOutlineContentCopy } from "react-icons/md";
import { FiLogIn } from "react-icons/fi";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const NavbarOffcanvas = () => {
  const [show, setShow] = useState(false);
  const [showSubmenu, setShowSubmenu] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const toggleSubmenu = () => setShowSubmenu(!showSubmenu);

  return (
    <>
      <Button variant="outline-light" className="d-md-none" onClick={handleShow}>
        <FiAlignRight className="fs-2" />
      </Button>

      <Offcanvas show={show} onHide={handleClose} placement="end" className="text-white">
        <Offcanvas.Header closeButton className="bgUnguOffcanvas">
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="bgUnguOffcanvas">
          <Nav className="flex-column">
            <Nav.Link onClick={toggleSubmenu} className="text-white d-flex align-items-center justify-content-between">
              <span>
                <FaHome /> <span className="m-2">Home</span>
              </span>
              <span>{showSubmenu ? "▲" : "▼"}</span>
            </Nav.Link>
            {showSubmenu && (
              <div className="ms-4">
                <Link to="/" className="dropdown-item">
                  Home Page
                </Link>
                <Link to="/registration" onClick={handleClose} className="nav-link text-white">
                  Login
                </Link>
                <Link to="/dashboard" onClick={handleClose} className="nav-link text-white">
                  Dashboard
                </Link>
                <Link to="/about/workexperience" onClick={handleClose} className="nav-link text-white">
                  Work Experience
                </Link>
                <Link to="/about/technicalskills" onClick={handleClose} className="nav-link text-white">
                  Technical Skills
                </Link>
              </div>
            )}

            <HashLink smooth to="#about" onClick={handleClose} className="nav-link text-white">
              <SiAboutdotme /> <span className="m-2">About Me</span>
            </HashLink>

            <HashLink smooth to="#portofolio" onClick={handleClose} className="nav-link text-white">
              <MdOutlineContentCopy /> <span className="m-2">Portfolio</span>
            </HashLink>

            <HashLink smooth to="#contact" onClick={handleClose} className="nav-link text-white">
              <GrContact /> <span className="m-2">Contact</span>
            </HashLink>

            <Link to="/registration" onClick={handleClose} className="nav-link text-white">
              <FiLogIn /> <span className="m-2">Login</span>
            </Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default NavbarOffcanvas;
