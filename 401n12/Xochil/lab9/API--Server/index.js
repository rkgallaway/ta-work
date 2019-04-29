'use strict';

/**
 * API Server Starter
 * instantiates mongoose and start the server
 * @module index.js
 */

require('dotenv').config();
const mongoose = require('mongoose');

const mongooseOptions = {
    useNewUrlParser:true,
    useCreateIndex: true,
};
mongoose.connect(process.env.MONGODB_URI, mongooseOptions);

require('./src/app.js').start(process.env.PORT);