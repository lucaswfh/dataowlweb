// express server used to serve angular files in heroku 
const express = require('express');
const app = express();

// Run the app by serving the static files
// in the dist directory
app.use(express.static(__dirname + '/dist'));

// Run the app by serving the static files
// in the dist directory
app.use(express.static(__dirname + '/dist'));
