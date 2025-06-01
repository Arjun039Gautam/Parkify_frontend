import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Wrapper from './style';
import QR from './personal visiting card.png'

const BookingForm = () => {
  const [email, setEmail] = useState('');
  const [vehicleId, setVehicleId] = useState('');
  const [vehicleType, setVehicleType] = useState('');
  const [isPassEnabled, setIsPassEnabled] = useState(false);
  const [receipt, setReceipt] = useState(null);

  useEffect(() => {
    const storedEmail = sessionStorage.getItem('userEmail');
    setEmail(storedEmail || '');
  }, []);

  const handleNext = (e) => {
    e.preventDefault();
    if (vehicleId && vehicleType) {
      setIsPassEnabled(true); // Enable pass selection after Next
    } else {
      alert('Please fill all fields');
    }
  };

  const getBookedUntil = (passType) => {
    const now = new Date();
    if (passType === 'daily') {
      now.setDate(now.getDate() + 1);
    } else if (passType === 'monthly') {
      now.setMonth(now.getMonth() + 1);
    } else if (passType === 'yearly') {
      now.setFullYear(now.getFullYear() + 1);
    }
    return now.toISOString();
  };

  const handleBooking = async (passType) => {
    const bookedUntil = getBookedUntil(passType);
    const data = {
      email,
      vehicleType,
      vehicleId,
      passType,
      bookedUntil
    };

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/slots/book/user`,
        data
      );

      const receiptData = {
        email: email,
        slotNumber: response.data.slotNumber,
        amount: response.data.amount,
        bookedDate: new Date().toISOString().split('T')[0],
        bookedUntil: bookedUntil.split('T')[0]
      };

      setReceipt(receiptData);
      alert('Booking successful!');

      // Reset form
      setVehicleId('');
      setVehicleType('');
      setIsPassEnabled(false);
    } catch (error) {
      console.error('Booking failed:', error);
      alert('Booking failed. Check console for details.');
    }
  };

  return (
    <Wrapper>
      <h1 className="heading">Book Slot</h1>

      {/* Vehicle Info Form */}
      <form className="booking-form" onSubmit={handleNext}>
        <h2>Vehicle Registration</h2>
        <input
          type="text"
          placeholder="Vehicle ID"
          value={vehicleId}
          onChange={(e) => setVehicleId(e.target.value)}
          required
        />
        <select
          value={vehicleType}
          onChange={(e) => setVehicleType(e.target.value)}
          required
        >
          <option disabled value="">
            Select Type
          </option>
          <option value="2-wheeler">2-wheeler</option>
          <option value="4-wheeler">4-wheeler</option>
        </select>
        <button type="submit" className="submit">
          Next
        </button>
      </form>

      {/* Pass Type Form */}
      <form className="booking-form" onSubmit={(e) => e.preventDefault()}>
        <h2>Pass Type</h2>
        <input
          type="button"
          value="Daily"
          onClick={() => handleBooking('daily')}
          disabled={!isPassEnabled}
        />
        <input
          type="button"
          value="Monthly"
          onClick={() => handleBooking('monthly')}
          disabled={!isPassEnabled}
        />
        <input
          type="button"
          value="Yearly"
          onClick={() => handleBooking('yearly')}
          disabled={!isPassEnabled}
        />
      </form>

      {/* Receipt Section */}
      {receipt && (
        <div className="receipt">
          <h2>Booking Receipt</h2>
          <div className='r-container'>
            <div>
            <p><strong>Email:</strong> {receipt.email}</p>
            <p><strong>Slot Number:</strong> {receipt.slotNumber}</p>
            <p><strong>Amount:</strong> ₹{receipt.amount}</p>
            <p><strong>Booked Date:</strong> {receipt.bookedDate}</p>
            <p><strong>Booked Until:</strong> {receipt.bookedUntil}</p>
          </div>
          <div>
            <img src={QR} alt="" />
          </div>
          </div>
        </div>
      )}
    </Wrapper>
  );
};

export default BookingForm;
