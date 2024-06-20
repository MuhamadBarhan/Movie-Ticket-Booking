import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../Styles/Login.css';

const OTPInput = ({ mobile }) => {
  const [otp, setOtp] = useState('');
  const [resendDisabled, setResendDisabled] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Verify OTP request to backend
      await axios.post('/api/verify-otp', { mobile, otp });
      toast.success("OTP verified successfully");
    } catch (error) {
      toast.error("Invalid OTP");
    }
  };

  const handleResend = async () => {
    try {
      // Resend OTP request to backend
      await axios.post('/api/resend-otp', { mobile });
      toast.success("OTP resent successfully");
      setResendDisabled(true);
      setTimeout(() => setResendDisabled(false), 60000); // Disable resend for 1 minute
    } catch (error) {
      toast.error("Error resending OTP");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <label className="form-label">
        Enter OTP:
        <input
          type="text"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          required
          className="form-input"
        />
      </label>
      <button type="submit" className="form-button">Verify OTP</button>
      <button type="button" onClick={handleResend} disabled={resendDisabled} className="form-button">
        Resend OTP
      </button>
    </form>
  );
};

export default OTPInput;
