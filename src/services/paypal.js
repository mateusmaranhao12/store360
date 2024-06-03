import axios from 'axios';

export const createPayment = async () => {
  try {
    const response = await axios.post('http://localhost:8080/api/paypal/create-payment', {
      // Dados necessários para criar o pagamento
    });
    return response.data;
  } catch (error) {
    console.error('PayPal Payment Error:', error);
    throw error;
  }
};
