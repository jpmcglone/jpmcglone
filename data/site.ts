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
  email: 'jp@jpmcglone.com',
  url: 'https://jpmcglone.com',
  handle: '@jpmcglone',
  image: '/images/social-card.png',
  imageAlt:
    'John P. McGlone — Lead iOS & Product Engineer. Full-stack architecture and AI-assisted delivery.',
  imageWidth: 1200,
  imageHeight: 630,
}

export const pageMetadata = {
  home: {
    title: 'John P. McGlone — Lead iOS & Product Engineer',
    description:
      'John P. McGlone is a lead iOS and product engineer in Roanoke, VA, seeking remote work. 16+ years shipping products, full-stack architecture, and AI-assisted delivery.',
    path: '/',
    type: 'profile',
  },
  resume: {
    title: 'Résumé — John P. McGlone | Lead iOS & Product Engineer',
    description:
      'Explore John P. McGlone’s work on Rumble Studio, Rumble Video, and Men of Hunger. iOS expertise, full-stack engineering, MCP servers, and AI-assisted delivery.',
    path: '/resume',
    type: 'profile',
  },
  reader: {
    title: 'Lyrics Reader — John P. McGlone',
    description:
      'A personal lyrics reader with line-by-line presentation, section navigation, and keyboard controls.',
    path: '/apps/reader',
    unlisted: true,
  },
  ageCalculator: {
    title: 'Age Calculator — John P. McGlone',
    description:
      'Calculate ages in years, months, weeks, and days, with current periods and a visual life-in-years grid.',
    path: '/apps/deathcalculator',
    unlisted: true,
  },
} satisfies Record<string, PageMetadata>
