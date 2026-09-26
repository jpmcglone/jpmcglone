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
    portrait: string
    availability: string
    headline: string
    pitch: string
    heroChip: { title: string; subtitle: string; logo: string; url: string }
    outsideOfTech: Tag[]
    previouslyAt: { company: string; label: string }[]
    featuredRecommendation: { author: string; excerpt: string }
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
    portrait: '/images/johnmcglone-portrait.webp',
    availability: 'Open to senior & lead roles',
    headline: 'The iOS engineer who owns the whole product.',
    pitch:
      '16 years of Swift, SwiftUI, and UIKit, from architecture to the App Store. I lead across mobile, web, and APIs, mentor engineers, and use AI to help small teams ship more.',
    heroChip: {
      title: 'Built Rumble Studio solo',
      subtitle: 'iPhone, iPad & Vision Pro',
      logo: '/images/logos/rumble.png',
      url: 'https://apps.apple.com/us/app/rumble-studio/id6472735205',
    },
    previouslyAt: [
      { company: 'Rumble', label: 'Rumble' },
      { company: 'Walmart Labs', label: 'Walmart' },
      { company: 'DocuSign', label: 'DocuSign' },
      { company: 'Workday', label: 'Workday' },
    ],
    featuredRecommendation: {
      author: 'Tim Cook',
      excerpt:
        'John is the best iOS developer I’ve ever worked with. He is exceptionally talented, proactive, and consistently brings a high level of ownership to his work.',
    },
    outsideOfTech: [
      {
        label: 'Husband',
        tooltip: 'Married to my wonderful wife Katrina',
        icon: 'i-jpm-heart',
        link: 'https://johnandkatmcglone.com/',
      },
      {
        label: '3 kids and counting',
        tooltip: 'Proud dad of three (so far)',
        icon: 'i-jpm-face-smile',
      },
      {
        label: 'Landlord',
        tooltip: 'Real estate investor and property manager',
        icon: 'i-jpm-home',
      },
    ],
    socialLinks: [
      {
        name: 'GitHub',
        url: 'https://github.com/jpmcglone',
        icon: 'i-simple-icons-github',
      },
      {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/john-p-mcglone-18513014',
        icon: 'i-simple-icons-linkedin',
      },
      // {
      //   name: 'Twitch',
      //   url: 'https://twitch.tv/jpmcglone',
      //   icon: 'i-simple-icons-twitch'
      // }
    ],
  },
  resume: {
    buttonText: 'View Resume',
    link: '/resume/',
  },
  meta: pageMetadata.home,
}

export default indexData
