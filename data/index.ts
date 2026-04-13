export interface Tag {
  label: string
  tooltip: string
  link?: string
}

export interface SocialLink {
  name: string
  url: string
  icon: string
}

export interface IndexData {
  personalInfo: {
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
  meta: {
    title: string
    description: string
    ogTitle: string
    ogDescription: string
    ogType: string
    twitterCard: string
    twitterTitle: string
    twitterDescription: string
  }
}

const indexData: IndexData = {
  personalInfo: {
    username: '@jpmcglone',
    title: 'Seasoned Software Engineer',
    avatar: '/images/johnmcglone.jpg',
    description: 'Seasoned software engineer focused on iOS, product quality, and engineering craftsmanship',
    tags: [
      {
        label: 'Software Engineer',
        tooltip: 'Check out my code on GitHub',
        link: 'https://github.com/jpmcglone'
      },
      {
        label: 'Husband',
        tooltip: 'Married to my wonderful wife Katrina',
        link: 'https://johnandkatmcglone.com/'
      },
      {
        label: 'Landlord',
        tooltip: 'Real estate investor and property manager'
      },
      // {
      //   label: 'Gamer',
      //   tooltip: 'Watch me stream games live',
      //   link: 'https://twitch.tv/jpmcglone'
      // }
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
  meta: {
    title: '@jpmcglone - Seasoned Software Engineer',
    description: 'Seasoned software engineer focused on iOS, product quality, and engineering craftsmanship',
    ogTitle: 'JP McGlone - Seasoned Software Engineer',
    ogDescription: 'Seasoned software engineer focused on iOS, product quality, and engineering craftsmanship',
    ogType: 'website',
    twitterCard: 'summary',
    twitterTitle: 'JP McGlone - Seasoned Software Engineer',
    twitterDescription: 'Seasoned software engineer focused on iOS, product quality, and engineering craftsmanship'
  }
}

export default indexData
