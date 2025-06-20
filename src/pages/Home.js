import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Welcome to FlightFinder</h1>
      <p>Find and book flights easily.</p>
      <Link to="/search"><button>Search Flights</button></Link>
  </div>
  );
}

export default Home;