export default defineAppConfig({
  ui: {
    colors: { primary: 'blue', neutral: 'gray' },
    card: {
      slots: {
        root: 'rounded-2xl shadow-none divide-y divide-gray-700',
        body: 'p-6',
        header: 'p-6',
        footer: 'p-6',
      },
      variants: { variant: { outline: { root: 'bg-gray-800 ring-1 ring-gray-700' } } },
    },
    button: {
      slots: { base: 'rounded-xl' },
      variants: { size: { lg: { base: 'px-6 py-3.5' } } },
    },
    input: { slots: { base: 'rounded-xl placeholder:text-gray-400' } },
    textarea: { slots: { base: 'rounded-2xl placeholder:text-gray-400' } },
  },
})
