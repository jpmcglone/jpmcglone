export const skillIcons: Record<string, string> = {
  // Languages
  Swift: 'logos:swift',
  'Objective-C': 'simple-icons:apple',
  JavaScript: 'logos:javascript',
  TypeScript: 'logos:typescript-icon',
  Ruby: 'logos:ruby',
  PHP: 'logos:php',
  Java: 'logos:java',

  // Architecture & Patterns
  'System Architecture': 'i-jpm-square-3-stack-3d',
  'Full-Stack Development': 'i-jpm-code-bracket-square',
  MVVM: 'i-jpm-rectangle-group',
  MVI: 'i-jpm-squares-2x2',
  'Factory (DI)': 'i-jpm-cube',

  // Testing
  XCTest: 'i-jpm-beaker',
  Quick: 'i-jpm-beaker',
  Nimble: 'i-jpm-check',

  // iOS Frameworks
  SwiftUI: 'logos:swift',
  UIKit: 'simple-icons:apple',
  'Swift 6 Concurrency': 'logos:swift',
  Combine: 'simple-icons:apple',
  SnapKit: 'i-jpm-puzzle-piece',
  Lottie: 'i-jpm-play-circle',
  'Apollo (GraphQL)': 'simple-icons:apollographql',

  // Web Frameworks
  'Nuxt.js': 'logos:nuxt-icon',
  'Vue.js': 'logos:vue',
  'Next.js': 'simple-icons:nextdotjs',
  React: 'logos:react',

  // Databases
  PostgreSQL: 'logos:postgresql',
  MongoDB: 'logos:mongodb-icon',
  MySQL: 'logos:mysql',
  SQLite: 'logos:sqlite',
  Realm: 'logos:realm',

  // Dependency Managers
  'Swift Package Manager': 'logos:swift',
  Cocoapods: 'simple-icons:cocoapods',
  Carthage: 'i-jpm-cube-transparent',
  Bundler: 'i-jpm-cube',
  npm: 'logos:npm-icon',

  // CI/CD
  CircleCI: 'simple-icons:circleci',
  Fastlane: 'logos:fastlane',
  'GitHub Actions': 'logos:github-actions',
  'Travis CI': 'logos:travis-ci',
  Jenkins: 'logos:jenkins',
  'Azure DevOps': 'simple-icons:azuredevops',

  // Monitoring & Analytics
  Sentry: 'simple-icons:sentry',
  Crashlytics: 'logos:crashlytics',
  Firebase: 'logos:firebase',
  Amplitude: 'logos:amplitude-icon',
  Mixpanel: 'simple-icons:mixpanel',

  // Development Tools
  Xcode: 'logos:xcode',
  Git: 'logos:git-icon',
  'VS Code': 'logos:visual-studio-code',
  Vim: 'logos:vim',
  'JetBrains tools': 'logos:jetbrains',
  AppCode: 'logos:jetbrains',

  // Networking
  Alamofire: 'i-jpm-signal',
  Agora: 'simple-icons:agora',
  AFNetworking: 'logos:apple',
  URLSession: 'simple-icons:apple',

  // Issue Tracking / Wiki
  Linear: 'simple-icons:linear',
  JIRA: 'logos:jira',
  GitHub: 'simple-icons:github',
  Notion: 'simple-icons:notion',
  GitLab: 'logos:gitlab',
  Bitbucket: 'logos:bitbucket',
  Confluence: 'logos:confluence',

  // Miscellaneous
  GraphQL: 'logos:graphql',
  'API Design': 'i-jpm-circle-stack',
  'SDK Development': 'i-jpm-cube',
  'Trunk-Based Development': 'i-jpm-arrow-path',
  JSON: 'simple-icons:json',
  YAML: 'simple-icons:yaml',
  dotenv: 'simple-icons:dotenv',
  xcconfig: 'simple-icons:apple',
  Regex: 'i-jpm-command-line',
  XML: 'i-jpm-code-bracket',

  // AI & Agentic Development
  'Agentic Coding': 'i-jpm-command-line',
  'MCP Server Development': 'simple-icons:modelcontextprotocol',
  'AI Workflow Design': 'i-jpm-arrow-path',
  Cursor: 'simple-icons:cursor',
  Claude: 'simple-icons:claude',
  ChatGPT: 'simple-icons:openai',
  'ChatGPT Codex': 'logos:codex',
  Astra: 'simple-icons:openai',
  'Grok Bot': 'logos:grok-icon',

  // iOS Tooling
  SwiftLint: 'i-jpm-check',
  SwiftFormat: 'i-jpm-code-bracket',
  Periphery: 'i-jpm-magnifying-glass',

  // Additional
  FLAnimatedImage: 'i-jpm-photo',
  LiveKit: 'simple-icons:livekit',
  HockeyApp: 'i-jpm-rocket-launch',
  'Facebook Analytics': 'logos:facebook',
  'Pivotal Tracker': 'i-jpm-clipboard-document-list',
  Phabricator: 'i-jpm-bug-ant',

  default: 'i-jpm-code-bracket',
}

