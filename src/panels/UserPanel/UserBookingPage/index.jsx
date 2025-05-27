// Component: BookingForm.js
import React, { useState } from 'react';
import Wrapper from './style';

const BookingForm = () => {
  return (
    <Wrapper>
      <form className="booking-form" >
              <h2>Vehicle Registration</h2>

              <input
                type="text"
                placeholder="Vehicle ID"
                required
              />
              <select id="type">
                <option disabled selected value="">Select Type</option>
                <option value="bike">Bike</option>
                <option value="car">Car</option>
              </select>
              <button type="submit" className='submit'>Next</button>
        </form>
        <form className="booking-form" >
              <h2>Pass Type</h2>

              <input
                type="submit"
                value='Daily'
                required
              />
              <input
                type="submit"
                value='Monthly'
                required
              />
              <input
                type="submit"
                value='Yearly'
                required
              />
        </form>
    </Wrapper>
  );
};

export default BookingForm;
