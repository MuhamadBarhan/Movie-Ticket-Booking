import React, { useState } from 'react';
import './Styles/SeatBooking.css';
import { useNavigate } from 'react-router-dom';

const SeatBooking = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const navigate = useNavigate();
  const rows = 'ABCDEFGHIJ'.split('');
  const columns = Array.from({ length: 10 }, (_, i) => i + 1);
  const reservedSeats = ['B2', 'B3', 'C5', 'D8', 'E6', 'F9'];
  const availableSeats = rows.reduce((acc, row) => {
    columns.forEach(col => {
      const seat = `${row}${col}`;
      if (!reservedSeats.includes(seat)) {
        acc.push(seat);
      }
    });
    return acc;
  }, []);

  const handleSeatClick = seat => {
    if (reservedSeats.includes(seat)) return;

    setSelectedSeats(prevSelectedSeats =>
      prevSelectedSeats.includes(seat)
        ? prevSelectedSeats.filter(s => s !== seat)
        : [...prevSelectedSeats, seat]
    );
  };

  console.log(selectedSeats);

  return (
    <div className="seat-booking">
      <h2>Select your seats</h2>
      <div className="screen">SCREEN</div>
      <div className="seats">
        {rows.map(row => (
          <div key={row} className="seat-row">
            {columns.map(col => {
              const seat = `${row}${col}`;
              const isReserved = reservedSeats.includes(seat);
              const isSelected = selectedSeats.includes(seat);
              return (
                <div
                  key={seat}
                  className={`seat ${isReserved ? 'reserved' : ''} ${isSelected ? 'selected' : ''}`}
                  onClick={() => handleSeatClick(seat)}
                >
                  {seat}
                </div>
              );
            })}
          </div>
        ))}
      </div>
      <div className="legend">
        <div>
          <span className="seat available"></span> Available
        </div>
        <div>
          <span className="seat selected"></span> Selected
        </div>
        <div>
          <span className="seat reserved"></span> Sold
        </div>
      </div>
      <button className="reserve-button" onClick={()=>navigate('/payment')}>Continue to Payment</button>
    </div>
  );
};

export default SeatBooking;
