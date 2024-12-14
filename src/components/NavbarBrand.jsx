import { Navbar } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";

const NavbarBrand = ({ name, logo }) => {
  return (
    <div className="navbarbrand">
      <Navbar.Brand href="#profile" as="span">
        <HashLink smooth to="#navbar">
          <img alt="Logo Brand" src={logo} width="30" height="30" className="rounded-circle me-2 textWhite" />
          <span className="lead textWhite"> {name} </span>
        </HashLink>
      </Navbar.Brand>
    </div>
  );
};

export default NavbarBrand;
