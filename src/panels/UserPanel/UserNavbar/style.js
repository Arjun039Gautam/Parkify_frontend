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
    background-color: #151315;
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
    height: 200px;
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
.navbar-links li :hover{
  font-size: large;
  color: #81D4FA;
}

@media screen and (max-width: 600px) {

.navbar {
  position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 60px;
    z-index: 1000;
    display: flex;
    align-items: center;
    padding: 20px 0;
    background-color: #151315;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #FFFFFF;
}
  .navbar-links {
  list-style: none;
  display: flex;
  gap: 2px;
}
}
`
export default Wrapper