import styled from "styled-components";

const Wrapper = styled.div`
margin-top: 0;
padding: 0;
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
  }

  .navbar-logo {
  font-size: 1.5rem;
  font-weight: bold;
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
#userbooking{
  width: 100%;
  height: 110vh; /* Add height */
  background-image: url("https://images.unsplash.com/photo-1573348722427-f1d6819fdf98?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
  background-repeat: no-repeat;
  background-size: cover;       
  background-position: center;
  overflow: hidden;
}
  .booking-form {
    margin: auto;
    margin-top: 40px ;
    padding: 2rem;
    width: 500px;
    box-shadow: 0 0 10px #ccc;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    color: #FFFFFF;
    text-align: center;
    backdrop-filter: blur(10px);
  }
  .booking-form2 {
    margin: auto;
    margin-top: 40px ;
    padding: 2rem;
    width: 500px;
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
    transition: border 0.3s, box-shadow 0.3s;
  }

  input:focus {
    height: 50px;
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
`;

export default Wrapper;
