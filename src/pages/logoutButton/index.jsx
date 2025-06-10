import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Wrapper from './style';
import { toast } from 'react-toastify'
import { CiLogout } from "react-icons/ci";

const LoginButton = () => {
  const navigate = useNavigate();
  
  const logout = () => {
    localStorage.removeItem('userEmail'); // clear session
    toast.success('Logged out successfully!');

    // Delay navigation until toast is visible for a moment
    setTimeout(() => {
      navigate('/');
    }, 1000); // 1 second delay before redirect
  };


  return (
    <Wrapper>
      <CiLogout onClick={logout} className="logout-btn" size={30}/>
      <p>Logout</p>
    </Wrapper>
  );
};

export default LoginButton;
