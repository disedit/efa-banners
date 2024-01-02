// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  css: ['~/assets/scss/main.scss'],

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
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "@/assets/scss/_variables.scss";`
        }
      }
    }
  },
})
