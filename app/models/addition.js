'use strict';

const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;

const atmSchema = new Schema({
  name: String,
  category: String,
  description: String,
  candidate: {
    type: Schema.Types.ObjectId,
    ref: 'Candidate',
  },
});

module.exports = Mongoose.model('Addition', atmSchema);
