import { pageMetadata, siteMetadata, type PageMetadata } from './site'

export interface Tag {
  label: string
  tooltip: string
  icon: string
  link?: string
}

export interface SocialLink {
  name: string
  url: string
  icon: string
}

export interface IndexData {
  personalInfo: {
    name: string
    location: string
    workPreference: string
    username: string
    title: string
    avatar: string
    description: string
    tags: Tag[]
    socialLinks: SocialLink[]
  }
  resume: {
    buttonText: string
    link: string
  }
  meta: PageMetadata
}

const indexData: IndexData = {
  personalInfo: {
    name: siteMetadata.name,
    location: siteMetadata.location,
    workPreference: siteMetadata.workPreference,
    username: '@jpmcglone',
    title: siteMetadata.role,
    avatar: siteMetadata.portrait,
    description: 'I build products, mentor engineers, and help small teams ship with AI.',
    tags: [
      { label: 'Husband', tooltip: 'Married to my wonderful wife Katrina', icon: 'i-heroicons-heart', link: 'https://johnandkatmcglone.com/' },
      { label: 'Landlord', tooltip: 'Real estate investor and property manager', icon: 'i-heroicons-home' },
      { label: 'Mentor', tooltip: 'Helping engineers grow and teams do their best work', icon: 'i-heroicons-user-group', link: '/resume' },
    ],
    socialLinks: [
      {
        name: 'GitHub',
        url: 'https://github.com/jpmcglone',
        icon: 'i-simple-icons-github'
      },
      {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/john-p-mcglone-18513014',
        icon: 'i-simple-icons-linkedin'
      },
      // {
      //   name: 'Twitch',
      //   url: 'https://twitch.tv/jpmcglone',
      //   icon: 'i-simple-icons-twitch'
      // }
    ]
  },
  resume: {
    buttonText: 'View Resume',
    link: '/resume'
  },
  meta: pageMetadata.home
}

export default indexData
