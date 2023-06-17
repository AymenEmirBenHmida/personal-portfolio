import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
function CNavbar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#Skills">Skills</Nav.Link>
            <Nav.Link href="#Projects">Projects</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className=" social-icon">
              <a href="#">
                <img src={""} alt=""></img>
              </a>
              <a href="#">
                <img src={""} alt=""></img>
              </a>
            </div>
          </span>
          <button className="vvd" onClick={()=>(
            console.log("hello")
          )}><span> Say Hello</span></button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CNavbar;
