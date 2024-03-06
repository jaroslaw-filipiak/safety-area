import { defineStore } from 'pinia';

export const useMainStore = defineStore('mainStore', {
    state: () => ({
        pricing: [],
        name: 'rere',
        description: 'description'
    }),
    actions: {
        async fetch() {
            const response = await fetch('http://grafikonline.test/wp-json/options/pricing');
            const data = await response.json();

            this.pricing = data;
        }
    }
});
