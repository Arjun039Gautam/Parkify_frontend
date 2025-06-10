import styled from "styled-components";

const Wrapper = styled.div`
width: 90vw;
margin: auto;
/* BookingForm.css */
.heading{
  color: #FFFFFF;
  margin-top: 80px;
  text-align: center;
}
.booking-form {
    margin: auto;
    margin-top: 40px ;
    margin-bottom: 70px;
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
  .submit {
    height: 40px;
    border: none;
    border-radius: 10px;
    background-color: #222;
    color: #fafafa;
    cursor: pointer;
  }
  /* .receipt {
    width: 60vw;
    backdrop-filter: blur(10px);
    color: #fafafa;
    border: 2px dotted #ccc;
    padding: 16px;
    margin: 20px auto;
    border-radius: 8px;
    justify-content: space-around;
    align-items: center;
} */

.receipt {
  max-width: 400px;
  width: 100%;
  /* margin: 2rem auto; centers horizontally */
  padding: 1.5rem;
  background-color: #ffffff;
  border: 2px solid #e0e0e0;
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  font-family: 'Segoe UI', sans-serif;
  text-align: left;
  animation: none !important;
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
    width: auto;
  }
  }

  .download-btn{
    background:rgb(123, 100, 85);
    padding: 5px;
    border-radius: 10px;
    color: #ffffff;
  }
  
`
export default Wrapper