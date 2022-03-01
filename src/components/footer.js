import './Footer.css';
import React from 'react';
import {Link} from 'react-router-dom';

function Footer(){
    return(
        <>
            <footer>
                &copy; { new Date().getFullYear() } Copyright  <Link to="https://id.reactjs.org/" rel='noreferrer' target='_blank'> React JS</Link> <br/>
                Created with Visual Studio Code by Kelompok 1 
            </footer>
        </>
    );
}

export default Footer;