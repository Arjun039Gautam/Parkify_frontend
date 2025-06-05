import React, { useState } from 'react';
import axios from 'axios';
import Wrapper from './style';
import SlotView from '../../../pages/SlotView';
import QR from '../personal visiting card.png';
import parkifyIcon from '../parkifyIcon.png';
import { FadeLoader } from 'react-spinners';

const GuestBookingForm = () => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);

  const [sending, setSending] = useState(false);
  const [verifying, setVerifying] = useState(false);
  const [booking, setBooking] = useState(false);

  const [vehicle, setVehicle] = useState('');
  const [vehicleType, setVehicleType] = useState('');
  const [receiptData, setReceiptData] = useState(null);

  const sendOtp = async () => {
    if (!email) {
      alert('Please enter your email first.');
      return;
    }

    setSending(true);
    try {
      await axios.post(`${process.env.REACT_APP_API_URL}/api/guest/otp/send`, {
        emailOrPhone: email,
      });
      setOtpSent(true);
      alert('OTP sent to ' + email);
    } catch (err) {
      alert('Failed to send OTP. Check console.');
      console.error(err);
    } finally {
      setSending(false);
    }
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    if (!otpSent) {
      alert('Please send and enter the OTP first.');
      return;
    }

    setVerifying(true);
    try {
      await axios.post(`${process.env.REACT_APP_API_URL}/api/guest/otp/verify`, {
        emailOrPhone: email,
        otp,
      });
      setOtpVerified(true);
      alert('OTP Verified! You can now book a slot.');
    } catch (err) {
      alert('OTP Verification failed. Check console.');
      console.error(err);
    } finally {
      setVerifying(false);
    }
  };

  const handleBooking = async (e) => {
    e.preventDefault();
    setBooking(true);

    const bookedUntil = new Date();
    bookedUntil.setDate(bookedUntil.getDate() + 1);

    try {
      const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/slots/book/guest`, {
        emailOrPhone: email,
        vehicleId: vehicle,
        vehicleType,
        bookedUntil: bookedUntil.toISOString(),
      });

      alert('Booking successful!');
      setReceiptData({
        email,
        vehicle,
        vehicleType,
        bookedUntil: bookedUntil.toLocaleString(),
        amount: res.data.amount,
        slotNumber: res.data.slotNumber,
      });

      // Reset form
      setEmail('');
      setOtp('');
      setOtpSent(false);
      setOtpVerified(false);
      setVehicle('');
      setVehicleType('');
    } catch (err) {
      alert('Booking failed. Check console.');
      console.error(err);
    } finally {
      setBooking(false);
    }
  };

  return (
    <Wrapper>
      <nav className="navbar">
        <div className="navbar-logo">
          <img src={parkifyIcon} alt="" />
        </div>
        <ul className="navbar-links">
          <li><a href="#userslotview">View Slots</a></li>
          <li><a href="#userbooking">Book Slot</a></li>
        </ul>
      </nav>

      <div className="dashboard-container">
        <div className="dashboard-sections">
          <div id="userslotview">
            <h2>Available Slots</h2>
            <SlotView />
          </div>

          <div id="userbooking">
            <h1 className="heading">Book Slot</h1>

            {/* OTP Form */}
            {verifying && (
              <div style={{ display: 'flex', justifyContent: 'center', margin: '1rem 0' }}>
                <FadeLoader color="#ffff"  height={15} width={5} radius={2} margin={2}/>
              </div>
            )}
            {!verifying && (
              <form className="booking-form" onSubmit={handleVerifyOtp}>
                <h2>User Registration</h2>
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={sending || verifying || booking}
                />

                <button
                  className="sendOtp"
                  type="button"
                  onClick={sendOtp}
                  disabled={sending || verifying || booking}
                  style={{ marginBottom: '10px' }}
                >
                  {sending ? (
                    <span style={{ color: '#ffff' }}>Loading...</span> // <-- change color here
                  ) : (
                    otpSent ? 'Resend OTP' : 'Send OTP'
                  )}
                </button>

                <input
                  type="tel"
                  placeholder="Enter OTP"
                  maxLength="6"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  required
                  disabled={sending || verifying || booking}
                />

                <button type="submit" className="submit" disabled={verifying || sending || booking}>
                  Next
                </button>
              </form>
            )}

            {/* Vehicle Booking Form */}
            {booking && (
              <div style={{ display: 'flex', justifyContent: 'center', margin: '1rem 0' }}>
                <FadeLoader color="#ffff"  height={15} width={5} radius={2} margin={2}/>
              </div>
            )}
            {!booking && (
              <form className="booking-form2" onSubmit={handleBooking}>
                <h2>Vehicle Registration</h2>
                <input
                  type="text"
                  placeholder="Vehicle ID (e.g., RJ14 SB 1242)"
                  value={vehicle}
                  onChange={(e) => setVehicle(e.target.value)}
                  required
                  disabled={!otpVerified}
                  pattern="^[A-Z]{2}[0-9]{2}\s[A-Z]{2}\s[0-9]{1,4}$"
                  title="Format: RJ14 SB 1242"
                />

                <select
                  value={vehicleType}
                  onChange={(e) => setVehicleType(e.target.value)}
                  required
                  disabled={!otpVerified}
                >
                  <option disabled value="">Select Type</option>
                  <option value="2-wheeler">2-wheeler</option>
                  <option value="4-wheeler">4-wheeler</option>
                </select>

                <button type="submit" className="submit" disabled={!otpVerified}>
                  Book Now
                </button>
              </form>
            )}

            {/* Receipt Display */}
            {receiptData && (
              <div className="receipt">
                <h2>Booking Receipt</h2>
                <div className='r-container'>
                  <div>
                    <p><strong>Email:</strong> {receiptData.email}</p>
                    <p><strong>Slot Number:</strong> {receiptData.slotNumber}</p>
                    <p><strong>Amount:</strong> ₹{receiptData.amount}</p>
                    <p><strong>Booked Until:</strong> {receiptData.bookedUntil}</p>
                  </div>
                  <div>
                    <img src={QR} alt="QR Code" />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default GuestBookingForm;
