'use strict';
const mongoose = require('mongoose');

const stationSchema = new mongoose.Schema({
  Tile: String,
  Town: String,
  AddressLine1: String,
  StateOrProvince: String,
  Postcode: String,
  Location: {
    type: {
      type: String,
      enum: ['Point'],
      required: true,
    },
    coordinates: {
      type: [Number],
      required: true,
    },
  },
  connections: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Connection',
  }],

});

stationSchema.set('toJSON', {
  transform: (document, result) => {
    result.id = result._id.toString();
    delete result._id;
    delete result.__v;
  },
});

module.exports = mongoose.model('Station', stationSchema);
