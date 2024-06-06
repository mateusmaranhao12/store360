const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const stripe = require('stripe')('sk_test_51PNe7P05ZSaswoy7wwZ13BsYXaaYJI1qY7gndq0uwWcKRUWlOi5FF2x3jcsFW9SwG4ZVT80qL6hH0nPWh0Zj4XEv00jlbpDhjc'); // Substitua 'YOUR_SECRET_KEY' pela sua chave secreta do Stripe

const port = process.env.PORT || 8080;

// Serve arquivos estáticos da pasta "dist"
app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.use(cors()); // Use o middleware CORS
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Server is running');
});

app.post('/api/paypal/create-payment', (req, res) => {
  // Lógica para criar pagamento com PayPal
  res.json({ status: 'success', message: 'Payment created' });
});

app.post('/api/stripe/create-checkout-session', async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [{
        price_data: {
          currency: 'usd',
          product_data: {
            name: 'T-shirt', // Substitua com as informações reais do produto
          },
          unit_amount: 2000, // Substitua com o valor real do produto
        },
        quantity: 1, // Substitua com a quantidade real
      }],
      mode: 'payment',
      success_url: 'https://your-success-url.com', // Substitua pela URL de sucesso real
      cancel_url: 'https://your-cancel-url.com', // Substitua pela URL de cancelamento real
    });

    res.json({ id: session.id });
  } catch (error) {
    console.error('Error creating Stripe checkout session:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});