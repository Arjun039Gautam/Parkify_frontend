import React from 'react'
import Wrapper from './style';

const MyBooking = () => {
  const bookings = [
  {
    id: 1,
    slot: "A1",
    vehicleNumber: "RJ14AB1234",
    date: "2025-05-10",
    time: "10:00 AM - 12:00 PM",
    status: "Completed",
  },
  {
    id: 2,
    slot: "B3",
    vehicleNumber: "RJ14XY5678",
    date: "2025-05-12",
    time: "02:00 PM - 04:00 PM",
    status: "Cancelled",
  },
  {
    id: 3,
    slot: "C2",
    vehicleNumber: "RJ14GH9012",
    date: "2025-05-15",
    time: "11:00 AM - 01:00 PM",
    status: "Upcoming",
  },
];

  return (
    <Wrapper>
      <div className="booking-cards-container">
  {bookings.map((booking) => (
    <div className="booking-card" key={booking.id}>
      <h3>Slot: {booking.slot}</h3>
      <p>Vehicle: {booking.vehicleNumber}</p>
      <p>Date: {booking.date}</p>
      <p>Time: {booking.time}</p>
    </div>
  ))}
</div>

    </Wrapper>
  )
}

export default MyBooking
