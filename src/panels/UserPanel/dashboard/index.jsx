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
          <div id="userslotview" className="section fade-in-up">
            <GeneralSlotView />
          </div>
          <div id="userbooking" className="section fade-in">
            <BookingForm />
          </div>
          <div id="mybookings" className="section fade-in-up">
            <MyBooking />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default UserDashboard;
