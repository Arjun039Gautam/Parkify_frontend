import React from 'react';
import { useNavigate } from 'react-router-dom';
import Wrapper from './style';
import { FaParking, FaCalendarAlt, FaUserShield, FaDownload, FaCode, FaEnvelope, FaGlobe, FaLinkedin, FaGithub } from 'react-icons/fa';
import logo from '../../assets/parkifyIcon.png'
import arjunProfile from '../../assets/arjun-profile.jpg'

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <section className="hero-section">
        <div className="hero-content">
          <img className="logo" src={logo} alt="" />
          <h1>Parkify: Your Smart Parking Solution</h1>
          <p>Effortlessly find and book parking spots in real-time, right from your phone.</p>
          <div className="hero-buttons">
            <button className="book-button" onClick={() => navigate('/guest')}>Book a Spot Now</button>
            {/* These buttons are for routing to other pages */}
            <a href="/login" className="hero-link login-btn">Login</a>
            <a href="/signup" className="hero-link signup-btn">Sign Up</a>
          </div>
        </div>
      </section>

      <section className="features-section">
        <h2>Key Features</h2>
        <div className="feature-grid">
          <div className="feature-card">
            <FaParking size={40} />
            <h3>Live Slot Availability</h3>
            <p>Check real-time parking slot availability before you leave.</p>
          </div>
          <div className="feature-card">
            <FaCalendarAlt size={40} />
            <h3>Flexible Booking</h3>
            <p>Book your spot for a day, a month, or an entire year.</p>
          </div>
          <div className="feature-card">
            <FaUserShield size={40} />
            <h3>Role-Based Access</h3>
            <p>Access different panels as an Admin, User, or Guest.</p>
          </div>
          <div className="feature-card">
            <FaDownload size={40} />
            <h3>Secure Authentication</h3>
            <p>Easy and secure login with OTP email verification.</p>
          </div>
        </div>
      </section>

      <section className="how-it-works-section">
        <h2>How It Works</h2>
        <div className="how-it-works-grid">
          <div className="step-card">
            <span>1</span>
            <h3>Sign Up or Login</h3>
            <p>Create an account or continue as a guest to get started.</p>
          </div>
          <div className="step-card">
            <span>2</span>
            <h3>Check Availability</h3>
            <p>View the number of available slots in real-time on your dashboard.</p>
          </div>
          <div className="step-card">
            <span>3</span>
            <h3>Book Your Spot</h3>
            <p>Select your vehicle type and choose a pass that fits your needs.</p>
          </div>
        </div>
      </section>

      <section className="tech-section">
        <h2>Our Technology Stack</h2>
        <p>Built with a robust MERN stack for a seamless user experience.</p>
        <div className="tech-logos">
          <FaCode size={50} title="React.js" />
          <FaCode size={50} title="Node.js" />
          <FaCode size={50} title="MongoDB" />
        </div>
      </section>

      <section className="developer-section">
        <h2>Meet the Developer</h2>
        <div className="developer-card">
          <div className="dev-image">
            <img src="https://res.cloudinary.com/dancodp27/image/upload/v1766662393/arjun-profile_uiafqx.jpg" alt="Developer" />
          </div>
          <div className="dev-info">
            <h3>Arjun Gautam</h3>
            <p className="dev-role">Full Stack Developer</p>
            <p className="dev-bio">
              Passionate about building scalable web applications and solving real-world problems with code.
              Created Parkify to simplify urban parking.
            </p>
            <div className="social-links">
              <a href="mailto:arjungautam3007@gmail.com.com" className="social-icon" title="Email">
                <FaEnvelope />
              </a>
              <a href="https://www.arjungautam.in" target="_blank" rel="noopener noreferrer" className="social-icon" title="Portfolio">
                <FaGlobe />
              </a>
              <a href="https://www.linkedin.com/in/arjun-gautam-52a752283" target="_blank" rel="noopener noreferrer" className="social-icon" title="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="https://github.com/Arjun039Gautam" target="_blank" rel="noopener noreferrer" className="social-icon" title="GitHub">
                <FaGithub />
              </a>
            </div>
          </div>
        </div>
      </section>
    </Wrapper >
  );
};

export default HomePage;

