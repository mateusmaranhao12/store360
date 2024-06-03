// src/services/paypal.js
import axios from 'axios';

export const createPayment = (paymentData) => {
  return axios.post('/api/paypal/create-payment', paymentData)
    .then(response => response.data)
    .catch(error => {
      console.error('PayPal Payment Error:', error);
      throw error;
    });
};
