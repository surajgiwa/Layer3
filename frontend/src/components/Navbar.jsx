import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';
import Logo from '../images/logo.png';
import './navbar.css';

const NavbarComponent = () => {
    return (
        <Navbar id="mainMenu" expand="lg" className="main-menu mega-menu">
            <Container>
                <Navbar.Brand as={Link} to="/" className="logo-container">
                    <img
                        src={Logo}
                        className="logo-img"
                        alt="Nav Logo"
                    />
                </Navbar.Brand>
                <Nav className="ml-auto">
                    <Nav.Link as={NavLink} to="/">Home</Nav.Link>
                    <Nav.Link as={NavLink} to="/about">About</Nav.Link>
                    <Nav.Link as={NavLink} to="/service">Services</Nav.Link>
                    <Nav.Link as={NavLink} to="/contact">Contact</Nav.Link>
                    <Nav.Link as={NavLink} to="/login">
                        <span className="nav-label label-nav-remita">Sign In</span>
                    </Nav.Link>
                    <Nav.Link as={NavLink} to="/requestdemo">
                        <span className="nav-label-signup label-nav-signup">Make a Request</span>
                    </Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default NavbarComponent;
