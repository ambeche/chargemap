'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const connectionTypeSchema = new Schema({
  FormalName: String,
  Title: String,
});

const currentTypeSchema = new Schema({
  Description: String,
  Title: String,
});

const levelSchema = new Schema({
  Title: String,
  Comments: String,
  IsFastChargeCapable: Boolean,
});

const connectionSchema = new mongoose.Schema({
  Quantity: Number,
  ConnectionTypeID: {type: Schema.Types.ObjectId, ref: 'ConnectionType'},
  CurrentTypeID: {type: Schema.Types.ObjectId, ref: 'CurrentType'},
  LevelID: {type: Schema.Types.ObjectId, ref: 'Level'},
});

const ConnectionType = mongoose.model('ConnectionType', connectionTypeSchema);
const CurrentType = mongoose.model('CurrentType', currentTypeSchema);
const Level = mongoose.model('Level', levelSchema);
const Connection = mongoose.model('Connection', connectionSchema);

module.exports = {
  Connection,
  ConnectionType,
  CurrentType,
  Level,
};
