
import Searchbar from './Searchbar';

import Navbar from './navigation';

import React, {Component, useState,useRef,useEffect} from 'react';
import "bootstrap/dist/css/bootstrap.css";

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

// import homePage from './components/homePage';

// import './components/CustomMarker'
// import CustomMarker from './components/CustomMarker'
mapboxgl.accessToken = 'pk.eyJ1IjoidHphbGl5YSIsImEiOiJja3VuMncxd3QzeHI3MnZtbmZyOTE0Z2RhIn0.wXgglO-cXtCIq-QJ17Jv-g';

export default function MapPage(){
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(-71.1029);
    const [lat, setLat] = useState(42.3486);
    const [zoom, setZoom] = useState(15.48);

    return(
        <div className="App">

        <Navbar></Navbar>
        <div className="SearchBar">
            <Searchbar ></Searchbar>
            <DropDown_typeOfActivism></DropDown_typeOfActivism>
            <DropDown_issueType></DropDown_issueType>
            <SliderPage></SliderPage>
        </div>

        <div className="body">
            <div className="sideBarContainer">
            <Router>
            <div className="sideBar">
                <Sidebar></Sidebar>
            </div>
            </Router>
            </div>
            <div className="Map">
            <Map></Map>
            </div>
        </div>
        <div>
        <homePage></homePage>
        </div>
    </div>
    );
}