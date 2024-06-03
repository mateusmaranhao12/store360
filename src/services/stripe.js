// src/services/stripe.js
import axios from 'axios';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('YOUR_PUBLISHABLE_KEY');

export const createCheckoutSession = async (sessionData) => {
  const stripe = await stripePromise;
  return axios.post('/api/stripe/create-checkout-session', sessionData)
    .then(response => stripe.redirectToCheckout({ sessionId: response.data.id }))
    .catch(error => {
      console.error('Stripe Checkout Error:', error);
      throw error;
    });
};
