import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import Wrapper from './style';

const LoginPage = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/api/users/login', {
        email,
        password,
      });

      const { user, message } = response.data;
      alert(response.data.message)

      // Role-based navigation
      if (user.role === 'admin') {
        navigate('/admin');
      } else if (user.role === 'user') {
        sessionStorage.setItem('userEmail', user.email);
        navigate('/user');
      } else {
        navigate('/guest');
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
      <div className="login-container">
        <h2>Login</h2>
        <form className="login-form" onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">Login</button>
        </form>
        <div className="login-links">
          <Link to="/signup">Don't have an account? Sign up</Link>
          <button onClick={handleGuest} className="guest-button">
            Continue as Guest
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

export default LoginPage;
