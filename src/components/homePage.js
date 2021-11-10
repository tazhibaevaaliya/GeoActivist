import React from 'react';
import Typical from 'react-typical';
import './homePage.css';
import Navbar from './Navbar';
import image from './Assets/activism.jpeg';
import type_of_activism_image1 from './Assets/coffee.jpeg'
import type_of_activism_image2 from './Assets/lights.jpeg'
import type_of_activism_image3 from './Assets/nature.jpeg'
import { InputGroup, Button, FormControl, Image, Row, Container, Col } from 'react-bootstrap';
import { MDBCol, MDBIcon } from "mdbreact";
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
                    <MDBCol md="6">
                         <input className="form-control" type="text" placeholder="Search" aria-label="Search" />
                    </MDBCol>
            </div>

            <div style={{display:'block'}}>
                    <h1 style={{margin:'40px'}}>
                        Explore Nearby
                    </h1>
                </div>

            <div className="main_images">
                        <div>
                        <Image src={type_of_activism_image1} style={{display:'block', width:'50%', height:'auto', maxHeight:'500px', marginLeft:'auto', marginRight:'auto'}}rounded />
                        </div>
                        <div>
                        <Image src={type_of_activism_image2} style={{display:'block', width:'50%', height:'auto', maxHeight:'500px', marginLeft:'auto', marginRight:'auto'}} rounded />
                        </div>
                        <div>
                        <Image src={type_of_activism_image3} style={{display:'block', width:'50%', height:'auto', maxHeight:'500px', marginLeft:'auto', marginRight:'auto', flex:'calc()'}} rounded />
                        </div>
            </div>

            <div style={{display:'block'}}>
                    <h1 style={{margin:'40px'}}>
                        Get Involved
                    </h1>
            </div>

            <div className="main_images">
                        <div>
                        <Image src={type_of_activism_image1} style={{display:'block', width:'50%', height:'auto', maxHeight:'500px', marginLeft:'auto', marginRight:'auto'}}rounded />
                        </div>
                        <div>
                        <Image src={type_of_activism_image2} style={{display:'block', width:'50%', height:'auto', maxHeight:'500px', marginLeft:'auto', marginRight:'auto'}} rounded />
                        </div>
                        <div>
                        <Image src={type_of_activism_image3} style={{display:'block', width:'50%', height:'auto', maxHeight:'500px', marginLeft:'auto', marginRight:'auto', flex:'calc()'}} rounded />
                        </div>
            </div>
            {/* <Image src="" fluid /> */}
        </div>
    );
}