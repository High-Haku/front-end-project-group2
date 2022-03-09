import React from 'react';
import CatLuvLogo from '../img/CatLuvCom.png';
import { Container, Navbar, Nav, Image} from "react-bootstrap";
import ImgNotFound from "../img/img-not-found.jpeg";
import './NotFound.css';
import Cart from '../img/cart.svg';

function NotFound(){
return(
    <div className="NotFound">
        <div className='main-content' style={{backgroundColor:"#fbbb2c", minHeight:"100vh"}}>
        <Image className="notfound-cat img-fluid w-100 h-auto" src={ImgNotFound} responsive/>

        </div>
    </div>
)

}

export default NotFound