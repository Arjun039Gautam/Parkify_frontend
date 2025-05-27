import React from 'react';
import Wrapper from './style';

const SlotView = () => {
  const slots = Array.from({ length: 20 }, (_, i) => i + 1); // [1, 2, 3, ..., 20]

  return (
    <Wrapper>
      <div className="slotgrid-container">
        <h2>Available Slots</h2>
        <div className="slotgrid-grid">
          {slots.map((slotNumber) => (
            <div key={slotNumber} className="slotgrid-slot">
              Slot {slotNumber}
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default SlotView;
