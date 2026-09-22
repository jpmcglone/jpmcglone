import { pageMetadata, siteMetadata, type PageMetadata } from './site'

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

export interface Experience {
  company: string
  logo?: string
  url?: string
  title: string
  period: string
  endDate?: string
  isRemote?: boolean
  isCurrentRole?: boolean
  isContract?: boolean
  isDefunct?: boolean
  responsibilities: Responsibility[]
}

export interface Education {
  degree: string
  school: string
  schoolUrl?: string
  location: string
  period: string
  gpa?: string
}

export interface Link {
  name: string
  url: string
}

export interface Project {
  name: string
  logo?: string
  description: string
  status: string
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
    email?: string
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
    title: siteMetadata.role,
    location: siteMetadata.location,
    workPreference: siteMetadata.workPreference,
    phone: '(631) 943-6889',
    email: 'jp@jpmcglone.com',
    image: siteMetadata.portrait,
    bio: `I'm a software engineer and technical lead with <strong>16+ years of experience</strong> shipping products people rely on. I've worked on <a href="https://studio.rumble.com" target="_blank" rel="noopener noreferrer">Rumble Studio</a> and <a href="https://rumble.com" target="_blank" rel="noopener noreferrer">Rumble Video</a> for iOS, and built software at <a href="https://www.docusign.com" target="_blank" rel="noopener noreferrer">DocuSign</a> and <a href="https://imgur.com" target="_blank" rel="noopener noreferrer">Imgur</a>. iPhone is my specialty; full-stack development and product architecture are part of the job.

<strong>AI is central to how I work.</strong> I use <a href="https://cursor.com" target="_blank" rel="noopener noreferrer">Cursor</a> and ChatGPT Codex to move quickly, with engineering judgment, code review, and ownership of what ships. I also build and run <a href="https://menofhunger.com" target="_blank" rel="noopener noreferrer">Men of Hunger</a>, a men-only social media platform with its own MCP server.

I like small teams, clear technical direction, and well-made software. I mentor developers, help teams adopt practical AI workflows, and stay involved from the first architectural decision through production.`,
  },
  objective:
    "I'm looking for a remote, hands-on lead role: shipping products, guiding a lean team, and helping the right company adopt AI or take its existing work further.",
  technicalSkills: [
    {
      category: 'AI & Agentic Development',
      description:
        'Deepest experience with Cursor and ChatGPT Codex; additional experience with Claude.',
      keywords: ['artificial intelligence', 'AI assisted engineering', 'augmented coding', 'LLM'],
      skills: [
        { name: 'Cursor', featured: true, keywords: ['AI editor', 'agent', 'IDE'] },
        {
          name: 'ChatGPT Codex',
          featured: true,
          keywords: ['OpenAI', 'Chat GPT', 'coding agents'],
        },
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
      category: 'iOS Frameworks',
      keywords: ['iPhone', 'iPad', 'Apple', 'mobile'],
      skills: [
        { name: 'SwiftUI', featured: true },
        { name: 'UIKit', featured: true },
        { name: 'Swift 6 Concurrency', featured: true },
        { name: 'Combine' },
        { name: 'SnapKit' },
        { name: 'Lottie' },
        { name: 'LiveKit' },
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
      keywords: ['API', 'SDK', 'integration'],
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
        { name: 'Astra', keywords: ['Codex', 'OpenAI', 'models'] },
        { name: 'Grok Bot', keywords: ['Grok', 'bot', 'personal machine', 'local experiments'] },
      ],
    },
  ],
  experience: [
    {
      company: 'Rumble',
      logo: '/images/logos/rumble.png',
      url: 'https://rumble.com',
      title: 'Lead iOS Developer · Studio & Video',
      period: '2023 - 2026',
      endDate: '2026-09-22',
      isRemote: true,
      isCurrentRole: false,
      responsibilities: [
        'Sole iOS developer for Rumble Studio, owning development and delivery across iPhone, iPad, and Vision Pro',
        'Integrated LiveKit to enable studio-quality conference calls and multi-platform streaming with precise media synchronization',
        'Delivered substantial iOS development for Rumble Video alongside sole ownership of Studio',
        {
          text: "Supported frontend development for Rumble's Advertising Center (RAC)",
          highlighted: false,
        },
      ],
    },
    {
      company: 'Callin',
      logo: '/images/logos/callin.png',
      url: 'https://callin.com',
      title: 'Lead iOS Developer',
      period: '2022 - 2023',
      isRemote: true,
      responsibilities: [
        'Developed a social audio and video platform from the ground up, scaling to thousands of users and facilitating a successful acquisition',
        'Implemented ultra-low latency audio streaming using Agora.io, ensuring <100ms delay across a global user base',
        'Built an advanced audio-transcript synchronization system with custom scrubbing and playback controls',
        {
          text: 'Designed a state management system to handle complex real-time user interactions efficiently',
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
      isDefunct: true,
      responsibilities: [
        'Developed a real-time seizure detection app using CoreBluetooth for continuous health monitoring',
        'Engineered a robust background processing system to ensure 24/7 health data collection and processing',
        {
          text: 'Implemented an intelligent alert system with customizable thresholds and emergency contact integration',
          highlighted: false,
        },
        {
          text: 'Designed a fault-tolerant data sync mechanism to prevent critical health data loss during connectivity issues',
          highlighted: false,
        },
      ],
    },
    {
      company: 'Rite Aid',
      logo: '/images/logos/rite-aid.png',
      url: 'https://www.riteaid.com',
      title: 'Senior Product Mobile Specialist',
      period: '2021 - 2021',
      isContract: true,
      isRemote: true,
      responsibilities: [
        'Revamped mobile development workflow by implementing modern CI/CD practices across platforms',
        'Reduced deployment times by 40% through Azure DevOps optimizations and parallel build processes',
        {
          text: 'Designed a modular white-label solution to enable rapid customization of pharmacy applications',
          highlighted: false,
        },
        {
          text: 'Provided mentorship to distributed team leads on git workflows, code reviews, and technical documentation',
          highlighted: false,
        },
      ],
    },
    {
      company: 'Supersapiens',
      logo: '/images/logos/supersapiens.png',
      url: 'https://www.supersapiens.com',
      title: 'iOS Engineer',
      period: '2020 - 2021',
      isContract: true,
      isRemote: true,
      responsibilities: [
        'Developed high-performance SwiftUI charts rendering real-time glucose data with smooth 60fps animations',
        'Implemented a reliable BLE connection handler with automatic reconnection and background updates',
        'Led the migration from RxSwift to Combine, improving code maintainability and reducing compile times',
        {
          text: 'Enhanced error handling and retry logic to ensure seamless data collection',
          highlighted: false,
        },
      ],
    },
    {
      company: 'Walmart Labs',
      logo: '/images/logos/walmart.png',
      url: 'https://www.walmart.com',
      title: 'Senior iOS Developer',
      period: '2020 - 2020',
      isContract: true,
      isRemote: true,
      responsibilities: [
        "Contributed to the development of Walmart's newest app, leveraging UIKit and SwiftUI to replace the legacy system",
      ],
    },
    {
      company: 'Airside Mobile',
      logo: '/images/logos/airside.png',
      url: 'https://airsidemobile.com/',
      title: 'Senior iOS Developer',
      period: '2019 - 2020',
      responsibilities: [
        'Developed a SwiftUI-based app using MVVM and dependency injection for improved testability',
        'Optimized CI/CD pipeline in CircleCI, reducing build times from 45 to 15 minutes',
        {
          text: 'Designed a thread-safe logging system leveraging Combine for precise debugging across async operations',
          highlighted: false,
        },
        'Established and documented a comprehensive Swift style guide adopted across multiple teams',
      ],
    },
    {
      company: 'AD:60',
      logo: '/images/logos/ad60.png',
      url: 'https://www.linkedin.com/company/ad60-agency-llc/',
      title: 'Lead iOS Developer',
      period: '2019 - 2019',
      responsibilities: [
        'Developed a financial education game featuring complex animations and state management using UIKit, CoreAnimation, and Lottie',
        'Architected a seamless migration from XMPP to Matrix.org for chat functionality, improving reliability and scalability',
        {
          text: 'Automated JIRA workflows to streamline sprint planning and task management',
          highlighted: false,
        },
        {
          text: 'Maintained a perfect track record of on-time delivery across multiple client projects',
          highlighted: false,
        },
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
        'Developed a healthcare eligibility SDK processing millions of checks with 99.9% uptime',
        'Led technical integration calls, assisting major healthcare providers in adopting our SDK',
        {
          text: 'Designed a mock data system that reduced QA cycles from days to hours',
          highlighted: false,
        },
        {
          text: 'Built a modular architecture enabling clients to customize the UI while maintaining core functionality',
          highlighted: false,
        },
      ],
    },
    {
      company: 'Layer',
      logo: '/images/logos/layer.png',
      url: 'https://www.linkedin.com/company/layer/',
      title: 'Senior iOS Developer',
      period: '2016 - 2017',
      isDefunct: true,
      responsibilities: [
        'Refactored messaging SDK architecture, increasing developer adoption by 35%',
        'Scaled the SDK to handle millions of daily messages across major applications',
        {
          text: 'Developed comprehensive SDK examples, reducing integration support tickets by 40%',
          highlighted: false,
        },
        {
          text: 'Designed a flexible persistence layer supporting multiple database backends',
          highlighted: false,
        },
      ],
    },
    {
      company: 'Imgur',
      logo: '/images/logos/imgur.png',
      url: 'https://imgur.com',
      title: 'Senior iOS Developer',
      period: '2015 - 2015',
      responsibilities: [
        'Engineered a high-performance UICollectionView-based grid supporting thousands of images with smooth scrolling',
        'Developed Hermes, an in-app notification framework that reduced crash rates from 2% to 0.2%',
        {
          text: 'Implemented advanced analytics and crash reporting, achieving 99.9% app stability',
          highlighted: false,
        },
        {
          text: 'Built reusable UI components to accelerate feature development across teams',
          highlighted: false,
        },
      ],
    },
    {
      company: 'DocuSign',
      logo: '/images/logos/docusign.png',
      url: 'https://www.docusign.com',
      title: 'iOS Developer',
      period: '2013 - 2014',
      responsibilities: [
        'Implemented StoreKit-based in-app purchases, increasing subscription revenue by 25%',
        'Optimized app size by 40% through a dynamic content loading system',
        {
          text: 'Built a modular styling framework to standardize UI development across teams',
          highlighted: false,
        },
        {
          text: 'Designed an intelligent caching system to enhance app performance and offline access',
          highlighted: false,
        },
      ],
    },
    {
      company: 'Workday',
      logo: '/images/logos/workday.png',
      url: 'https://www.workday.com',
      title: 'iOS Developer',
      period: '2011 - 2013',
      responsibilities: [
        'Won a company-wide hackathon with an innovative drag-and-drop goal management system',
        'Implemented a secure SSO solution adhering to enterprise security requirements',
        {
          text: 'Developed a custom localization system to support server-side locale management',
          highlighted: false,
        },
        {
          text: 'Created a responsive grid system for complex enterprise data visualization',
          highlighted: false,
        },
      ],
    },
    {
      company: 'Northern Kentucky University (NKU)',
      logo: '/images/logos/nku.png',
      title: 'Freelance Mobile Developer',
      period: '2009 - 2011',
      isContract: true,
      responsibilities: [
        `Built <a href="https://www.pulsepoint.org/" target="_blank" rel="noopener noreferrer">PulsePoint</a> (originally firedepartment.mobi), a first-responder geolocation app now used by hundreds of fire departments nationwide`,
        {
          text: 'Developed various mobile apps and web applications for local and regional clients',
          highlighted: false,
        },
      ],
    },
  ],
  education: {
    degree: 'A.S. in Computer Science',
    school: 'Nassau Community College',
    schoolUrl: 'https://www.ncc.edu/',
    location: 'Garden City, NY',
    period: '2006 - 2009',
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
      name: 'Fandemic',
      logo: '/images/logos/fandemic.png',
      description:
        'A sports community app bringing fans together with live scores, highlights, and real-time conversations.',
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
        quote: `John is the best iOS developer I’ve ever worked with. He is exceptionally talented, proactive, and consistently brings a high level of ownership to his work. He stays current with the latest iOS releases and platform updates, and he is always willing to step in to solve problems or help move a project forward.

Beyond his technical abilities, John is a thoughtful, dependable teammate who collaborates well across disciplines. He communicates clearly, supports those around him, and makes the people he works with better. It’s also clear that he values his family deeply and is committed to being present for them.

I would strongly recommend John to any team looking for a skilled, driven, and genuinely great iOS developer.`,
        author: 'Tim Cook',
        image: '/images/avatars/tim-cook.png',
        title: 'Product Designer',
        company: 'Rumble',
        context: 'Worked with John at Rumble',
        linkedin: 'https://www.linkedin.com/in/thetimcook/',
        year: '2026',
        date: '2026-09-22',
      },
      {
        quote:
          'I highly recommend John as a very senior engineer. John provided exceptional technical guidance and strategic insights that significantly strengthened our project outcomes. His deep expertise, clear communication, and practical problem-solving approach made him an invaluable asset to our team. I would gladly work with John again on any future engineering initiatives.',
        author: 'Brett Pollan',
        image: '/images/avatars/brett-pollan.jpeg',
        title: 'Results-oriented and solutions focused business leader',
        context: 'John advises at Brett’s company, Fandemic',
        linkedin: 'https://www.linkedin.com/in/bpollan/',
        year: '2026',
      },
      {
        quote:
          'JP taught me crucial team skills like how to create JIRA tickets with a clear done state and how to write clear Git commit messages. He also opened my eyes to various technologies to avoid reinventing the wheel.',
        author: 'Kevin Wang',
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
