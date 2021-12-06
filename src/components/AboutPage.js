import React from 'react'
import './About.css'
import { CardActionArea } from '@mui/material';
import Group135 from './Assets/Group135.png';
import { Image, Row, Container, Col } from 'react-bootstrap';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Navbar from './navigation';

function About() {
    return (
        <div class="teff">
                <Navbar></Navbar>
              <Image src={Group135} style={{align: 'center', display:'block', width:'auto%', height:'auto', marginTop: '30px', maxHeight:'825px',marginLeft:'200px', marginRight:'auto'}}rounded /> 
         
        </div>
    )
}

export default About; 


