import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Wrapper from './style';

const SlotView = () => {
  const [slots, setSlots] = useState([]);

  useEffect(() => {
    const fetchSlots = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/slots');
        setSlots(response.data);
      } catch (error) {
        console.error('Error fetching slots:', error);
      }
    };

    fetchSlots();
  }, []);

  return (
    <Wrapper>
      <div className="slotgrid-container">
        <h2>Available Slots</h2>
        <div className="slotgrid-grid">
          {slots.map((slot) => (
            <div 
              key={slot.slotId} 
              className={`slotgrid-slot ${slot.status === 'booked' ? 'booked' : 'available'}`}
              title={slot.bookedBy ? `Booked by: ${slot.bookedBy}` : 'Available'}
            >
              Slot {slot.slotNumber}
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default SlotView;
