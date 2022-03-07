import React from "react";
import CatLuvLogo from '../img/CatLuvCom.png';
import LazyCat from '../img/lazycat.png';
import "./LandingPage.css";
import Basket from '../img/basket.svg';
import Window from '../img/window-stack.svg';
import Book from '../img/book.svg';
import { Container, Navbar, Nav, Row, Col, Button, CardGroup, Card, Form, } from "react-bootstrap";
import { AiFillFacebook, AiFillTwitterSquare, AiFillInstagram, AiFillYoutube} from "react-icons/ai";

function LandingPage(){
    return(
        <div className="LandingPage">
           <div className="header">
  <Navbar expand="md">
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
    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
    <Navbar.Collapse id="basic-navbar-nav justify-content-end">
    <Nav className="me-auto justify-content-end">
      <Nav.Link className="nav-link" href="#pricing">Pricing</Nav.Link>
      <Nav.Link className="nav-link" href="#courses">Courses</Nav.Link>
      <Nav.Link className="nav-link" href="#service">Service</Nav.Link>
      <Nav.Link className="nav-link" href="#company">Company</Nav.Link>
    </Nav>
    </Navbar.Collapse>
    </Container>
  </Navbar>
        </div>
        <div className="main-content">
            <Container>
      <Row>
    <Col className="text-cats" sm={6} responsive>
        <h2>Find Your Cats Any Information Details.</h2>
        <h3>Completely. Anything.</h3>
        <Button className="btn btn-login"variant="primary" width="500" height="300">
      Login Here
    </Button>{' '}
    </Col>
    <Col className="image-lazy-cat" sm={6} responsive>
    <img 
        src={LazyCat}
        width="650"
        height="350"
        className="lazy-cat d-inline-block align-top"
        alt="LazyCat"
      />
    </Col>
    </Row>
            </Container>
        </div>
        <div className="card-group">
            <Container>
<CardGroup className="p-5">
<Card className="card border-0 p-20">
<Card.Img className="icon-left icon-basket" width="50" style={{filter: "invert(19%) sepia(96%) saturate(5161%) hue-rotate(276deg) brightness(99%) contrast(96%)"}} variant="left" height="50" alt="Basket" src={Basket}/>
<Card.Title className="card-title">Shop</Card.Title>
<Card.Text className="card-text">Shopping any accessories and food for your cats.</Card.Text>
</Card>
<Card className="card border-0 p-20">
<Card.Img className="icon icon-window" width="50" style={{filter: "invert(9%) sepia(99%) saturate(5630%) hue-rotate(246deg) brightness(111%) contrast(148%)"}} variant="left" height="50" alt="Window" src={Window}/>
<Card.Title className="card-title">Access from Any Platform</Card.Title>
<Card.Text className="card-text">Use the benefits of the services anywhere.</Card.Text>

</Card>
<Card className="card border-0 p-20">
<Card.Img className="icon icon-book float-left" width="50" style={{filter: "invert(45%) sepia(64%) saturate(2946%) hue-rotate(339deg) brightness(100%) contrast(102%)"}} variant="left"  height="50" alt="Book" src={Book}/>
<Card.Title className="card-title ">Guides and Community</Card.Title>
<Card.Text className="card-text">A private community that we care each others.</Card.Text>
</Card>
</CardGroup>
</Container>
        </div>
        <div className="newsletter p-5 border-10">
          <Container>
            <h2 className="text-center">Subscribe Newsletter</h2>
            <Form className="p-5">
            <Form.Group className="mb-3 "controlId="formBasicEmail">
    <Form.Control type="email" placeholder="Enter email"/>
  </Form.Group>
  <Button className="justify-content-end" variant="primary" type="submit">
    Submit
  </Button>
            </Form>
          </Container>

        </div>
        <div className="Footer">
        <Container className="social-media p-10">
   <img width="5%" alt="facebook" style={{filter: "invert(100%) sepia(58%) saturate(2%) hue-rotate(273deg) brightness(113%) contrast(101%)"}} src={AiFillFacebook}/>
   <img width="5%" alt="instagram" style={{filter: "invert(100%) sepia(58%) saturate(2%) hue-rotate(273deg) brightness(113%) contrast(101%)"}} src={AiFillInstagram}/>
<img width="5%" alt="twitter" style={{filter: "invert(100%) sepia(58%) saturate(2%) hue-rotate(273deg) brightness(113%) contrast(101%)"}} src={AiFillTwitterSquare}/>
<img width="5%" alt="youtube"style={{filter: "invert(100%) sepia(58%) saturate(2%) hue-rotate(273deg) brightness(113%) contrast(101%)"}} src={AiFillYoutube}/>
  </Container>
          <p>Front End Developer Project - Group 2</p>
        </div>
        </div>
    )
}

export default LandingPage;