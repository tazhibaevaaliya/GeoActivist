/* eslint-disable no-undef */
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar'
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown'; 
import Overlay from 'react-bootstrap/Overlay';
import {render} from 'react-dom';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Popover from '@mui/material/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import Card from '@mui/material/Card';
const Navigation=()=>{
  return (
      <div>
          <Navbar bg="light" variant="light" style={{justifyContent:'space-between'}}>
              <Container>
                <Navbar.Brand href="#home">GeoActivist</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">                   
                  <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/map">Map</Nav.Link>
                    <Nav.Link href="/about">About</Nav.Link>
                    <PopupState variant="secondary" popupId="demo-popup-popover">
      {(popupState) => (
        <div>
          <Button variant="contained" {...bindTrigger(popupState)}>
          Sign in
          </Button>
          <Popover
            {...bindPopover(popupState)}
            anchorOrigin={{
 
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'top',
 
            }}
          >

            <Typography sx={{ p: 20 }}>
                              <Card variant="outlined">
                                Pick your issue
                                <br/>
                                <Button variant="outlined" color="success">Gun violence </Button>
                                <br/>
                                <br/>
                                <Button variant="outlined" color="success">Women's rights </Button>
                                <br/>
                                <br/>
                                <Button variant="outlined" color="success">Gun violence </Button>
                                <br/>
                                <br/>
                                <Button variant="outlined" color="success">Gun violence </Button>
                                <br/>
                                <br/>
                                <Button variant="outlined" color="success">Gun violence </Button>
                                <br/>
                                <br/>
                                </Card>

            <br/>
            <br/>
            <Button variant="outlined" color="primary"> Next</Button>
            <br/>

   

            <br/>
            <br/>
            <br/>
            Username: <input label="Username"></input>
            <br/>
            <br/>
            Password: <input label="Password"></input>
            <br/>
            <br/>

            <Button variant="outlined" color="success">Sign in</Button>           


            <br/>
 
            </Typography>
          </Popover>
        </div>
      )}
    </PopupState>
                    </Nav>
                    </Navbar.Collapse>
                    </Container>
                    </Navbar>
          </div>
    );
}

export default Navigation;