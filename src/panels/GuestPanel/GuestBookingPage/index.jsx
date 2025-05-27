import React, { useState } from 'react';
import Wrapper from './style';
import SlotView from '../../../pages/SlotView';

const GuestBookingForm = () => {
  const [vehicle, setVehicle] = useState('');
  const [slot, setSlot] = useState('');
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [sending, setSending] = useState(false);

  const sendOtp = () => {
    if (!email) {
      alert('Please enter your email first.');
      return;
    }

    setSending(true);
    setTimeout(() => {
      alert('OTP sent to ' + email);
      setOtpSent(true);
      setSending(false);
    }, 1000); // Simulate sending OTP
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!otpSent) {
      alert('Please send and enter the OTP first.');
      return;
    }
    console.log('Booking:', { email, otp, vehicle, slot });
    alert('Booking submitted successfully!');
  };

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
        </ul>
      </nav>
      <div className="dashboard-container">
        {/* <h1 className="dashboard-heading">Welcome to Parking Dashboard</h1> */}
        <div className="dashboard-sections">
          <div id="userslotview">
          <h2>Available Slots</h2>
            <SlotView />
          </div>
          <div id="userbooking">
          <form className="booking-form" onSubmit={handleSubmit}>
              <h2>User Registration</h2>

              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <button
              className='sendOtp'
                type="button"
                onClick={sendOtp}
                disabled={sending}
                style={{ marginBottom: '10px' }}
              >
                {otpSent ? 'Resend OTP' : 'Send OTP'}
              </button>

              <input
                type="tel"
                placeholder="Enter OTP"
                maxLength="4"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                required
              />

              <button type="submit" className='submit'>Next</button>
            </form>
            <form className="booking-form2" onSubmit={handleSubmit}>
              <h2>Vehicle Registration</h2>

              <input
                type="text"
                placeholder="Vehicle ID"
                value={vehicle}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <select id="type">
                <option disabled selected value="">Select Type</option>
                <option value="cycle">Cycle</option>
                <option value="bike">Bike</option>
                <option value="car">Car</option>
              </select>
              <button type="submit" className='submit'>Book Now</button>
            </form>
          </div>
          
        </div>
      </div>
      
      
    </Wrapper>
  );
};

export default GuestBookingForm;
