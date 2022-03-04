import React from 'react';
import CatLuvLogo from '../img/CatLuvCom.png';
import { Container, Navbar, Nav, Image} from "react-bootstrap";
import ImgNotFound from "../img/img-not-found.jpeg";
import './NotFound.css';

function NotFound(){
return(
    <div className="NotFound">
        <div className="header">
  <Navbar>
      <Container>      
    <Navbar.Brand href="#home">
      <img
        src={CatLuvLogo}
        width="200"
        height="50"
        className="d-inline-block align-top"
        alt="CatLuv logo"
      />
    </Navbar.Brand>      
    <Nav className="justify-content-end">
      <Nav.Link className="nav-link" href="#pricing">Pricing</Nav.Link>
      <Nav.Link className="nav-link" href="#courses">Courses</Nav.Link>
      <Nav.Link className="nav-link" href="#service">Service</Nav.Link>
      <Nav.Link className="nav-link" href="#company">Company</Nav.Link>
    </Nav>
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