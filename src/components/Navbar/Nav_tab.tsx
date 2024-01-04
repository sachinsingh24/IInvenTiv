/** @format */


import React, { useState } from "react";
import {
  Offcanvas,
  // NavDropdown,
  Navbar,
  Nav,
  Container,
} from "react-bootstrap";
import "./nav-tab.css";
// import logo from "../../Assets/JPU-Logo.png";
import { Link } from "react-router-dom";
const Nav_tab = () => {

  const [activeLink, setActiveLink] = useState("1"); // State to manage active link

  const handleNavClick = (eventKey:string) => {
    setActiveLink(eventKey); // Update active link on clicky
  };
  return (
    <>
    <section>
      {["md"].map((expand) => (
        <Navbar
          key={expand}
          expand={expand}
          className=""
          collapseOnSelect
        >
          <Container>
            <Navbar.Brand>
              <Link to="/">
                  <h2 style={{color:"#154489"}}><span style={{color:"#f9a33f"}}>II</span>nven<span style={{color:"#f9a33f"}}>T</span>iv</h2>
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle
              aria-controls={`offcanvasNavbar-expand-${expand}`}
            />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                <h2 style={{color:"#154489"}}><span style={{color:"#f9a33f"}}>II</span>nven<span style={{color:"#f9a33f"}}>T</span>iv</h2>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body aria-label="Close">
                <Nav className="justify-content-end flex-grow-1 pe-2">
                  <Nav.Link as={Link} to="/" eventKey="1" active={activeLink === "1"}
                    onClick={() => handleNavClick("1")}>
                    Home
                  </Nav.Link>
                  <Nav.Link as={Link} to="/Messages" eventKey="2" active={activeLink === "2"}
                    onClick={() => handleNavClick("2")}>
                  Messages
                  </Nav.Link>
                  <Nav.Link as={Link} to="/R&D_Showcase" eventKey="3" active={activeLink === "3"}
                    onClick={() => handleNavClick("3")}>
                  R&D Showcase
                  </Nav.Link>
                  <Nav.Link as={Link} to="/Program_Guide" eventKey="4" active={activeLink === "4"}
                    onClick={() => handleNavClick("4")}>
                  Program Guide
                  </Nav.Link>
                  <Nav.Link as={Link} to="/Logistics" eventKey="5" active={activeLink === "5"}
                    onClick={() => handleNavClick("5")}>
                  Logistics
                  </Nav.Link>
                  <Nav.Link as={Link} to="/Outreach" eventKey="6" active={activeLink === "6"}
                    onClick={() => handleNavClick("6")}>
                  Outreach
                  </Nav.Link>
                  {/* <NavDropdown
                    title="R&D Showcase"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item
                      as={Link}
                      to="/Constructed"
                      eventKey="3"
                    >
                      Constructed
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      as={Link}
                      to="/ShivParadise"
                      eventKey="4"
                    >
                      Shiv Paradise
                    </NavDropdown.Item>
                  </NavDropdown> */}
                  <Nav.Link as={Link} to="/Contact" eventKey="7" active={activeLink === "7"}
                    onClick={() => handleNavClick("7")}>
                    Contact Us
                  </Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </section>
  </>
  )
}

export default Nav_tab



