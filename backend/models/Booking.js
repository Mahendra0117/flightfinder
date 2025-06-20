const mongoose = require('mongoose');
const bookingSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  flightId: mongoose.Schema.Types.ObjectId,
  seats: [String],
  paymentStatus: String,
  createdAt: { type: Date, default: Date.now },
});
module.exports = mongoose.model('Booking', bookingSchema);