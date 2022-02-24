// import {GoogleMap, LoadScript} from '@react-google-maps/api';

// const MapContainer = ()=>{
//   const mapStyles = {
//     height: "100vh",
//     width: "100%"};

//     const defaultCenter = {
//       lat: 41.3851, lng: 2.1734
//     }

//   return(
//     <LoadScript 
//     googleMapsApiKey='AIzaSyBgIZ7fUBvBUlQETVykowFSiXfVySmPRks'>
//       <GoogleMap MapContainer={mapStyles} zoom={13} center={defaultCenter}></GoogleMap>

//     </LoadScript>
//   );
// } 

// export default MapContainer;



import { Map, GoogleApiWrapper } from "google-maps-react";
import React, { Component } from "react";

export class MapContainer extends Component {
render() {
const style = {
width: "100%",
height: "100%",
};
return (
<Map
google={this.props.google}
initialCenter={{
lat: 40.854885,
lng: -88.081807,
}}
zoom={15}
style={style}
/>
);
}}

export default GoogleApiWrapper({
apiKey: "AIzaSyBgIZ7fUBvBUlQETVykowFSiXfVySmPRks",
})(MapContainer);