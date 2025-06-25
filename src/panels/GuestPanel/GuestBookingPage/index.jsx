import React, { useState } from 'react';
import axios from 'axios';
import Wrapper from './style';
import parkifyIcon from '../parkifyIcon.png';
import { FadeLoader } from 'react-spinners';
import { toast } from 'react-toastify'
import { toPng } from 'html-to-image'; // <-- import this
import { useRef } from 'react'; // <-- already likely used
import GeneralSlotView from '../../../pages/GeneralSlotView';

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
  const [receipt, setReceipt] = useState(null);

  const receiptRef = useRef(); // 🔁 1. Create a ref
  
    // 🔁 2. Image download function
    const downloadReceipt = () => {
    const node = receiptRef.current;
    if (!node) return;
  
    const images = node.querySelectorAll('img');
    const loadPromises = Array.from(images).map((img) => {
      if (img.complete) return Promise.resolve();
      return new Promise((resolve) => {
        img.onload = resolve;
        img.onerror = resolve;
      });
    });
  
    Promise.all(loadPromises).then(() => {
    setTimeout(() => {
      toPng(node, {
        cacheBust: true,
        pixelRatio: 2,
        style: { animation: 'none' },
        skipFonts: false,
      })
        .then((dataUrl) => {
          const link = document.createElement('a');
          link.download = 'booking-receipt.png';
          link.href = dataUrl;
          link.click();
        })
        .catch((err) => {
          console.error('Image generation failed:', err);
          toast.error('Download failed.');
        });
    }, 300); // 👈 Add a short delay
  });
  
  };

  const sendOtp = async () => {
    if (!email) {
      toast.warning('Please enter your email first.')
      return;
    }

    setSending(true);
    try {
      await axios.post(`${process.env.REACT_APP_API_URL}/api/guest/otp/send`, {
        emailOrPhone: email,
      });
      setOtpSent(true);
      toast.info('OTP sent to ' + email)
    } catch (err) {
      toast.error('Failed to send OTP. Check console.')
      console.error(err);
    } finally {
      setSending(false);
    }
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    if (!otpSent) {
      toast.warning('Please send and enter the OTP first.')
      return;
    }

    setVerifying(true);
    try {
      await axios.post(`${process.env.REACT_APP_API_URL}/api/guest/otp/verify`, {
        emailOrPhone: email,
        otp,
      });
      setOtpVerified(true);
      toast.success('OTP Verified! You can now book a slot.')
    } catch (err) {
      toast.error('OTP Verification failed.')
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
      toast.success('Booking successful!')
      setReceipt({
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
      toast.error('Booking failed.',err);
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
            <GeneralSlotView />
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
                  placeholder="Vehicle ID (e.g., RJ14SB1242)"
                  value={vehicle}
                  onChange={(e) => setVehicle(e.target.value.toUpperCase().replace(/\s/g, ''))}
                  required
                  disabled={!otpVerified}
                  pattern="^[A-Z]{2}[0-9]{2}[A-Z]{2}[0-9]{1,4}$"
                  title="Format: RJ14SB1242"
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
            {receipt && (
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div className="receipt" ref={receiptRef}>
                  <h2>Booking Receipt</h2>
                  <div className='r-container'>
                    <div>
                      <p><strong>Email:</strong> {receipt.email}</p>
                      <p><strong>Slot Number:</strong> {receipt.slotNumber}</p>
                      <p><strong>Amount:</strong> ₹{receipt.amount}</p>
                      <p><strong>Booked Until:</strong> {receipt.bookedUntil}</p>
                      <p><strong>Vehicle No.:</strong> {receipt.vehicle}</p>
                      <p><strong>Vehicle Type:</strong> {receipt.vehicleType}</p>
                    </div>
                    <div>
                      <img src="/personal visiting card.png" alt="QR Code" style={{ height: '150px' }} crossOrigin="anonymous"/> 
                    </div>
                  </div>
                  <button onClick={downloadReceipt} className='download-btn'>
                    Download
                  </button>
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
