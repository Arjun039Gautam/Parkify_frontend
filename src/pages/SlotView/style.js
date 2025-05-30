import styled from "styled-components";

const Wrapper = styled.div`
.slotgrid-container {
  min-height: 85vh;
  padding: 2rem;
  text-align: center;
  background-color: #0b090a;
  color: 	#F1F1F1;
}

.slots-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
}
.slotgrid-grid{
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
}

.slotgrid-slot{
  
  padding: 1.5rem;
  width: 250px;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(255, 255, 255, 0.05), 0 2px 4px rgba(0, 0, 0, 0.6);
  text-decoration: none;
  color: #B3B3B3;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.available {
    background-color: #1F1D21;
  }

  .booked {
    background-color: #2f2620;
  }
.slotgrid-slot:hover{
  transform: translateY(-5px);
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
}
.slot {
  padding: 1rem;
  border-radius: 8px;
  background-color: #1E1E1E;
  font-weight: bold;
}

.slot.available {
  background-color: #b2f2bb;
}

.slot.booked {
  background-color: blue;
}
`
export default Wrapper