import { defineStore } from 'pinia';

export const useMainStore = defineStore('mainStore', {
  state: () => ({
    pricing: [],
    cart: [],
    isCartOpen: false,
    prepayment: false,
    hugeOrderFrom: 2000,
    bonusForHugeOrder: false,
    howManyFormsAreToClient: 0,
    howManyFormsAreFullyFilled: 0,
    discoundCode: {
      code: '',
      discount: 0,
      active: null,
    },
  }),

  actions: {
    async fetchPricing() {
      const baseUrl = `${import.meta.env.VITE_BASE_URL}`;
      console.log(baseUrl);
      const apiUrl = useRuntimeConfig().public.apiBaseUrl;
      console.log(apiUrl);
      try {
        const response = await fetch(
          `https://j-filipiak.pl/clients/grafikonline/wp-json/options/pricing`
        );
        const data = await response.json();

        this.pricing = data;
      } catch (e) {
        console.error(e);
      }
    },
    async checkDiscountCode(payload) {
      try {
        const response = await fetch(
          `https://j-filipiak.pl/clients/grafikonline/wp-json/options/rabats/${payload}`
        );
        const data = await response.json();

        if (data?.data?.status === 404) {
          this.discoundCode.active = false;
        } else if (data?.data?.status === 200) {
          const code = data?.data?.result;

          this.discoundCode.active = true;
          this.discoundCode.code = code.kod;
          this.discoundCode.discount = code.wartosc_rabatu;
          // TODO: on backend change field to english to english
        }
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
    hasAtleastOneDiscount: (state) => {
      return (
        state.prepayment ||
        state.bonusForHugeOrder ||
        state.discoundCode.active ||
        false
      );
    },
    getTotalPriceWithoutAnyBonus: (state) => {
      return state.cart
        .reduce((acc, item) => {
          return acc + Number(item.price);
        }, 0)
        .toFixed(2);
    },
    getTotalPriceWithoutPrepaymentBonus: (state) => {
      return state.cart
        .reduce((acc, item) => {
          return acc + Number(item.price);
        }, 0)
        .toFixed(2);
    },
    getTotalPrice: (state) => {
      const total = state.cart
        .reduce((acc, item) => {
          return acc + Number(item.price);
        }, 0)
        .toFixed(2);

      let res = total;

      if (state.prepayment && !state.bonusForHugeOrder) {
        console.log('only prepayment');
        res = (total - total * 0.05).toFixed(2);
      } else if (state.bonusForHugeOrder && !state.prepayment) {
        console.log('only bonusForHugeOrder');
        res = (total - total * 0.05).toFixed(2);
      } else if (state.prepayment && state.bonusForHugeOrder) {
        console.log('prepayment and bonusForHugeOrder');
        res = (total - total * 0.1).toFixed(2);
      } else {
        console.log('no bonus');
        res = total;
      }

      if (state.discoundCode.active) {
        res = (res - res * (state.discoundCode.discount / 100)).toFixed(2);
      }

      return res;
    },
    getTotalPriceBrutto: (state) => {
      const total = state.cart
        .reduce((acc, item) => {
          return acc + Number(item.price);
        }, 0)
        .toFixed(2);

      const brutto = (total * 1.23).toFixed(2);

      if (state.prepayment && !state.bonusForHugeOrder) {
        console.log('only prepayment');
        return (brutto - brutto * 0.05).toFixed(2);
      } else if (state.bonusForHugeOrder && !state.prepayment) {
        console.log('only bonusForHugeOrder');
        return (brutto - brutto * 0.05).toFixed(2);
      } else if (state.prepayment && state.bonusForHugeOrder) {
        console.log('prepayment and bonusForHugeOrder');
        return (brutto - brutto * 0.1).toFixed(2);
      } else {
        console.log('no bonus');
        return brutto;
      }
    },
    toBonusForHugeOrder: (state) => {
      if (state.getTotalPriceWithoutPrepaymentBonus >= state.hugeOrderFrom) {
        state.bonusForHugeOrder = true;
      } else {
        state.bonusForHugeOrder = false;
      }

      const val =
        state.hugeOrderFrom - state.getTotalPriceWithoutPrepaymentBonus;
      return Number(val).toFixed(2);
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
