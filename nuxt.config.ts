// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt'],
  css: ['~/src/scss/main.scss'],
  components: {
    global: true,
    dirs: ['~/components', '~/components/global'],
  },
});
