import React, { useState } from "react";
import { FormControl } from "react-bootstrap";

const NavbarSearch = ({ showSearch }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  return <div className="navbarsearch">{showSearch && <FormControl type="text" placeholder="Search" value={searchValue} onChange={handleSearchChange} className="d-none d-lg-inline lead custom-placeholder" />}</div>;
};

export default NavbarSearch;
