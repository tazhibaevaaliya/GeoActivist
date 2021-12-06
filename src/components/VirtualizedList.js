import React, {Component, useState,useRef,useEffect} from 'react';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { FixedSizeList } from 'react-window';
import './VirtualizedList.css';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue,get,child, startAt,orderByValue,query,once, on,equalTo} from "firebase/database";
import { render } from '@testing-library/react';

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
// const[list, setList] = useState([]);





// function renderRow(props) {
//     const {index} = props;
//   //console.log(props[0]);
//   // console.log(returnArr);
//   // var dataList = returnArr.map(function(currentValue,index,array){
//   //   return array[index];
//   // })

//   return (
    
//   );
// }





export default function VirtualizedList(props) {
    //console.log(props);
  return (
    <Box
      sx={{ width: '100%', height: 800, bgcolor: 'background.paper' }}
    >
      <FixedSizeList
        height={400}
        itemSize={46}
        itemCount={4}
        overscanCount={5}>
        <ListItem component="div" disablePadding>
            <ListItemButton>
                {/* {props.map(item => <ListItemText primary={item}/>)} */}
            {/* <ListItemText primary={props.map(item)} /> */}
            </ListItemButton>
        </ListItem>
      </FixedSizeList>
    </Box>
  );
}
