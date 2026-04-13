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
    keywords: string
    ogTitle: string
    ogDescription: string
    ogImage: string
    ogUrl: string
    ogType: string
    twitterCard: string
    twitterTitle: string
    twitterDescription: string
    twitterImage: string
    canonical: string
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
    title: 'John P. McGlone (@jpmcglone) — Senior iOS Engineer',
    description: 'John P. McGlone (JP McGlone, jpmcglone) is a seasoned software engineer with 16+ years building polished iOS apps, SDKs, and products. Former engineer at Rumble, DocuSign, Imgur, and more.',
    keywords: 'John McGlone, John P McGlone, JP McGlone, jpmcglone, John P. McGlone, iOS developer, senior iOS engineer, Swift developer, iOS engineer, software engineer, Rumble, DocuSign, Imgur, PulsePoint, Men of Hunger, Roanoke VA developer',
    ogTitle: 'John P. McGlone — Senior iOS Engineer',
    ogDescription: 'JP McGlone is a seasoned software engineer with 16+ years building polished iOS apps and SDKs. Former engineer at Rumble, DocuSign, and Imgur.',
    ogImage: 'https://jpmcglone.com/images/johnmcglone.jpg',
    ogUrl: 'https://jpmcglone.com',
    ogType: 'profile',
    twitterCard: 'summary_large_image',
    twitterTitle: 'John P. McGlone — Senior iOS Engineer',
    twitterDescription: 'JP McGlone is a seasoned software engineer with 16+ years building polished iOS apps and SDKs. Former engineer at Rumble, DocuSign, and Imgur.',
    twitterImage: 'https://jpmcglone.com/images/johnmcglone.jpg',
    canonical: 'https://jpmcglone.com'
  }
}

export default indexData
