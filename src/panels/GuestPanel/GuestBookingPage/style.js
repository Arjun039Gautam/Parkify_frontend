import styled from "styled-components";
import parking_bg from './parking_bg.avif';

const Wrapper = styled.div`
margin-top: 0;
padding: 0;
background-color: #0b090a;

.heading {
  color: #FFFFFF;
  margin-top: 100px;
  text-align: center;
}

/* Navbar */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  background: linear-gradient(135deg, rgba(43, 27, 18, 0.9), rgba(26, 15, 10, 0.9));
  backdrop-filter: blur(8px);
  box-shadow: 0 2px 10px rgba(0,0,0,0.3);
  transition: all 0.4s ease;
}

.navbar-logo img {
  height: 50px;
  transition: transform 0.4s ease;
}

.navbar-logo img:hover {
  transform: scale(1.05);
}

.menu-icon {
  display: none;
  font-size: 1.8rem;
  color: #f5deb3;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.menu-icon:hover {
  transform: rotate(10deg);
}

.menu-icon {
  z-index: 1001;
  position: relative;
}

.navbar-links {
  list-style: none;
  display: flex;
  gap: 2rem;
  align-items: center;
  transition: all 0.4s ease;
}

.navbar-links a {
  color: #f5deb3;
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 500;
  position: relative;
  transition: color 0.3s ease;
}

.navbar-links a::after {
  content: '';
  position: absolute;
  width: 0%;
  height: 2px;
  background: #d2b48c;
  left: 0;
  bottom: -4px;
  transition: width 0.3s ease;
}

.navbar-links a:hover {
  color: #fff;
}

.navbar-links a:hover::after {
  width: 100%;
}

.navbar-links li {
  transition: transform 0.3s ease;
}

.navbar-links li:hover {
  transform: translateY(-3px);
}

/* Responsive Navbar */
@media (max-width: 900px) {
  .menu-icon {
    display: block;
  }

  .navbar-links {
    position: fixed;
    top: 0;
    right: -300px;
    background: linear-gradient(135deg, rgba(21, 19, 21, 0.98), rgba(0, 0, 0, 0.95));
    backdrop-filter: blur(10px);
    width: 250px;
    height: 100vh;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    transition: right 0.4s ease;
    box-shadow: -5px 0 15px rgba(0,0,0,0.5);
    z-index: 999;
  }

  .navbar-links.active {
    right: 0;
  }

  .navbar-links a {
    font-size: 1.4rem;
  }

  .navbar-logo img {
    height: 40px;
  }
}

@media (max-width: 500px) {
  .navbar {
    padding: 0 1rem;
  }

  .navbar-logo img {
    height: 40px;
  }

  .menu-icon {
    font-size: 1.6rem;
  }
}

/* Booking Form Styles */
#userslotview {
  margin-top: 50px;
}
#userbooking {
  width: 100%;
  min-height: 110vh;
  background-image: url(${parking_bg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  overflow: hidden;
}

.booking-form, .booking-form2 {
  margin: auto;
  margin-top: 40px;
  padding: 2rem;
  width: 90%;
  max-width: 700px;
  box-shadow: 0 0 10px #ccc;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  color: #FFFFFF;
  text-align: center;
  backdrop-filter: blur(10px);
}

input, select {
  height: 40px;
  border-radius: 10px;
  padding: 0 10px;
  border: 1px solid #ccc;
  outline: none;
}

input:focus {
  border: 1px solid #007BFF;
  box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  background-color: #f0f8ff;
}

.sendOtp {
  height: 40px;
  border: none;
  color: blue;
  border-radius: 10px;
  cursor: pointer;
}

.submit {
  height: 40px;
  border: none;
  border-radius: 10px;
  background-color: #222;
  color: #fafafa;
  cursor: pointer;
}

.receipt {
  max-width: 400px;
  padding: 1.5rem;
  background-color: #ffffff;
  border: 2px solid #e0e0e0;
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  text-align: left;
  margin-bottom: 40px;
}

.receipt h2 {
  text-align: center;
  color: #333;
}

.receipt p {
  font-size: 1rem;
  color: #2f2620;
}

.download-btn {
  background: rgb(123, 100, 85);
  padding: 5px;
  border-radius: 10px;
  color: #ffffff;
}

.r-container {
  display: flex;
  gap: 40px;
}
img {
  height: 150px;
}

@media screen and (max-width: 700px) {
  .r-container {
    gap: 10px;
  }
  img {
    height: 150px;
    width: auto;
  }
}
`;

export default Wrapper;
