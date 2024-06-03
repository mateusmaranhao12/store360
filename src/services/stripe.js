import axios from 'axios';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51PNe7P05ZSaswoy7pANY74NGwiCkHBQcmdtwG8I3ye1EVORICFWgHmMNoyjzWquk3U57YeOwoLGjvNiSeW0SIlza00HT5qKKmt');

export const createCheckoutSession = async (sessionData) => {
  const stripe = await stripePromise;
  try {
    const response = await axios.post('http://localhost:8080/api/stripe/create-checkout-session', sessionData);
    return stripe.redirectToCheckout({ sessionId: response.data.id });
  } catch (error) {
    console.error('Stripe Checkout Error:', error);
    throw error;
  }
};
