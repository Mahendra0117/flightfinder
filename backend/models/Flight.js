const mongoose = require('mongoose');
const flightSchema = new mongoose.Schema({
  flightNumber: String,
  departure: String,
  destination: String,
  date: Date,
  class: [String],
  airline: String,
  availableSeats: Number,
  price: Number
});
module.exports = mongoose.model('Flight', flightSchema);