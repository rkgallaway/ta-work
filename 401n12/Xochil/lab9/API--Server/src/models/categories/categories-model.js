'use strict';

/**
 * Catergories Schema
 * uses and _id and name for the categories schema
 * @module src/models/app
 */
const Model = require('../memory-model.js');

const schema = {
    _id: {required:true},
    name: {required:true},
};

class Categories extends Model {}

module.exports = new Categories(schema);