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
import { styled } from '@mui/material/styles';
import Map from './Map'
import CustomMarker from './CustomMarker'
import { BrowserRouter as Router } from 'react-router-dom';
import Sidebar from './sideBar'
import VirtualizedList from './VirtualizedList';
import getData from './getData';
import { FixedSizeList } from 'react-window';
import Paper from '@mui/material/Box';
import List from '@mui/material/List';
import Card from '@mui/material/Card';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListGroup from 'react-bootstrap/ListGroup';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { orange } from '@mui/material/colors';
import { blue } from '@mui/material/colors';
import IconButton from '@mui/material/IconButton';
import AlarmIcon from '@mui/icons-material/Alarm';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';


import './mapPage.css';
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
    const [data, setData] = useState([]);
    const list = [];
    const [name, setName] = useState('');

    useEffect(()=>{
        async function getMyData(){
            const myData = await getData();
            setData(myData);
        }
        getMyData();
    },[])

    // console.log(data[0]);
    // console.log(list);

    // const [search, setSearch] = useState("");
    const [foundEvents, setFoundEvents] = useState(data);

    // const searchClicked = (content) => {
    //     setSearch(content);
    // }

    const Input = styled('input')({
        display: 'none',
      });

    const filter = (e) => {
        const keyword = e.target.value;
        for(const i in data){
            list.push(data[i].Name);
        }
    
        if (keyword !== '') {
          const results = data.filter((item) => {
            return item.Name.toLowerCase().startsWith(keyword.toLowerCase());
            // Use the toLowerCase() method to make it case-insensitive
          });
          setFoundEvents(results); //returns an object with all the fields
        } else {
          setFoundEvents(data);
          // If the text field is empty, show all users
        }
    
        setName(keyword);
      };

    const items = data.map(item =><ListItem disablePadding>
                                    <ListItemButton>
                                    <ListItemText primary={item.Name}/>
                                    </ListItemButton>
                                        </ListItem> ); 
    // const resultSearch = found
    return(
        <div className="App">

        <Navbar></Navbar>
        
        <div className="SearchBar">
        
        <input
        type="search"
        value={name}
        style={{width:'260px', marginRight:'auto', marginLeft:'auto'}}
        onChange={filter}
        className="input"
        placeholder="Type Name of Social Event"
        />
            {/* <Searchbar 
            type="search"
            value={name}
            onChange={filter}
            className="input"
            placeholder="Filter" 
            ></Searchbar> */}

{/* //     ) : (data.map(item=><Paper style={{ width: '100%', overflow:'auto', bgcolor: 'background.paper' }}>
                    //     <List style={{maxHeight:600, overflow:'auto'}}>
                    //         <ListItem disablePadding>
                    //             <ListItemButton>
                    //             <ListItemText primary={item.Name}/>
                    //             </ListItemButton>
                    //         </ListItem>
                    //     </List>
                    // </Paper>))

                    // <Paper style={{maxHeight:600, overflow:'auto'}}>
                    //     <List>
                    //     {items}
                    //     </List>
                    // </Paper>} */}
            <DropDown_typeOfActivism style={{marginLeft:'auto', marginRight :'20px'}}></DropDown_typeOfActivism>
            <br/>
            <br/>
            <DropDown_issueType style={{marginRight:'auto', marginLeft :'auto'}}></DropDown_issueType>
            <br/>
            <Stack direction="row" alignItems="center" spacing={4}>
            <br/>
            <label htmlFor="contained-button-file">
                <Input accept="image/*" id="contained-button-file" multiple type="file" />
                <Button variant="contained" component="span"> Upload an Event  </Button>
            </label>
            </Stack>
            {/* <SliderPage></SliderPage> */}
        </div>

        <div className="body">
            <div className="sideBarContainer">
            <Router>
            
                {/* <ul>{items}</ul> */}
                {/* <ListGroup as="ol" numbered>
                    {items}
                </ListGroup> */}

                
                        <Paper style={{maxHeight:600, overflow:'auto' }}>
                            <List style={{maxHeight:"100%",overflow:'auto'}}>
                            {foundEvents && foundEvents.length > 0 ? (
                                        foundEvents.map((item) => (
                                <ListItem>
                                    <ListItemButton>
                                    
                                     <Card sx={{ marginRight:'auto', marginLeft: 'auto', height: "200px", width: "500px", color: blue[900], bgcolor: blue[100]}} variant="outlined">
                                     <br/>
                                    <h5 sx={{ bgcolor: blue[100] }}><center>{item.Name}</center></h5>
                                    <p>{item.Description}</p>
                                    <br/>
                                    <Button size="small" variant="contained" align="center" sx={{ marginLeft: '300px', bgcolor: orange[700]}}><IconButton aria-label="add an alarm"><AlarmIcon /></IconButton> RSVP</Button>
                                     </Card>
                                    {/* <ListItemText primary={item}/> */}
                                    </ListItemButton>
                                    </ListItem>
                                    ))): 
                                    data.map((item)=>(
                                        <ListItem>
                                            <ListItemButton>
                                                {/* <ListItemText primary={item.Name}>
                                                </ListItemText> */}
                                                <Card sx={{ marginRight:'auto', marginLeft: 'auto', height: "200px", width: "500px", color: blue[900], bgcolor: blue[100]}} variant="outlined">
                                                    <br/>
                                                <h5 sx={{ bgcolor: blue[100] }}><center>{item.Name}</center></h5>
                                                <p style={{textAlign: 'center', marginRight:'auto', marginLeft: 'auto' }} >{item.Description}</p>
                                                <br/>
                                                <Button onClick={() => { alert('Congrats! You have registered for the event'); }}size="small" variant="contained" align="center" sx={{ marginLeft: '300px', bgcolor: orange[700]}}><IconButton aria-label="add an alarm"><AlarmIcon /></IconButton> RSVP</Button>
                                                    </Card>
                                            </ListItemButton>
                                        </ListItem>
                                    ))}
                            </List>
                        </Paper>
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