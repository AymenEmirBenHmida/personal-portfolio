import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../assets/img/logo.svg";
import navIcon1 from "../../assets/img/nav-icon1.svg";
import navIcon2 from "../../assets/img/nav-icon2.svg";
import navIcon3 from "../../assets/img/nav-icon3.svg";
function CNavbar() {
  const [activeRoute, setActiveRoute] = useState("home");
  const [scrolle, setScrolle] = useState(false);
  useEffect(() => {
    const onScroll = (e) => {
        if (window.scrollY >50){
            setScrolle(true);
        }else{
            setScrolle(false);
        }

    };

    window.addEventListener("scroll",onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  function onChangeActiveRoute(route){
    setActiveRoute(route);
  }
  return (
    <Navbar expand="lg" className={scrolle ? "scrolled":""}>
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeRoute === "home"? "active navbar-link":"navbar-link"} onClick={()=> onChangeActiveRoute('home')}>Home</Nav.Link>
            <Nav.Link href="#Skills" className={activeRoute === "skills"? "active navbar-link":"navbar-link"}  onClick={()=> onChangeActiveRoute('skills')}>Skills</Nav.Link>
            <Nav.Link href="#Projects" className={activeRoute === "projects"? "active navbar-link":"navbar-link"}  onClick={()=> onChangeActiveRoute('projects')}>Projects</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className=" social-icon">
             
              <a href="#">
                <img src={navIcon1} alt=""></img>
              </a>
              <a href="#">
                <img src={navIcon2} alt=""></img>
              </a>
              <a href="#">
                <img src={navIcon3} alt=""></img>
              </a>
            </div>
            <button className="vvd" onClick={() => console.log("hello")}>
            <span> Say Hello</span>
          </button>
          </span>
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CNavbar;
