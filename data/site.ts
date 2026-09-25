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

export const pageMetadata = {
  home: {
    title: 'John P. McGlone (JP McGlone) — Lead iOS & Product Engineer',
    description:
      'JP McGlone (John McGlone) is a lead iOS and product engineer with 16+ years of Swift, SwiftUI, and UIKit. Open to senior and lead remote roles.',
    path: '/',
    type: 'profile',
  },
  resume: {
    title: 'Résumé — John P. McGlone | Lead iOS & Product Engineer',
    description:
      'Résumé of John P. McGlone: 16+ years of iOS, from Rumble Studio and Rumble Video to Men of Hunger and Greenlane. Downloadable PDF included.',
    path: '/resume/',
    type: 'profile',
  },
  reader: {
    title: 'Lyrics Reader — John P. McGlone',
    description:
      'A personal lyrics reader with line-by-line presentation, section navigation, and keyboard controls.',
    path: '/apps/reader/',
    unlisted: true,
  },
  ageCalculator: {
    title: 'Age Calculator — John P. McGlone',
    description:
      'Calculate ages in years, months, weeks, and days, with current periods and a visual life-in-years grid.',
    path: '/apps/deathcalculator/',
    unlisted: true,
  },
} satisfies Record<string, PageMetadata>
