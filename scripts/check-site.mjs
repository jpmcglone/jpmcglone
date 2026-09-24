import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import { resolve } from 'node:path'

const root = resolve(process.argv[2] || '.output/public')
for (const route of ['', 'resume', 'apps/reader', 'apps/deathcalculator']) {
  const html = await readFile(resolve(root, route, 'index.html'), 'utf8')
  assert.doesNotMatch(
    html,
    /mailto:|["']email["']\s*:/,
    'Public pages must not expose an email address',
  )
  const isPublic = !route.startsWith('apps/')
  assert.match(
    html,
    new RegExp(`<link[^>]+rel="canonical"[^>]+href="https://jpmcglone.com/${route}"`),
  )
  assert.match(html, /<meta name="description" content="[^"]+"/)
  assert.match(
    html,
    /<meta property="og:image" content="https:\/\/jpmcglone.com\/images\/social-card.png"/,
  )
  assert.match(
    html,
    isPublic ? /name="robots" content="index, follow/ : /name="robots" content="noindex, nofollow/,
  )
  const schemas = [
    ...html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g),
  ]
  assert.equal(schemas.length, Number(isPublic), `${route}: profile schema count`)
  if (isPublic) {
    assert.equal([...html.matchAll(/<h1[\s>]/g)].length, 1)
    assert.ok(!/<a[^>]+href="\/apps\//.test(html), 'Private tools must remain unlisted')
    assert.deepEqual(
      JSON.parse(schemas[0][1])['@graph'].map((node) => node['@type']),
      ['Person', 'WebSite', 'ProfilePage'],
    )
  }
  for (const match of html.matchAll(/(?:src|href)="(\/(?:_nuxt\/|images\/|favicon)[^"?]*)/g)) {
    await readFile(resolve(root, `.${decodeURIComponent(match[1])}`))
  }
  console.log(`${route || '/'}: metadata, indexing and asset checks passed`)
}
const sitemap = await readFile(resolve(root, 'sitemap.xml'), 'utf8')
assert.ok(!sitemap.includes('/apps/'))
assert.equal((await readFile(resolve(root, 'CNAME'), 'utf8')).trim(), 'jpmcglone.com')

const resumeHtml = await readFile(resolve(root, 'resume/index.html'), 'utf8')
assert.match(resumeHtml, /href="\/resume.pdf"/)
assert.doesNotMatch(resumeHtml, /mailto:|Email me/)
const pdf = await readFile(resolve(root, 'resume.pdf'))
assert.equal(pdf.subarray(0, 5).toString(), '%PDF-')
console.log('Resume contact links and PDF asset checks passed')
