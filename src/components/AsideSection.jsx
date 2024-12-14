import React from "react";
import { ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const AsideSection = ({ alignClass = "text-start ps-4" }) => {
  return (
    <div id="asideSection">
      <h4 className={alignClass}>Home</h4>
      <ListGroup className={alignClass}>
        <ListGroup.Item>
          <HashLink smooth to="#navbar">
            Home Page
          </HashLink>
        </ListGroup.Item>
        <ListGroup.Item>
          <Link to="/registration">Login</Link>
        </ListGroup.Item>
        <ListGroup.Item>
          <Link to="/dashboard">Dashboard</Link>
        </ListGroup.Item>
      </ListGroup>

      <h4 className={`${alignClass} pt-4`}>About</h4>
      <ListGroup className={alignClass}>
        <ListGroup.Item>
          <HashLink smooth to="#about">
            About Me
          </HashLink>
        </ListGroup.Item>
        <ListGroup.Item>
          <Link to="/about/workexperience">Work Experience</Link>
        </ListGroup.Item>
        <ListGroup.Item>
          <Link to="/about/technicalskills">Technical Skills</Link>
        </ListGroup.Item>
      </ListGroup>

      <h4 className={`${alignClass} pt-4`}>Portfolio</h4>
      <ListGroup className={alignClass}>
        <ListGroup.Item>
          <HashLink smooth to="#portofolio">
            Portfolio Me
          </HashLink>
        </ListGroup.Item>
      </ListGroup>

      <h4 className={`${alignClass} pt-4`}>Contact</h4>
      <ListGroup className={alignClass}>
        <ListGroup.Item>
          <HashLink smooth to="#contact">
            Contact Me
          </HashLink>
        </ListGroup.Item>
        <ListGroup.Item>
          <a href="https://www.linkedin.com/in/agil-panuchi" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </ListGroup.Item>
        <ListGroup.Item>
          <a href="https://agilpanuchi.github.io/" target="_blank" rel="noopener noreferrer">
            Github
          </a>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
};

export default AsideSection;