export const skillUrls: Record<string, string> = {
  // AI-Assisted Development
  Cursor: 'https://cursor.com/',
  Claude: 'https://docs.anthropic.com/en/docs/intro-to-claude',
  ChatGPT: 'https://platform.openai.com/docs/overview',
  'ChatGPT Codex': 'https://chatgpt.com/codex',

  // Architecture & Patterns
  MVVM: 'https://developer.apple.com/documentation/swiftui/model-data',
  MVI: 'https://www.raywenderlich.com/books/combine-asynchronous-programming-with-swift',
  'Factory (DI)': 'https://github.com/hmlongco/Factory',
  'Trunk-Based Development': 'https://trunkbaseddevelopment.com/',

  // Testing
  XCTest: 'https://developer.apple.com/documentation/xctest',
  Quick: 'https://github.com/Quick/Quick',
  Nimble: 'https://github.com/Quick/Nimble',

  // iOS Tooling
  SwiftLint: 'https://realm.github.io/SwiftLint/',
  SwiftFormat: 'https://github.com/nicklockwood/SwiftFormat',
  Periphery: 'https://github.com/peripheryapp/periphery',

  // Languages
  Swift: 'https://developer.apple.com/swift/',
  'Objective-C':
    'https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/',
  JavaScript: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  TypeScript: 'https://www.typescriptlang.org/',
  Ruby: 'https://www.ruby-lang.org/',
  PHP: 'https://www.php.net/',
  Java: 'https://dev.java/',

  // iOS Frameworks
  SwiftUI: 'https://developer.apple.com/xcode/swiftui/',
  UIKit: 'https://developer.apple.com/documentation/uikit',
  'Swift 6 Concurrency':
    'https://docs.swift.org/swift-book/documentation/the-swift-programming-language/concurrency/',
  Combine: 'https://developer.apple.com/documentation/combine',
  SnapKit: 'https://snapkit.github.io/SnapKit/',
  Lottie: 'https://airbnb.io/lottie/',
  FLAnimatedImage: 'https://github.com/Flipboard/FLAnimatedImage',
  LiveKit: 'https://docs.livekit.io/home/',
  'Apollo (GraphQL)': 'https://www.apollographql.com/docs/',

  // Web Frameworks
  'Nuxt.js': 'https://nuxt.com/docs',
  'Vue.js': 'https://vuejs.org/guide/introduction.html',

  // Databases
  PostgreSQL: 'https://www.postgresql.org/docs/',
  Realm: 'https://www.mongodb.com/docs/atlas/device-sdks/sdk/swift/',
  MySQL: 'https://dev.mysql.com/doc/',
  SQLite: 'https://www.sqlite.org/',
  MongoDB: 'https://www.mongodb.com/docs/',

  // Development Tools
  Xcode: 'https://developer.apple.com/xcode/',
  Git: 'https://git-scm.com/',
  'VS Code': 'https://code.visualstudio.com/',
  Vim: 'https://www.vim.org/',
  'JetBrains tools': 'https://www.jetbrains.com/',
  AppCode: 'https://www.jetbrains.com/objc/',

  // Issue Tracking / Wiki
  Linear: 'https://developers.linear.app/docs/graphql/working-with-the-graphql-api',
  JIRA: 'https://developer.atlassian.com/cloud/jira/platform/',
  GitHub: 'https://docs.github.com/',
  Notion: 'https://developers.notion.com/',
  GitLab: 'https://docs.gitlab.com/',
  Bitbucket: 'https://developer.atlassian.com/cloud/bitbucket/',
  Confluence: 'https://developer.atlassian.com/cloud/confluence/',
  'Pivotal Tracker': 'https://www.pivotaltracker.com/help',

  // CI/CD & DevOps
  CircleCI: 'https://circleci.com/docs/',
  Fastlane: 'https://docs.fastlane.tools/',
  'GitHub Actions': 'https://docs.github.com/actions',
  'Travis CI': 'https://docs.travis-ci.com/',
  Jenkins: 'https://www.jenkins.io/',
  'Azure DevOps': 'https://learn.microsoft.com/en-us/azure/devops/?view=azure-devops',

  // Monitoring & Analytics
  Sentry: 'https://docs.sentry.io/',
  Crashlytics: 'https://firebase.google.com/docs/crashlytics',
  Amplitude: 'https://amplitude.com/docs',
  Mixpanel: 'https://docs.mixpanel.com/',
  Firebase: 'https://firebase.google.com/docs',

  // Networking
  Alamofire: 'https://alamofire.github.io/Alamofire/',
  Agora: 'https://docs.agora.io/en/',
  AFNetworking: 'https://github.com/AFNetworking/AFNetworking',
  URLSession: 'https://developer.apple.com/documentation/foundation/urlsession',

  // Dependency Managers
  'Swift Package Manager': 'https://www.swift.org/package-manager/',
  Cocoapods: 'https://guides.cocoapods.org/',
  Carthage: 'https://github.com/Carthage/Carthage',
  Bundler: 'https://bundler.io/',
  npm: 'https://docs.npmjs.com/',

  // APIs & Data / Miscellaneous
  'Next.js': 'https://nextjs.org/docs',
  React: 'https://react.dev/learn',
  GraphQL: 'https://graphql.org/learn/',
  'API Design': 'https://learn.microsoft.com/en-us/azure/architecture/best-practices/api-design',
  'SDK Development': 'https://www.stainless.com/sdk-api-best-practices',
  JSON: 'https://www.json.org/',
  YAML: 'https://yaml.org/',
  dotenv: 'https://github.com/motdotla/dotenv',
  xcconfig:
    'https://developer.apple.com/library/archive/featuredarticles/XcodeConcepts/Concept-Build_Settings.html',
  Regex: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions',
  XML: 'https://developer.mozilla.org/en-US/docs/Web/XML/XML_introduction',
}

