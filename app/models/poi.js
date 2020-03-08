'use strict';

const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;

const poiSchema = Schema({
  firstName: String,
  lastName: String,
  office: String,
});

module.exports = Mongoose.model('Poi', poiSchema);