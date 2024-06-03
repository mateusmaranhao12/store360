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

        async payWithPaypal() {
            try {
                const result = await createPayment();
                console.log('Payment result:', result);
                // Adicione lógica para lidar com o resultado do pagamento
            } catch (error) {
                console.error('Error processing payment:', error);
            }
        },

        async payWithStripe() {
            try {
                const sessionData = {
                    // Dados da sessão de checkout, se necessário
                };
                const result = await createCheckoutSession(sessionData);
                console.log('Stripe Checkout result:', result);
                // Lidar com o resultado do Stripe
            } catch (error) {
                console.error('Stripe Checkout Error:', error);
            }
        }
        
    }
}
</script>
