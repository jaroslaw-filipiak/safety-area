// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: '/clients/grafikonline/safety-area/',
    // buildAssetsDir: '/mydir/_nuxt/',
  },
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt'],
  css: ['~/src/scss/main.scss'],
  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.VITE_BASE_URL,
    },
  },
  components: {
    global: true,
    dirs: ['~/components', '~/components/global'],
  },
});
