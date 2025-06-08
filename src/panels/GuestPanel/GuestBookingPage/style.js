import parking_bg from './parking_bg.avif'
import styled from "styled-components";

const Wrapper = styled.div`
margin-top: 0;
padding: 0;
.heading{
  color: #FFFFFF;
  margin-top: 100px;
  text-align: center;
}
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
#userslotview{
  margin-top: 50px;
}
#userbooking{
  width: 100%;
  min-height: 110vh;
  background-image: url(${parking_bg});
  background-repeat: no-repeat;
  background-size: cover;       
  background-position: center;
  overflow: hidden;
}
  .booking-form {
    margin: auto;
    margin-top: 40px ;
    padding: 2rem;
    width: 50vw;
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
    margin-bottom: 30px;
    padding: 2rem;
    width: 50vw;
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

  .receipt {
    animation: fadeIn 0.7s ease-in-out;
    background-color: #ffffff;
    border: 2px solid #e0e0e0;
    border-radius: 12px;
    padding: 1.5rem;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
    max-width: 400px;
    margin: 2rem auto;
    text-align: left;
    font-family: 'Segoe UI', sans-serif;
  }

  .receipt h2 {
    margin-bottom: 1rem;
    text-align: center;
    color: #333;
  }

  .receipt p {
    margin: 0.3rem 0;
    font-size: 1rem;
    color: #2f2620;
  }

  .receipt strong {
    color: #241d17;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(15px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  .r-container{
    display: flex;
    gap: 40px;
  }
  img{
    height: 150px;
  }
  @media screen and (max-width: 700px){
    .r-container{
    display: flex;
    gap: 10px;
  }
  img{
    height: 150px;
  }
  }
`;

export default Wrapper;
