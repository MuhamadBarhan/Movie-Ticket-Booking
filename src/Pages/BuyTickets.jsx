import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import './Styles/BuyTickets.css'

const BuyTickets = () => {

    const location = useLocation();
    const navigate =useNavigate();
    const { movieData } = location.state || {};
    const [selectedDate, setSelectedDate] = useState(0);
    const [selectedTime, setSelectedTime] = useState({ screen: null, time: null });
    const dates = ["13 Today", "14 Tomorrow", "15 Monday", "16 Tuesday"];
    const showTimes = [
        ["Screen 1", ["9:05 PM", "4:00 PM", "9:00 PM"]],
        ["Screen 2", ["3:00 PM"]],
        ["Screen 3", ["9:05 AM", "10:00 PM"]],
        ["Screen 4", ["9:05 AM", "11:00 AM", "3:00 PM", "7:00 PM", "10:00 PM", "11:00 PM"]],
        ["Screen 5", ["9:05 AM", "12:00 PM", "1:00 PM", "3:00 PM"]]
    ];

    const handleTimeClick = (screenIndex, time) => {
        setSelectedTime({ screen: screenIndex, time });
      };

    return (
        <>
            <div>{movieData.title}</div>
            <div className="showtime-selection">
      <div className="date-selection">
        {dates.map((date, index) => (
          <div 
            key={index} 
            className={`date-item ${index === selectedDate ? 'selected' : ''}`}
            onClick={() => setSelectedDate(index)}
          >
            {date}
          </div>
        ))}
      </div>
      <div className="showtimes">
        {showTimes.map(([screen, times], screenIndex) => (
          <div key={screenIndex} className="screens">
            <div className="screen-title">{screen}</div>
            <div className="time-buttons">
              {times.map((time, timeIndex) => (
                <button 
                  key={timeIndex} 
                  className={`time-button ${selectedTime.screen === screenIndex && selectedTime.time === time ? 'selected' : ''}`}
                  onClick={() => handleTimeClick(screenIndex, time)}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
      <button className="continue-booking" onClick={()=>navigate('/seatbooking')}>Continue Booking</button>
    </div>
        </>
    )
}

export default BuyTickets