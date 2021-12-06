import React from 'react'
import './About.css'
import { CardActionArea } from '@mui/material';
import Group135 from './Assets/Group135.png';
import { Image, Row, Container, Col } from 'react-bootstrap';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';

function About() {
    return (
        <div class="teff">
      
              <Image src={Group135} style={{align: 'center', display:'block', width:'auto%', height:'auto', maxHeight:'1260px',marginLeft:'15px', marginRight:'auto'}}rounded /> 
         
        </div>
    )
}

export default About; 


