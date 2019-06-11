'use strict';

// require is a function that becomes available when we use node.js
// It takes an argument, that's a string, then we're chaining on to that a .config().
// require looks for other code packages, in this case 'dotenv' and then runs a config on it. 

require('dotenv').config();
const express = require('express');

// When we required express we got back a function, when we invoke express we get app. 
// express is the web server and app is our specific web server

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static('./public'));

app.get('/hello', (request, response) => {
  response.status(200).send('Hello');
});

app.get('/data', (request, response) => {
  let airplanes = {
    departure: Date.now(),
    canFly: true,
    pilot: 'Well Trained'
  }
  response.status(200).json(airplanes);
});

app.use('*', (request, response) => response.send('Sorry, that route does not exist.'))

app.listen(PORT,() => console.log(`Listening on port ${PORT}`));
