import React, { useState } from 'react';
import Wrapper from './style';
import parkifyIcon from '../parkifyIcon.png';
import LoginButton from '../../../pages/logoutButton';
import { FaBars, FaTimes } from 'react-icons/fa';

const UserNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Wrapper>
      <nav className="navbar">
        {/* Logo */}
        <div className="navbar-logo">
          <img src={parkifyIcon} alt="Parkify Logo" />
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Links */}
        <ul className={`navbar-links ${menuOpen ? 'active' : ''}`}>
          <li><a href="#userslotview">View Slots</a></li>
          <li><a href="#userbooking">Book Slot</a></li>
          <li><a href="#mybookings">My Bookings</a></li>
          <li className='logout'><LoginButton /></li>
        </ul>
      </nav>
    </Wrapper>
  );
};

export default UserNavbar;
