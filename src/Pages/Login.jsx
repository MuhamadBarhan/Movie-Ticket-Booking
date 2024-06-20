import React, { useState } from 'react';
import MobileInput from './Components/MobileInput';
import OTPInput from './Components/OTPInput';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Styles/Login.css';

const Login = () => {
  const [mobile, setMobile] = useState('');

  return (
    <>
      {mobile ? (
        <div className="login-container">
          <OTPInput mobile={mobile} />
        </div>
      ) : (
        <div className="login-container">
          <MobileInput onSendOtp={setMobile} />
        </div>
      )}
      <ToastContainer />
    </>
  );
};

export default Login;
