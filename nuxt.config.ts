// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: ['@nuxt/ui'],

  colorMode: {
    preference: 'dark'
  },

  components: [
    { path: '~/templates', global: true },
    '~/components'
  ],

  vue: {
    defineModel: true,
    propsDestructure: true
  }
})
