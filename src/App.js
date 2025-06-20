import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Search from './pages/Search';
import Booking from './pages/Booking';
import Confirmation from './pages/Confirmation';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/search" element={<Search />} />
        <Route path="/booking/:flightId" element={<Booking />} />
        <Route path="/confirmation/:bookingId" element={<Confirmation />} />
      </Routes>
    </Router>
  );
}

export default App;