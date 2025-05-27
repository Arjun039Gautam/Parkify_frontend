import React from 'react';
import { Link } from 'react-router-dom';
import Wrapper from './style';

const Navbar = () => {
  return (
    <Wrapper>
        <nav className="navbar">
            <div className="navbar-logo">ParkingSystem</div>
            <ul className="navbar-links">
                <li><Link to="/dashboard">Dashboard</Link></li>
                <li><Link to="/mybookings">My Bookings</Link></li>
                <li><Link to="/admin">Admin</Link></li>
                <li><Link to="/login">Logout</Link></li>
            </ul>
    </nav>
    </Wrapper>
  );
};

export default Navbar;