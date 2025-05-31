import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Wrapper from './style';

const MyBooking = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
  const email = sessionStorage.getItem('userEmail');
  if (!email) return;

  axios.get(`${process.env.REACT_APP_API_URL}/api/bookings/user/${email}`)
    .then((res) => {
      console.log("API Response:", res.data)
      const sorted = res.data.bookings
        .sort((a, b) => new Date(b.dateTime) - new Date(a.dateTime)) // sort descending
        .map((booking, index) => {
          const dateObj = new Date(booking.dateTime);
          return {
            id: index + 1,
            slot: `Slot ${booking.slotNumber}`,
            vehicleNumber: booking.vehicleId,
            vehicleType: booking.vehicleType,
            date: dateObj.toLocaleDateString(),
            time: dateObj.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            status: "Upcoming", // placeholder
          };
        });

      setBookings(sorted);
    })
    .catch((err) => {
      console.error("Booking fetch error:", err);
    });
}, []);


  return (
    <Wrapper>
      <h1 className='heading'>Booking History</h1>
      <div className="booking-cards-container">
        {bookings.map((booking) => (
          <div className="booking-card" key={booking.id}>
            <h3>Slot: <strong>{booking.slot}</strong></h3>
            <p>Vehicle: <strong>{booking.vehicleNumber}</strong></p>
            <p>Vehicle Type: <strong>{booking.vehicleType}</strong></p>
            <p>Date: <strong>{booking.date}</strong></p>
            <p>Time: <strong>{booking.time}</strong></p>
          </div>
        ))}
      </div>
    </Wrapper>
  );
};

export default MyBooking;
