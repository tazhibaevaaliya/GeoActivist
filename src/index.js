import React from 'react';
import ReactDOM from 'react-dom';
import 'mapbox-gl/dist/mapbox-gl.css';
import './index.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

const bodyParser = require("body-parser");
const express = require("express");
// const admin = require("firebase-admin");

const PORT = process.env.PORT || 5000;
const app = express();

app.engine("html", require("ejs").renderFile);
app.use(express.static("static"));

app.get("/login", function (req, res) {
  	res.render("login.html");
});

app.get("/signup", function (req, res) {
  	res.render("signup.html");
});

app.get("/profile", function (req, res) {
    res.render("profile.html");
});

app.get("/", function (req, res) {
	res.render("signup.html");
});

app.listen(PORT, () => {
  	console.log(`Listening on http://localhost:${PORT}`);
});