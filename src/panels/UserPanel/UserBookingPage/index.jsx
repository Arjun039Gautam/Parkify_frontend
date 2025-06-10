import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Wrapper from './style';
import { FadeLoader } from 'react-spinners';
import { toast } from 'react-toastify'
import { toPng } from 'html-to-image'; // <-- import this
import { useRef } from 'react'; // <-- already likely used

const BookingForm = () => {
  const [email, setEmail] = useState('');
  const [vehicleId, setVehicleId] = useState('');
  const [vehicleType, setVehicleType] = useState('');
  const [isPassEnabled, setIsPassEnabled] = useState(false);
  const [receipt, setReceipt] = useState(null);
  const [loading, setLoading] = useState(false); 

  const receiptRef = useRef(); // 🔁 1. Create a ref

  // 🔁 2. Image download function
  const downloadReceipt = () => {
  const node = receiptRef.current;
  if (!node) return;

  const images = node.querySelectorAll('img');
  const loadPromises = Array.from(images).map((img) => {
    if (img.complete) return Promise.resolve();
    return new Promise((resolve) => {
      img.onload = resolve;
      img.onerror = resolve;
    });
  });

  Promise.all(loadPromises).then(() => {
  setTimeout(() => {
    toPng(node, {
      cacheBust: true,
      pixelRatio: 2,
      style: { animation: 'none' },
      skipFonts: false,
    })
      .then((dataUrl) => {
        const link = document.createElement('a');
        link.download = 'booking-receipt.png';
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.error('Image generation failed:', err);
        toast.error('Download failed.');
      });
  }, 300); // 👈 Add a short delay
});

};

  useEffect(() => {
    const storedEmail = localStorage.getItem('userEmail');
    setEmail(storedEmail || '');
  }, []);

  const handleNext = (e) => {
    e.preventDefault();
    if (vehicleId && vehicleType) {
      setIsPassEnabled(true);
    } else {
      toast.warning('Please fill all fields')
    }
  };

  const getBookedUntil = (passType) => {
    const now = new Date();
    if (passType === 'daily') now.setDate(now.getDate() + 1);
    else if (passType === 'monthly') now.setMonth(now.getMonth() + 1);
    else if (passType === 'yearly') now.setFullYear(now.getFullYear() + 1);
    return now.toISOString();
  };

  const handleBooking = async (passType) => {
    const bookedUntil = getBookedUntil(passType);
    const data = {
      email,
      vehicleType,
      vehicleId,
      passType,
      bookedUntil
    };

    try {
      setLoading(true); // 🟢 Start loading
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/slots/book/user`,
        data
      );

      const receiptData = {
        email: email,
        slotNumber: response.data.slotNumber,
        amount: response.data.amount,
        bookedDate: new Date().toISOString().split('T')[0],
        bookedUntil: bookedUntil.split('T')[0]
      };

      setReceipt(receiptData);
      toast.success('Booking successful!')
      setVehicleId('');
      setVehicleType('');
      setIsPassEnabled(false);
    } catch (error) {
      toast.error('Booking failed:', error)
    } finally {
      setLoading(false); // 🔴 Stop loading
    }
  };

  return (
  <Wrapper>
    <h1 className="heading">Book Slot</h1>

    {/* Loading Spinner replaces form when loading */}
    {loading ? (
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '5rem' }}>
        <FadeLoader color="#ffff"  height={15} width={5} radius={2} margin={2} />
      </div>
    ) : (
      <>
        {/* Vehicle Info Form */}
        <form className="booking-form" onSubmit={handleNext}>
          <h2>Vehicle Registration</h2>
          <input
            type="text"
            placeholder="Vehicle ID (e.g., RJ14SB1242)"
            value={vehicleId}
            onChange={(e) => setVehicleId(e.target.value.toUpperCase().replace(/\s/g, ''))}
            required
            pattern="^[A-Z]{2}[0-9]{2}[A-Z]{2}[0-9]{1,4}$"
            title="Format: RJ14SB1242"
          />
          <select
            value={vehicleType}
            onChange={(e) => setVehicleType(e.target.value)}
            required
          >
            <option disabled value="">Select Type</option>
            <option value="2-wheeler">2-wheeler</option>
            <option value="4-wheeler">4-wheeler</option>
          </select>
          <button type="submit" className="submit">Next</button>
        </form>

        {/* Pass Type Buttons */}
        <form className="booking-form" onSubmit={(e) => e.preventDefault()}>
          <h2>Pass Type</h2>
          <input
            type="button"
            value="Daily"
            onClick={() => handleBooking('daily')}
            disabled={!isPassEnabled}
          />
          <input
            type="button"
            value="Monthly"
            onClick={() => handleBooking('monthly')}
            disabled={!isPassEnabled}
          />
          <input
            type="button"
            value="Yearly"
            onClick={() => handleBooking('yearly')}
            disabled={!isPassEnabled}
          />
        </form>
      </>
    )}
    {receipt && (
  <div style={{ display: 'flex', justifyContent: 'center' }}>
    <div className="receipt" ref={receiptRef}>
      <h2>Booking Receipt</h2>
      <div className='r-container'>
        <div>
          <p><strong>Email:</strong> {receipt.email}</p>
          <p><strong>Slot Number:</strong> {receipt.slotNumber}</p>
          <p><strong>Amount:</strong> ₹{receipt.amount}</p>
          <p><strong>Booked Date:</strong> {receipt.bookedDate}</p>
          <p><strong>Booked Until:</strong> {receipt.bookedUntil}</p>
        </div>
        <div>
          <img src="/personal visiting card.png" alt="QR Code" style={{ height: '150px' }} crossOrigin="anonymous"/> 
        </div>
      </div>
      <button onClick={downloadReceipt} className='download-btn'>
        Download
      </button>
    </div>
  </div>
)}
  </Wrapper>
);
}

export default BookingForm;
