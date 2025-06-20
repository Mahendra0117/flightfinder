import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Search() {
  const [query, setQuery] = useState({ from: '', to: '', date: '' });
  const [flights, setFlights] = useState([]);

  const handleChange = e => setQuery({ ...query, [e.target.name]: e.target.value });

  const searchFlights = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/api/flights/search`, {
        params: query,
      });
      setFlights(res.data);
    } catch (err) {
      alert('Error fetching flights');
    }
  };

  return (
    <div>
      <h2>Search Flights</h2>
      <input name="from" placeholder="From" onChange={handleChange} />
      <input name="to" placeholder="To" onChange={handleChange} />
      <input name="date" type="date" onChange={handleChange} />
      <button onClick={searchFlights}>Search</button>
      <ul>
        {flights.map(flight => (
          <li key={flight._id}>
            {flight.flightNumber} - {flight.departure} to {flight.destination} | ₹{flight.price}
            <Link to={`/booking/${flight._id}`}><button>Book</button></Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Search;