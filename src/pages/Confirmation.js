import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Confirmation() {
  const { bookingId } = useParams();
  const [booking, setBooking] = useState(null);

  useEffect(() => {
    const fetchBooking = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/bookings/${bookingId}`);
        setBooking(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchBooking();
  }, [bookingId]);

  return (
    <div>
      <h2>Booking Confirmation</h2>
      {booking ? (
        <div>
          <p>Flight: {booking.flightId?.flightNumber}</p>
          <p>Route: {booking.flightId?.departure} → {booking.flightId?.destination}</p>
          <p>Seats: {booking.seats.join(', ')}</p>
          <p>Status: {booking.paymentStatus}</p>
          <p>Booked On: {new Date(booking.createdAt).toLocaleString()}</p>
        </div>
      ) : (
        <p>Loading booking details...</p>
      )}
    </div>
  );
}

export default Confirmation;