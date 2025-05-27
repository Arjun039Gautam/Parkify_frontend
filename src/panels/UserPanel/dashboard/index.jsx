import React from 'react';
import Wrapper from './style';
import UserSlotView from '../../../pages/SlotView';
import BookingForm from '../UserBookingPage';
import MyBooking from '../MyBooking';
import UserNavbar from '../UserNavbar';

const UserDashboard = () => {
  return (
    <Wrapper>
      <UserNavbar />
      <div className="dashboard-container">
        {/* <h1 className="dashboard-heading">Welcome to Parking Dashboard</h1> */}
        <div className="dashboard-sections">
          <div id="userslotview">
            <UserSlotView />
          </div>
          <div id="userbooking">
            <BookingForm />
          </div>
          <div id="mybookings">
            <MyBooking />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default UserDashboard;
