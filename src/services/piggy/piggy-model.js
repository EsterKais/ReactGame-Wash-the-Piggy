'use strict';

// piggy-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const spotSchema = new Schema({
  dirt: { type: String, required: true},
  cleaned: { type: Boolean, required: true, 'default': false },
})

const playerSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'user' },
  name: { type: String, required: true },
  cleanedSpots: [String]
})

const piggySchema = new Schema({
  spots: [spotSchema],
  players: [playerSchema],
  timerStarted: Boolean,
  winner: { type: Number, required: false },
  createdAt: { type: Date, 'default': Date.now },
  updatedAt: { type: Date, 'default': Date.now },
  userId: { type: Schema.Types.ObjectId, ref: 'user' },
  draw: { type: Boolean, required: false }
});

const piggyModel = mongoose.model('piggy', piggySchema);

module.exports = piggyModel;
