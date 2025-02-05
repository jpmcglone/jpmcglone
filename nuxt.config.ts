// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  target: 'static',
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxt/eslint', 
    '@nuxtjs/tailwindcss', 
    '@nuxt/ui',
    'nuxt-icon',
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
  }
})