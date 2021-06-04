import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <Navbar className="py-4" bg="" expand="lg">
      <Navbar.Brand className="fw-bolder">
        <Link to="/" className="text-success text-decoration-none">
          {" "}
          TechNext.BLOG{" "}
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
        <Nav className="fw-bold">
          <Nav.Link className=" nav-text">
            <Link to="/" className="link">
              Home
            </Link>
          </Nav.Link>
          <Nav.Link className=" nav-text">
            <Link to={`/profile/${2}`} className="link">
              Profile
            </Link>
          </Nav.Link>
          <Nav.Link className=" nav-text" href="/">
            Registered
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
