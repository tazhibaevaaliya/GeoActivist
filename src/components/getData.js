import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue,get,child, startAt,orderByChild,query,once, on,equalTo} from "firebase/database";

//initFirebase();
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

export default async function getData(){ 
  var returnArr = [];
    const dbRef = ref(database1);
  
    var newData = [];
    var myArray = [];
    var dbEvents = child(dbRef,"events");
    var snapshot = await get(dbRef);
    // console.log(snapshot);
    snapshot.forEach(function(childSnapshot) {
              var item = childSnapshot.val();
              item.key = childSnapshot.key;
              returnArr.push(item);
            //   console.log(returnArr);
              });
    var arrayLength = returnArr.length;
    for (var i = 0; i < arrayLength; i++) {
            myArray[i] = returnArr[i];
    }
  

  //console.log(returnArr)
  return returnArr;
  // get(dbRef).then((snapshot) => {
  //       snapshot.forEach(function(childSnapshot) {
  //       var item = childSnapshot.val();
  //       item.key = childSnapshot.key;
  //       returnArr.push(item);
  //       });
  //     //   var arrayLength = returnArr.length;
  //     // for (var i = 0; i < arrayLength; i++) {
  //     //     setData(oldArray => [...oldArray, returnArr[i]]);
  //     //     //console.log(returnArr[i]);
  //     //     //Do something
  //     // }
  //       newData = returnArr.filter(character=>character.category=="Protest and Demonstration");
  //     //   console.log(newData);
  //     //   console.log(returnArr);
  //     //   console.log(returnArr[0]);
  //          var arrayLength = returnArr.length;
  //        for (var i = 0; i < arrayLength; i++) {
  //            myArray[i] = returnArr[i];
  //        }
  //     });
  //   console.log(newData);
  //    console.log(myArray);
  //    console.log(myArray.length);
  // // //   setData(returnArr);
  // console.log(data);

  //     onValue(dbRef, (snapshot) => {
  //     snapshot.forEach((childSnapshot) => {
  //     const childKey = childSnapshot.key;
  //     const childData = childSnapshot.val();
  //     returnArr.push(childData);
  //     console.log(childData)
  //     });
  // }, {
  //     onlyOnce: true
  // });
  //     setData(returnArr);
  //   console.log(data);

};
