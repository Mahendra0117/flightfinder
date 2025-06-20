import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Booking() {
  const { flightId } = useParams();
  const navigate = useNavigate();
  const [seats, setSeats] = useState('');
  const [message, setMessage] = useState('');

  const handleBooking = async () => {
    const token = localStorage.getItem('token');
    try {
      const res = await axios.post(
        'http://localhost:5000/api/bookings',
        {
          flightId,
          userId: 'mock-user-id',
          seats: seats.split(',').map(s => s.trim()),
          paymentStatus: 'Success',
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      navigate(`/confirmation/${res.data.bookingId}`);
    } catch (err) {
      setMessage('Booking failed');
    }
  };

  return (
    <div>
      <h2>Booking</h2>
      <input
        placeholder="Enter seat numbers (e.g. A1,B2)"
        value={seats}
        onChange={e => setSeats(e.target.value)}
      />
      <button onClick={handleBooking}>Confirm Booking</button>
      <p>{message}</p>
    </div>
  );
}

export default Booking;