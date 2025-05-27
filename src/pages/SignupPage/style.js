import styled from "styled-components";

const Wrapper = styled.div`
.signup-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
}

.signup-form {
  background-color: #f9f9f9;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 300px;
}

.signup-form h2 {
  margin-bottom: 1rem;
  text-align: center;
}

.signup-form input {
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.signup-form button {
  padding: 0.5rem;
  background-color: #222;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.signup-form button:hover {
  background-color: #444;
}

`
export default Wrapper