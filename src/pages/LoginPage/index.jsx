import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import Wrapper from './style';
import parkifyIcon from '../parkifyIcon.png'

const LoginPage = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/users/login`, {
        email,
        password,
      });

      const  user = response.data.user;
      alert(response.data.message)

      // Role-based navigation
      if (user.role === 'admin') {
        navigate('/admin');
      } else if (user.role === 'user') {
        sessionStorage.setItem('userEmail', user.email);
        navigate('/user');
      } 

    } catch (error) {
      console.error('Login Error:', error.response?.data || error.message);
      alert(error.response?.data || error.message)
    }
  };

  const handleGuest = () => {
    navigate('/guest');
  };

  return (
    <Wrapper>
      <header>
        <img src={parkifyIcon} alt="Parkify" />
      </header>
      <div className='body'>
        <div class="container">
            <div class="box">
                <h2>LOGIN</h2>
                <div class="form-content">
                    <div class="input-box">
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            required
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div class="input-box">
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            required
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button class="btn" onClick={handleLogin}>Sign in</button>
                    <div class="links">
                        <Link to="/signup">Don't have an account? Sign up</Link>
                        <button onClick={handleGuest} className="guest-button">
                            Continue as Guest
                        </button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default LoginPage;
