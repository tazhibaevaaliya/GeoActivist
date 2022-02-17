import React, { useState, useEffect, Image, View } from 'react'
import ReactMapGL, { GeolocateControl, Marker,Popup, Layer } from 'react-map-gl'
//import config from '../config'
import 'mapbox-gl/dist/mapbox-gl.css'
import { BrowserRouter as Router } from 'react-router-dom';
import './sideBar.js'
import getData from './getData';
import Sidebar from './sideBar'
import { WindowRounded } from '@mui/icons-material';
// added the following 6 lines.
    import mapboxgl from 'mapbox-gl';
    // The following is required to stop "npm build" from transpiling mapbox code.
    // notice the exclamation point in the import.
    // @ts-ignore
    // eslint-disable-next-line import/no-webpack-loader-syntax, import/no-unresolved
    mapboxgl.workerClass = require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default;
    
const TOKEN = 'pk.eyJ1IjoidHphbGl5YSIsImEiOiJja3VuMncxd3QzeHI3MnZtbmZyOTE0Z2RhIn0.wXgglO-cXtCIq-QJ17Jv-g';
const latitude = [];
const longtitude = [];

const geolocateStyle = {
  float: 'left',
  margin: '10px',
  padding: '10px'
};



const Map = () => {
  const [data, setData] = useState([]);
  const [mapMarkers, setMapMarkers] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  useEffect(()=>{
    const listener=(e)=>{
      if(e.key== "Escape" ){
         setSelectedEvent(null);
      }
    };
    window.addEventListener("keydown", listener); 
  },[] );

  const [viewport, setViewPort] = useState({
    position: "absolute",
    width: "100%",
    height: "100%",
    longitude: -71.1029,
    latitude: 42.3486,
    zoom: 15
  });

  // const CustomPopup = ({marker}) => {
  //   return (
  //     marker && <Popup
  //       latitude={marker.Latitude}
  //       longitude={marker.Longtitude}
  //       // onClose={closePopup}
  //       closeButton={true}
  //       closeOnClick={false}
  //       offsetTop={-30}
  //      >
  //       <p>{marker.name}</p>
  //     </Popup>
  //   )};

    // const closePopup=()=>{
    //   togglePopup(false);
    // }

    
  



  // useEffect(() => {
  //   async function getMyData() {
  //     const myData = await getData();
  //     // setMapMarkers(myData.map(item => (
  //     //   <Marker latitude={Number(item.Latitude)} longitude={Number(item.Longtitude)} offsetLeft={-20} offsetTop={-10}>
  //     //     <button style={{background:'none', border:'none',cursor:'pointer'}} onClick={(e)=>{
  //     //       e.preventDefault();
  //     //       setSelectedEvent(mapMarkers); 
  //     //     }}>
  //     //       <img style={{width:'20px',height:'50px'}} src={require('./Assets/mapbox-marker-icon.png').default} /> 
  //     //       </button>
  //     //    </Marker>)
  //     //   ))
  //       // console.log(mapMarkers.length)
  //     setData(myData);
  //   }
  //   getMyData();
  // }, [])

  for (const i in data) {
    latitude.push(parseFloat(data[i].Latitude));
  }
  // console.log(latitude);

  for (const i in data) {
    longtitude.push(parseFloat(data[i].Longtitude));
  }

  

  // loadMapMarkers =()=>{
  //    {data.map(item=>{
  //   return(<Marker latitude = {item.Latitude} longtitude={item.Longtitude} offsetLeft={-20} offsetTop={-10}>
  //     <img src={require('./Assets/mapbox-marker-icon.png').default}/>
  //       </Marker>);
  //   } )} 
  // }

  // const markers = React.useMemo(() => , [data]);

  // var markers = []
  // for (var item of data) {
  //   var obj = <Marker latitude={parseFloat(item.Latitude)} longtitude={parseFloat(item.Longtitude)} offsetLeft={-20} offsetTop={-10}>
  //     <img src={require('./Assets/mapbox-marker-icon.png').default} />
  //   </Marker>
  //   markers.push(obj)
  // }
  const _onViewportChange = viewport => setViewPort({ ...viewport, transitionDuration: 10 })

  const geoLocateControl = {
    right: "10px",
    top: "10px",
    margin: "0",
    padding: "0"
  }

  // const handlePopUp =>{}
  // console.log(data);

  //const {latitude, longtitude} = data.map(item=>{item.Latitude, item.Longtitude});
  // console.log(latitude);

  return (

    <div style={{ margin: '0 0' }, { position: "absolute" }, { height: "100%" }}>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={TOKEN}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        // style={{position:"absolute"},{width:"100%"},{height:"100%"}}
        onViewportChange={_onViewportChange}
      >
        <GeolocateControl
          style={geoLocateControl}
          positionOptions={{ enableHighAccuracy: true }}
          trackUserLocation={true}
        />

        {/* {data.map(item=>{return(<Marker latitude = {parseFloat(item.Latitude)} longtitude={parseFloat(item.Longtitude)} offsetLeft={-20} offsetTop={-10}>
    <img src={require('./Assets/mapbox-marker-icon.png').default}/>
      </Marker>)})} */}

        {/* {data.map((element,index)=>
                        <Marker key={index} coordinate={{
                            latitude: parseInt(element.Latitude,10),
                            longitude: parseInt(element.Longtitude,10),
                        }}>
                            <img src={require('./Assets/mapbox-marker-icon.png').default}/>
                        </Marker>
                    )} */}

        {/* {markers} */}
        {/* {console.log(markers)} */}
        {data.map(item => {
          return (
            <Marker latitude={parseFloat(item.Latitude)} longitude={parseFloat(item.Longtitude)} offsetLeft={-20} offsetTop={-10}>
               <button style={{background:'none', border:'none',cursor:'pointer'}} onClick={(e)=>{
            e.preventDefault();
            setSelectedEvent(item); 
          }}>
            <img style={{width:'20px',height:'50px'}} src={require('./Assets/mapbox-marker-icon.png').default} /> 
            </button>
            </Marker>
            )
        })}

      {selectedEvent?(
          <Popup styel={{width:'20px', height:'10px'}} latitude={parseFloat(selectedEvent.Latitude)} longitude={parseFloat(selectedEvent.Longtitude)} onClose= {()=>{
             setSelectedEvent(null);
          }}>
            <h3 style={{fontSize:'15px'}}>{selectedEvent.Name}</h3>
            <p style={{fontSize:'12px'}}>{selectedEvent.Description}</p>
          </Popup>)
           :null}
        {/* {console.log(markers)} */}
        {/* {mapMarkers} */}
        {/* {console.log(mapMarkers)} */}

        {/* 
        <Marker latitude={42.3486} longitude={-71.1029} offsetLeft={-20} offsetTop={-10}>
          <img src={require('./Assets/mapbox-marker-icon.png').default} />
        </Marker> */}


      </ReactMapGL>
    </div>
  )
}

export default Map