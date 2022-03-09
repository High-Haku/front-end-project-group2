import React from 'react';
import CatLuvLogo from '../img/CatLuvCom.png';
import { Container, Navbar, Nav, Image} from "react-bootstrap";
import ImgNotFound from "../img/img-not-found.jpeg";
import './NotFound.css';
import Cart from '../img/cart.svg';

function NotFound(){
return(
    <div className="NotFound">
  <div className="header">
  <Navbar className="navbar" expand="md">
    <Container>
    <Navbar.Brand className="navbar navbar-brand"href="#home">
      <img
        src={CatLuvLogo}
        width="200"
        height="50"
        className="d-inline-block align-top"
        alt="CatLuv logo"
      />
    </Navbar.Brand>     
    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
    <Navbar.Collapse className="navbar-collapse justify-content-end" id="basic-navbar-nav">
    <Nav className="nav">
      <Nav.Link className="nav-link" href="#pricing">Pricing</Nav.Link>
      <Nav.Link className="nav-link" href="#courses">Courses</Nav.Link>
      <Nav.Link className="nav-link" href="#service">Service</Nav.Link>
      <Nav.Link className="nav-link" href="#company"><img alt="icon cart-icon m-r-10" width="25" height="25" src={Cart}/>Cart</Nav.Link>
    </Nav>
    </Navbar.Collapse>
    </Container>
  </Navbar>
        </div>
        <div className='main-content'>
        <Image fluid src={ImgNotFound} responsive/>

        </div>

        <div className="Footer">
          <p>Front End Developer Project - Group 2</p>
        </div>
    </div>
)

}

export default NotFound