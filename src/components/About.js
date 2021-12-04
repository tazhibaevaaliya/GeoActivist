import React from 'react'
import './About.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Leaf from './Assets/leaf.jpeg';
import Leaves from './Assets/leaves.jpeg';
  
function About() {
    return (
        <div class="teff">
            <h2 align="center">Our story</h2>
            <img src={Leaf} alt="Logo" height="40vh" />       
            <img src={Leaves} alt="Logo" height="400vh" />           
    
             <br/>
            <Card sx={{ maxWidth: 745 }} align="center">
            <CardActionArea>
        
     
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            GeoActivist
          </Typography>
          <Typography variant="body2" color="text.secondary">
            put your stuff in here ask tazwar 
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

        </div>
    )
}

export default About; 


