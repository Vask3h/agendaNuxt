// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
   enabled: true,

   timeline: {
    enabled: true
   }
  },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/image', '@pinia/nuxt'],
 pinia:{
    storesDirs:["/stores/**"]
 }
})