// import logo from './logo.svg';
import './App.css';

// import './components/Searchbar.js'
// import Searchbar from './components/Searchbar';

// import './components/Navbar.js'
// import Navbar from './components/Navbar';

// import React, {Component, useState,useRef,useEffect} from 'react';
// import "bootstrap/dist/css/bootstrap.css";

// import './components/Slider.js'
// import SliderPage from './components/Slider'

// import './components/Dropdown_typeOfActivism.js'
// import DropDown_typeOfActivism from './components/Dropdown_typeOfActivism';

// import ReactMapGL, { Marker,Layer, Feature } from 'react-map-gl'

// import './components/Dropdown_checkBox.js'
// import Example from './components/Dropdown_checkBox';

// import './components/MySelect.js'
// import MySelect from './components/MySelect.js';

// import mapboxgl from 'mapbox-gl'; // eslint-disable-line import/no--loader-syntax
// import DropDown_issueType from './components/Dropdown_checkBox.js';

// import './components/Map.js'
// import Map from './components/Map'

// import './components/CustomMarker.js'
// import CustomMarker from './components/CustomMarker'

// import { BrowserRouter as Router } from 'react-router-dom';

// import './components/sideBar.js'
// import Sidebar from './components/sideBar'

// import './components/homePage.js';
// import homePage from './components/homePage';

// // import './components/CustomMarker'
// // import CustomMarker from './components/CustomMarker'
// mapboxgl.accessToken = 'pk.eyJ1IjoidHphbGl5YSIsImEiOiJja3VuMncxd3QzeHI3MnZtbmZyOTE0Z2RhIn0.wXgglO-cXtCIq-QJ17Jv-g';

import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

import HomePage from './components/homePage';
import MapPage from './components/mapPage';
import AboutPage from './components/AboutPage';

function App() {

  // const mapContainer = useRef(null);
  // const map = useRef(null);
  // const [lng, setLng] = useState(-71.1029);
  // const [lat, setLat] = useState(42.3486);
  // const [zoom, setZoom] = useState(15.48);

  return (
    // <div className="App">

    //   <Navbar></Navbar>

    //   <div className="SearchBar">
    //     <Searchbar ></Searchbar>
    //     <DropDown_typeOfActivism></DropDown_typeOfActivism>
    //     <DropDown_issueType></DropDown_issueType>
    //     <SliderPage></SliderPage>
    //   </div>

    //   <div className="body">
    //     <div className="sideBarContainer">
    //     <Router>
    //       <div className="sideBar">
    //         <Sidebar></Sidebar>
    //       </div>
    //     </Router>
    //     </div>
    //     <div className="Map">
    //       <Map></Map>
    //     </div>
    //   </div>
    //   <div>
    //   <homePage></homePage>
    //   </div>
    // </div>
    <Router>
      <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/AboutPage" component={AboutPage} />
      <Route exact path="/map" component={MapPage} />

       {/* <Route exact path="/si" */}
      </Switch>
    </Router>
  );
}
export default App;
