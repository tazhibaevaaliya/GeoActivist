import React, { useState, useEffect, Image, View } from 'react'
import MapGL, { GeolocateControl, Marker, Layer } from 'react-map-gl'
//import config from '../config'
import 'mapbox-gl/dist/mapbox-gl.css'
import { BrowserRouter as Router } from 'react-router-dom';
import './sideBar.js'
import getData from './getData';
import Sidebar from './sideBar'
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
  const [viewport, setViewPort] = useState({
    
    position: "absolute",
    width: "100%",
    height: "100%",
    longitude: -71.1029,
    latitude: 42.3486,
    zoom: 15
  })




  useEffect(() => {
    async function getMyData() {
      const myData = await getData();
      setMapMarkers(myData.map(item => (
        <Marker latitude={Number(item.Latitude)} longitude={Number(item.Longtitude)} offsetLeft={-20} offsetTop={-10}>
          <img src={require('./Assets/mapbox-marker-icon.png').default} />
        </Marker>)
        ))
        console.log(mapMarkers.length)
      setData(myData);
    }
    getMyData();
  }, [])

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

  // console.log(data);

  //const {latitude, longtitude} = data.map(item=>{item.Latitude, item.Longtitude});
  // console.log(latitude);

  return (

    <div style={{ margin: '0 0' }, { position: "absolute" }, { height: "100%" }}>
      <MapGL
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
        {/* {data.map(item => {
          return (
            <Marker latitude={parseFloat(item.Latitude)} longtitude={parseFloat(item.Longtitude)} offsetLeft={-20} offsetTop={-10}>
              <img src={require('./Assets/mapbox-marker-icon.png').default} />
            </Marker>
            )
        })
        } */}
        {/* {console.log(markers)} */}
        {mapMarkers}
        {console.log(mapMarkers)}



        {/* 
        <Marker latitude={42.3486} longitude={-71.1029} offsetLeft={-20} offsetTop={-10}>
          <img src={require('./Assets/mapbox-marker-icon.png').default} />
        </Marker> */}


      </MapGL>
    </div>
  )
}

export default Map