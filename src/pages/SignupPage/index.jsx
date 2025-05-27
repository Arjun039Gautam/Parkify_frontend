import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // 1. Import Link
import Wrapper from './style';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    console.log('Signing up with', name, email, password);
    // Add API call here
  };

  return (
    <Wrapper>
      <div className="signup-container">
        <form className="signup-form" onSubmit={handleSignup}>
          <h2>Signup</h2>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Signup</button>

          {/* 2. Add login link */}
          <p style={{ marginTop: '1rem' }}>
            Already have an account? <Link to="/">Login</Link>
          </p>
        </form>
      </div>
    </Wrapper>
  );
};

export default Signup;
