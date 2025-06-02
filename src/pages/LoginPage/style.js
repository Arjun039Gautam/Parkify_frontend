import styled from "styled-components";

const Wrapper = styled.div`
/* .login-container {
  max-width: 400px;
  margin: 5rem auto;
  padding: 2rem;
  background: #fff;
  box-shadow: 0 0 10px #ccc;
  border-radius: 8px;
  text-align: center;
}

.login-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.login-form input {
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
}

.login-form button {
  padding: 0.75rem;
  background-color: #007bff;
  color: white;
  border: none;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
}

.login-links {
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.guest-button {
  background: none;
  color: #007bff;
  border: none;
  cursor: pointer;
  text-decoration: underline;
} */
  .body{
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
    min-height: 50vh;
    background-color: #0d0d0d;
  }
 .container {
    position: relative;
}

.box {
    position: relative;
    width: 320px;
    padding: 20px;
    backdrop-filter: blur(10px);
    box-shadow: 0px 0px 30px rgba(227, 228, 237, 0.37);
    border: 2px solid rgba(255, 255, 255, 0.18);
    border-radius: 10px;
    text-align: center;
    transition: all 0.5s ease-in-out;
    overflow: hidden;
}

h2 {
    color: white;
    cursor: pointer;
    transition: 0.3s;
}

.form-content {
    opacity: 0;
    height: 0;
    overflow: hidden;
    transition: opacity 5s ease-in-out, height 5s ease-in-out;
}

.box:hover {
    padding: 40px;
}

.box:hover .form-content {
    opacity: 1;
    height: auto;
}

.input-box {
    margin: 10px 0;
    color: #fff;
}

.input-box input {
    width: 100%;
    padding: 10px;
    border: 1px solid #00fff2;
    border-radius: 5px;
    background: transparent;
    color: white;
    outline: none;
    transition: 0.3s;
    box-sizing: border-box;
}

.input-box input:focus {
    border-color: #2f2620;
    color: #ffff;
}

.btn {
    width: 100%;
    padding: 10px;
    background: #00fff2;
    border: none;
    border-radius: 5px;
    color: black;
    font-weight: bold;
    cursor: pointer;
    transition: 0.3s;
}

.btn:hover {
    background: #ff0095;
}

.links {
    margin-top: 10px;
}

.links a {
    color: #ff0095;
    font-size: 14px;
    text-decoration: none;
}

.links a:hover {
    text-decoration: underline;
}
.guest-button {
  background: none;
  color: #007bff;
  border: none;
  cursor: pointer;
  text-decoration: underline;
}
header{
  display: flex;
  background-color: #0d0d0d;
  top: 0;
  height: 50vh;
  justify-content: center;
  img{
    height: 100%;
  }
}
`
export default Wrapper