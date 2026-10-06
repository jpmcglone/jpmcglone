import { hiringPreferences, pageMetadata, siteMetadata, type PageMetadata } from './site.ts'

export interface Skill {
  name: string
  featured?: boolean
  historical?: boolean
  keywords?: string[]
}

export interface SkillCategory {
  category: string
  description?: string
  keywords?: string[]
  skills: Skill[]
}

export type Responsibility = string | { text: string; highlighted: boolean }

export interface CompanyStatus {
  kind: 'closed' | 'acquired' | 'renamed'
  label: string
  date?: string
  logo?: string
  note: string
}

export interface Experience {
  company: string
  logo?: string
  url?: string
  title: string
  period: string
  startDate?: string
  endDate?: string
  isRemote?: boolean
  isCurrentRole?: boolean
  isIndependent?: boolean
  isContract?: boolean
  companyStatus?: CompanyStatus
  joinedVia?: Omit<CompanyStatus, 'kind'>
  appStore?: Link[]
  responsibilities: Responsibility[]
}

export interface Education {
  degree: string
  school: string
  schoolUrl?: string
  location: string
  period: string
  logo?: string
  studies?: string
  majorGpa?: string
  gpa?: string
}

export interface Link {
  name: string
  url: string
}

export type ProjectStatus = 'Live' | 'In Development' | 'Advising'

export interface Project {
  name: string
  logo?: string
  description: string
  originStory?: string
  status: ProjectStatus
  technologies: string[]
  url?: string
  featured?: boolean
}

export interface Recommendation {
  quote: string
  author: string
  image?: string
  title: string
  company?: string
  context?: string
  linkedin?: string
  year?: string
  date?: string
  sharedCompany?: {
    name: string
    image: string
  }
}

export interface Achievement {
  title: string
  description: string
  metric?: string
}

export interface ResumeData {
  personalInfo: {
    name: string
    title: string
    location: string
    workPreference?: string
    phone?: string
    image?: string
    bio?: string
  }
  seo: PageMetadata
  objective?: string
  technicalSkills: SkillCategory[]
  experience: Experience[]
  education: Education
  links: Link[]
  projects: Project[]
  recommendations: {
    url: string
    items: Recommendation[]
  }
  achievements?: Achievement[]
  metrics: {
    yearsExperience: number
  }
}

