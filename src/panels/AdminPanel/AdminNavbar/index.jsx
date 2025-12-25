import React from 'react';
import { NavLink } from 'react-router-dom';
import Wrapper from './style'; // Make sure you have appropriate CSS
import parkifyIcon from '../../../assets/parkifyIcon.png';

const AdminNavbar = () => {
  return (
    <Wrapper>
      <nav className="navbar">
        <div className="navbar-logo">
          <img src={parkifyIcon} alt="" />
        </div>
        <ul className="navbar-links">
          <li>
            <a href="#userslotview">View Slots</a>
          </li>
          <li>
            <a href="#allbooking">All bookings</a>
          </li>
        </ul>
      </nav>
    </Wrapper>
  );
};

export default AdminNavbar;
