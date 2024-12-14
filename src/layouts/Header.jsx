import React from "react";
import NavbarSection from "../components/NavbarSection";

const Header = ({ name, logo, showSearch }) => {
  return <NavbarSection name={name} logo={logo} showSearch={showSearch} />;
};

export default Header;
