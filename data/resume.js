export default {
  personalInfo: {
    name: "John P. McGlone",
    title: "Senior Software Engineer",
    location: "Roanoke, VA",
    phone: "(631) 943-6889",
    email: "jp@jpmcglone.com",
    image: "/images/johnmcglone.jpg",
    bio: "I develop and build high-quality iOS apps and help teams improve how they collaborate and deliver software. With 15+ years of experience, I've had the privelege to build and lead at companies like Rumble, DocuSign, and Imgur, where my apps have reached millions of users. I excel at solving complex technical challenges, mentoring developers, and transforming ideas into scalable, reliable products. While my expertise is in iOS development, I'm comfortable across the full tech stack and enjoy establishing strong development practices that help teams ship better software, faster."
  },
  objective: "To build exceptional products and improve engineering team efficiency, all while upholding high standards across both code quality and user experience.",
  technicalSkills: [
    {
      category: "Languages",
      skills: [
        { name: "Swift", featured: true },
        { name: "Objective-C", featured: true },
        { name: "JavaScript" },
        { name: "TypeScript" },
        { name: "Ruby" },
        { name: "PHP" },
        { name: "Java" }
      ]
    },
    {
      category: "Frameworks",
      skills: [
        { name: "SwiftUI", featured: true },
        { name: "UIKit", featured: true },
        { name: "Nuxt.js", featured: true },
        { name: "SnapKit" },
        { name: "Lottie" },
        { name: "Combine" },
        { name: "FLAnimatedImage" },
        { name: "LiveKit" },
        { name: "Apollo (GraphQL)" }
      ]
    },
    {
      category: "Databases",
      skills: [
        { name: "PostgreSQL" },
        { name: "Realm" },
        { name: "MySQL" },
        { name: "SQLite" },
        { name: "MongoDB" }
      ]
    },
    {
      category: "Dependency Managers",
      skills: [
        { name: "Swift Package Manager", featured: true },
        { name: "Cocoapods", featured: true },
        { name: "Carthage" },
        { name: "Bundler" },
        { name: "npm" }
      ]
    },
    {
      category: "CI/CD",
      skills: [
        { name: "CircleCI" },
        { name: "Fastlane", featured: true },
        { name: "GitHub Actions" },
        { name: "Travis CI" },
        { name: "Jenkins" },
        { name: "Azure DevOps" }
      ]
    },
    {
      category: "Monitoring",
      skills: [
        { name: "Sentry" },
        { name: "Crashlytics" },
        { name: "HockeyApp" }
      ]
    },
    {
      category: "Analytics",
      skills: [
        { name: "Amplitude" },
        { name: "Mixpanel" },
        { name: "Firebase" },
        { name: "Facebook Analytics" }
      ]
    },
    {
      category: "Development Tools",
      skills: [
        { name: "Xcode", featured: true },
        { name: "VS Code" },
        { name: "Vim" },
        { name: "JetBrains tools" },
        { name: "AppCode" }
      ]
    },
    {
      category: "Networking",
      skills: [
        { name: "Alamofire", featured: true },
        { name: "AFNetworking" },
        { name: "URLSession" }
      ]
    },
    {
      category: "Issue Tracking / Wiki",
      skills: [
        { name: "Linear" },
        { name: "JIRA" },
        { name: "GitHub" },
        { name: "Notion" },
        { name: "GitLab" },
        { name: "Bitbucket" },
        { name: "Confluence" },
        { name: "Pivotal Tracker" },
        { name: "Phabricator" }
      ]
    },
    {
      category: "Miscellaneous",
      skills: [
        { name: "Next.js" },
        { name: "React" },
        { name: "GraphQL" },
        { name: "JSON" },
        { name: "YAML" },
        { name: "dotenv" },
        { name: "xcconfig" },
        { name: "Regex" },
        { name: "XML" }
      ]
    }
  ],
  experience: [
    {
      company: "Rumble",
      title: "Lead iOS Developer",
      period: "2023 - Present",
      isRemote: true,
      isCurrentRole: true,
      responsibilities: [
        "Spearheaded development of Rumble Studio iOS app from ground up, delivering a polished experience across iPhone, iPad, and Vision Pro platforms",
        "Mastered LiveKit integration to power studio-quality conference calls and multi-platform streaming, handling complex media synchronization",
        "Contributed to Rumble's Advertising Center (RAC), expanding my expertise to Vue.js, architecting key components of the RAC frontend"
      ]
    },
    // {
    //   company: "JP McGlone LLC",
    //   title: "Owner / Engineering Lead",
    //   period: "2024 - Present",
    //   isRemote: true,
    //   responsibilities: [
    //     "Building a church directory platform using Nuxt.js",
    //     "Built and mentored offshore team through clear technical specifications and automated quality checks",
    //     "Implemented a development workflow combining GitHub Actions, automated testing, and streamlined code review process"
    //   ]
    // },
    {
      company: "Callin",
      title: "Lead iOS Developer",
      period: "2022 - 2023",
      isRemote: true,
      responsibilities: [
        "Built social audio and video platform from scratch that scaled to thousands of users and led to successful acquisition",
        "Implemented low-latency audio streaming using Agora.io, achieving <100ms delay across global user base",
        "Engineered precise audio-transcript synchronization system with custom scrubbing and playback controls",
        "Designed robust state management system handling complex real-time user interactions"
      ]
    },
    {
      company: "Epihealthy",
      title: "Lead iOS Developer",
      period: "2022 - 2022",
      isContract: true,
      isRemote: true,
      responsibilities: [
        "Built life-saving seizure detection app using CoreBluetooth for real-time health monitoring",
        "Engineered reliable background processing system for 24/7 health data collection",
        "Implemented intelligent alert system with customizable thresholds and emergency contact integration",
        "Designed fault-tolerant data sync ensuring no critical health data loss during connectivity issues"
      ]
    },
    {
      company: "Rite Aid",
      title: "Senior Product Mobile Specialist",
      period: "2021 - 2021",
      isContract: true,
      isRemote: true,
      responsibilities: [
        "Revolutionized mobile development workflow by implementing modern CI/CD practices across platforms",
        "Slashed deployment times 40% through Azure DevOps optimization and parallel build processes",
        "Architected modular white-label solution enabling rapid pharmacy app customization",
        "Mentored distributed team leads in git flow, code review practices, and technical documentation"
      ]
    },
    {
      company: "Supersapiens",
      title: "iOS Engineer",
      period: "2020 - 2021",
      isContract: true,
      isRemote: true,
      responsibilities: [
        "Built high-performance SwiftUI charts rendering real-time glucose data with smooth 60fps animations",
        "Engineered reliable BLE connection handling with automatic reconnection and background updates",
        "Led successful migration from RxSwift to Combine, improving code maintainability and compile times",
        "Implemented robust error handling and retry logic ensuring reliable data collection"
      ]
    },
    {
      company: "Walmart Labs",
      title: "Senior iOS Developer",
      period: "2020 - 2020",
      isContract: true,
      isRemote: true,
      responsibilities: [
        "Contributed to the development of Walmart's new app, built with a combination of UIKit and SwiftUI, replacing the legacy version"
      ]
    },
    {
      company: "Airside Mobile",
      title: "Senior iOS Developer",
      period: "2019 - 2020",
      responsibilities: [
        "Built modern SwiftUI app using MVVM and dependency injection for maximum testability",
        "Created multi-environment CI pipeline in CircleCI, slashing build times from 45 to 15 minutes",
        "Developed thread-safe logging system with Combine, enabling precise debugging across async operations",
        "Established comprehensive Swift style guide adopted by multiple development teams"
      ]
    },
    {
      company: "AD:60",
      title: "Lead iOS Developer",
      period: "2019 - 2019",
      responsibilities: [
        "Delivered polished financial education game with complex animations and state management built in a custom engine written in UIKit using a combination of CoreAnimation and Lottie files",
        "Architected Matrix.org chat integration replacing legacy XMPP system, improving reliability and features",
        "Automated JIRA workflows reducing sprint management overhead",
        "Contributed to our shared libraries",
        "Maintained perfect delivery record across multiple client projects"
      ]
    },
    {
      company: "Eligible",
      title: "Lead iOS Developer",
      period: "2017 - 2019",
      isRemote: true,
      responsibilities: [
        "Built healthcare eligibility SDK processing millions of checks with 99.9% uptime",
        "Designed mock data system reducing QA cycles from days to hours",
        "Created modular architecture allowing clients to customize UI while maintaining core functionality",
        "Led technical integration calls helping major healthcare providers adopt our SDK"
      ]
    },
    {
      company: "Layer",
      title: "Senior iOS Developer",
      period: "2016 - 2017",
      responsibilities: [
        "Improved messaging SDK architecture driving 35% increase in developer adoption",
        "Built comprehensive SDK examples reducing integration support tickets by 40%",
        "Helped scale SDK to handle millions of daily messages across major apps",
        "Designed flexible persistence layer supporting multiple database backends"
      ]
    },
    {
      company: "Imgur",
      title: "Senior iOS Developer",
      period: "2015 - 2015",
      responsibilities: [
        "Built high-performance UICollectionView-based grid handling thousands of images with smooth scrolling",
        "Created Hermes notification framework reducing crash rate from 2% to 0.2%",
        "Implemented comprehensive analytics and crash reporting achieving 99.9% stability",
        "Engineered reusable UI components accelerating feature development across teams"
      ]
    },
    {
      company: "DocuSign",
      title: "iOS Developer",
      period: "2013 - 2014",
      responsibilities: [
        "Implemented StoreKit integration boosting subscription revenue by 25%",
        "Created dynamic content loading system reducing app size by 40%",
        "Built iOS styling framework enabling rapid UI development across teams",
        "Designed intelligent caching system optimizing app performance and offline access"
      ]
    },
    {
      company: "Workday",
      title: "iOS Developer",
      period: "2011 - 2013",
      responsibilities: [
        "Built custom localization system supporting server-side locale management",
        "Created responsive grid system handling complex enterprise data visualization",
        "Implemented secure SSO solution meeting strict enterprise requirements",
        "Won hackathon building innovative drag-and-drop goal management system"
      ]
    }
  ],
  education: {
    degree: "A.S. in Computer Science",
    school: "Nassau Community College",
    location: "Garden City, NY",
    period: "2006 - 2009",
    gpa: "3.8"
  },
  links: [
    {
      name: "GitHub",
      url: "https://www.github.com/jpmcglone"
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/john-p-mcglone-18513014"
    }
  ],
  languages: [
    {
      name: "English",
      proficiency: "Native",
      featured: true
    },
    {
      name: "Spanish",
      proficiency: "Conversational",
      featured: false
    }
  ],
  certifications: [
    {
      name: "AWS Certified Developer",
      issuer: "Amazon Web Services",
      date: "2023",
      url: "https://aws.amazon.com/certification/"
    }
  ],
  projects: [
    {
      name: "Church Directory App",
      description: "A modern church directory application built with Nuxt.js and iOS native components.",
      status: "In Development",
      technologies: ["Swift", "Nuxt.js", "Firebase"],
      url: "https://churchapp.com",
      featured: true
    }
  ],
  // testimonials: [
  //   {
  //     quote: "JP is an exceptional engineer who consistently delivers high-quality solutions.",
  //     author: "John Doe",
  //     title: "CTO at Previous Company",
  //     company: "Tech Corp",
  //     image: "/images/testimonials/john-doe.jpg"
  //   }
  // ],
  publications: [
    {
      title: "Building Scalable iOS Applications",
      publisher: "Medium",
      date: "2023",
      url: "https://medium.com/..."
    }
  ],
  speakingEngagements: [
    {
      title: "SwiftUI Best Practices",
      event: "iOS Dev Conference 2023",
      date: "Oct 2023",
      location: "San Francisco, CA"
    }
  ],
  openSourceContributions: [
    {
      project: "Vue.js",
      description: "Implemented new feature X",
      url: "https://github.com/vuejs/core/pulls/..."
    }
  ],
  awards: [
    {
      title: "Best Mobile App",
      organization: "App Awards 2023",
      date: "2023",
      description: "Won for innovative use of SwiftUI"
    }
  ],
  metrics: {
    yearsExperience: 15,
    employersSatisfied: 20
  }
} 