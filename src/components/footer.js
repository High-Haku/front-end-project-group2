import React from "react";
import CatLuvLogo from '../img/CatLuvCom.png';
import LazyCat from '../img/lazycat.png';

import Cart from '../img/cart.svg';
import Facebook from "../img/facebook.svg";
import Twitter from "../img/twitter.svg";
import Instagram from "../img/instagram.svg";
import Youtube from "../img/youtube.svg";
import Basket from '../img/basket.svg';
import Window from '../img/window-stack.svg';
import Book from '../img/book.svg';
import { Container, Navbar, Nav, Row, Col, Button, CardGroup, Card, Form, } from "react-bootstrap";

function Footer(){
    return(
        <>
             <div className="Footer">
        <Container className="social-media p-3">
   <img className="icon socmed-icon m-r-10" width="30" height="30" alt="facebook"  src={Facebook}/>
   <img className="icon socmed-icon m-r-10"   width="30" height="30" alt="instagram" src={Instagram}/>
<img className="icon socmed-icon m-r-10" width="30" height="30 "alt="twitter"  src={Twitter}/>
<img className="icon socmed-icon m-r-10" width="30" height="30" alt="youtube" src={Youtube}/>
  </Container>
          <p>Front End Developer Project - Group 2</p>
        </div>
        </>
    );
}

export default Footer;