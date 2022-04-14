const firebase=require('firebase')
const firebaseConfig = {
    apiKey: "AIzaSyDnZ-3c2q7M8SWJbacZzkUzh6aN7bejN0I",
    authDomain: "geoactivist.firebaseapp.com",
    databaseURL: "https://geoactivist-default-rtdb.firebaseio.com",
    projectId: "geoactivist",
    storageBucket: "geoactivist.appspot.com",
    messagingSenderId: "739782111622",
    appId: "1:739782111622:web:327d358a5b51deea3ffc07",
    measurementId: "G-PJ1N0DSYEC"
  };
firebase.initializeApp(firebaseConfig)
const db=firebase.firestore()
const User=db.collection("geoactivist-users")
module.exports = Users; 