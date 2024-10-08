// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  ssr: true,

  css: [
    'bootstrap-icons/font/bootstrap-icons.css',
    `~/assets/icons/all.min.css`,
    `~/assets/css/font.css`,
    `~/assets/css/tailwind.css`,
    `~/assets/css/output.css`,
    `~/assets/css/details.css`,
    `~/assets/css/style.css`,
  ],

  modules: ['@nuxtjs/tailwindcss', 'nuxt-bootstrap-icons'],

  build: {
    transpile: [`@nuxtjs/tailwindcss`, `nuxt-bootstrap-icons`],
  },
});
