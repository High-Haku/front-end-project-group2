import React from "react";
import CatLuvLogo from '../img/CatLuvCom.png';
import LazyCat from '../img/lazycat.png';
import "./LandingPage.css";
import Basket from '../img/basket.svg';
import Window from '../img/window-stack.svg';
import Book from '../img/book.svg';
import { Container, Navbar, Nav, Row, Col, Button, CardGroup, Card} from "react-bootstrap";

function LandingPage(){
    return(
        <div className="LandingPage">
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
        <div className="main-content">
            <Container>
      <Row>
    <Col className="text-cats" sm={6}>
        <h2>Find Your Cats Any Information Details.</h2>
        <h3>Completely. Anything.</h3>
        <Button className="btn btn-login"variant="primary" width="500" height="300">
      Login Here
    </Button>{' '}
    </Col>
    <Col className="image-lazy-cat" sm={6}>
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
<CardGroup>
<Card className="card border-0 p-20">
<Card.Img className="icon-left icon-basket" variant="top" width="50" height="50" alt="Basket" color="purple" src={Basket}/>
<Card.Title className="card-title">Shop</Card.Title>
<Card.Text className="card-text">Shopping any accessories and food for your cats.</Card.Text>
</Card>
<Card className="card border-0 p-20">
<Card.Img className="icon icon-window" variant="top" width="50" height="50" alt="Window" src={Window}/>
<Card.Title className="card-title">Access from Any Platform</Card.Title>
<Card.Text className="card-text">Use the benefits of the services anywhere.</Card.Text>

</Card>
<Card className="card border-0 p-20">
<Card.Img className="icon icon-book" variant="top" width="50" height="50" alt="Book" src={Book}/>
<Card.Title className="card-title ">Guides and Community</Card.Title>
<Card.Text className="card-text">A private community that we care each others.</Card.Text>
</Card>
</CardGroup>
</Container>
        </div>
        <div className="Footer">
          <p>Front End Developer Project - Group 2</p>
        </div>
        </div>
    )
}

export default LandingPage;