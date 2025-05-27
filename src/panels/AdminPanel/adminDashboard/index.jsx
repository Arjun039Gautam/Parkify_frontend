import React from 'react';
import Wrapper from './style';
import AdminSlotView from '../../../pages/SlotView';
import AdminNavbar from '../AdminNavbar';
import AllBookings from '../allBookings';

const AdminDashboard = () => {
  return (
    <Wrapper>
      <AdminNavbar />
      <div className="dashboard-container">
        {/* <h1 className="dashboard-heading">Welcome to Parking Dashboard</h1> */}
        <div className="dashboard-sections">
          <div id="userslotview">
            <AdminSlotView />
          </div>
          <div id="allbooking">
            <AllBookings />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default AdminDashboard;
