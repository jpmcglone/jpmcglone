/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors'

export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
    "./node_modules/@nuxt/ui/dist/**/*.{js,vue,ts}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter Variable', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      colors: {
        blue: { ...colors.blue, 300: '#b7d0ff', 400: '#89b4fa', 500: '#74a0e8' },
        cool: { ...colors.gray, 300: '#cbd5e1', 400: '#94a3b8', 500: '#94a3b8' }
      }
    }
  },
  plugins: [],
}
