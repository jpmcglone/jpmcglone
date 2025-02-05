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
      responsibilities: [
        "Oversaw mobile technology for iOS and Android platforms.",
        "Trained team leads to manage onshore and offshore engineering teams.",
        "Set up CI with Azure DevOps, advocated for CircleCI for workflow improvement.",
        "Enhanced git policies and Azure DevOps Work Items to boost team efficiency.",
        "Led contracted team to build white-labeled features for multiple apps beyond Rite Aid."
      ]
    },
    {
      company: "Walmart Labs",
      title: "iOS Engineer",
      period: "2020",
      location: "Remote",
      responsibilities: [
        "Contributed to development of Walmart's new app."
      ]
    },
    {
      company: "Supersapiens",
      title: "iOS Engineer",
      period: "2020 - 2021",
      location: "Remote",
      responsibilities: [
        "Built custom, animated glucose monitoring charts in SwiftUI.",
        "Integrated Bluetooth data from glucose devices, refactored services using Combine.",
        "Collaborated with remote teams across three countries."
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