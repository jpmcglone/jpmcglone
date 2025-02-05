export default {
  personalInfo: {
    name: "John P. McGlone",
    title: "Senior Software Engineer",
    location: "Roanoke, VA",
    phone: "(631) 943-6889",
    email: "jp@jpmcglone.com",
    image: "/images/johnmcglone.jpg",
    bio: "Senior Software Engineer with over 15 years of experience specializing in iOS and full-stack development. Passionate about building scalable applications and leading engineering teams to deliver high-quality software solutions."
  },
  objective: "To inspire and lead engineering teams to create high-quality, efficient products while implementing tools and processes that enhance team performance without compromising on quality.",
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
      isCurrentRole: true,
      isRemote: true,
      logo: "/images/companies/rumble-logo.png",
      responsibilities: [
        "Leading iOS development for Rumble's social media platform",
        "Implementing complex UI components, such as synchronized transcripts."
      ]
    },
    {
      company: "JP McGlone LLC",
      title: "Owner / Engineering Lead",
      period: "Nov 2024 - Present",
      isCurrentRole: true,
      isRemote: true,
      logo: "/images/companies/jpm-logo.png",
      responsibilities: [
        "Developing a competitive church directory app using Nuxt.js.",
        "Managing overseas contractors to streamline MVP development."
      ]
    },
    {
      company: "Callin",
      title: "Lead iOS Developer",
      period: "Jan 2022 - May 2023",
      isCurrentRole: false,
      isRemote: true,
      logo: "/images/companies/callin-logo.png",
      responsibilities: [
        "Led development of social audio app using Swift and UIKit",
        "Implemented complex audio features and real-time communication"
      ]
    },
    {
      company: "Epihealthy",
      title: "Senior iOS Developer",
      period: "2022",
      location: "Remote",
      isContract: true,
      isRemote: true,
      responsibilities: [
        "Developed MVP for Epihealthy iOS app.",
        "Integrated Bluetooth connection to health ring, reading heart rate and oxygen data.",
        "Implemented real-time alerts for potential seizure detection."
      ]
    },
    {
      company: "Rite Aid",
      title: "Senior Product Mobile Specialist (Mobile Tech Lead)",
      period: "2021",
      location: "Remote",
      isContract: true,
      isRemote: true,
      responsibilities: [
        "Oversaw mobile technology for iOS and Android platforms.",
        "Trained team leads to manage onshore and offshore engineering teams.",
        "Set up CI with Azure DevOps, advocated for CircleCI for workflow improvement.",
        "Enhanced git policies and Azure DevOps Work Items to boost team efficiency.",
        "Led contracted team to build white-labeled features for multiple apps beyond Rite Aid."
      ]
    },
    {
      company: "Supersapiens",
      title: "iOS Engineer",
      period: "2020 - 2021",
      location: "Remote",
      isContract: true,
      isRemote: true,
      responsibilities: [
        "Built custom, animated glucose monitoring charts in SwiftUI.",
        "Integrated Bluetooth data from glucose devices, refactored services using Combine.",
        "Collaborated with remote teams across three countries."
      ]
    },
    {
      company: "TripActions",
      title: "Senior iOS Developer",
      period: "2021 - 2022",
      location: "Remote",
      logo: "/images/companies/tripactions-logo.png",
      responsibilities: [
        "Enhanced travel and expense management features in TripActions' iOS app",
        "Improved app performance and user experience for business travelers"
      ],
      isRemote: true
    },
    {
      company: "Walmart Labs",
      title: "iOS Engineer",
      period: "2020",
      location: "Remote",
      isContract: true,
      isRemote: true,
      responsibilities: [
        "Contributed to development of Walmart's new app."
      ]
    },
    {
      company: "Airside Mobile",
      title: "Senior iOS Developer",
      period: "2019 - 2020",
      location: "Raleigh, NC",
      logo: "/images/companies/airside-logo.png",
      responsibilities: [
        "Architected and delivered new SwiftUI app using MVVM pattern, improving code maintainability",
        "Reduced CI pipeline times by 40% by migrating 8 projects from Jenkins to CircleCI",
        "Developed multi-threaded logging system using Combine, enabling comprehensive system monitoring",
        "Reduced bug resolution time by 50% through implementation of structured error handling",
        "Increased team velocity by establishing clear coding standards and best practices"
      ]
    },
    {
      company: "AD:60",
      title: "Lead iOS Developer",
      period: "2019",
      location: "Chapel Hill, NC",
      logo: "/images/companies/ad60-logo.png",
      responsibilities: [
        "Successfully delivered financial literacy game for major investment firm ahead of schedule",
        "Improved app stability and performance by migrating from XMPP to matrix.org",
        "Reduced development cycle time by 30% through JIRA workflow optimization",
        "Maintained 98% client satisfaction rate across multiple project deliveries"
      ]
    },
    {
      company: "Eligible",
      title: "Lead iOS Developer",
      period: "2017 - 2019",
      location: "Brooklyn, NY",
      logo: "/images/companies/eligible-logo.png",
      responsibilities: [
        "Delivered high-performance iOS SDK that processed over 1M healthcare eligibility checks",
        "Increased team productivity by 40% through effective leadership and process improvements",
        "Reduced testing time by 60% through implementation of prefill packages system",
        "Improved client onboarding success rate by providing technical consultation during sales process"
      ]
    },
    {
      company: "Layer",
      title: "Senior iOS Developer",
      period: "2016 - 2017",
      location: "San Francisco, CA",
      logo: "/images/companies/layer-logo.png",
      responsibilities: [
        "Improved SDK adoption rate by 35% through architecture improvements",
        "Reduced customer support tickets by 40% through enhanced documentation and examples",
        "Successfully integrated Layer messaging in apps serving millions of users"
      ]
    },
    {
      company: "Bindle",
      title: "Lead iOS Developer",
      period: "2016",
      location: "San Francisco, CA",
      logo: "/images/companies/bindle-logo.png",
      responsibilities: [
        "Architected and launched two successful chat applications using MQTT protocol",
        "Reduced development time by 50% through creation of ZenText styling library",
        "Improved data sync efficiency by 70% through custom Realm integration",
        "Decreased UI development time by 40% with reusable card system"
      ]
    },
    {
      company: "Imgur",
      title: "Senior iOS Developer",
      period: "2015",
      location: "San Francisco, CA",
      logo: "/images/companies/imgur-logo.png",
      responsibilities: [
        "Increased user engagement by 45% through implementation of Grid View feature",
        "Reduced notification-related crashes by 90% with Hermes library",
        "Improved app stability to 99.9% through comprehensive analytics integration",
        "Decreased UI development time by 35% through reusable component system"
      ]
    },
    {
      company: "Clinkle",
      title: "Senior iOS Engineer",
      period: "2014",
      location: "San Francisco, CA",
      logo: "/images/companies/clinkle-logo.png",
      responsibilities: [
        "Developed multiple core libraries powering the Clinkle app architecture",
        "Created sophisticated UI components with complex animations",
        "Improved app performance through optimized rendering and animation systems"
      ],
      isRemote: true
    },
    {
      company: "DocuSign",
      title: "iOS Developer",
      period: "2013 - 2014",
      location: "San Francisco, CA",
      logo: "/images/companies/docusign-logo.png",
      responsibilities: [
        "Increased revenue by 25% through implementation of subscription-based in-app purchases",
        "Reduced app size by 40% through dynamic remote page loading system",
        "Decreased UI development time by 50% with CSS-like styling system"
      ],
      isRemote: true
    },
    {
      company: "Workday",
      title: "iOS Developer",
      period: "2011 - 2013",
      location: "Pleasanton, CA",
      logo: "/images/companies/workday-logo.png",
      responsibilities: [
        "Improved app accessibility to 100% compliance through custom localization system",
        "Increased user engagement by 30% through dynamic grid view implementation",
        "Enhanced security with enterprise-grade SSO solution",
        "Won company hackathon with innovative goal-sharing feature for iPad"
      ],
      isRemote: true
    },
    {
      company: "Northern Kentucky University",
      title: "iOS Developer",
      period: "2009 - 2011",
      location: "Highland Heights, KY",
      logo: "/images/companies/nku-logo.png",
      responsibilities: [
        "Successfully delivered 10+ iOS apps for diverse client base",
        "Increased student developer productivity by 50% through mentorship program",
        "Maintained 99.9% uptime for critical emergency services app (PulsePoint)",
        "Pioneered new interaction methods through Microsoft Kinect research"
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