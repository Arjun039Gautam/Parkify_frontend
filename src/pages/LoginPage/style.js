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
/* width: 100vw; */
background-color: #0d0d0d;
/* width: 100%; */
/* height: 100vh; */
  .body{
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 60vh;
    background-color: #0d0d0d;
    width: 100vw;
  }
 .container {
    position: relative;
}

.box {
    position: relative;
    width: 320px;
    padding: 20px;
    backdrop-filter: blur(10px);
    /* box-shadow: 0px 0px 30px rgba(227, 228, 237, 0.37); */
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
    transition: opacity 2s ease-in-out, height 5s ease-in-out;
}

.box:hover .form-content {
    opacity: 1;
    height: auto;
}

.input-box {
    margin: 10px 0;
}

.input-box input {
    width: 100%;
    padding: 10px;
    border: 1px solid;
    border-radius: 5px;
    background: transparent;
    color: white;
    box-sizing: border-box;
}

.btn {
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 5px;
    color: black;
    font-weight: bold;
    cursor: pointer;
    transition: 0.3s;
}
.btn:hover{
  background: transparent;
  color: #fff;
  border: 1px solid #fff;
}

.links {
    margin-top: 10px;
}

.links a {
    color: #007bff;
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
  width: 100vw;
  display: flex;
  background-color: #0d0d0d;
  top: 0;
  height: 50vh;
  justify-content: center;
  img{
    height: 100%;
    /* width: 100%; */
  }
}
@media screen and (max-width: 600px){
  header{
  width: 100vw;
  display: flex;
  background-color: #0d0d0d;
  top: 0;
  height: 50vh;
  justify-content: center;
  img{
    height: 100%;
    width: 100%;
  }
}
}
`
export default Wrapper