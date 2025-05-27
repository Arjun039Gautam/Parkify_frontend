import React from 'react';
import Wrapper from './style';

const AllBookings = () => {
  const vehicleEntries = [
    {
      name: 'John Doe',
      email: 'john@example.com',
      vehicleId: 'V12345',
      date: '2025-05-23',
      time: '14:30',
    },
    {
      name: 'Jane Smith',
      email: 'jane@example.com',
      vehicleId: 'V67890',
      date: '2025-05-22',
      time: '09:15',
    },
    {
      name: 'Michael Brown',
      email: 'michael@example.com',
      vehicleId: 'V24680',
      date: '2025-05-21',
      time: '18:45',
    },
    {
      name: 'Michael Brown',
      email: 'michael@example.com',
      vehicleId: 'V24680',
      date: '2025-05-21',
      time: '18:45',
    },
    {
      name: 'Michael Brown',
      email: 'michael@example.com',
      vehicleId: 'V24680',
      date: '2025-05-21',
      time: '18:45',
    },
    {
      name: 'Michael Brown',
      email: 'michael@example.com',
      vehicleId: 'V24680',
      date: '2025-05-21',
      time: '18:45',
    },
    {
      name: 'Michael Brown',
      email: 'michael@example.com',
      vehicleId: 'V24680',
      date: '2025-05-21',
      time: '18:45',
    },
    {
      name: 'Michael Brown',
      email: 'michael@example.com',
      vehicleId: 'V24680',
      date: '2025-05-21',
      time: '18:45',
    },
    {
      name: 'Michael Brown',
      email: 'michael@example.com',
      vehicleId: 'V24680',
      date: '2025-05-21',
      time: '18:45',
    },
    {
      name: 'Michael Brown',
      email: 'michael@example.com',
      vehicleId: 'V24680',
      date: '2025-05-21',
      time: '18:45',
    },
    {
      name: 'Michael Brown',
      email: 'michael@example.com',
      vehicleId: 'V24680',
      date: '2025-05-21',
      time: '18:45',
    },
    {
      name: 'Michael Brown',
      email: 'michael@example.com',
      vehicleId: 'V24680',
      date: '2025-05-21',
      time: '18:45',
    },
    {
      name: 'Michael Brown',
      email: 'michael@example.com',
      vehicleId: 'V24680',
      date: '2025-05-21',
      time: '18:45',
    },
    {
      name: 'Michael Brown',
      email: 'michael@example.com',
      vehicleId: 'V24680',
      date: '2025-05-21',
      time: '18:45',
    },
    {
      name: 'Michael Brown',
      email: 'michael@example.com',
      vehicleId: 'V24680',
      date: '2025-05-21',
      time: '18:45',
    },
    {
      name: 'Michael Brown',
      email: 'michael@example.com',
      vehicleId: 'V24680',
      date: '2025-05-21',
      time: '18:45',
    },
    {
      name: 'Michael Brown',
      email: 'michael@example.com',
      vehicleId: 'V24680',
      date: '2025-05-21',
      time: '18:45',
    },
    {
      name: 'Michael Brown',
      email: 'michael@example.com',
      vehicleId: 'V24680',
      date: '2025-05-21',
      time: '18:45',
    },
    {
      name: 'Michael Brown',
      email: 'michael@example.com',
      vehicleId: 'V24680',
      date: '2025-05-21',
      time: '18:45',
    },
    {
      name: 'Michael Brown',
      email: 'michael@example.com',
      vehicleId: 'V24680',
      date: '2025-05-21',
      time: '18:45',
    },
    {
      name: 'Michael Brown',
      email: 'michael@example.com',
      vehicleId: 'V24680',
      date: '2025-05-21',
      time: '18:45',
    },
    {
      name: 'Michael Brown',
      email: 'michael@example.com',
      vehicleId: 'V24680',
      date: '2025-05-21',
      time: '18:45',
    },
    {
      name: 'Michael Brown',
      email: 'michael@example.com',
      vehicleId: 'V24680',
      date: '2025-05-21',
      time: '18:45',
    },
    {
      name: 'Michael Brown',
      email: 'michael@example.com',
      vehicleId: 'V24680',
      date: '2025-05-21',
      time: '18:45',
    },
    {
      name: 'Michael Brown',
      email: 'michael@example.com',
      vehicleId: 'V24680',
      date: '2025-05-21',
      time: '18:45',
    },
    {
      name: 'Michael Brown',
      email: 'michael@example.com',
      vehicleId: 'V24680',
      date: '2025-05-21',
      time: '18:45',
    },
    {
      name: 'Michael Brown',
      email: 'michael@example.com',
      vehicleId: 'V24680',
      date: '2025-05-21',
      time: '18:45',
    },
    {
      name: 'Michael Brown',
      email: 'michael@example.com',
      vehicleId: 'V24680',
      date: '2025-05-21',
      time: '18:45',
    },
    {
      name: 'Michael Brown',
      email: 'michael@example.com',
      vehicleId: 'V24680',
      date: '2025-05-21',
      time: '18:45',
    },
    {
      name: 'Michael Brown',
      email: 'michael@example.com',
      vehicleId: 'V24680',
      date: '2025-05-21',
      time: '18:45',
    },
    {
      name: 'Michael Brown',
      email: 'michael@example.com',
      vehicleId: 'V24680',
      date: '2025-05-21',
      time: '18:45',
    },
  ];
  return (
    <Wrapper>
      <h1>Vehicle Entry List</h1>
        <div class="table-container">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Vehicle ID</th>
                <th>Date</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
            {vehicleEntries.map((entry, index) => (
              <tr key={index}>
                <td>{entry.name}</td>
                <td>{entry.email}</td>
                <td>{entry.vehicleId}</td>
                <td>{entry.date}</td>
                <td>{entry.time}</td>
              </tr>
            ))}
          </tbody>
          </table>
        </div>
    </Wrapper>
  );
};

export default AllBookings;
