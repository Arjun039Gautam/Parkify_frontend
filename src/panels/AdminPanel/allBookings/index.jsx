import React, { useEffect, useState } from 'react';
import Wrapper from './style';
import axios from 'axios';

const AllBookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
  const fetchBookings = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/bookings/all`);
      console.log('API Response:', response.data);
      const sortedBookings = response.data.bookings.sort(
        (a, b) => new Date(b.booking_dateTime) - new Date(a.booking_dateTime)
      );
      setBookings(sortedBookings);
    } catch (error) {
      console.error('Error fetching bookings:', error);
    }
  };

  fetchBookings();
}, []);


  return (
    <Wrapper>
      <h1>Vehicle Entry List</h1>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Vehicle ID</th>
              <th>Vehicle Type</th>
              <th>Booking Date</th>
              <th>Expire Date</th>
              <th>Slot</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((entry, index) => {
              const booking_date = new Date(entry.booking_dateTime);
              const expire_date = new Date(entry.expire_dateTime);
              return (
                <tr key={index}>
                  <td>{entry.name}</td>
                  <td>{entry.email}</td>
                  <td>{entry.vehicleId}</td>
                  <td>{entry.vehicleType}</td>
                  <td>{booking_date.toLocaleString()}</td>
                  <td>{expire_date.toLocaleString()}</td>
                  <td>{entry.slotNumber}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </Wrapper>
  );
};

export default AllBookings;
