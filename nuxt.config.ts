import eslintPlugin from 'vite-plugin-eslint'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },

  runtimeConfig: {
    public: {
      baseURL: process.env.NUXT_PUBLIC_BASE_URL,
      apiBase: process.env.NUXT_PUBLIC_API_BASE,
      devToken: process.env.NUXT_PUBLIC_DEV_TOKEN
    },
  },

  app: {
    head: {
      htmlAttrs: {
        lang: "ru"
      },

      title: "Кабинет Seenday",

      meta: [
        { charset: "utf-8"},
        { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0' },
        { hid: "description", name: "description", content: "" },
        { hid: "keywords", name: "keywords", content: "" },
        { name: 'yandex-verification', content: '02181fad083eb12a' },
      ],

      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        { rel: "stylesheet", href: "/fonts/open-sans-regular/stylesheet.css" },
        { rel: "stylesheet", href: "/fonts/open-sans-semibold/stylesheet.css" },
        { rel: "stylesheet", href: "/fonts/pt-sans-regular/stylesheet.css" }
      ]
    },
  },

  css: ['~/assets/styles/main.scss'],

  vite: {
    plugins: [
      eslintPlugin()
    ],
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/styles/global/main.scss" as *;'
        }
      }
    }
  },

  components: true
})
