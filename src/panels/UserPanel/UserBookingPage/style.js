import styled from "styled-components";

const Wrapper = styled.div`
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
  .submit {
    height: 40px;
    border: none;
    border-radius: 10px;
    background-color: #222;
    color: #fafafa;
    cursor: pointer;
  }
`
export default Wrapper