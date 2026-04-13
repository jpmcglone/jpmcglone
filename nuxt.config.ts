// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxt/eslint',
    '@nuxtjs/tailwindcss',
    '@nuxt/ui',
    '@nuxt/icon',
    '@vueuse/nuxt',
    '@nuxtjs/sitemap',
  ],
  site: {
    url: 'https://jpmcglone.com',
    name: 'jpmcglone.com',
  },
  sitemap: {
    strictNuxtContentPaths: false,
    urls: [
      { loc: '/', priority: 1.0, changefreq: 'monthly' },
      { loc: '/resume', priority: 0.9, changefreq: 'monthly' },
    ],
  },
  ui: {
    global: true,
    icons: ['heroicons', 'simple-icons'],
  },
  colorMode: {
    preference: 'dark',
    fallback: 'dark',
    classSuffix: '',
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
      titleTemplate: '%s',
      meta: [
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'theme-color', content: '#111827' },
        { name: 'author', content: 'John P. McGlone' },
        { name: 'robots', content: 'index, follow' },
        // Fallback OG/Twitter so any shared URL has something
        { property: 'og:site_name', content: 'jpmcglone.com' },
        { name: 'twitter:site', content: '@jpmcglone' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ]
    }
  }
})
