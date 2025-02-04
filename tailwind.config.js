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
      colors: {
        primary: colors.blue,
        gray: colors.gray
      }
    }
  },
  plugins: [],
}

