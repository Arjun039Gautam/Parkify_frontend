import styled from "styled-components";

const Wrapper = styled.div`
.login-container {
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
}
`
export default Wrapper