import * as React from 'react';
import {useState, useRef, focusTextInput} from 'react';
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
import {Box,TextField} from '@material-ui/core';
import './signInForm.css';
import './signOnBtn.js';
import GoogleSignOn from './signOnBtn.js';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import Navbar from './Navbar';
import initFirebase from '../initFireBase';
import { getDatabase, ref, onValue,get,child, startAt,orderByChild,query,once, on,equalTo,set,databaseURL,update, push} from "firebase/database";

import { initializeApp } from 'firebase/app';

// Set the configuration for your app
// TODO: Replace with your project's config object
const firebaseConfig = {
  apiKey: "AIzaSyDnZ-3c2q7M8SWJbacZzkUzh6aN7bejN0I",
  authDomain: "geoactivist.firebaseapp.com",
  // For databases not in the us-central1 location, databaseURL will be of the
  // form https://[databaseName].[region].firebasedatabase.app.
  // For example, https://your-database-123.europe-west1.firebasedatabase.app
  databaseURL: "https://geoactivist-events.firebaseio.com",
  storageBucket: "geoactivist.appspot.com"
};

// const app = initFirebase();
// Get a reference to the database service
// const database = getDatabase(app);

const app1 = initializeApp({
    databaseURL: "https://geoactivist-default-rtdb.firebaseio.com"
  });
  
  const app2 = initializeApp({
    databaseURL: "https://geoactivist-events.firebaseio.com"
  }, 'app2');
  
  // Get the default database instance for an app1
  const database1 = getDatabase(app1);
  
  // Get a database instance for app2
  const database2 = getDatabase(app2);

function registerEvents(name,address,category){
    //const dbRef = getDatabase();
    // get(dbRef).then((snapshot) => {
    //     if (snapshot.exists()) {
    //       console.log(snapshot.val());
    //     //console.log(returnArr);
    //     } else {
    //       console.log("No data available");
    //     }
    //   }).catch((error) => {
    //     console.error(error);
    //   });
    // const dbRef = ref(database2,"events");
    // const newPorRef = push(dbRef);
    // newPorRef.set({
    //     Name: name,
    //     Address: address,
    //     Category : category
    //   });
    set(push(ref(database2, 'events')), {
        Name: name,
        Address: address,
        Category : category
      });
      console.log(address);

}

export default function RegisterEvent(){

    const [title , setTitle] = useState('');
    const [address , setAddress] = useState('');
    const [category, setCategory] = useState('');

    const titleRef = useRef('');
    const addressRef = useRef('');
    const categoryRef = useRef('');
    const setTitleRef = () => {
    console.log(titleRef.current.value);
    setTitle(titleRef.current.value);
    console.log(title);
  };
  const setAddressRef = () =>{
      setAddress(addressRef.current.value);
  }

  const setCategoryRef = () =>{
      setCategory(categoryRef.current.value);
  }




//   // Push Function
//   const Push = () => {
//     dbRef.ref("user").set({
//       name : name,
//       age : age,
//     }).catch(alert);
//   }
    return(
        <div>
            <Navbar></Navbar>
            <Box
        component="form"
        sx={{
            // '& .MuiTextField-root': { m: 1, width: '25ch' },
            // borderColor: 'grey.500',
            // borderWidth:1
            width:'25%',
            alignContent:'center',
            justifyContent:'space-around',
            margin: 'auto',
            width:'40%',
            marginTop:'40px'
        }}
        noValidate
        autoComplete="off"
        border={1}
        // width={25}
        // style="border-color:black"
        >
            <div style={{fontFamily:'merriweather', textAlign:'center'}}>
                <h1>Register New Event</h1>
            </div>
            <div className="inputFields">
                <TextField
                    required
                    id='Title'
                    label="Name of Event"
                    onChange={e=>setTitle(e.target.value)}
                    inputRef = {titleRef}
                    style={{margin:'auto'}}
                    >
                </TextField>
                <TextField
                    required
                    id='Address'
                    label="Address"
                    type="address"
                    onChange={e=>setAddress(e.target.value)}
                    inputRef = {addressRef}
                    style={{marginLeft:'auto',marginRight:'auto'}}
                    >
                </TextField>
                <TextField
                    required
                    id='Category'
                    label="Category"
                    onChange={e=>setCategory(e.target.value)}
                    inputRef = {categoryRef}
                    style={{marginBottom:'30px',marginLeft:'auto',marginRight:'auto'}}
                    >
                </TextField>
            </div>
            <div className="continueBtn">
                <Button variant="contained" onClick={() => {setTitleRef();setAddressRef(); setCategoryRef(); registerEvents(title,address,category)}}>Register</Button>
            </div>
            <Divider variant="middle" />
            </Box>
        </div>
        
    );
}