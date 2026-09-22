import { siteMetadata, type PageMetadata } from '~/data/site'
import { profileSchema } from '~/utils/profileSchema'

export function usePageMetadata(page: PageMetadata) {
  const canonical = new URL(page.path, siteMetadata.url).href
  const image = new URL(siteMetadata.image, siteMetadata.url).href

  useHead({
    title: page.title,
    script: page.type === 'profile' && !page.unlisted ? [{ key: 'profile-schema', type: 'application/ld+json', innerHTML: JSON.stringify(profileSchema(page)).replace(/</g, '\\u003c') }] : [],
    link: [{ key: 'canonical', rel: 'canonical', href: canonical }],
    meta: [
      { name: 'description', content: page.description },
      { name: 'robots', content: page.unlisted ? 'noindex, nofollow' : 'index, follow, max-image-preview:large' },
      { property: 'og:title', content: page.title },
      { property: 'og:description', content: page.description },
      { property: 'og:type', content: page.type || 'website' },
      { property: 'og:url', content: canonical },
      { property: 'og:site_name', content: siteMetadata.name },
      { property: 'og:locale', content: 'en_US' },
      { property: 'og:image', content: image },
      { property: 'og:image:type', content: 'image/png' },
      { property: 'og:image:width', content: String(siteMetadata.imageWidth) },
      { property: 'og:image:height', content: String(siteMetadata.imageHeight) },
      { property: 'og:image:alt', content: siteMetadata.imageAlt },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: page.title },
      { name: 'twitter:description', content: page.description },
      { name: 'twitter:image', content: image },
      { name: 'twitter:image:alt', content: siteMetadata.imageAlt },
      { name: 'twitter:site', content: siteMetadata.handle },
      { name: 'twitter:creator', content: siteMetadata.handle },
      ...(page.type === 'profile' ? [
        { property: 'profile:first_name', content: 'John' },
        { property: 'profile:last_name', content: 'McGlone' },
        { property: 'profile:username', content: 'jpmcglone' },
      ] : []),
    ],
  })
}
