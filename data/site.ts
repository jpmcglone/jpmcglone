export interface PageMetadata {
  title: string
  description: string
  path: string
  type?: 'website' | 'profile'
  unlisted?: boolean
}

export const siteMetadata = {
  name: 'John P. McGlone',
  role: 'Lead iOS & Product Engineer',
  location: 'Roanoke, VA',
  workPreference: 'Remote',
  portrait: '/images/johnmcglone.webp',
  url: 'https://jpmcglone.com',
  handle: '@jpmcglone',
  image: '/images/social-card.png',
  imageAlt:
    'Portrait of John P. McGlone, Lead iOS & Product Engineer. AI-assisted engineering. Open to remote roles.',
  imageWidth: 1200,
  imageHeight: 630,
}

// Confirmed by John on September 30, 2026; shared by both public profile pages.
export const hiringPreferences = {
  workAuthorization: 'Authorized to work in the U.S.',
  location: 'Remote · Eastern time',
  availability: 'Full-time preferred · Open to contracts',
}

export const pageMetadata = {
  home: {
    title: 'John P. McGlone (JP McGlone), Lead iOS & Product Engineer',
    description:
      'JP McGlone (John McGlone) is a lead iOS and product engineer with 16+ years of Swift, SwiftUI, and UIKit. Open to senior and lead remote roles.',
    path: '/',
    type: 'profile',
  },
  resume: {
    title: 'Résumé, John P. McGlone | Lead iOS & Product Engineer',
    description:
      'Résumé of John P. McGlone, lead iOS engineer: Swift, SwiftUI, and UIKit, from Rumble Studio on the App Store to Men of Hunger. Open to remote senior and lead roles.',
    path: '/resume/',
    type: 'profile',
  },
} satisfies Record<string, PageMetadata>
