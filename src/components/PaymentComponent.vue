<!-- src/components/PaymentComponent.vue -->
<template>
    <div class="my-3">
      <button class="btn btn-primary mr-2" @click="payWithPaypal">Pay with PayPal</button>
      <button class="btn btn-success" @click="payWithStripe">Pay with Stripe</button>
    </div>
  </template>
  
  <script>
  /* eslint-disable */
  import { createPayment } from '@/services/paypal';
  import { createCheckoutSession } from '@/services/stripe';
  
  export default {
    methods: {
      payWithPaypal() {
        const paymentData = {
          // Dados do pagamento
        };
        createPayment(paymentData).then(() => {
          // Lidar com a resposta do PayPal
        }).catch(error => {
          console.error(error);
        });
      },
      payWithStripe() {
        const sessionData = {
          // Dados da sessão de checkout
        };
        createCheckoutSession(sessionData).then(() => {
          // Lidar com o resultado do Stripe
        }).catch(error => {
          console.error(error);
        });
      }
    }
  }
  </script>
  