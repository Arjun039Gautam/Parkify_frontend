import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Wrapper from './style';

const BookingForm = () => {
  const [email, setEmail] = useState('');
  const [vehicleId, setVehicleId] = useState('');
  const [vehicleType, setVehicleType] = useState('');
  const [isPassEnabled, setIsPassEnabled] = useState(false);

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
    if (passType === 'Daily') {
      now.setDate(now.getDate() + 1);
    } else if (passType === 'Monthly') {
      now.setMonth(now.getMonth() + 1);
    } else if (passType === 'Yearly') {
      now.setFullYear(now.getFullYear() + 1);
    }
    return now.toISOString();
  };

  const handleBooking = async (passType) => {
    const bookedUntil = getBookedUntil(passType);
    const data = {
      email: email,
      vehicleType,
      vehicleId,
      bookedUntil
    };
    console.log(data);
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/slots/book/user`, data);
      alert('Booking successful!');
      console.log(response.data);
    } catch (error) {
      console.error('Booking failed:', error);
      alert('Booking failed. Check console for details.');
    }
  };

  return (
    <Wrapper>
      <h1 className='heading'>Book Slot</h1>
      <form className="booking-form" onSubmit={handleNext}>
        <h2>Vehicle Registration</h2>
        <input
          type="text"
          placeholder="Vehicle ID"
          value={vehicleId}
          onChange={(e) => setVehicleId(e.target.value)}
          required
        />
        <select value={vehicleType} onChange={(e) => setVehicleType(e.target.value)} required>
          <option disabled value="">Select Type</option>
          <option value="2-wheeler">2-wheeler</option>
          <option value="4-wheeler">4-wheeler</option>
        </select>
        <button type="submit" className='submit'>Next</button>
      </form>

      <form className="booking-form" onSubmit={(e) => e.preventDefault()}>
        <h2>Pass Type</h2>
        <input type="button" value="Daily" onClick={() => handleBooking('Daily')} disabled={!isPassEnabled} />
        <input type="button" value="Monthly" onClick={() => handleBooking('Monthly')} disabled={!isPassEnabled} />
        <input type="button" value="Yearly" onClick={() => handleBooking('Yearly')} disabled={!isPassEnabled} />
      </form>
    </Wrapper>
  );
};

export default BookingForm;
