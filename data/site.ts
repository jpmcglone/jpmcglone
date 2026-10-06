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
  // Use a new filename when refreshing the card so social crawlers fetch fresh bytes.
  image: '/images/john-mcglone-social-2026-10.png',
  imageAlt:
    'Portrait of John P. McGlone, Lead iOS & Product Engineer. AI-assisted engineering. Open to remote roles.',
  imageWidth: 1200,
  imageHeight: 630,
}

// Career direction confirmed by John on October 3, 2026; shared by both public pages.
export const hiringPreferences = {
  workAuthorization: 'Authorized to work in the U.S.',
  location: 'Remote · Eastern time',
  availability: 'Full-time · Select contract projects',
  fullTime:
    "I'm seeking a remote, full-time Staff or Lead mobile engineering role. I'm also open to hands-on Head of Mobile roles at smaller companies.",
  contracts:
    'I take on select contract projects: app launches, architecture reviews, and improvements to existing products across iOS, web, and APIs.',
}

export const pageMetadata = {
  home: {
    title: 'John P. McGlone (JP McGlone), Lead iOS & Product Engineer',
    description:
      'JP McGlone: 16 years in iOS, from architecture to the App Store. Seeking remote Staff/Lead mobile roles; also open to Head of Mobile at smaller companies.',
    path: '/',
    type: 'profile',
  },
  resume: {
    title: 'Résumé, John P. McGlone | Full-Stack Product Engineer',
    description:
      'John P. McGlone: full-stack product engineering, real-time audio and video, and shipped TypeScript products. Rumble Studio and Men of Hunger. Remote.',
    path: '/resume/',
    type: 'profile',
  },
} satisfies Record<string, PageMetadata>
