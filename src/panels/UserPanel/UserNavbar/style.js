import styled from "styled-components";

const Wrapper = styled.div`
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
  height: 150px;
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

/* ---------- Responsive ---------- */
@media (max-width: 900px) {
  .menu-icon {
    display: block;
  }

  .navbar-links {
    position: fixed;
    top: 70px;
    right: -100%;
    background: rgba(26, 15, 10, 0.95);
    backdrop-filter: blur(10px);
    width: 100%;
    height: calc(100vh - 70px);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    transition: right 0.4s ease;
  }

  .navbar-links.active {
    right: 0;
  }

  .navbar-links a {
    font-size: 1.4rem;
  }

  .navbar-logo img {
    height: 120px;
  }
}
/* .logout{
  background: #fff;
  border-radius: 10px;
  padding: 3px;
  min-width: 50px;
} */
@media (max-width: 500px) {
  .navbar {
    padding: 0 1rem;
  }

  .navbar-logo img {
    height: 100px;
  }

  .menu-icon {
    font-size: 1.6rem;
  }
}
`;

export default Wrapper;