const resumeData: ResumeData = {
  seo: pageMetadata.resume,
  personalInfo: {
    name: 'John P. McGlone',
    title: 'Full-Stack Product Engineer · Real-Time Media',
    location: siteMetadata.location,
    workPreference: siteMetadata.workPreference,
    phone: '(631) 943-6889',
    image: siteMetadata.portrait,
    bio: `I’m a full-stack product engineer with 16 years of experience and a background in <strong>real-time audio and video</strong>. I partner with product and design to take products from architecture through launch.

As the sole iOS developer for <a href="https://apps.apple.com/us/app/rumble-studio/id6472735205" target="_blank" rel="noopener noreferrer">Rumble Studio</a>, I built and launched the app on iPhone, iPad, and Vision Pro, integrated LiveKit for live audio/video and multi-platform streaming, and owned every update.

I created and shipped <a href="https://menofhunger.com" target="_blank" rel="noopener noreferrer">Men of Hunger</a>, a full-stack community product with a <strong>TypeScript, Vue.js, and Nuxt</strong> web app. I own web, API, and iOS delivery, including chat, video calls, voice messages, and AI conversation summaries.`,
  },
  objective: `I'm seeking a remote, full-time Senior or Staff product engineering role, building across the stack with a focus on media, creative tools, and AI-powered experiences.

${hiringPreferences.contracts}`,
  technicalSkills: [
    {
      category: 'iOS Frameworks',
      keywords: ['iPhone', 'iPad', 'Apple', 'mobile'],
      skills: [
        { name: 'SwiftUI', featured: true },
        { name: 'UIKit', featured: true },
        { name: 'Swift 6 Concurrency', featured: true },
        { name: 'Combine' },
        { name: 'SnapKit' },
        { name: 'Lottie' },
        {
          name: 'LiveKit',
          featured: true,
          keywords: ['real-time audio', 'video', 'media', 'streaming'],
        },
        { name: 'FLAnimatedImage', historical: true, keywords: ['historical', 'legacy'] },
        { name: 'Apollo (GraphQL)' },
      ],
    },
    {
      category: 'Architecture & Patterns',
      keywords: ['system design', 'architecture', 'full stack', 'technical leadership'],
      skills: [
        { name: 'System Architecture', featured: true },
        { name: 'Full-Stack Development', featured: true },
        { name: 'MVVM' },
        { name: 'MVI' },
        { name: 'Factory (DI)' },
        { name: 'Trunk-Based Development' },
      ],
    },
    {
      category: 'Languages',
      keywords: ['programming languages'],
      skills: [
        { name: 'Swift', featured: true },
        { name: 'Objective-C' },
        { name: 'JavaScript' },
        { name: 'TypeScript' },
        { name: 'Ruby' },
        { name: 'PHP' },
        { name: 'Java' },
      ],
    },
    {
      category: 'AI & Agentic Development',
      description:
        'Deepest experience with Cursor, ChatGPT Codex, and Astra; additional experience with Claude.',
      keywords: ['artificial intelligence', 'AI assisted engineering', 'augmented coding', 'LLM'],
      skills: [
        { name: 'Cursor', featured: true, keywords: ['AI editor', 'agent', 'IDE'] },
        {
          name: 'ChatGPT Codex',
          featured: true,
          keywords: ['OpenAI', 'Chat GPT', 'coding agents'],
        },
        { name: 'Astra', featured: true, keywords: ['Codex', 'OpenAI', 'models'] },
        {
          name: 'Agentic Coding',
          featured: true,
          keywords: ['AI agents', 'augmented coding', 'automation'],
        },
        {
          name: 'MCP Server Development',
          featured: true,
          keywords: ['Model Context Protocol', 'tools', 'integrations', 'Men of Hunger'],
        },
        {
          name: 'AI Workflow Design',
          featured: true,
          keywords: ['AI adoption', 'engineering productivity', 'training'],
        },
        { name: 'Claude', keywords: ['Anthropic', 'LLM'] },
      ],
    },
    {
      category: 'Web Frameworks',
      keywords: ['frontend', 'front end', 'web'],
      skills: [
        { name: 'Nuxt.js', featured: true },
        { name: 'Vue.js', featured: true },
        { name: 'React' },
        { name: 'Next.js' },
      ],
    },
    {
      category: 'Databases',
      keywords: ['backend', 'back end', 'SQL', 'storage'],
      skills: [
        { name: 'PostgreSQL', featured: true },
        { name: 'Realm' },
        { name: 'MySQL' },
        { name: 'SQLite' },
        { name: 'MongoDB' },
      ],
    },
    {
      category: 'Testing',
      keywords: ['quality assurance', 'QA', 'unit tests'],
      skills: [{ name: 'XCTest', featured: true }, { name: 'Quick' }, { name: 'Nimble' }],
    },
    {
      category: 'CI/CD',
      keywords: ['delivery', 'deployment', 'pipelines', 'DevOps'],
      skills: [
        { name: 'CircleCI' },
        { name: 'Fastlane' },
        { name: 'GitHub Actions' },
        { name: 'Travis CI', historical: true, keywords: ['historical', 'legacy'] },
        { name: 'Jenkins' },
        { name: 'Azure DevOps' },
      ],
    },
    {
      category: 'iOS Tooling',
      keywords: ['lint', 'format', 'static analysis'],
      skills: [{ name: 'SwiftLint' }, { name: 'SwiftFormat' }, { name: 'Periphery' }],
    },
    {
      category: 'Networking',
      keywords: ['HTTP', 'streaming', 'real time'],
      skills: [{ name: 'Alamofire' }, { name: 'Agora' }, { name: 'URLSession' }],
    },
    {
      category: 'Monitoring & Analytics',
      keywords: ['observability', 'production', 'crash reporting'],
      skills: [
        { name: 'Sentry' },
        { name: 'Crashlytics' },
        { name: 'Amplitude' },
        { name: 'Mixpanel' },
        { name: 'Firebase' },
      ],
    },
    {
      category: 'APIs & Data Formats',
      keywords: ['API', 'SDK', 'integration', 'reusable components', 'platform development'],
      skills: [
        { name: 'API Design', featured: true },
        { name: 'SDK Development', featured: true },
        { name: 'GraphQL' },
        { name: 'JSON' },
        { name: 'YAML' },
        { name: 'dotenv' },
        { name: 'xcconfig' },
        { name: 'Regex' },
        { name: 'XML' },
      ],
    },
    {
      category: 'Development Tools',
      keywords: ['IDE', 'editors', 'source control'],
      skills: [
        { name: 'Xcode', featured: true },
        { name: 'Git', featured: true },
        { name: 'VS Code' },
        { name: 'Vim' },
        { name: 'JetBrains tools' },
      ],
    },
    {
      category: 'Dependency Managers',
      keywords: ['packages', 'dependencies'],
      skills: [
        { name: 'Swift Package Manager', featured: true },
        { name: 'Cocoapods' },
        { name: 'npm' },
        { name: 'Carthage', historical: true, keywords: ['historical', 'legacy'] },
        { name: 'Bundler' },
      ],
    },
    {
      category: 'Collaboration & Documentation',
      keywords: ['collaboration', 'documentation', 'project management'],
      skills: [
        { name: 'JIRA' },
        { name: 'Linear' },
        { name: 'GitHub' },
        { name: 'Notion' },
        { name: 'GitLab' },
        { name: 'Bitbucket' },
        { name: 'Confluence' },
      ],
    },
    {
      category: 'AI Exploration',
      description: 'Keeping current with new models and tools; personal experimentation.',
      keywords: ['AI', 'LLM', 'models', 'personal experiments'],
      skills: [
        { name: 'Grok Bot', keywords: ['Grok', 'bot', 'personal machine', 'local experiments'] },
      ],
    },
  ],
  experience: [
    {
      company: 'Men of Hunger',
      logo: '/images/logos/men-of-hunger.png',
      url: 'https://menofhunger.com',
      title: 'Creator & Engineer',
      period: '2026 - Present',
      startDate: '2026-01',
      isCurrentRole: true,
      isIndependent: true,
      responsibilities: [
        'Created and shipped a full-stack community product with a TypeScript, Vue.js, and Nuxt web app. Own architecture and delivery across web, API, and iOS, using AI-assisted development with hands-on review.',
        'Shipped posts, chat, video calls, and voice messages as the core product.',
        'Shipped “Catch me up,” an AI feature that summarizes long conversations from the thread, images, and public profile.',
        'Built and maintain a custom MCP server for admin insights and for scheduling posts and newsletters.',
      ],
    },
    {
      company: 'Greenlane',
      logo: '/images/logos/greenlane.png',
      url: 'https://greenlane.dev',
      title: 'Creator & Engineer',
      period: '2026 - Present',
      startDate: '2026-09',
      isCurrentRole: true,
      isIndependent: true,
      responsibilities: [
        'Building a Mac tool that finds Apple App Review issues before submission by building, exploring, and checking iOS apps locally in Simulator.',
        'The dashboard and CLI show findings, screenshots, build logs, and crash locations, with live progress.',
        'Own the product end to end and ship it with agentic coding and hands-on review.',
      ],
    },
    {
      company: 'Rumble',
      logo: '/images/logos/rumble.png',
      url: 'https://rumble.com',
      title: 'Lead iOS Developer (Studio) · Senior iOS Developer (Video)',
      period: '2023 - 2026',
      startDate: '2023-05',
      endDate: '2026-09-22',
      isRemote: true,
      isCurrentRole: false,
      joinedVia: {
        label: 'Joined via Callin acquisition',
        logo: '/images/logos/callin.png',
        date: 'May 2023',
        note: 'I joined Rumble when it acquired Callin in May 2023.',
      },
      appStore: [
        { name: 'Rumble Studio', url: 'https://apps.apple.com/us/app/rumble-studio/id6472735205' },
        {
          name: 'Rumble',
          url: 'https://apps.apple.com/us/app/rumble-live-streaming-videos/id1518427877',
        },
      ],
      responsibilities: [
        'Sole iOS developer for Rumble Studio: took the app from scratch to the App Store, set the technical direction, and owned every update on iPhone, iPad, and Vision Pro.',
        'Partnered with design to turn ambitious product ideas into shipped iOS features, including custom UI so Vision Pro eye tracking can highlight each control.',
        'Contributed to Rumble Video as a senior iOS developer alongside sole ownership of Studio.',
        'Integrated LiveKit for conference calls and multi-platform streaming with synchronized audio and video.',
        {
          text: "Supported frontend development for Rumble's Advertising Center.",
          highlighted: false,
        },
      ],
    },
    {
      company: 'Callin',
      logo: '/images/logos/callin.png',
      title: 'Lead iOS Developer',
      period: '2022 - 2023',
      startDate: '2022-01',
      endDate: '2023-05',
      isRemote: true,
      companyStatus: {
        kind: 'acquired',
        label: 'Acquired by Rumble',
        date: 'May 2023',
        logo: '/images/logos/rumble.png',
        note: 'Rumble acquired Callin in May 2023, and I joined Rumble through the acquisition. The Callin app has since been sunset.',
      },
      responsibilities: [
        'Built a social audio and video platform from the ground up as lead iOS developer.',
        'Shipped low-latency live audio with Agora.',
        'Built audio-transcript sync with custom scrubbing and playback controls.',
        {
          text: 'Designed state management for complex real-time interactions.',
          highlighted: false,
        },
      ],
    },
    {
      company: 'Epihealthy',
      title: 'Lead iOS Developer',
      period: '2022 - 2022',
      isContract: true,
      isRemote: true,
      companyStatus: {
        kind: 'closed',
        label: 'Closed',
        note: 'Epihealthy is no longer operating.',
      },
      responsibilities: [
        'Shipped a real-time seizure detection app using CoreBluetooth for continuous health monitoring.',
        'Engineered background processing so health data kept collecting around the clock.',
      ],
    },
    {
      company: 'Rite Aid',
      logo: '/images/logos/rite-aid.png',
      title: 'Senior Product Mobile Specialist',
      period: '2021 - 2021',
      isContract: true,
      isRemote: true,
      companyStatus: {
        kind: 'closed',
        label: 'Closed',
        date: 'Oct 2025',
        note: 'Rite Aid closed all remaining stores in October 2025 after its second bankruptcy. Its brand and website were later sold to an unrelated company.',
      },
      responsibilities: [
        'Rebuilt mobile CI/CD in Azure DevOps with parallel builds.',
        'Designed a modular, white-label setup for pharmacy apps.',
      ],
    },
    {
      company: 'Supersapiens',
      logo: '/images/logos/supersapiens.png',
      title: 'iOS Engineer',
      period: '2020 - 2021',
      isContract: true,
      isRemote: true,
      companyStatus: {
        kind: 'closed',
        label: 'Closed',
        date: 'Mar 2024',
        note: 'Supersapiens stopped sensor shipments and ended all memberships in March 2024.',
      },
      responsibilities: [
        'Built SwiftUI charts for real-time glucose data.',
        'Shipped a BLE connection handler with automatic reconnection and background updates.',
      ],
    },
    {
      company: 'Walmart Labs',
      logo: '/images/logos/walmart.png',
      url: 'https://tech.walmart.com',
      title: 'Senior iOS Developer',
      period: '2020 - 2020',
      isContract: true,
      isRemote: true,
      companyStatus: {
        kind: 'renamed',
        label: 'Now Walmart Global Tech',
        date: '2020',
        note: 'Walmart Labs became Walmart Global Tech in August 2020.',
      },
      responsibilities: [
        "Contributed to Walmart's newest iOS app, using UIKit and SwiftUI to replace the legacy client.",
      ],
    },
    {
      company: 'Airside Mobile',
      logo: '/images/logos/airside.png',
      url: 'https://www.entrust.com/products/airside-app',
      title: 'Senior iOS Developer',
      period: '2019 - 2020',
      companyStatus: {
        kind: 'acquired',
        label: 'Now part of Entrust',
        note: 'Onfido acquired Airside in May 2023, and Entrust acquired Onfido in April 2024. The Airside app is now an Entrust product.',
      },
      responsibilities: [
        'Built a SwiftUI app with MVVM and dependency injection so it could be tested.',
        'Wrote a Swift style guide adopted by multiple teams.',
      ],
    },
    {
      company: 'AD:60',
      logo: '/images/logos/ad60.png',
      url: 'https://www.linkedin.com/company/ad60-agency-llc/',
      title: 'Lead iOS Developer',
      period: '2019 - 2019',
      companyStatus: {
        kind: 'closed',
        label: 'Agency closed',
        note: 'After 10 years as a digital agency, AD:60 stopped client work and became an in-house fintech studio.',
      },
      responsibilities: [
        'Built a financial education game with UIKit, Core Animation, and Lottie.',
        'Migrated chat from XMPP to Matrix.org for reliability and scale.',
      ],
    },
    {
      company: 'Eligible',
      logo: '/images/logos/eligible.png',
      url: 'https://eligible.com/',
      title: 'Lead iOS Developer',
      period: '2017 - 2019',
      isRemote: true,
      responsibilities: [
        'Built a healthcare eligibility SDK for insurance coverage checks.',
        'Led integration calls that helped major healthcare providers adopt the SDK.',
      ],
    },
    {
      company: 'Layer',
      logo: '/images/logos/layer.png',
      url: 'https://www.linkedin.com/company/layer/',
      title: 'Senior iOS Developer',
      period: '2016 - 2017',
      companyStatus: {
        kind: 'closed',
        label: 'Closed',
        date: 'Oct 2019',
        note: 'Engagio acquired Layer in early 2019 and shut down the Layer platform on October 30, 2019.',
      },
      responsibilities: [
        'Refactored the messaging SDK so other teams could integrate it with less setup.',
        'Improved messaging SDK performance and reliability.',
      ],
    },
    {
      company: 'Imgur',
      logo: '/images/logos/imgur.png',
      url: 'https://imgur.com',
      title: 'Senior iOS Developer',
      period: '2015 - 2015',
      companyStatus: {
        kind: 'acquired',
        label: 'Acquired by MediaLab',
        date: '2021',
        note: 'MediaLab acquired Imgur in September 2021. Imgur is still operating.',
      },
      responsibilities: [
        'Built a UICollectionView image grid that stayed smooth while scrolling.',
        'Built Hermes, an in-app notification framework.',
      ],
    },
    {
      company: 'DocuSign',
      logo: '/images/logos/docusign.png',
      url: 'https://www.docusign.com',
      title: 'iOS Developer',
      period: '2013 - 2014',
      responsibilities: [
        'Shipped StoreKit subscriptions.',
        'Cut app size with dynamic content loading.',
      ],
    },
    {
      company: 'Workday',
      logo: '/images/logos/workday.png',
      url: 'https://www.workday.com',
      title: 'iOS Developer',
      period: '2011 - 2013',
      responsibilities: [
        'Won a company-wide hackathon with a drag-and-drop goal manager.',
        'Shipped SSO that met enterprise security requirements.',
      ],
    },
    {
      company: 'Northern Kentucky University (NKU)',
      logo: '/images/logos/nku.png',
      title: 'Freelance Mobile Developer',
      period: '2009 - 2011',
      isContract: true,
      responsibilities: [
        `Built <a href="https://www.pulsepoint.org/" target="_blank" rel="noopener noreferrer">PulsePoint</a> (originally firedepartment.mobi), a first-responder geolocation app`,
        'Developed various mobile apps and web applications for local and regional clients',
      ],
    },
  ],
  education: {
    degree: 'A.S. in Computer Science',
    school: 'Nassau Community College',
    schoolUrl: 'https://www.ncc.edu/',
    location: 'Garden City, NY',
    period: '2006 - 2009',
    logo: '/images/logos/ncc.png',
    studies: 'Double major studies: Mathematics & Computer Science.',
    majorGpa: '4.0',
    gpa: '3.8',
  },
  links: [
    {
      name: 'GitHub',
      url: 'https://www.github.com/jpmcglone',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/john-p-mcglone-18513014',
    },
  ],
  projects: [
    {
      name: 'Men of Hunger',
      logo: '/images/logos/men-of-hunger.png',
      description:
        'A community for men centered on honest conversation, accountability, and personal growth.',
      status: 'Live',
      technologies: ['Full Stack', 'Agentic Coding', 'MCP'],
      url: 'https://menofhunger.com',
      featured: true,
    },
    {
      name: 'Greenlane',
      logo: '/images/logos/greenlane.png',
      description:
        'Finds Apple App Review issues before you submit by building, exploring, and checking your iOS app locally on your Mac.',
      originStory:
        "Men of Hunger's iOS app has been fighting its way through App Review, so I'm building the tool I wish I'd had.",
      status: 'In Development',
      technologies: ['iOS Tooling', 'Agentic Coding', 'Rapid Development'],
      url: 'https://greenlane.dev',
      featured: false,
    },
    {
      name: 'Fandemic',
      logo: '/images/logos/fandemic.png',
      description:
        'Product and engineering advisor since April 2025 to the founder of a sports community app. Advisory work alongside my engineering roles.',
      status: 'Advising',
      technologies: ['Product', 'Engineering', 'Advisory'],
      url: 'https://fandemicapp.com',
      featured: false,
    },
  ],
  recommendations: {
    url: 'https://www.linkedin.com/in/john-p-mcglone-18513014/details/recommendations/?detailScreenTabIndex=0',
    items: [
      {
        quote: `I highly recommend John McGlone. I worked alongside John for five years at Callin and Rumble, and I also served as his manager for a portion of that time.

During our time together, John single-handedly built the Rumble Studio app from the ground up. This project perfectly highlighted his remarkable autonomy and technical execution. He operates with a high degree of independence, requiring virtually no oversight to deliver complex products. John’s passion for iOS development has shone through his work, always chomping at the bit to integrate the latest feature and hardware platforms as soon as they were available. John is a trustworthy, reliable, and incredibly skilled engineer who would be a massive asset to any technical team.`,
        author: 'James Whitney',
        sharedCompany: { name: 'Rumble', image: '/images/logos/rumble.png' },
        image: '/images/avatars/james-whitney.webp',
        title: 'Studio Lead',
        company: 'Rumble',
        context: 'Managed John at Rumble',
        linkedin: 'https://www.linkedin.com/in/james-d-whitney/',
        year: '2026',
        date: '2026-09-25',
      },
      {
        quote: `John is the best iOS developer I’ve ever worked with. He is exceptionally talented, proactive, and consistently brings a high level of ownership to his work. He stays current with the latest iOS releases and platform updates, and he is always willing to step in to solve problems or help move a project forward.

Beyond his technical abilities, John is a thoughtful, dependable teammate who collaborates well across disciplines. He communicates clearly, supports those around him, and makes the people he works with better. It’s also clear that he values his family deeply and is committed to being present for them.

I would strongly recommend John to any team looking for a skilled, driven, and genuinely great iOS developer.`,
        author: 'Tim Cook',
        sharedCompany: { name: 'Rumble', image: '/images/logos/rumble.png' },
        image: '/images/avatars/tim-cook.png',
        title: 'Product Designer',
        company: 'Rumble',
        context: 'Worked with John at Rumble',
        linkedin: 'https://www.linkedin.com/in/thetimcook/',
        year: '2026',
        date: '2026-09-22',
      },
      {
        quote: `I had the pleasure of working with John on the same team, and from the moment I joined the company, it was clear that he was one of the most passionate engineers I had ever worked with.

Beyond his strong technical background, John has an exceptional ability to approach problems from a product perspective, think outside the box, and find practical solutions to complex challenges. This combination makes him a solid engineer. More importantly, John is a great teammate. He is always willing to collaborate, share his knowledge, and support those around him.

I would highly recommend John to any team looking for a strong engineer who combines technical expertise, product thinking, and great collaboration skills.`,
        author: 'Joan Manrubia Martínez',
        sharedCompany: { name: 'Rumble', image: '/images/logos/rumble.png' },
        image: '/images/avatars/joan-manrubia-martinez.webp',
        title: 'Senior Frontend Engineer',
        company: 'Rumble',
        context: 'Worked with John at Rumble',
        linkedin: 'https://www.linkedin.com/in/joan-manrubia-martinez/',
        year: '2026',
        date: '2026-09-23',
      },
      {
        quote:
          'I highly recommend John as a very senior engineer. John provided exceptional technical guidance and strategic insights that significantly strengthened our project outcomes. His deep expertise, clear communication, and practical problem-solving approach made him an invaluable asset to our team. I would gladly work with John again on any future engineering initiatives.',
        author: 'Brett Pollan',
        sharedCompany: { name: 'Fandemic', image: '/images/logos/fandemic.png' },
        image: '/images/avatars/brett-pollan.jpeg',
        title: 'Founder & CEO',
        company: 'Fandemic',
        context: 'John advises at Fandemic',
        linkedin: 'https://www.linkedin.com/in/bpollan/',
        year: '2026',
      },
      {
        quote:
          'JP taught me crucial team skills like how to create JIRA tickets with a clear done state and how to write clear Git commit messages. He also opened my eyes to various technologies to avoid reinventing the wheel.',
        author: 'Kevin Wang',
        sharedCompany: { name: 'Eligible', image: '/images/logos/eligible.png' },
        image: '/images/avatars/kevin-wang.jpeg',
        title: 'Senior Engineer',
        company: 'Clerk',
        context: 'Worked with John at Eligible',
        linkedin: 'https://www.linkedin.com/in/thekevinwang/',
        year: '2019',
      },
      {
        quote:
          'He always puts in the extra hours necessary, and will go above and beyond to find the best way to solve problems, for both short and long term answers. John is an asset to any team that is lucky enough to have him.',
        author: 'Aubrey Hadley',
        sharedCompany: { name: 'Workday', image: '/images/logos/workday.png' },
        image: '/images/avatars/aubrey-hadley.jpeg',
        title: 'Lead Product Designer',
        context: 'Worked with John at Workday',
        linkedin: 'https://www.linkedin.com/in/aubreyhadley/',
        year: '2014',
      },
      {
        quote:
          'Along with his incredible technical abilities, I also learned a great deal from JP on how to interact with team members in difficult situations and how to calmly tackle and discuss problems within a project. He was hard working, sincere and very thorough in all his duties.',
        author: 'Mili Shrivastava',
        sharedCompany: { name: 'Workday', image: '/images/logos/workday.png' },
        image: '/images/avatars/mili-shrivastava.jpeg',
        title: 'Head of QA/QE & Release',
        context: 'Worked with John at Workday',
        linkedin: 'https://www.linkedin.com/in/milishrivastava/',
        year: '2013',
      },
    ],
  },
  metrics: {
    yearsExperience: 16,
  },
}

export default resumeData
