export default {
  personalInfo: {
    name: "John P. McGlone",
    title: "Senior Software Engineer",
    location: "Roanoke, VA",
    phone: "(631) 943-6889",
    email: "jp@jpmcglone.com",
    image: "/images/johnmcglone.jpg",
    bio: "I build great iOS apps and help teams work better together. With over 15 years of experience, I've led mobile development at companies like Rumble, DocuSign, and Imgur, where my work reached millions of users. I'm good at solving complex problems, teaching other developers, and turning ideas into reliable products. While I specialize in iOS development, I also work well across the full tech stack and enjoy helping teams set up good development practices."
  },
  objective: "To build great products and help engineering teams work more effectively, while maintaining high standards for code quality and user experience.",
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
      period: "May 2023 - Present",
      responsibilities: [
        "Leading iOS development for Rumble's social media platform",
        "Building features using Swift and UIKit that help users find and watch videos more easily",
        "Implementing complex UI components with SwiftUI, such as synchronized transcripts"
      ]
    },
    {
      company: "JP McGlone LLC",
      title: "Owner / Engineering Lead",
      period: "Nov 2024 - Present",
      responsibilities: [
        "Building a church directory app using Nuxt.js and modern iOS development practices",
        "Managing overseas developers to build features quickly and efficiently",
        "Making key technical decisions about architecture and tech stack"
      ]
    },
    {
      company: "Callin",
      title: "Lead iOS Developer",
      period: "Jan 2022 - May 2023",
      responsibilities: [
        "Built and launched a social audio app using Swift and UIKit",
        "Added features for high-quality audio streaming using LiveKit and real-time communication",
        "Helped grow the app from idea to thousands of active users"
      ]
    },
    {
      company: "Epihealthy",
      title: "Senior iOS Developer",
      period: "2022",
      responsibilities: [
        "Built an iOS app that helps detect potential seizures using CoreBluetooth and HealthKit",
        "Connected the app to a health ring to read heart rate and oxygen data in real-time",
        "Created a reliable alert system using background processing and push notifications"
      ]
    },
    {
      company: "Rite Aid",
      title: "Senior Product Mobile Specialist",
      period: "2021",
      responsibilities: [
        "Led mobile development for iOS and Android platforms",
        "Set up CI/CD pipelines with Azure DevOps and improved git workflow practices",
        "Trained team leads to manage onshore and offshore development teams",
        "Built white-labeled features that work across multiple pharmacy apps"
      ]
    },
    {
      company: "Supersapiens",
      title: "iOS Engineer",
      period: "2020 - 2021",
      responsibilities: [
        "Created custom, animated glucose monitoring charts using SwiftUI",
        "Built Bluetooth integration for glucose devices using Combine and CoreBluetooth",
        "Worked with teams across three countries to deliver features on time"
      ]
    },
    {
      company: "Airside Mobile",
      title: "Senior iOS Developer",
      period: "2019 - 2020",
      responsibilities: [
        "Built a new app using SwiftUI and MVVM architecture that was easier to maintain",
        "Reduced CI pipeline times by 40% by migrating from Jenkins to CircleCI",
        "Created a multi-threaded logging system using Combine for better debugging",
        "Set up clear coding standards that helped the team work faster"
      ]
    },
    {
      company: "AD:60",
      title: "Lead iOS Developer",
      period: "2019",
      responsibilities: [
        "Delivered a financial education game using SpriteKit ahead of schedule",
        "Improved app stability by migrating from XMPP to Matrix.org for chat",
        "Reduced development cycle time by 30% through JIRA workflow improvements",
        "Maintained 98% client satisfaction across multiple projects"
      ]
    },
    {
      company: "Eligible",
      title: "Lead iOS Developer",
      period: "2017 - 2019",
      responsibilities: [
        "Built an iOS SDK that processed over 1M healthcare eligibility checks",
        "Improved team productivity by 40% through better development processes",
        "Created a prefill packages system that reduced testing time by 60%",
        "Provided technical guidance during client onboarding"
      ]
    },
    {
      company: "Layer",
      title: "Senior iOS Developer",
      period: "2016 - 2017",
      responsibilities: [
        "Improved our messaging SDK's architecture to increase adoption by 35%",
        "Reduced support tickets by 40% with better documentation and examples",
        "Helped major apps integrate Layer messaging, reaching millions of users"
      ]
    },
    {
      company: "Imgur",
      title: "Senior iOS Developer",
      period: "2015",
      responsibilities: [
        "Built Grid View using UICollectionView that increased user engagement by 45%",
        "Created Hermes notification library that reduced crashes by 90%",
        "Improved app stability to 99.9% through comprehensive analytics",
        "Built a reusable UI component system that sped up development"
      ]
    },
    {
      company: "DocuSign",
      title: "iOS Developer",
      period: "2013 - 2014",
      responsibilities: [
        "Added subscription-based in-app purchases that increased revenue by 25%",
        "Reduced app size by 40% using dynamic remote page loading",
        "Built a CSS-like styling system that made UI development faster"
      ]
    },
    {
      company: "Workday",
      title: "iOS Developer",
      period: "2011 - 2013",
      responsibilities: [
        "Achieved 100% accessibility compliance through custom localization",
        "Built dynamic grid views for better data visualization",
        "Implemented enterprise-grade SSO solution",
        "Won company hackathon with innovative goal-sharing feature for iPad"
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
  testimonials: [
    {
      quote: "JP is an exceptional engineer who consistently delivers high-quality solutions.",
      author: "John Doe",
      title: "CTO at Previous Company",
      company: "Tech Corp",
      image: "/images/testimonials/john-doe.jpg"
    }
  ],
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