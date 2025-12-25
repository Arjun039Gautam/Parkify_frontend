import styled from "styled-components";

const Wrapper = styled.nav`
.navbar {
  position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 60px;
    z-index: 1000;
    display: flex;
    align-items: center;
    padding: 0 20px;
    padding: 0 20px;
    background: linear-gradient(135deg, rgba(21, 19, 21, 0.95), rgba(0, 0, 0, 0.9));
    backdrop-filter: blur(10px);
    box-shadow: 0 2px 10px rgba(0,0,0,0.3);
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #FFFFFF;
}

.navbar-logo {
  font-size: 1.5rem;
  font-weight: bold;
  img{
    height: 50px;
    transition: transform 0.3s ease;
  }
  img:hover {
    transform: scale(1.1);
  }
}

.navbar-links {
  list-style: none;
  display: flex;
  gap: 1.5rem;
}
.navbar-links a {
  color: white;
  text-decoration: none;
}
/* .navbar-links li :hover{
  font-size: large;
  color: #81D4FA;
} */
`
export default Wrapper