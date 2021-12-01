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
import Modal from '@mui/material/Modal';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Grid, Paper, Avatar, TextField, Link } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import PersonIcon from '@mui/icons-material/Person';
import PersonPinCircleIcon from '@mui/icons-material/PersonPinCircle';
import GoogleSignOn from './signOnBtn.js';
import CssBaseline from '@material-ui/core/CssBaseline';
import { useInput } from '@mui/base';
import { styled } from '@mui/system';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import ButtonUnstyled, { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import PropTypes from 'prop-types';

const ButtonRoot = React.forwardRef(function ButtonRoot(props, ref) {
  const { children, ...other } = props;

  return (
    <svg width="150" height="50" {...other} ref={ref}>
      <polygon points="0,50 0,0 150,0 150,50" className="bg" />
      <polygon points="0,50 0,0 150,0 150,50" className="borderEffect" />
      <foreignObject x="0" y="0" width="150" height="50">
        <div className="content">{children}</div>
      </foreignObject>
    </svg>
  );
});

ButtonRoot.propTypes = {
  children: PropTypes.node,
};

const CustomButtonRoot = styled(ButtonRoot)(
  ({ theme }) => `
  overflow: visible;
  cursor: pointer;
  --main-color: ${
    theme.palette.mode === 'light' ? 'rgb(25,118,210)' : 'rgb(144,202,249)'
  };
  --hover-color: ${
    theme.palette.mode === 'light'
      ? 'rgba(25,118,210,0.04)'
      : 'rgba(144,202,249,0.08)'
  };
  --active-color: ${
    theme.palette.mode === 'light'
      ? 'rgba(25,118,210,0.12)'
      : 'rgba(144,202,249,0.24)'
  };

  & polygon {
    fill: transparent;
    transition: all 800ms ease;
    pointer-events: none;
  }
  
  & .bg {
    stroke: var(--main-color);
    stroke-width: 0.5;
    filter: drop-shadow(0 4px 20px rgba(0, 0, 0, 0.1));
    fill: transparent;
  }

  & .borderEffect {
    stroke: var(--main-color);
    stroke-width: 2;
    stroke-dasharray: 150 600;
    stroke-dashoffset: 150;
    fill: transparent;
  }

  &:hover,
  &.${buttonUnstyledClasses.focusVisible} {
    .borderEffect {
      stroke-dashoffset: -600;
    }

    .bg {
      fill: var(--hover-color);
    }
  }

  &:focus,
  &.${buttonUnstyledClasses.focusVisible} {
    outline: none;
  }

  &.${buttonUnstyledClasses.active} { 
    & .bg {
      fill: var(--active-color);
      transition: fill 300ms ease-out;
    }
  }

  & foreignObject {
    pointer-events: none;

    & .content {
      font-family: Helvetica, Inter, Arial, sans-serif;
      font-size: 14px;
      font-weight: 200;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--main-color);
      text-transform: uppercase;
    }

    & svg {
      margin: 0 5px;
    }
  }`,
);

const SvgButton = React.forwardRef(function SvgButton(props, ref) {
  return <ButtonUnstyled {...props} component={CustomButtonRoot} ref={ref} />;
});

const StyledInputElement = styled('input')`
  width: 200px;
  font-size: 1rem;
  font-family: IBM Plex Sans, sans-serif;
  font-weight: 400;
  line-height: 1.4375em;
  background: rgb(243, 246, 249);
  border: 1px solid #e5e8ec;
  border-radius: 10px;
  padding: 6px 10px;
  color: #20262d;
  transition: width 300ms ease;

  &:hover {
    background: #eaeef3;
    border-color: #e5e8ec;
  }

  &:focus {
    outline: none;
    width: 220px;
    transition: width 200ms ease-out;
  }
`;

const CustomInput = React.forwardRef(function CustomInput(props, ref) {
  const { getRootProps, getInputProps } = useInput(props, ref);

  return (
    <div {...getRootProps()}>
      <StyledInputElement {...props} {...getInputProps()} />
    </div>
  );
});

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 1800,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

function ChildModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

 
 
 

  return (
 
        <div>
         <React.Fragment>
      <Button onClick={handleOpen}>NEXT</Button>

      <Modal
        hideBackdrop
        open={open}
        
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 800, background: '#FFA500'  }}>
          <br/>

          
          <h2 id="parent-modal-title">Pick your type of event!</h2>
     
           <FormGroup>
           
            <SvgButton> <Checkbox defaultChecked />Domestic Violence</SvgButton>
            <br/>
            <SvgButton> <Checkbox defaultChecked />Animal Rights</SvgButton>
                        <br/>

            <SvgButton> <Checkbox defaultChecked />Black Lives Issues</SvgButton>
                        <br/>

            <SvgButton> <Checkbox defaultChecked /> Environment Issues</SvgButton>



          </FormGroup>
          <br/>

          <h2 id="parent-modal-title">What are you into?</h2>
          <br/>
          
           <FormGroup>
              <SvgButton> <Checkbox defaultChecked /> Protests</SvgButton>
            <br/>
            <SvgButton> <Checkbox defaultChecked />   Social Media Awarness </SvgButton>
                        <br/>

            <SvgButton> <Checkbox defaultChecked />  Political Rallies  </SvgButton>
                        <br/>

            <SvgButton> <Checkbox defaultChecked /> National articles </SvgButton>

       

          </FormGroup>
         
          <ChildModal/>

       
        <br/>
         
        </Box>
      </Modal>
    </React.Fragment>
    
        </div>
 
 
          
    );
}
export default function NestedModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
    
          <Navbar background="#89CFF0" bg="light" variant="light" style={{justifyContent:'space-between'}}>
              <Container>
                <Navbar.Brand href="#home">GeoActivist</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">                   
                  <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/map">Map</Nav.Link>
                    <Nav.Link href="/about">About</Nav.Link>
 
      <h2 align="right"> <SvgButton onClick={handleOpen} align='right'>Sign in</SvgButton></h2>
      <br/>
      <h2 align="right"> <SvgButton onClick={handleOpen} align='right'>Sign up</SvgButton></h2>

      <Modal
        open={open}
        onClose={handleClose}
      >
        <Box  sx={{ ...style, width: 600, background: '#89CFF0', align: 'center' }}>
           <Box sx={{ background: '#89CFF0'}}>
 
                <Box sx={{ background: '#89CFF0', align: 'center' }}>
                     <h1 align="center"><PersonIcon align="center"/></h1> 
                     <h2 align="center">Sign Up</h2>
                <br/>
             <h5 align='center'>  Username   
              <br/>
              <CustomInput color="orange" aria-label="Demo input" placeholder="Username*" /></h5>
              <br/>
              <h5 align='center'>  Password  
              <br/> 
              <CustomInput align="center" aria-label="Demo input" placeholder="Password*" /></h5>
              <br/>
              <h2 align="center"><Button variant="primary">Sign Up</Button></h2>
              <GoogleSignOn/>
              <br/>
               <Typography>
                     <Link href="/" >
                        Forgot password?
                </Link>
                </Typography>
                <Typography > Do you not have an account?
                     <Link to="/" ><br/>
                        Sign Up 
                </Link>
                </Typography>
              <br/>
              <h2 align='center'><ChildModal/></h2>

                
 
        
      
                </Box>
                
        </Box>
      </Box>
  
      </Modal>


                    </Nav>
                    </Navbar.Collapse>
                    </Container>
                    </Navbar>
    </div>
  );
}


 