// Keep the same product identity on featured and regular chips.
export function getSkillIcon(skill: string): string {
  return skillIcons[skill] ?? 'i-jpm-code-bracket'
}

// Official compact artwork for products without suitable bundled vector marks.
export const skillImages: Record<string, string> = {
  SwiftUI: '/images/skills/swiftui.webp',
  SnapKit: '/images/skills/snapkit.webp',
  Lottie: '/images/skills/lottie.webp',
  Quick: '/images/skills/quick.webp',
  'Factory (DI)': '/images/skills/factory.webp',
  Alamofire: '/images/skills/alamofire.webp',
  SwiftFormat: '/images/skills/swiftformat.webp',
  Periphery: '/images/skills/periphery.webp',
  Bundler: '/images/skills/bundler.webp',
  Carthage: '/images/skills/carthage.webp',
}

export function getSkillImage(skill: string): string | undefined {
  return skillImages[skill]
}

// These bundled logos contain fixed dark fills rather than currentColor.
export function isDarkSkillIcon(skill: string): boolean {
  return skill === 'ChatGPT Codex' || skill === 'Grok Bot'
}

export function getSkillUrl(skill: string): string | null {
  return skillUrls[skill] ?? null
}

export function hasSkillUrl(skill: string): boolean {
  return getSkillUrl(skill) !== null
}
