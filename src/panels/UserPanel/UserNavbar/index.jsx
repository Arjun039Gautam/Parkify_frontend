import React, { useState } from 'react';
import Wrapper from './style';
import parkifyIcon from '../../../assets/parkifyIcon.png';
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
          <li><a href="#userslotview" onClick={() => setMenuOpen(false)}>View Slots</a></li>
          <li><a href="#userbooking" onClick={() => setMenuOpen(false)}>Book Slot</a></li>
          <li><a href="#mybookings" onClick={() => setMenuOpen(false)}>My Bookings</a></li>
          <li className='logout' onClick={() => setMenuOpen(false)}><LoginButton /></li>
        </ul>
      </nav>
    </Wrapper>
  );
};

export default UserNavbar;
