import React, { Component } from 'react';
import Logo from './photos/navbar/chaaLogo.jpeg';
import { Navbar, Nav,} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook,faInstagram } from '@fortawesome/free-brands-svg-icons' 

export default class Navbar2 extends Component {
    render(){ 
        return(
            <Navbar collapseOnSelect expand="lg" bg="transparent">
                <Navbar.Brand href="/">
                    <img
                        alt=""
                        src={Logo}
                        width="25%"
                        height="25%"
                        className="d-inline-block align-top"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto"> 
                    </Nav>
                    <Nav>
                        <Nav.Link className="text-dark" href="/members"><strong>MEMBERS</strong></Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link >{"           "}</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link className="text-dark" href="/performances"><strong>PERFORMANCES</strong></Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link >{"           "}</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link className="text-dark" href="/join"><strong>JOIN</strong></Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link >{"           "}</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link className="text-dark" href="/contactus"><strong>CONTACT</strong></Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link >{"           "}</Nav.Link>
                    </Nav>
                    <Nav >
                        <Nav.Link href="https://www.instagram.com/washu_chaahat/?hl=en"> <FontAwesomeIcon icon={faInstagram} size= "2x" color = "black"/></Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link >{"           "}</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="https://www.facebook.com/wuchaahat/"><FontAwesomeIcon icon={faFacebook} size= "2x" color = "black"/></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        ); 
    }
}


