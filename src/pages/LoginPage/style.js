import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const Wrapper = styled.div`
  background: linear-gradient(135deg, #3e2723, #1b0000);
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${fadeIn} 1s ease-in-out;

  .main-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  .login-box {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 15px;
    padding: 30px;
    width: 400px;
    max-width: 90%;
    backdrop-filter: blur(15px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.6);
    text-align: center;
    animation: ${fadeIn} 1s ease forwards;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  header {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 20px;

    img {
      max-height: 80px;
      width: auto;
    }
  }

  h2 {
    color: #ffcc80;
    margin-bottom: 20px;
    font-size: 2rem;
  }

  .google-login {
    margin-bottom: 20px;
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .form-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  .input-box {
    margin: 10px 0;
    width: 100%;
  }

  .input-box input {
    width: 100%;
    padding: 15px;
    border: none;
    border-radius: 25px;
    background: rgba(255, 255, 255, 0.1);
    color: white;
    font-size: 16px;
    outline: none;
    transition: 0.3s;
  }

  .input-box input:focus {
    background: rgba(255, 255, 255, 0.2);
    box-shadow: 0 0 10px rgba(255, 204, 128, 0.5);
  }

  .btn {
    width: 100%;
    padding: 15px;
    border: none;
    border-radius: 25px;
    background: linear-gradient(135deg, #8d6e63, #5d4037);
    color: white;
    font-weight: bold;
    font-size: 16px;
    cursor: pointer;
    margin-top: 15px;
    transition: background 0.3s ease;
  }

  .btn:hover {
    background: linear-gradient(135deg, #5d4037, #8d6e63);
  }

  .links {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .links a {
    color: #ffcc80;
    text-decoration: none;
    margin-bottom: 10px;
  }

  .links a:hover {
    text-decoration: underline;
  }

  .guest-button {
    background: none;
    border: none;
    color: #ffcc80;
    cursor: pointer;
    font-size: 15px;
    margin-top: 10px;
  }

  .guest-button:hover {
    text-decoration: underline;
  }

  @media screen and (max-width: 600px) {
    .login-box {
      width: 90%;
      padding: 20px;
    }
  }

  .back-btn {
    position: absolute;
    top: 20px;
    left: 20px;
    background: rgba(255, 255, 255, 0.1);
    color: #ffcc80;
    border: 1px solid rgba(255, 255, 255, 0.2);
    padding: 10px 20px;
    border-radius: 30px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 16px;
    font-weight: bold;
    backdrop-filter: blur(5px);
    transition: all 0.3s ease;
    z-index: 10;
  }

  .back-btn:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateX(-5px);
    box-shadow: 0 0 15px rgba(255, 204, 128, 0.3);
  }
`;

export default Wrapper;
