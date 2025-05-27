import React from 'react';
import { Outlet } from 'react-router-dom';
import UserNavbar from '../UserNavbar';

const UserNavbarLayout = () => {
  return (
    <>
      <UserNavbar />
      <div style={{ paddingTop: '70px' }}>
        <Outlet />
      </div>
    </>
  );
};

export default UserNavbarLayout;
