import { pageMetadata, siteMetadata } from './data/site'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  srcDir: '.',
  compatibilityDate: '2024-11-01',
  css: ['@fontsource-variable/inter', '~/assets/css/tailwind.css'],
  devtools: { enabled: true },
  modules: ['@nuxt/eslint', '@nuxt/ui', '@nuxt/icon', '@vueuse/nuxt'],
  ui: {
    fonts: false,
  },
  icon: {
    customCollections: [{ prefix: 'jpm', dir: './assets/icons' }],
    clientBundle: {
      scan: {
        globInclude: [
          'components/**/*.vue',
          'pages/**/*.vue',
          'layouts/**/*.vue',
          'data/**/*.ts',
          'utils/**/*.ts',
          'app.config.ts',
        ],
      },
    },
  },
  colorMode: {
    preference: 'dark',
    fallback: 'dark',
    classSuffix: '',
  },
  nitro: {
    prerender: {
      // Unlisted tools still need static pages even though no public page links to them.
      routes: Object.values(pageMetadata).map((page) => page.path),
    },
  },

  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      titleTemplate: '%s',
      meta: [
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'theme-color', content: '#111827' },
        { name: 'author', content: siteMetadata.name },
        { name: 'application-name', content: siteMetadata.name },
        { name: 'apple-mobile-web-app-title', content: 'JP McGlone' },
        { name: 'color-scheme', content: 'dark' },
      ],
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          sizes: '16x16 32x32 48x48 64x64',
          href: '/favicon.ico?v=square1',
        },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png?v=square1' },
        { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/favicon-96x96.png?v=square1' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png?v=square1' },
        { rel: 'manifest', href: '/site.webmanifest?v=square1' },
      ],
    },
  },
})
