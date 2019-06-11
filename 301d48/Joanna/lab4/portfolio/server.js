'use strict';

//requires a function that takes in a string, chaining onto the return the config function. Must be returning something that has a config function.
//Require = Find me the package that has been packaged with the name dotenv. Means we need these two dependencies
require('dotenv').config(); 
const express = require('express');
//Calling express function so what is returned by require('express') must be a function
const app = express();

//Now we can open on the console and browser and see it working
// app.listen(3000, () => console.log('alive'));

// //Sets up localhost:3000/ping, which will show pong
// app.get('/ping', (request, response) => {
//   response.send('pong');
// });

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
