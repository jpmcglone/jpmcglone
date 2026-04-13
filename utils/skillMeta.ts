const APPLE_SKILLS = new Set(['UIKit', 'Combine', 'AFNetworking', 'URLSession', 'xcconfig'])

export function isAppleSkill(skill: string): boolean {
  return skill === 'Apple' || APPLE_SKILLS.has(skill)
}

export const skillIcons: Record<string, string> = {
  // Languages
  'Swift': 'logos:swift',
  'Objective-C': 'logos:c',
  'JavaScript': 'logos:javascript',
  'TypeScript': 'logos:typescript-icon',
  'Ruby': 'logos:ruby',
  'PHP': 'logos:php',
  'Java': 'logos:java',

  // Architecture & Patterns
  'MVVM': 'i-heroicons-rectangle-group',
  'MVI': 'i-heroicons-squares-2x2',
  'Factory (DI)': 'logos:swift',

  // Testing
  'XCTest': 'logos:swift',
  'Quick': 'logos:swift',
  'Nimble': 'logos:swift',

  // iOS Frameworks
  'SwiftUI': 'logos:swift',
  'UIKit': 'logos:apple',
  'Swift 6 Concurrency': 'logos:swift',
  'Combine': 'logos:apple',
  'SnapKit': 'i-heroicons-puzzle-piece',
  'Lottie': 'i-heroicons-play-circle',
  'Apollo (GraphQL)': 'logos:apollostack',

  // Web Frameworks
  'Nuxt.js': 'logos:nuxt-icon',
  'Vue.js': 'logos:vue',
  'Next.js': 'logos:nextjs-icon',
  'React': 'logos:react',

  // Databases
  'PostgreSQL': 'logos:postgresql',
  'MongoDB': 'logos:mongodb-icon',
  'MySQL': 'logos:mysql',
  'SQLite': 'logos:sqlite',
  'Realm': 'logos:realm',

  // Dependency Managers
  'Swift Package Manager': 'logos:swift',
  'Cocoapods': 'i-heroicons-cube',
  'Carthage': 'i-heroicons-cube-transparent',
  'Bundler': 'logos:ruby',
  'npm': 'logos:npm-icon',

  // CI/CD
  'CircleCI': 'simple-icons:circleci',
  'Fastlane': 'logos:fastlane',
  'GitHub Actions': 'logos:github-actions',
  'Travis CI': 'logos:travis-ci',
  'Jenkins': 'logos:jenkins',
  'Azure DevOps': 'logos:azure-icon',

  // Monitoring & Analytics
  'Sentry': 'simple-icons:sentry',
  'Crashlytics': 'logos:firebase',
  'Firebase': 'logos:firebase',
  'Amplitude': 'i-heroicons-chart-bar',
  'Mixpanel': 'i-heroicons-presentation-chart-line',

  // Development Tools
  'Xcode': 'logos:xcode',
  'Git': 'logos:git-icon',
  'VS Code': 'logos:visual-studio-code',
  'Vim': 'logos:vim',
  'JetBrains tools': 'logos:jetbrains',
  'AppCode': 'logos:jetbrains',

  // Networking
  'Alamofire': 'logos:swift',
  'Agora': 'i-heroicons-signal',
  'AFNetworking': 'logos:apple',
  'URLSession': 'logos:apple',

  // Issue Tracking / Wiki
  'Linear': 'i-heroicons-ticket',
  'JIRA': 'logos:jira',
  'GitHub': 'logos:github-icon',
  'Notion': 'logos:notion-icon',
  'GitLab': 'logos:gitlab',
  'Bitbucket': 'logos:bitbucket',
  'Confluence': 'logos:confluence',

  // Miscellaneous
  'GraphQL': 'logos:graphql',
  'API Design': 'i-heroicons-circle-stack',
  'SDK Development': 'i-heroicons-cube',
  'Trunk-Based Development': 'i-heroicons-arrow-path',
  'JSON': 'i-heroicons-code-bracket',
  'YAML': 'i-heroicons-document-text',
  'dotenv': 'i-heroicons-document',
  'xcconfig': 'logos:apple',
  'Regex': 'i-heroicons-command-line',
  'XML': 'i-heroicons-code-bracket',

  // AI-Assisted Development
  'Claude': 'simple-icons:anthropic',
  'ChatGPT': 'simple-icons:openai',

  // iOS Tooling
  'SwiftLint': 'logos:swift',
  'SwiftFormat': 'logos:swift',
  'Periphery': 'logos:swift',

  // Additional
  'FLAnimatedImage': 'i-heroicons-photo',
  'LiveKit': 'i-heroicons-video-camera',
  'HockeyApp': 'i-heroicons-rocket-launch',
  'Facebook Analytics': 'logos:facebook',
  'Pivotal Tracker': 'i-heroicons-clipboard-document-list',
  'Phabricator': 'i-heroicons-bug-ant',

  'default': 'i-heroicons-code-bracket',
}

