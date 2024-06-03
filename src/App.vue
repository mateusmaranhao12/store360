<!-- src/App.vue -->
<template>
  <div id="app" class="container">
    <h1 class="my-4">Store360 Landing Page</h1>
    <PaymentComponent />
    <StorageComponent />
    <SocialMediaComponent />
  </div>
</template>

<script>
import PaymentComponent from './components/PaymentComponent.vue';
import StorageComponent from './components/StorageComponent.vue';
import SocialMediaComponent from './components/SocialMediaComponent.vue';

export default {
  name: 'App',
  components: {
    PaymentComponent,
    StorageComponent,
    SocialMediaComponent
  }
}
</script>
