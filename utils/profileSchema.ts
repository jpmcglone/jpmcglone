import { siteMetadata, type PageMetadata } from '~/data/site'

export function profileSchema(page: PageMetadata) {
  const personId = `${siteMetadata.url}/#person`
  const siteId = `${siteMetadata.url}/#website`
  const url = new URL(page.path, siteMetadata.url).href
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': personId,
        name: siteMetadata.name,
        alternateName: ['JP McGlone', 'jpmcglone', 'John McGlone', 'John P McGlone'],
        jobTitle: siteMetadata.role,
        url: `${siteMetadata.url}/`,
        image: new URL('/images/johnmcglone-portrait.webp', siteMetadata.url).href,
        description:
          'Lead iOS and product engineer with 16+ years of Swift, SwiftUI, and UIKit. Built Rumble Studio solo and builds Men of Hunger and Greenlane.',
        homeLocation: {
          '@type': 'Place',
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Roanoke',
            addressRegion: 'VA',
            addressCountry: 'US',
          },
        },
        alumniOf: { '@type': 'CollegeOrUniversity', name: 'Nassau Community College' },
        sameAs: [
          'https://github.com/jpmcglone',
          'https://www.linkedin.com/in/john-p-mcglone-18513014',
        ],
        knowsAbout: [
          'iOS',
          'Swift',
          'SwiftUI',
          'UIKit',
          'Full-stack development',
          'Software architecture',
          'Agentic coding',
          'MCP servers',
          'Technical leadership',
        ],
      },
      {
        '@type': 'WebSite',
        '@id': siteId,
        url: `${siteMetadata.url}/`,
        name: siteMetadata.name,
        alternateName: ['JP McGlone', 'jpmcglone'],
        inLanguage: 'en-US',
        publisher: { '@id': personId },
      },
      {
        '@type': 'ProfilePage',
        '@id': `${url}#webpage`,
        url,
        name: page.title,
        description: page.description,
        inLanguage: 'en-US',
        isPartOf: { '@id': siteId },
        mainEntity: { '@id': personId },
      },
    ],
  }
}
