import React from "react";
import NavbarBrand from "./NavbarBrand";
import NavbarSearch from "./NavbarSearch";
import NavbarItems from "./NavbarItems";
import NavbarOffcanvas from "./NavbarOffcanvas";
import { Container } from "react-bootstrap";

const NavbarSection = ({ name, logo, showSearch }) => {
  return (
    <div id="navbar" className="d-print-none user-select-none">
      <nav className="navbar fixed-top bgUngu" expand="md">
        <Container>
          <NavbarBrand name={name} logo={logo} />
          <NavbarSearch showSearch={showSearch} />
          <NavbarItems />
          <NavbarOffcanvas />
        </Container>
      </nav>
    </div>
  );
};

export default NavbarSection;
