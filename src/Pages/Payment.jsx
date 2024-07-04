import React, { useState } from 'react';
import './Styles/Payment.css';

const PaymentForm = () => {
//   const [paymentMethod, setPaymentMethod] = useState('creditCard');
//   const [formData, setFormData] = useState({
//     cardName: '',
//     cardNumber: '',
//     expMonth: '',
//     expYear: '',
//     cvv: '',
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handlePaymentMethodChange = (method) => {
//     setPaymentMethod(method);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Perform form submission tasks here
//     console.log('Form Data Submitted:', formData);
//   };

  return (
    <>
    <h1 style={{display:'flex', justifyContent:'center',alignItems:'center',height:'100vh'}}>Coming soon...!</h1>
    </>
//     <div className="payment-form">
//       <h2>Payment</h2>
//       <div className="payment-options">
//         <div
//           className={`payment-option ${paymentMethod === 'creditCard' ? 'selected' : ''}`}
//           onClick={() => handlePaymentMethodChange('creditCard')}
//         >
//           <div className="payment-option-logo">
//             <img src="visa.png" alt="Visa" />
//             <img src="amex.png" alt="American Express" />
//             <img src="mastercard.png" alt="Mastercard" />
//             <img src="discover.png" alt="Discover" />
//           </div>
//           <p>Pay RS.200.00 with credit card</p>
//         </div>
//         <div
//           className={`payment-option ${paymentMethod === 'paypal' ? 'selected' : ''}`}
//           onClick={() => handlePaymentMethodChange('paypal')}
//         >
//           <div className="payment-option-logo">
//             <img src="paypal.png" alt="PayPal" />
//           </div>
//           <p>Pay $30.00 with PayPal</p>
//         </div>
//       </div>
//       <form onSubmit={handleSubmit}>
//         {paymentMethod === 'creditCard' && (
//           <div className="credit-card-form">
//             <div className="form-group">
//               <label>Cardholder's Name</label>
//               <input
//                 type="text"
//                 name="cardName"
//                 value={formData.cardName}
//                 onChange={handleInputChange}
//                 placeholder="Firstname Lastname"
//                 required
//               />
//             </div>
//             <div className="form-group">
//               <label>Credit Card Number</label>
//               <input
//                 type="text"
//                 name="cardNumber"
//                 value={formData.cardNumber}
//                 onChange={handleInputChange}
//                 placeholder="xxxx-xxxx-xxxx-xxxx"
//                 required
//               />
//             </div>
//             <div className="form-group">
//               <label>Exp Month</label>
//               <input
//                 type="text"
//                 name="expMonth"
//                 value={formData.expMonth}
//                 onChange={handleInputChange}
//                 placeholder="September"
//                 required
//               />
//             </div>
//             <div className="form-group">
//               <label>Exp Year</label>
//               <input
//                 type="text"
//                 name="expYear"
//                 value={formData.expYear}
//                 onChange={handleInputChange}
//                 placeholder="yyyy"
//                 required
//               />
//             </div>
//             <div className="form-group">
//               <label>CVV</label>
//               <input
//                 type="text"
//                 name="cvv"
//                 value={formData.cvv}
//                 onChange={handleInputChange}
//                 placeholder="xxx"
//                 required
//               />
//             </div>
//           </div>
//         )}
//         <div className="form-actions">
//           <button type="button" className="cancel-button">
//             Cancel Payment
//           </button>
//           <button type="submit" className="confirm-button">
//             Confirm Payment
//           </button>
//         </div>
//       </form>
//     </div>
  );
};

export default PaymentForm;
