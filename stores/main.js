import { defineStore } from 'pinia';

export const useMainStore = defineStore('mainStore', {
  state: () => ({
    pricing: [],
    cart: [],
    isCartOpen: false,
    prepayment: false,
    howManyFormsAreToClient: 0,
    howManyFormsAreFullyFilled: 0,
  }),

  actions: {
    async fetchPricing() {
      const apiUrl = useRuntimeConfig().public.apiBaseUrl;
      console.log(apiUrl);
      try {
        const response = await fetch(
          `https://j-filipiak.pl/clients/grafikonline//wp-json/options/pricing`
        );
        const data = await response.json();

        this.pricing = data;
      } catch (e) {
        console.error(e);
      }
    },
    updateCart(payload) {
      this.cart = payload;
      this.cart?.length ? (this.isCartOpen = true) : (this.isCartOpen = false);
      this.howManyFormsAreToClient = this.cart.length;
    },
    addBriefAccepted(payload) {
      console.log('addBriefAccepted');
      const id = payload;
      console.log(id);
      this.cart = this.cart.map((item) => {
        if (item.id === id) {
          item.briefAccepted = true;
        }
        return item;
      });
    },
    removeBriefAccepted(payload) {
      console.log('removeBriefAccepted');
      const id = payload;
      this.cart = this.cart.map((item) => {
        if (item.id === id) {
          item.briefAccepted = false;
        }
        return item;
      });
    },
    addFormFilled(payload) {
      console.log('addFormFilled');
      console.log(payload);
      const id = payload;
      this.cart = this.cart.map((item) => {
        if (item.id === id) {
          item.formFilled = true;
        }
        return item;
      });
    },
    removeFormFilled(payload) {
      console.log('addFormFilled');
      console.log(payload);
      const id = payload;
      this.cart = this.cart.map((item) => {
        if (item.id === id) {
          item.formFilled = false;
        }
        return item;
      });
    },
    updatePrepayment(payload) {
      console.log('updating prepayment...');
      console.log(payload);
      this.prepayment = payload;
    },
    removeFromCart(id) {
      console.log('removing from cart...');
      this.cart = this.cart.filter((item) => item.id !== id);
      this.howManyFormsAreToClient = this.cart.length;
    },
  },
  getters: {
    filteredItems: (state) => (searchTerm) => {
      return state.pricing.filter(
        (item) =>
          item.title &&
          item.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    },
    getPrepayment: (state) => {
      return state.prepayment;
    },
    getTotalPrice: (state) => {
      return state.cart
        .reduce((acc, item) => {
          return acc + Number(item.price);
        }, 0)
        .toFixed(2);
    },
    areAllFormsFilled: (state) => {
      if (state.cart.length === 0) {
        return false;
      } else {
        return (
          state.cart?.every((item) => item.formFilled) &&
          state.cart?.every((item) => item.briefAccepted)
        );
      }
    },
  },
});
