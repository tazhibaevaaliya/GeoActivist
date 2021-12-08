import React, { Component } from "react";
import {
  Button,
  Input,
  Card,
  CardBody,
  CardImage,
  CardTitle,
  CardText
} from "mdbreact";



import Navbar from './Navbar'
import SliderPage from './Slider'

import DropDown_typeOfActivism from './Dropdown_typeOfActivism';

import ReactMapGL, { Marker,Layer, Feature } from 'react-map-gl'
import Example from './Dropdown_checkBox';

import MySelect from './MySelect.js';

import mapboxgl from 'mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import DropDown_issueType from './Dropdown_checkBox.js';

import Map from './Map'

import CustomMarker from './CustomMarker'

import { BrowserRouter as Router } from 'react-router-dom';
import Sidebar from './sideBar'
import countriestwo from './countriestwo.js'
import { render } from 'react-dom';

import countries from "./countries.json";

mapboxgl.accessToken = 'pk.eyJ1IjoidHphbGl5YSIsImEiOiJja3VuMncxd3QzeHI3MnZtbmZyOTE0Z2RhIn0.wXgglO-cXtCIq-QJ17Jv-g';


class MapPage extends Component {
  state = {
    search: ""
  };

  renderCountry = country => {
    const { search } = this.state;
    
    var code = country.code.toLowerCase();

    /*if( search !== "" && country.name.toLowerCase().indexOf( search.toLowerCase() ) === -1 ){
        return null
    }*/

    return (
      <div className="col-md-3" style={{ marginTop: "10px", marginLeft: "-10px", marginRight: "1000px", marginBottom: "20px" }}>
        <Card>
          <CardBody>
            <CardTitle title={country.name}>
              {country.name.substring(0, 16)}
              {country.name.length > 16 && "..."}
              <br/>
     
              <h6>{country.code}</h6>
            </CardTitle>
          </CardBody>
        </Card>
      </div>
    );
  };

  onchange = e => {
    this.setState({ search: e.target.value });
  };

  render() {
    const { search } = this.state;
    const filteredCountries = countries.filter(country => {
      return country.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    });

    return (
        
      <div className="flyout">
         <Navbar></Navbar>

        <main style={{ marginTop: "4rem" }}>
 


          <div className="container">
 
            <div className="row">
    
                
              <div className="col-12">
      
                <center>
                  <h3>
            
                  </h3>
                </center>
              </div>
              <div className="col"  style={{ marginTop: "-40px", marginLeft: "-30px", marginRight: "300px" }}>
                <Input
                  label="Search Event"
                  icon="search"
                  onChange={this.onchange}
                />
              </div>
              <div className="col" />
            </div>
            <div className="Map" style={{ marginTop: "-100px", marginLeft: "-70px" }}>
            <Map></Map>
            </div>
            <div className="row">
              {filteredCountries.map(country => {
                return this.renderCountry(country);
              })}
            </div>
          </div>
        </main>
        
      </div>
    );
  }
}

export default MapPage;
