import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Wrapper from './style';

const LoginPage = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    // Dummy validation — replace with real auth logic
    if (email === 'admin@example.com') {
      navigate('/admin');
    } else if (email && password) {
      navigate('/user');
    } else {
      alert('Invalid credentials!');
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
