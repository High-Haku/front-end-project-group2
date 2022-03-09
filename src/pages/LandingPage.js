import React from "react";
import CatLuvLogo from '../img/CatLuvCom.png';
import LazyCat from '../img/lazycat.png';
import "./LandingPage.css";
import Cart from '../img/cart.svg';
import Facebook from "../img/facebook.svg";
import Twitter from "../img/twitter.svg";
import Instagram from "../img/instagram.svg";
import Youtube from "../img/youtube.svg";
import Basket from '../img/basket.svg';
import Window from '../img/window-stack.svg';
import Book from '../img/book.svg';
import { Container, Navbar, Nav, Row, Col, Button, CardGroup, Card, Form, } from "react-bootstrap";

function LandingPage(){
    return(
        <div className="LandingPage">
        <div className="main-content">
            <Container>
      <Row>
    <Col className="text-cats" sm={6} responsive>
        <h2 responsive>Find Your Cats Any Information Details.</h2>
        <h3 responsive>Completely. Anything.</h3>
        <Button responsive className="btn btn-login"variant="primary" size="lg">
      Login Here
    </Button>{' '}
    </Col>
    <Col className="image-lazy-cat p-r-10" sm={6}>
    <img 
        src={LazyCat}
        style={{width:"100%", maxHeight:"100vh"}}
        className="lazy-cat ms-auto d-inline-block"
        alt="LazyCat" responsive
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
        </div>
    )
}

export default LandingPage;