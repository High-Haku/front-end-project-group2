import React from "react";
import CatLuvLogo from "../img/CatLuvCom.png";
import { Container, Navbar, Nav, Image } from "react-bootstrap";
import Cart from "../img/cart.svg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function NavbarPage() {

  const state = useSelector((state)=>state.handleCart)

  return (

    <div className="header">
      <Navbar className="navbar" expand="md">
        <Container>
          <Navbar.Brand className="navbar navbar-brand">
            <Link to="/">
              <img
                src={CatLuvLogo}
                width="200"
                height="50"
                className="d-inline-block align-top"
                alt="CatLuv logo"
              />
            </Link>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            className="navbar-collapse justify-content-end"
            id="basic-navbar-nav"
          >
            <Nav className="nav">
              <Nav.Link className="nav-link" href="/cats">
                Cat List
              </Nav.Link>
              <Nav.Link className="nav-link" href="/profile">
                Profile
              </Nav.Link>
              <Nav.Link className="nav-link" href="/catshop">
                Shop
              </Nav.Link>
              <Nav.Link className="nav-link" href="/cart">
                <img
                  alt="icon cart-icon m-r-10"
                  width="25"
                  height="25"
                  src={Cart}
                />
                Cart ({state.length})
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavbarPage;