export const skillUrls: Record<string, string> = {
  // AI-Assisted Development
  'Cursor': 'https://docs.cursor.com/',
  'Claude': 'https://docs.anthropic.com/en/docs/intro-to-claude',
  'ChatGPT': 'https://platform.openai.com/docs/overview',

  // Architecture & Patterns
  'MVVM': 'https://developer.apple.com/documentation/swiftui/model-data',
  'MVI': 'https://www.raywenderlich.com/books/combine-asynchronous-programming-with-swift',
  'Factory (DI)': 'https://github.com/hmlongco/Factory',
  'Trunk-Based Development': 'https://trunkbaseddevelopment.com/',

  // Testing
  'XCTest': 'https://developer.apple.com/documentation/xctest',
  'Quick': 'https://github.com/Quick/Quick',
  'Nimble': 'https://github.com/Quick/Nimble',

  // iOS Tooling
  'SwiftLint': 'https://realm.github.io/SwiftLint/',
  'SwiftFormat': 'https://github.com/nicklockwood/SwiftFormat',
  'Periphery': 'https://github.com/peripheryapp/periphery',

  // Languages
  'Swift': 'https://developer.apple.com/swift/',
  'Objective-C': 'https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/',
  'JavaScript': 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  'TypeScript': 'https://www.typescriptlang.org/',
  'Ruby': 'https://www.ruby-lang.org/',
  'PHP': 'https://www.php.net/',
  'Java': 'https://dev.java/',

  // iOS Frameworks
  'SwiftUI': 'https://developer.apple.com/xcode/swiftui/',
  'UIKit': 'https://developer.apple.com/documentation/uikit',
  'Swift 6 Concurrency': 'https://docs.swift.org/swift-book/documentation/the-swift-programming-language/concurrency/',
  'Combine': 'https://developer.apple.com/documentation/combine',
  'SnapKit': 'https://snapkit.github.io/SnapKit/',
  'Lottie': 'https://airbnb.io/lottie/',
  'FLAnimatedImage': 'https://github.com/Flipboard/FLAnimatedImage',
  'LiveKit': 'https://docs.livekit.io/home/',
  'Apollo (GraphQL)': 'https://www.apollographql.com/docs/',

  // Web Frameworks
  'Nuxt.js': 'https://nuxt.com/docs',
  'Vue.js': 'https://vuejs.org/guide/introduction.html',

  // Databases
  'PostgreSQL': 'https://www.postgresql.org/docs/',
  'Realm': 'https://www.mongodb.com/docs/atlas/device-sdks/sdk/swift/',
  'MySQL': 'https://dev.mysql.com/doc/',
  'SQLite': 'https://www.sqlite.org/',
  'MongoDB': 'https://www.mongodb.com/docs/',

  // Development Tools
  'Xcode': 'https://developer.apple.com/xcode/',
  'Git': 'https://git-scm.com/',
  'VS Code': 'https://code.visualstudio.com/',
  'Vim': 'https://www.vim.org/',
  'JetBrains tools': 'https://www.jetbrains.com/',
  'AppCode': 'https://www.jetbrains.com/objc/',

  // Issue Tracking / Wiki
  'Linear': 'https://developers.linear.app/docs/graphql/working-with-the-graphql-api',
  'JIRA': 'https://developer.atlassian.com/cloud/jira/platform/',
  'GitHub': 'https://docs.github.com/',
  'Notion': 'https://developers.notion.com/',
  'GitLab': 'https://docs.gitlab.com/',
  'Bitbucket': 'https://developer.atlassian.com/cloud/bitbucket/',
  'Confluence': 'https://developer.atlassian.com/cloud/confluence/',
  'Pivotal Tracker': 'https://www.pivotaltracker.com/help',

  // CI/CD & DevOps
  'CircleCI': 'https://circleci.com/docs/',
  'Fastlane': 'https://docs.fastlane.tools/',
  'GitHub Actions': 'https://docs.github.com/actions',
  'Travis CI': 'https://docs.travis-ci.com/',
  'Jenkins': 'https://www.jenkins.io/',
  'Azure DevOps': 'https://learn.microsoft.com/en-us/azure/devops/?view=azure-devops',

  // Monitoring & Analytics
  'Sentry': 'https://docs.sentry.io/',
  'Crashlytics': 'https://firebase.google.com/docs/crashlytics',
  'Amplitude': 'https://amplitude.com/docs',
  'Mixpanel': 'https://docs.mixpanel.com/',
  'Firebase': 'https://firebase.google.com/docs',

  // Networking
  'Alamofire': 'https://alamofire.github.io/Alamofire/',
  'Agora': 'https://docs.agora.io/en/',
  'AFNetworking': 'https://github.com/AFNetworking/AFNetworking',
  'URLSession': 'https://developer.apple.com/documentation/foundation/urlsession',

  // Dependency Managers
  'Swift Package Manager': 'https://www.swift.org/package-manager/',
  'Cocoapods': 'https://guides.cocoapods.org/',
  'Carthage': 'https://github.com/Carthage/Carthage',
  'Bundler': 'https://bundler.io/',
  'npm': 'https://docs.npmjs.com/',

  // APIs & Data / Miscellaneous
  'Next.js': 'https://nextjs.org/docs',
  'React': 'https://react.dev/learn',
  'GraphQL': 'https://graphql.org/learn/',
  'API Design': 'https://learn.microsoft.com/en-us/azure/architecture/best-practices/api-design',
  'SDK Development': 'https://www.stainless.com/sdk-api-best-practices',
  'JSON': 'https://www.json.org/',
  'YAML': 'https://yaml.org/',
  'dotenv': 'https://github.com/motdotla/dotenv',
  'xcconfig': 'https://developer.apple.com/library/archive/featuredarticles/XcodeConcepts/Concept-Build_Settings.html',
  'Regex': 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions',
  'XML': 'https://developer.mozilla.org/en-US/docs/Web/XML/XML_introduction',
}

export function getSkillIcon(skill: string): string {
  return skillIcons[skill] ?? skillIcons.default
}

export function getSkillUrl(skill: string): string | null {
  return skillUrls[skill] ?? null
}

export function hasSkillUrl(skill: string): boolean {
  return getSkillUrl(skill) !== null
}
