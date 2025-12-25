import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import axios from 'axios';
import Wrapper from './style';
import parkifyIcon from '../../assets/parkifyIcon.png';
import { toast } from 'react-toastify';

const Signup = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [otpInputs, setOtpInputs] = useState(['', '', '', '', '', '']);

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSendOtp = async () => {
    if (!isValidEmail(email)) {
      const errorMsg = 'Please enter a valid email address';
      setEmailError(errorMsg);
      toast.error(errorMsg);
      return;
    }
    setEmailError('');
    setLoading(true);
    try {
      const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/users/send-otp`, { email });
      toast.success(res.data.message || 'OTP sent successfully!');
      setOtpSent(true);
    } catch (err) {
      console.error('Send OTP Error:', err.response?.data || err.message);
      toast.error(err.response?.data?.error || err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyAndRegister = async () => {
    console.log("Email state value:", email);
    const otp = otpInputs.join('');
    if (otp.length !== 6) {
      toast.error('Please enter a 6-digit OTP');
      return;
    }
    setLoading(true);
    try {
      const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/users/verify-register`, {
        name,
        email,
        password,
        otp,
      });
      toast.success(res.data.message || 'Registered successfully!');
      localStorage.setItem('userEmail', email);
      sessionStorage.setItem('userEmail', email);
      console.log("Successfully registered! Redirecting to /user");
      setTimeout(() => {
        navigate('/user');
      }, 100);
    } catch (err) {
      console.error('Verify/Register Error:', err.response?.data || err.message);
      toast.error(err.response?.data?.error || err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleOtpChange = (index, value) => {
    if (value.length > 1) return;
    const updatedOtp = [...otpInputs];
    updatedOtp[index] = value;
    setOtpInputs(updatedOtp);
    // Auto-focus to next field
    if (value && index < 5) {
      document.getElementById(`otp-${index + 1}`)?.focus();
    }
  };

  const handleResendOtp = () => {
    handleSendOtp();
  };

  const handleOtpKeyDown = (e, index) => {
    if (e.key === 'Backspace') {
      e.preventDefault(); // prevent default behavior

      const updatedOtp = [...otpInputs];

      if (otpInputs[index] === '') {
        // move back if current is already empty
        if (index > 0) {
          updatedOtp[index - 1] = '';
          setOtpInputs(updatedOtp);
          document.getElementById(`otp-${index - 1}`)?.focus();
        }
      } else {
        // clear current if not empty
        updatedOtp[index] = '';
        setOtpInputs(updatedOtp);
      }
    }
  };


  return (
    <Wrapper>

      <div className='body'>
        <button className="back-btn" onClick={() => navigate('/')}>
          <FaArrowLeft /> Back
        </button>
        <div className="container">
          <div className="flip-container">
            <div className={`flip-box ${otpSent ? 'flipped' : ''}`}>
              <div className="flip-front">
                <div className="box">
                  <header>
                    <img src={parkifyIcon} alt="Parkify" />
                  </header>
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
                    <button className="btn" onClick={handleSendOtp} disabled={loading}>
                      {loading ? 'Sending OTP...' : 'Send OTP'}
                    </button>
                    <div className="links">
                      <Link to="/login">Already have an account? Login</Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flip-back">
                <div className="verify-box">
                  <header>
                    <img src={parkifyIcon} alt="Parkify" />
                  </header>
                  <h2>Verify Your Account</h2>
                  <p>
                    We emailed you the six digit code to <strong>{email}</strong><br />
                    Enter the code below to confirm your email address
                  </p>
                  <div className="code-inputs">
                    {otpInputs.map((digit, i) => (
                      <input
                        key={i}
                        id={`otp-${i}`}
                        type="tel"
                        inputMode="numeric"
                        pattern="[0-9]*"
                        maxLength="1"
                        value={digit}
                        onChange={(e) => handleOtpChange(i, e.target.value)}
                        onKeyDown={(e) => handleOtpKeyDown(e, i)}
                      />
                    ))}
                  </div>
                  <button className="verify-btn" onClick={handleVerifyAndRegister} disabled={loading}>
                    {loading ? "Verifying..." : "VERIFY"}
                  </button>
                  <p className="resend-text">
                    Didn't receive a code? <span className="resend-link" onClick={handleResendOtp}>RESEND</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </Wrapper>
  );
};

export default Signup;
