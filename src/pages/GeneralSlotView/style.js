import styled from "styled-components";

const Wrapper = styled.div`
.slot-summary-container {
  text-align: center;
  padding: 2rem;
  font-family: 'Segoe UI', sans-serif;
}

.heading {
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: #ffffff;
}

.loader-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 120px;
}

.cards {
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
}

.card {
  background: linear-gradient(to right, #241d17,rgb(104, 82, 67));
  color: white;
  padding: 2rem;
  border-radius: 1rem;
  width: 200px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;
  animation: fadeIn 0.5s ease-in-out;
}

.card:hover {
  transform: translateY(-8px);
}

.card h3 {
  margin-bottom: 0.5rem;
  font-size: 1.25rem;
}

.card p {
  margin-bottom: 1rem;
  font-size: 0.95rem;
}

.slot-count {
  font-size: 2.5rem;
  font-weight: bold;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

`
export default Wrapper