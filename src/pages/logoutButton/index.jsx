import React from 'react';
import { useNavigate } from 'react-router-dom';
import Wrapper from './style';
import { toast } from 'react-toastify';
import { CiLogout } from "react-icons/ci";

const LoginButton = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('userEmail'); // clear session
    toast.success('Logged out successfully!');

    setTimeout(() => {
      navigate('/');
    }, 1000); 
  };

  return (
    <Wrapper onClick={logout}>
      <CiLogout className="logout-btn" size={24} />
      <span>Logout</span>
    </Wrapper>
  );
};

export default LoginButton;
