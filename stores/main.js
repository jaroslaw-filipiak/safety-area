import { defineStore } from 'pinia';

export const useMainStore = defineStore('mainStore', {
  state: () => ({
    pricing: [],
    cart: [],
    isCartOpen: false,
  }),

  actions: {
    async fetchPricing() {
      console.log('fetching pricing...');
      try {
        const response = await fetch(
          'http://grafikonline.test/wp-json/options/pricing'
        );
        const data = await response.json();

        this.pricing = data;
      } catch (e) {
        console.error(e);
      }
    },
    updateCart(payload) {
      console.log('updating cart...');
      console.log(payload);
      this.cart = payload;
      this.cart.length ? (this.isCartOpen = true) : (this.isCartOpen = false);
    },
    removeFromCart(id) {
      console.log('removing from cart...');
      this.cart = this.cart.filter((item) => item.id !== id);
    },
  },
});
