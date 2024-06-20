import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../Styles/Login.css';

const MobileInput = ({ onSendOtp }) => {
  const [mobile, setMobile] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!/^\d{10}$/.test(mobile)) {
      toast.error("Invalid mobile number");
      return;
    }
    try {
      // Send OTP request to backend
      await axios.post('/api/send-otp', { mobile });
      onSendOtp(mobile);
    } catch (error) {
      toast.error("Error sending OTP");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <label className="form-label">
        <p>Enter your Mobile Number:</p>
        <input
          type="text"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          required
          className="form-input"
        />
      </label>
      <button type="submit" className="form-button">Send OTP</button>
    </form>
  );
};

export default MobileInput;
