import React from 'react';
import Wrapper from './style';
import UserSlotView from '../../AdminPanel/SlotView';
import BookingForm from '../UserBookingPage';
import MyBooking from '../MyBooking';
import UserNavbar from '../UserNavbar';
import GeneralSlotView from '../../../pages/GeneralSlotView';

const UserDashboard = () => {
  return (
    <Wrapper>
      <UserNavbar />
      <div className="dashboard-container">
        <div className="dashboard-sections">
          <div id="userslotview">
            <GeneralSlotView />
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
