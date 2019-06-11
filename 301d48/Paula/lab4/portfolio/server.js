'use strict';
//function require (yellow color) made globally available when you run a node argument 'dotenv' (.)means chaining-config is returning(passing)
//('dotenv') means find me a package dotenv
require('dotenv').config();


//require means we needed more package
//when we require express we ge a function back
const express = require('express');


//function is invoke we get app 
//express is the web server 
const app = express();

app.listen(5000, () => console.log ('I am alive.'))

app.get('/ping', (request, response)=>{
  response.send('pong')
});


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
