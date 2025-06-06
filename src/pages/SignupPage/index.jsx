import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'; // ✅ Import axios
import Wrapper from './style';
import parkifyIcon from '../parkifyIcon.png'
import { toast } from 'react-toastify'

const Signup = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSignup = async (e) => {
  e.preventDefault();

  if (!isValidEmail(email)) {
    const errorMsg = 'Please enter a valid email address';
    setEmailError(errorMsg);
    console.error(errorMsg);
    toast.error(errorMsg)
    return;
  } else {
    setEmailError('');
  }

  setLoading(true); // Start loading

  try {
    const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/users/register`, {
      name,
      email,
      password,
    });
    const user = response.data.user;
    toast.success(response.data.message)
    sessionStorage.setItem('userEmail', user.email);
    navigate('/user');
  } catch (error) {
    console.error('Signup Error:', error.response?.data || error.message);
    toast.error(error.response?.data.error || error.message)
  } finally {
    setLoading(false); // Stop loading
  }
};

  return (
    <Wrapper>
      <header>
        <img src={parkifyIcon} alt="Parkify" />
      </header>
      <div className='body'>
        <div className="container">
        <div className="box">
            <h2>SIGNUP</h2>
            <div className="form-content">
                <div className="input-box">
                    <input
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="input-box">
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        
                    />
                </div>
                <div className="input-box">
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button className="btn" onClick={handleSignup} disabled={loading}>
                  {loading ? "Creating Account..." : "Signup"}
                </button>
                <div className="links">
                    <p style={{ marginTop: '1rem' }}>
                        Already have an account? <Link to="/">Login</Link>
                    </p>
                </div>
            </div>
        </div>
    </div>
      </div>
    </Wrapper>
  );
};

export default Signup;
