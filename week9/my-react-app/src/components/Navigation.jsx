import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import AuthenticationButton from "./AuthenticationButton";

function Navigation() {
  return (
    <Navbar bg="light" expand="sm" className="mb-3">
      <Container fluid>
        {/* Toggle for collapse */}
        <Navbar.Toggle aria-controls="main-navbar-nav" />

        {/* Collapsible content */}
        <Navbar.Collapse id="main-navbar-nav" className="justify-content-end">
          <Nav className="me-3">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/tasks">Tasks</Nav.Link>
            <Nav.Link as={Link} to="/profile">Profile</Nav.Link>
          </Nav>
          <AuthenticationButton />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
