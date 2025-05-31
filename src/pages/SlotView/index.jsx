import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Wrapper from './style';

const SlotView = () => {
  const [slots, setSlots] = useState([]);

  useEffect(() => {
    const fetchSlots = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/slots`);
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
        <div className='arjun'>
        <div>
          <div className='slot-available'>Available</div> 
          <div className='slot-book'>Booked</div> 
        </div>
        <h2> Slots </h2>
        <div>
          <p>(1-50 for 2-wheeler)</p>
          <p>(51-80 for 4-wheeler)</p>
        </div>
        </div>
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
