const mongoose = require('mongoose');
const flightSchema = new mongoose.Schema({
  flightNumber: String,
  departure: String,
  destination: String,
  date: Date,
  flightClass: [String], // renamed from `class`
  airline: String,
  availableSeats: Number,
  price: Number
});
module.exports = mongoose.model('Flight', flightSchema);
