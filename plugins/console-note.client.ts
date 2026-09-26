export default defineNuxtPlugin(() => {
  const heading = 'font: 600 20px/1.4 Inter, system-ui, sans-serif; color: #34d399;'
  const body = 'font: 14px/1.6 Inter, system-ui, sans-serif; color: #e5e7eb;'
  const link = 'font: 14px/1.6 Inter, system-ui, sans-serif; color: #7dd3fc;'

  console.log(
    [
      '%cHey, you opened the console.',
      '%cThat’s exactly what I’d do too. I’m JP, an iOS and product engineer who likes knowing how things work.',
      'This site is Nuxt and Vue, and the source is public:',
      '%chttps://github.com/jpmcglone/jpmcglone',
      '%cIf you’re hiring, I’d love to hear what you’re building:',
      '%chttps://www.linkedin.com/in/john-p-mcglone-18513014/',
    ].join('\n'),
    heading,
    body,
    link,
    body,
    link,
  )
})
