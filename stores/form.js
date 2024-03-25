import { defineStore } from 'pinia';
import { useMainStore } from './main';

export const useFormStore = defineStore('formStore', {
  state: () => ({
    sending: false,
    order_id: 'test#1',
    // ========= last step client data
    client: {
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
    },
    response: {},
    message: null,

    /*
     *title": "Projekt wizytówki",
     *"id": 0
     *"formid": 68
     */
    cf7_68: {
      _wpcf7_unit_tag: 'wpcf7-f68-p66-o1',
      business_card_type: '',
      business_card_weight: '',
    },
    cf7_314: {
      _wpcf7_unit_tag: 'wpcf7-f314-p66-o1',
      logo_color_preferences: '',
    },
  }),

  actions: {
    async sendForm(payload) {
      const formID = payload;
      const formData = new FormData();
      const cf7Data = this[`cf7_${formID}`];
      const cart = JSON.stringify(useMainStore().cart);

      for (const key in cf7Data) {
        formData.append(key, cf7Data[key]);
      }

      for (const key in this.client) {
        formData.append(key, this.client[key]);
      }

      formData.append('order_id', this.order_id);
      formData.append('cart', cart);

      this.sending = true;

      try {
        const response = await fetch(
          `https://j-filipiak.pl/clients/grafikonline/wp-json/contact-form-7/v1/contact-forms/${payload}/feedback`,
          {
            method: 'POST',
            body: formData,
          }
        );
        const data = await response.json();
        this.response = data;
        console.log(data);

        // if (data.status === 'mail_sent') {
        //   window.location.href = 'https://j-filipiak.pl/clients/grafikonline/podziekowanie/';
        // }
      } catch (e) {
        console.error(e);
      }
      // Append other form data fields here

      console.log('send form id:', payload);

      setTimeout(() => {
        this.sending = false;
      }, 1000);
    },

    sendFormWithPromises(payload) {
      return new Promise((resolve, reject) => {
        const formID = payload;
        const formData = new FormData();
        const cf7Data = this[`cf7_${formID}`];
        const cart = JSON.stringify(useMainStore().cart);

        for (const key in cf7Data) {
          formData.append(key, cf7Data[key]);
        }

        for (const key in this.client) {
          formData.append(key, this.client[key]);
        }

        formData.append('order_id', this.order_id);
        formData.append('cart', cart);

        this.sending = true;

        fetch(
          `https://j-filipiak.pl/clients/grafikonline/wp-json/contact-form-7/v1/contact-forms/${payload}/feedback`,
          {
            method: 'POST',
            body: formData,
          }
        )
          .then((response) => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
              console.log('Network response was not ok');
            }
            return response.json();
          })
          .then((data) => {
            if (data.status === 'mail_sent') {
              resolve(data);
              console.log('Form sent, resolve', data);
              this.response = data;
            } else if (data.status === 'validation_failed') {
              console.log('form rejected..');
              reject(data);
              this.response = data;
            }

            // Resolve the promise with the response data
          })
          .catch((error) => {
            console.error(
              'There was a problem with the fetch operation:',
              error
            );
            reject(error); // Reject the promise with the error
            console.log(
              'There was a problem with the fetch operation: reject error',
              error
            );
          })
          .finally(() => {
            console.log('finally');
            this.sending = false;
          });
      });
    },

    updateFormField(field, formObj, value) {
      console.log('update field', field, value);
      console.log('formObj', formObj);
      formObj ? (this[formObj][field] = value) : (this[field] = value);
    },
    // sendForm(formData) {
    //   return new Promise((resolve, reject) => {
    //     // Simulating form submission with setTimeout
    //     setTimeout(() => {
    //       console.log('Form sent:', formData);
    //       resolve();
    //     }, 1000); // Simulating a 1-second delay for sending the form
    //   });
    // },
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
    getSendingStatus: (state) => {
      return state.sending;
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
