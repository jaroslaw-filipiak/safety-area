import { defineStore } from 'pinia';
import { useMainStore } from './main';

export const useFormStore = defineStore('formStore', {
  state: () => ({
    order_id: '',
    // ========= last step client data
    client_type: '', // 'new' || 'regular'
    name_surname: '',
    company_name: '',
    nip: '',
    city: '',
    postal_code: '',
    street: '',
    email: '',
    phone: '',
    privacy_policy_accepted: false,

    /*
     *title": "Projekt wizytówki firmowej",
     *"id": 0
     *"formid": 68
     */
    cf7_68: {
      business_card_type: '',
      business_card_weight: '',
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
          `http://grafikonline.test/wp-json/options/pricing`
        );
        const data = await response.json();

        this.pricing = data;
      } catch (e) {
        console.error(e);
      }
    },

    async sendForm(payload) {
      const formID = payload;
      const formData = new FormData();
      const cf7Data = this[`cf7_${formID}`];

      for (const key in cf7Data) {
        formData.append(key, cf7Data[key]);
      }

      try {
        const response = await fetch(
          `http://grafikonline.test/wp-json/contact-form-7/v1/contact-forms/${payload}/feedback`,
          {
            method: 'POST',
            body: formData,
          }
        );
        const data = await response.json();
        console.log(data);
      } catch (e) {
        console.error(e);
      }
      // Append other form data fields here

      console.log('send form id:', payload);
    },
    updateFormField(field, formObj, value) {
      console.log('update field', field, value);
      this[formObj][field] = value;
    },
  },
  getters: {
    getOrderID: (state) => {
      return state.order_id;
    },
    getFormsInfo: () => {
      const mainStore = useMainStore();
      return mainStore.cart.map((item) => {
        return {
          id: item.id,
          title: item.title,
          form_id_feedback: item.form_id_feedback,
        };
      });
    },
    // getFormForEachID: (state) => {
    //   const mainStore = useMainStore();
    //   const ids = mainStore.cart.map((item) => {
    //     return {
    //       id: item.id,
    //       title: item.title,
    //       form_id_feedback: item.form_id_feedback,
    //     };
    //   });

    //   console.log(ids);

    //   const fields = ids.map((item) => {
    //     return state[`cf7_${item.form_id_feedback}`];
    //   });

    //   return ids;
    // },
  },
});
