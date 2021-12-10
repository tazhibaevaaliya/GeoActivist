import React from 'react';
import Typical from 'react-typical';
import './homePage.css';
import Navbar from './navigation';
import image from './Assets/activism.jpeg';
import {  Link } from "@material-ui/core";
import type_of_activism_image1 from './Assets/coffee.jpeg'
import type_of_activism_image2 from './Assets/lights.jpeg'
import type_of_activism_image3 from './Assets/nature.jpeg'
import { InputGroup, Button, FormControl, Image } from 'react-bootstrap';
import { MDBCol, MDBIcon } from "mdbreact";
import logo from './Assets/boston-dec-6.jpeg'
import intfest from './Assets/intfest.jpeg'
import com from './Assets/com.jpg'
import sju from './Assets/sju.jpeg'
import kyle from './Assets/kyle.jpeg'
import stop from './Assets/stop.jpeg'
import Group119 from "./Assets/Group119.png";
import Group123 from "./Assets/Group123.png";
import Group3125 from "./Assets/Group3125.png";
import Group122 from "./Assets/Group122.png";
import Group1125 from "./Assets/Group1125.png";
import Group126 from "./Assets/Group126.png";
import Group2124 from "./Assets/Group2124.png";
import Group127 from "./Assets/Group127.png";
import Group128 from "./Assets/Group128.png";
import Group131 from "./Assets/Group131.png";

import logog from "./Assets/logog.png";
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';

// import InputGroup from 'react-bootstrap/InputGroup';
// import Button from 'react-bootstrap'

var sectionStyle = {
    backgroundImage: `url(${image})`
 }
 
export default function HomePage(){
    return(
        <div>

            <div className="header">
            <Navbar></Navbar>
            </div>
            <div className="body" style={sectionStyle}>
                <div style={{textAlign:'center'}}>
                    <h1 style={{fontFamily:'montserrat, sans-serif', fontWeight:'700', marginTop:'20px', alignContent:'center', color:'whitesmoke'}}>
                    <Typical
                            loop={Infinity}
                            wrapper="p"
                            steps={['We are', 300,
                            'GeoActivist', 300]}
                        />
                     </h1>
                </div>
                {/* <InputGroup className="mb-3">
                        <FormControl
                        placeholder="Search"
                        aria-label="Search"
                        aria-describedby="basic-addon2"
                        style={{display:'absolute',width:'50%', margin:'auto'}}
                        />
                        <Button variant="outline-secondary" id="button-addon2">
                        Search
                        </Button>
                    </InputGroup> */}
                    {/* <MDBCol md="6">
                        <form className="form-inline mt-4 mb-6">
                            <MDBIcon icon="search" />
                            <input className="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search" aria-label="Search" />
                        </form>
                    </MDBCol> */}
                    <Link to="/mapPage">
                    <h2 sx={{ align:'center' }}><Alert sx={{ marginLeft: '360px', height: '50px', width: '700px'}}> Type of Activism | Type of Social Issue | Date </Alert></h2>
                    </Link>
                    <br/>
                    <br/> 
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                   <Alert sx={{width: "175px", marginLeft: "600px", height: "38px"}} >Join our act here</Alert>  
            </div>

            <div style={{display:'block'}}>
                    <h1 style={{margin:'40px'}}>
                    Types of Social Issues 
                    </h1>
                </div>
           {/* <Image src={Group119} style={{display:'block', align: 'left', width:'30%', height:'auto', maxHeight:'450px', marginLeft:'left', marginRight:'auto'}} /> */}
            <div align="left" sx={{marginLeft: "50px"}} className="main_images">
             <Box sx={{ display: 'flex', width: '1000px', margin: '20px'}}>

            <div>   
          
                        
                        <Image src={Group123} style={{display:'block', width:'50%', height:'auto', maxHeight:'500px', marginLeft:'auto', marginRight:'auto', align: 'center'}}rounded />
                        <br/>
                        <center><h4><Link to="/AboutPage">Feminism Rights</Link></h4></center>
                        </div>
                        <div>
                        <Image src={Group122} style={{display:'block', width:'50%', height:'auto', maxHeight:'500px', marginLeft:'auto', marginRight:'auto', align: 'center'}}rounded />
                        <br/>
                        <center><h4><Link to="/AboutPage">Environmental rights</Link></h4></center>
                        </div>
                        <div>
                        <Image src={Group3125} style={{display:'block', width:'50%', height:'auto', maxHeight:'500px', marginLeft:'auto', marginRight:'auto', align: 'center'}}rounded />
                        <br />
                        <center><h4><Link to="/AboutPage">LGBTQ Protests</Link></h4></center>
                        </div>
                        <div>
                        <Image src={Group2124} style={{display:'block', width:'50%', height:'auto', maxHeight:'500px', marginLeft:'auto', marginRight:'auto', align: 'center'}}rounded />
                        <br />
                        <center><h4><Link to='/AboutPage'>Healthcare</Link></h4></center>
                        </div>
                        </Box>
                    
            </div>
         
            

            <div style={{display:'block'}}>
                    <h1 style={{margin:'40px'}}>
                        Types of Activism
                    </h1>
            </div>
            <br/>
            <br/>

            <div align="left" sx={{marginLeft: "50px"}} className="main_images">
 
            <Box sx={{ display: 'flex', width: '1000px', marginLeft: '140px'}}>

          
                        <div>
                        <Image src={Group126} style={{display:'block', width:'50%', height:'auto', maxHeight:'500px', marginLeft:'auto', marginRight:'auto', align: 'center'}}rounded />
                        <br/>
                        <center><h4 ><Link to="/AboutPage">Offline</Link></h4></center>
                        </div>
                        <div>
                        <Image src={Group127} style={{display:'block', width:'50%', height:'auto', maxHeight:'500px', marginLeft:'auto', marginRight:'auto', align: 'center'}}rounded />
                        <br/>
                        <center><h4><Link to="/AboutPage">Letter Writing</Link></h4> </center>
                        </div>
                        <div>
                        <Image src={Group127} style={{display:'block', width:'50%', height:'auto', maxHeight:'500px', marginLeft:'auto', marginRight:'auto', align: 'center'}}rounded />
                        <br/>
                        <center><h4><Link to="/AboutPage">Letter Writing</Link></h4> </center>
                        </div>
                        <div>
                        <Image src={Group128} style={{display:'block', width:'50%', height:'auto', maxHeight:'500px', marginLeft:'auto', marginRight:'auto', align: 'center'}}rounded />
                        <br />
                        <center><h4><Link to="/AboutPage">Protests</Link></h4></center>
                        
            </div>
            </Box>   
 
         
            <div>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                 
               {/* <Card sx={{ display: 'flex' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}> */}
                 <Image src={Group131} style={{align: 'left', display:'block', maxHeight:'1960px', maxWidth: '1530px', marginLeft:'-1050px', marginRight:'auto'}}rounded /> 
                 {/* </Box>
                 </Card> */}
  
            </div>

            </div>
            {/* <Image src="" fluid /> */}
        </div>
    );
}