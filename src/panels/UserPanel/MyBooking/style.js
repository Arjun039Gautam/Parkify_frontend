import styled from "styled-components";

const Wrapper = styled.div`
  .booking-cards-container {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: center;
  background-color: #241d17;
  height: 88vh;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.4), 0 0 10px rgba(255, 255, 255, 0.03);
}

.booking-card {
  background-color: #2f2620;
  color: #B3B3B3;
  width: 250px;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(255, 255, 255, 0.05), 0 2px 4px rgba(0, 0, 0, 0.6);
  transition: transform 0.3s ease;
  margin-top: 40px;
  height: 30vh;
}

.booking-card:hover {
  transform: scale(1.03);
}

.status.completed {
  color: #4CAF50;
}

.status.cancelled {
  color: #F44336;
}

.status.upcoming {
  color: #FFC107;
}

`;

export default Wrapper;
