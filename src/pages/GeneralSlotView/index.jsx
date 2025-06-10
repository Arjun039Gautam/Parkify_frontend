import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Wrapper from './style'; // You can keep styling here or convert to Tailwind
import { FadeLoader } from 'react-spinners';
import { IoCarSport } from "react-icons/io5";
import { PiPersonSimpleBikeBold } from "react-icons/pi";

const GeneralSlotView = () => {
  const [slots, setSlots] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSlots = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/slots`);
        setSlots(response.data);
      } catch (error) {
        console.error('Error fetching slots:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchSlots();
  }, []);

  const available2W = slots.filter(slot => slot.status !== 'booked' && slot.slotNumber <= 50).length;
  const available4W = slots.filter(slot => slot.status !== 'booked' && slot.slotNumber > 50 && slot.slotNumber <= 80).length;

  return (
    <Wrapper>
      <div className="slot-summary-container">
        <h2 className="heading">Available Parking Slots</h2>
        {loading ? (
          <div className="loader-container">
            <FadeLoader color="#00BFFF" height={15} width={5} radius={2} margin={2} />
          </div>
        ) : (
          <div className="cards">
            <div className="card">
              <PiPersonSimpleBikeBold size={50}/>
              <h3>2-Wheeler</h3>
              <p>Slots 1–50</p>
              <div className="slot-count">{available2W}</div>
            </div>
            <div className="card">
              <IoCarSport size={50}/>
              <h3>4-Wheeler </h3>
              <p>Slots 51–80</p>
              <div className="slot-count">{available4W}</div>
            </div>
          </div>
        )}
      </div>
    </Wrapper>
  );
};

export default GeneralSlotView;
