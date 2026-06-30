import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import {NavLink } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";

function NavBar() {
  const [expand, setExpand] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      if (window.scrollY >= 20) {
        updateNavbar(true);
      } else {
        updateNavbar(false);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      onToggle={(expanded) => setExpand(expanded)}
      className={`${navColour ? "sticky" : "navbar"} ${scrolled ? "scrolled" : ""}`}
      style={{ transition: "all 0.4s ease" }}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          <div className="mr-logo">
            <div className="mr-box"></div>
            <div className="mr-corner-fill"></div>
            <div className="mr-corner-line"></div>
            <span className="mr-text">MR</span>
            <div className="mr-scanline"></div>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => setExpand(expand ? false : "expanded")}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link
                as={NavLink}
                to="/"
                onClick={() => setExpand(false)}
              >
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={NavLink}
                to="/about"
                onClick={() => setExpand(false)}
              >
                <AiOutlineUser style={{ marginBottom: "2px" }} /> About
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={NavLink}
                to="/project"
                onClick={() => setExpand(false)}
              >
                <AiOutlineFundProjectionScreen style={{ marginBottom: "2px" }} />{" "}
                Projects
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={NavLink}
                to="/resume"
                onClick={() => setExpand(false)}
              >
                <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;