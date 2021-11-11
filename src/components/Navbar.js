import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/container';
import Navbar from 'react-bootstrap/Navbar'
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link} from 'react-router-dom';


export default function navbar() {
    return (
        <div>
          <Navbar bg="light" variant="light" style={{justifyContent:'space-between'}}
          >
              {/* <Container> */}
                <Navbar.Brand href="#home">GeoActivist</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/map">Map</Nav.Link>
                    <Nav.Link href="#link">About</Nav.Link>
                    <Nav.Link href="/sign">Sign In</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              {/* </Container> */}
            </Navbar>
        </div>
    )
}
