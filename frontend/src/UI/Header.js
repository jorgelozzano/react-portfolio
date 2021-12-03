import React from "react";
import { BrowserRouter as Router, Routes, Link, Route } from "react-router-dom";
import styles from "./Header.module.css";
import Home from "../Components/Home";
import About from "../Components/About";
import Portfolio from "../Components/Portfolio";
import { Nav, Navbar, Container } from "react-bootstrap";
import { AiFillInstagram, AiFillLinkedin, AiFillMail } from "react-icons/ai";

const Header = () => {
  const brandName = "Jorge Lozano";
  return (
    <React.Fragment>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            <Link className={styles.mainLink} to="/">
              {brandName}
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto text-center">
              <Nav.Link>
                <Link className={styles.links} to="/">
                  Home
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link className={styles.links} to="/about">
                  About
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link className={styles.links} to="/portfolio">
                  Portfolio
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </React.Fragment>
  );
};

export default Header;
