import React, { useEffect, useState } from 'react';
import Wrapper from './style';
import axios from 'axios';
import { FadeLoader } from "react-spinners";

const AllBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [filteredBookings, setFilteredBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchBookings = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/bookings/all`);
        const sortedBookings = response.data.bookings.sort(
          (a, b) => new Date(b.booking_dateTime) - new Date(a.booking_dateTime)
        );
        setBookings(sortedBookings);
        setFilteredBookings(sortedBookings); // Initialize with full list
        setError(null);
      } catch (error) {
        console.error('Error fetching bookings:', error);
        setError(error.response?.status || 'Network Error');
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);

    const filtered = bookings.filter(entry => {
      const bookingDate = new Date(entry.booking_dateTime).toLocaleString().toLowerCase();
      return (
        entry.name?.toLowerCase().includes(term) ||
        entry.email?.toLowerCase().includes(term) ||
        entry.vehicleId?.toLowerCase().includes(term) ||
        entry.slotNumber?.toString().includes(term) ||
        bookingDate.includes(term)
      );
    });

    setFilteredBookings(filtered);
  };

  return (
    <Wrapper>
      <h1>Vehicle Entry List</h1>

      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search... "
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>


      {loading &&
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '60vh'
        }}>
          <FadeLoader color="#ffff" height={15} width={5} radius={2} margin={2} />
        </div>
      }

      {!loading && !error && (
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
              {filteredBookings.length > 0 ? filteredBookings.map((entry, index) => {
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
              }) : (
                <tr>
                  <td colSpan="7" style={{ textAlign: 'center', color: 'gray' }}>No matching records found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </Wrapper>
  );
};

export default AllBookings;
