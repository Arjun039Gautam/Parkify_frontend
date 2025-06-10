import styled from "styled-components";

const Wrapper = styled.div`
background-color: #241d17;
.heading{
  color: #FFFFFF;
  text-align: center;
  background-color: #241d17;
  margin: 0;
}
.booking-cards-container {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: center;
  background-color: #241d17;
  min-height: 85vh;
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
  margin: 20px 0;
  height: 20vh;
  background: linear-gradient(to right, #241d17,rgb(59, 47, 38));
}

@media screen and (max-width: 600px) {

.booking-card {
  background-color: #2f2620;
  color: #B3B3B3;
  width: 150px;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(255, 255, 255, 0.05), 0 2px 4px rgba(0, 0, 0, 0.6);
  transition: transform 0.3s ease;
  margin: 10px 0;
}
  
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
.search-container {
  display: flex;
  justify-content: center;
  margin: 1rem 0;
}

.search-input {
  width: 90%;
  max-width: 400px;
  padding: 0.6rem 1rem;
  font-size: 1rem;
  border-radius: 8px;
  border: 1px solid #ccc;
  background-color: #1e1e1e;
  color: #fff;
}

.search-input::placeholder {
  color: #999;
}
@media (max-width: 480px) {
  .search-container {
    width: 80%;
    margin: 20px auto;
}
  .search-input {
    font-size: 0.9rem;
    padding: 0.5rem 1rem;
  }
}
`;

export default Wrapper;
