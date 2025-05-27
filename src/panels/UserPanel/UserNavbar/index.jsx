import React from 'react';
import { NavLink } from 'react-router-dom';
import Wrapper from './style'; // Make sure you have appropriate CSS

const UserNavbar = () => {
  return (
    <Wrapper>
      <nav className="navbar">
        <div className="navbar-logo">ParkingSystem</div>
        <ul className="navbar-links">
          <li>
            <a href="#userslotview">View Slots</a>
          </li>
          <li>
            <a href="#userbooking">Book Slot</a>
          </li>
          <li>
            <a href="#mybookings">My Bookings</a>
          </li>
        </ul>
      </nav>
    </Wrapper>
  );
};

export default UserNavbar;
