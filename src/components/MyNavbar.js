import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Container, Button } from "react-bootstrap";

import Cart from "./Cart";
import { NavLink } from "react-router-dom";
import CreateContext from "../store/create-context";
import { useHistory } from "react-router-dom";
const MyNavbar = () => {
  const createcontext = useContext(CreateContext);
  let isLoggedIn = createcontext.isLoggedIn;
  const history = useHistory();
  function LogoutUser() {
    createcontext.logout();
    history.replace("/auth");
  }
  return (
    <Navbar className="sticky-top navbar navbar-expand-lg navbar-dark bg-dark">
      <Container>
      <Navbar.Brand href="/" >
            The Genrics
          </Navbar.Brand>
        <Nav className="mr-auto">
          {isLoggedIn ? (
            <>
              <Nav.Item>
                <NavLink to="/" exact className="nav-link">
                  Home
                </NavLink>
              </Nav.Item>
              <Nav.Item>
                <NavLink to="/store" className="nav-link">
                  Store
                </NavLink>
              </Nav.Item>
              <Nav.Item>
                <NavLink to="/about" className="nav-link">
                  About
                </NavLink>
              </Nav.Item>
              <Nav.Item>
                <NavLink to="/contact" className="nav-link">
                  Contact
                </NavLink>
              </Nav.Item>
              <Nav.Item>
                <Button variant="primary" type="submit" onClick={LogoutUser}>
                  Logout
                </Button>
              </Nav.Item>
            </>
          ) : (
            <Nav.Item>
              <NavLink to="/auth" className="nav-link">
                Login
              </NavLink>
            </Nav.Item>
          )}
        </Nav>
        <Cart />
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
