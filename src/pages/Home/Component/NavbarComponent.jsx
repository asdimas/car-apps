import React from "react";
import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavbarComponent = () => {
  return (
    <>
      {["md"].map((expand) => (
        <Navbar
          key={expand}
          bg="transparent"
          expand={expand}
          className="navbar"
        >
          <Container>
            <Navbar.Brand href="/" className="navbar-brand">
              <Link to="/"></Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  BCR
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className="nav-body">
                <Nav className="justify-content-end flex-grow-1 nav">
                  <Nav.Link className="me-3 nav-link" href="#service">
                    Our Service
                  </Nav.Link>
                  <Nav.Link className="me-3 nav-link" href="#whyus">
                    Why Us
                  </Nav.Link>
                  <Nav.Link className="me-3 nav-link" href="#testimonial">
                    Testimonial
                  </Nav.Link>
                  <Nav.Link href="#faq" className="nav-link">
                    FAQ
                  </Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
};

export default NavbarComponent;
