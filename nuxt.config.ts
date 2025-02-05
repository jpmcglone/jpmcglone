// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  target: 'static',
  router: {
    base: '/'
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxt/eslint', 
    '@nuxtjs/tailwindcss', 
    '@nuxt/ui',
    '@nuxt/icon',
  ],
  ui: {
    global: true,
    icons: ['heroicons', 'simple-icons'],
    colorMode: {
      preference: 'system',
      fallback: 'light',
      classSuffix: ''
    }
  },
  tailwindcss: {
    exposeConfig: true,
    viewer: true,
    config: {
      content: [
        "./node_modules/@nuxt/ui/dist/**/*.{js,vue,ts}"
      ],
      darkMode: 'class'
    }
  },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      meta: [
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'theme-color', content: '#000000' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  }
})