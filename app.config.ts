export default defineAppConfig({
  ui: {
    primary: 'blue',
    gray: 'cool',
    card: {
      background: 'bg-gray-800 dark:bg-gray-800',
      ring: 'ring-1 ring-gray-700 dark:ring-gray-700',
      rounded: 'rounded-2xl',
      shadow: 'shadow-none',
      divide: 'divide-y divide-gray-700 dark:divide-gray-700',
      body: { padding: 'p-6' },
    },
    button: {
      rounded: 'rounded-xl',
      padding: { lg: 'px-6 py-3.5' },
    },
    input: {
      rounded: 'rounded-xl',
      placeholder: 'placeholder-gray-400',
      default: { color: 'gray' },
    },
    textarea: {
      rounded: 'rounded-2xl',
      placeholder: 'placeholder-gray-400',
      default: { color: 'gray' },
    },
  },
})
