import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'; // ✅ Import axios
import Wrapper from './style';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/users/register`, {
        name,
        email,
        password,
      });
      alert(response.data.message)
      console.log('User Registered:', response.data.user);
    } catch (error) {
      console.error('Signup Error:', error.response?.data || error.message);
      alert(error.response?.data.message || error.message)
    }
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
          <p style={{ marginTop: '1rem' }}>
            Already have an account? <Link to="/">Login</Link>
          </p>
        </form>
      </div>
    </Wrapper>
  );
};

export default Signup;
