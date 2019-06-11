'use strict';
//require takes in a string ('dotenv').Getting a return from the string and "chainging" to .config().
require('dotenv').config(); //require is a built in function that looks for information. -from node.
const express = require('express');
const app = express();

app.listen(3000, () => console.log('I am alive')); //////what listen wants first is a port

const PORT = process.env.PORT || 3000;
app.get('/ping', (request, response) => {
  response.send('pong');
});
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
