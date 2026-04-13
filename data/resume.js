export default {
  personalInfo: {
    name: "John P. McGlone",
    title: "Seasoned Software Engineer",
    location: "Roanoke, VA",
    phone: "(631) 943-6889",
    email: "jp@jpmcglone.com",
    image: "/images/johnmcglone.jpg",
    bio: `I'm a seasoned software engineer with over 16 years of experience building products, APIs, and SDKs that need to feel polished, reliable, and thoughtfully made. I've worked with and led development at companies like <a href="https://rumble.studio" target="_blank" rel="noopener noreferrer">Rumble</a>, <a href="https://www.docusign.com" target="_blank" rel="noopener noreferrer">DocuSign</a>, and <a href="https://imgur.com" target="_blank" rel="noopener noreferrer">Imgur</a>, contributing to apps used by millions of people. While I work across the stack, my strongest focus is iOS, where I care deeply about product quality, maintainable architecture, smooth user experience, and the details that separate good software from great software.

I bring more than implementation. I help teams make better technical decisions, improve engineering workflows, mentor developers, and raise the standard for craftsmanship across a codebase. I care about shipping quickly, but never at the expense of quality. I use <a href="https://cursor.com" target="_blank" rel="noopener noreferrer">Cursor</a> and <a href="https://claude.ai" target="_blank" rel="noopener noreferrer">Claude</a> heavily in my workflow and move very fast without cutting corners. In my own time, I'm building <a href="https://menofhunger.com" target="_blank" rel="noopener noreferrer">Men of Hunger</a>, a social media platform just for men.`
  },
  objective: "I want to help build exceptional products with teams that value ownership, craftsmanship, and high engineering standards. I'm especially motivated by roles where I can shape technical direction, elevate product quality, and deliver software that feels truly well made.",
  technicalSkills: [
    {
      category: "AI-Assisted Development",
      skills: [
        { name: "Cursor", featured: true },
        { name: "Claude", featured: true },
        { name: "ChatGPT", featured: true }
      ]
    },
    {
      category: "iOS Tooling",
      skills: [
        { name: "SwiftLint", featured: true },
        { name: "SwiftFormat", featured: true },
        { name: "Periphery", featured: true }
      ]
    },
    {
      category: "CI/CD",
      skills: [
        { name: "CircleCI", featured: true },
        { name: "Fastlane", featured: true },
        { name: "GitHub Actions" },
        { name: "Travis CI" },
        { name: "Jenkins" },
        { name: "Azure DevOps" }
      ]
    },
    {
      category: "Frameworks",
      skills: [
        { name: "Nuxt.js", featured: true },
        { name: "Vue.js", featured: true },
        { name: "SwiftUI", featured: true },
        { name: "UIKit", featured: true },
        { name: "MVI Architecture", featured: true },
        { name: "Combine" },
        { name: "SnapKit" },
        { name: "Lottie" },
        { name: "FLAnimatedImage" },
        { name: "LiveKit" },
        { name: "Apollo (GraphQL)" }
      ]
    },
    {
      category: "Languages",
      skills: [
        { name: "Swift", featured: true },
        { name: "Objective-C", featured: true },
        { name: "JavaScript", featured: true },
        { name: "TypeScript" },
        { name: "Ruby" },
        { name: "PHP" },
        { name: "Java" }
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
      category: "Issue Tracking / Wiki",
      skills: [
        { name: "JIRA", featured: true },
        { name: "Linear", featured: true },
        { name: "GitHub", featured: true },
        { name: "Notion" },
        { name: "GitLab" },
        { name: "Bitbucket" },
        { name: "Confluence" },
        { name: "Pivotal Tracker" },
        { name: "Phabricator" }
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
      category: "Networking",
      skills: [
        { name: "Alamofire", featured: true },
        { name: "AFNetworking" },
        { name: "URLSession" }
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
      category: "Databases",
      skills: [
        { name: "PostgreSQL", featured: true },
        { name: "Realm" },
        { name: "MySQL" },
        { name: "SQLite" },
        { name: "MongoDB" }
      ]
    },
    {
      category: "Miscellaneous",
      skills: [
        { name: "API Design", featured: true },
        { name: "SDK Development", featured: true },
        { name: "Trunk-Based Development", featured: true },
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
    },
  ],
  "experience": [
    {
      "company": "Rumble",
      "logo": "/images/logos/rumble.png",
      "url": "https://rumble.com",
      "title": "Lead iOS Developer (Rumble Studio)",
      "period": "2023 - Present",
      "isRemote": true,
      "isCurrentRole": true,
      "responsibilities": [
        "Lead iOS development for Rumble Studio, delivering the app experience across iPhone, iPad, and Vision Pro",
        "Integrated LiveKit to enable studio-quality conference calls and multi-platform streaming with precise media synchronization",
        { "text": "Contribute to the core Rumble video app and support frontend work on Rumble's Advertising Center (RAC)", "highlighted": false }
      ]
    },
    {
      "company": "Callin",
      "logo": "/images/logos/callin.png",
      "url": "https://callin.com",
      "title": "Lead iOS Developer",
      "period": "2022 - 2023",
      "isRemote": true,
      "responsibilities": [
        "Developed a social audio and video platform from the ground up, scaling to thousands of users and facilitating a successful acquisition",
        "Implemented ultra-low latency audio streaming using Agora.io, ensuring <100ms delay across a global user base",
        "Built an advanced audio-transcript synchronization system with custom scrubbing and playback controls",
        { "text": "Designed a state management system to handle complex real-time user interactions efficiently", "highlighted": false }
      ]
    },
    {
      "company": "Epihealthy",
      "logo": "/images/logos/epihealthy.png",
      "title": "Lead iOS Developer",
      "period": "2022 - 2022",
      "isContract": true,
      "isRemote": true,
      "responsibilities": [
        "Developed a real-time seizure detection app using CoreBluetooth for continuous health monitoring",
        "Engineered a robust background processing system to ensure 24/7 health data collection and processing",
        { "text": "Implemented an intelligent alert system with customizable thresholds and emergency contact integration", "highlighted": false },
        { "text": "Designed a fault-tolerant data sync mechanism to prevent critical health data loss during connectivity issues", "highlighted": false }
      ]
    },
    {
      "company": "Rite Aid",
      "logo": "/images/logos/rite-aid.png",
      "url": "https://www.riteaid.com",
      "title": "Senior Product Mobile Specialist",
      "period": "2021 - 2021",
      "isContract": true,
      "isRemote": true,
      "responsibilities": [
        "Revamped mobile development workflow by implementing modern CI/CD practices across platforms",
        "Reduced deployment times by 40% through Azure DevOps optimizations and parallel build processes",
        { "text": "Designed a modular white-label solution to enable rapid customization of pharmacy applications", "highlighted": false },
        { "text": "Provided mentorship to distributed team leads on git workflows, code reviews, and technical documentation", "highlighted": false }
      ]
    },
    {
      "company": "Supersapiens",
      "logo": "/images/logos/supersapiens.png",
      "url": "https://www.supersapiens.com",
      "title": "iOS Engineer",
      "period": "2020 - 2021",
      "isContract": true,
      "isRemote": true,
      "responsibilities": [
        "Developed high-performance SwiftUI charts rendering real-time glucose data with smooth 60fps animations",
        "Implemented a reliable BLE connection handler with automatic reconnection and background updates",
        "Led the migration from RxSwift to Combine, improving code maintainability and reducing compile times",
        { "text": "Enhanced error handling and retry logic to ensure seamless data collection", "highlighted": false }
      ]
    },
    {
      "company": "Walmart Labs",
      "logo": "/images/logos/walmart.png",
      "url": "https://www.walmart.com",
      "title": "Senior iOS Developer",
      "period": "2020 - 2020",
      "isContract": true,
      "isRemote": true,
      "responsibilities": [
        "Contributed to the development of Walmart's newest app, leveraging UIKit and SwiftUI to replace the legacy system"
      ]
    },
    {
      "company": "Airside Mobile",
      "logo": "/images/logos/airside.png",
      "title": "Senior iOS Developer",
      "period": "2019 - 2020",
      "responsibilities": [
        "Developed a SwiftUI-based app using MVVM and dependency injection for improved testability",
        "Optimized CI/CD pipeline in CircleCI, reducing build times from 45 to 15 minutes",
        { "text": "Designed a thread-safe logging system leveraging Combine for precise debugging across async operations", "highlighted": false },
        "Established and documented a comprehensive Swift style guide adopted across multiple teams"
      ]
    },
    {
      "company": "AD:60",
      "logo": "/images/logos/ad60.png",
      "title": "Lead iOS Developer",
      "period": "2019 - 2019",
      "responsibilities": [
        "Developed a financial education game featuring complex animations and state management using UIKit, CoreAnimation, and Lottie",
        "Architected a seamless migration from XMPP to Matrix.org for chat functionality, improving reliability and scalability",
        { "text": "Automated JIRA workflows to streamline sprint planning and task management", "highlighted": false },
        { "text": "Maintained a perfect track record of on-time delivery across multiple client projects", "highlighted": false }
      ]
    },
    {
      "company": "Eligible",
      "logo": "/images/logos/eligible.png",
      "title": "Lead iOS Developer",
      "period": "2017 - 2019",
      "isRemote": true,
      "responsibilities": [
        "Developed a healthcare eligibility SDK processing millions of checks with 99.9% uptime",
        "Led technical integration calls, assisting major healthcare providers in adopting our SDK",
        { "text": "Designed a mock data system that reduced QA cycles from days to hours", "highlighted": false },
        { "text": "Built a modular architecture enabling clients to customize the UI while maintaining core functionality", "highlighted": false }
      ]
    },
    {
      "company": "Layer",
      "logo": "/images/logos/layer.png",
      "title": "Senior iOS Developer",
      "period": "2016 - 2017",
      "responsibilities": [
        "Refactored messaging SDK architecture, increasing developer adoption by 35%",
        "Scaled the SDK to handle millions of daily messages across major applications",
        { "text": "Developed comprehensive SDK examples, reducing integration support tickets by 40%", "highlighted": false },
        { "text": "Designed a flexible persistence layer supporting multiple database backends", "highlighted": false }
      ]
    },
    {
      "company": "Imgur",
      "logo": "/images/logos/imgur.png",
      "url": "https://imgur.com",
      "title": "Senior iOS Developer",
      "period": "2015 - 2015",
      "responsibilities": [
        "Engineered a high-performance UICollectionView-based grid supporting thousands of images with smooth scrolling",
        "Developed Hermes, an in-app notification framework that reduced crash rates from 2% to 0.2%",
        { "text": "Implemented advanced analytics and crash reporting, achieving 99.9% app stability", "highlighted": false },
        { "text": "Built reusable UI components to accelerate feature development across teams", "highlighted": false }
      ]
    },
    {
      "company": "DocuSign",
      "logo": "/images/logos/docusign.png",
      "url": "https://www.docusign.com",
      "title": "iOS Developer",
      "period": "2013 - 2014",
      "responsibilities": [
        "Implemented StoreKit-based in-app purchases, increasing subscription revenue by 25%",
        "Optimized app size by 40% through a dynamic content loading system",
        { "text": "Built a modular styling framework to standardize UI development across teams", "highlighted": false },
        { "text": "Designed an intelligent caching system to enhance app performance and offline access", "highlighted": false }
      ]
    },
    {
      "company": "Workday",
      "logo": "/images/logos/workday.png",
      "url": "https://www.workday.com",
      "title": "iOS Developer",
      "period": "2011 - 2013",
      "responsibilities": [
        "Won a company-wide hackathon with an innovative drag-and-drop goal management system",
        "Implemented a secure SSO solution adhering to enterprise security requirements",
        { "text": "Developed a custom localization system to support server-side locale management", "highlighted": false },
        { "text": "Created a responsive grid system for complex enterprise data visualization", "highlighted": false }
      ]
    }
  ],
  education: {
    degree: "A.S. in Computer Science",
    school: "Nassau Community College",
    schoolUrl: "https://www.ncc.edu/",
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
      name: "Men of Hunger",
      logo: "/images/logos/men-of-hunger.png",
      description: "An independent project I build in my own time focused on creating something meaningful and useful.",
      status: "Early Access",
      technologies: ["Independent", "Product", "Web"],
      url: "https://menofhunger.com",
      featured: true
    },
    {
      name: "Fandemic",
      logo: "/images/logos/fandemic.png",
      description: "Advise the team behind Fandemic on product and engineering decisions as an ongoing side engagement.",
      status: "Advising",
      technologies: ["Product", "Engineering", "Advisory"],
      url: "https://fandemicapp.com",
      featured: true
    }
  ],
  recommendations: {
    url: "https://www.linkedin.com/in/john-p-mcglone-18513014/details/recommendations/?detailScreenTabIndex=0",
    items: [
      {
        quote: "I highly recommend John as a very senior engineer. John provided exceptional technical guidance and strategic insights that significantly strengthened our project outcomes. His deep expertise, clear communication, and practical problem-solving approach made him an invaluable asset to our team. I would gladly work with John again on any future engineering initiatives.",
        author: "Brett Pollan",
        image: "/images/avatars/brett-pollan.jpeg",
        title: "Results-oriented and solutions focused business leader",
        context: "John advises for Brett's company",
        linkedin: "https://www.linkedin.com/in/bpollan/",
        year: "2026"
      },
      {
        quote: "JP taught me crucial team skills like how to create JIRA tickets with a clear done state and how to write clear Git commit messages. He also opened my eyes to various technologies to avoid reinventing the wheel.",
        author: "Kevin Wang",
        image: "/images/avatars/kevin-wang.jpeg",
        title: "Senior Engineer",
        company: "Clerk",
        context: "Worked with John at Eligible",
        linkedin: "https://www.linkedin.com/in/thekevinwang/",
        year: "2019"
      },
      {
        quote: "He always puts in the extra hours necessary, and will go above and beyond to find the best way to solve problems, for both short and long term answers. John is an asset to any team that is lucky enough to have him.",
        author: "Aubrey Hadley",
        image: "/images/avatars/aubrey-hadley.jpeg",
        title: "Lead Product Designer",
        context: "Worked with John at Workday",
        linkedin: "https://www.linkedin.com/in/aubreyhadley/",
        year: "2014"
      },
      {
        quote: "Along with his incredible technical abilities, I also learned a great deal from JP on how to interact with team members in difficult situations and how to calmly tackle and discuss problems within a project. He was hard working, sincere and very thorough in all his duties.",
        author: "Mili Shrivastava",
        image: "/images/avatars/mili-shrivastava.jpeg",
        title: "Head of QA/QE & Release",
        context: "Worked with John at Workday",
        linkedin: "https://www.linkedin.com/in/milishrivastava/",
        year: "2013"
      }
    ]
  },
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
    yearsExperience: 16
  }
} 