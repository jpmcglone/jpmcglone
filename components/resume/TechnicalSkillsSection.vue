<template>
  <div id="technical-skills" class="scroll-mt-6">
    <h2 class="text-xl font-semibold mb-4 flex items-center gap-2 text-gray-900 dark:text-white">
      <UIcon name="i-heroicons-code-bracket" class="text-primary-500 h-5 w-5" />
      Technical Skills
    </h2>

    <!-- Add search input -->
    <div class="mb-4">
      <UInput
        v-model="searchInput"
        @update:model-value="onSearchInput"
        placeholder="Search skills..."
        icon="i-heroicons-magnifying-glass"
        class="max-w-md"
      />
    </div>

    <TransitionGroup
      name="category"
      tag="div"
      class="grid md:grid-cols-2 gap-4"
    >
      <UCard
        v-for="skill in sortedCategories"
        :key="skill.category"
        class="dark:bg-gray-800 transition-all duration-300"
        :class="{
          'opacity-20': !categoryMatchesSearch(skill),
          'scale-[1.02] shadow-lg': categoryMatchesSearch(skill) && searchQuery
        }"
      >
        <h3 class="text-base font-medium mb-3 text-gray-900 dark:text-white">
          {{ skill.category }}
        </h3>
        <div class="flex flex-wrap gap-2">
          <span
            v-for="item in skill.skills"
            :key="item.name"
            class="inline-flex items-center font-medium rounded-md text-sm px-2 py-1 gap-1 transition-all duration-300"
            :class="[
              item.featured ? 'bg-primary-50 dark:bg-primary-400/10 text-primary-500 dark:text-primary-400 border border-primary-500' : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300',
              !itemMatchesSearch(item, skill) ? 'opacity-20' : '',
              itemMatchesSearch(item, skill) && searchQuery ? 'scale-[1.05] shadow-sm' : '',
              hasSkillUrl(item.name) ? 'cursor-pointer hover:-translate-y-0.5' : ''
            ]"
            @click="navigateToSkill(item.name)"
          >
            <UIcon 
              :name="getSkillIcon(item.name)" 
              class="h-4 w-4 text-current"
              :class="[isAppleLogo(item.name) ? 'dark:invert' : '']"
            />
            {{ item.name }}
            <span v-if="hasSkillUrl(item.name)" class="opacity-70 group-hover:opacity-100">↗</span>
          </span>
        </div>
      </UCard>
    </TransitionGroup>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useDebounceFn } from '@vueuse/core'  // Using VueUse's debounce utility

const props = defineProps({
  technicalSkills: {
    type: Array,
    required: true
  }
})

const searchInput = ref('')
const searchQuery = ref('')

// Debounced function to update searchQuery
const updateQuery = useDebounceFn((value) => {
  searchQuery.value = value
}, 300)  // 300ms delay

// Watch searchInput and update searchQuery with debounce
const onSearchInput = (value) => {
  searchInput.value = value
  updateQuery(value)
}

// Helper function to normalize text for searching
const normalizeText = (text) => {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '') // Remove all non-alphanumeric characters
}

// Helper function to check if an item matches the search
const itemMatchesSearch = (item, category) => {
  const query = normalizeText(searchQuery.value)
  if (!query) return true
  // Show all items if category matches the search
  if (normalizeText(category.category).includes(query)) return true
  return normalizeText(item.name).includes(query)
}

// Helper function to check if any items in a category match the search
const categoryMatchesSearch = (category) => {
  const query = normalizeText(searchQuery.value)
  if (!query) return true
  // Match if category name matches OR if any skills match
  return normalizeText(category.category).includes(query) || 
         category.skills.some(item => normalizeText(item.name).includes(query))
}

const isAppleLogo = (skill) => {
  const appleSkills = ['UIKit', 'Combine', 'AFNetworking', 'URLSession', 'xcconfig']
  return skill === 'Apple' || appleSkills.includes(skill)
}

const getSkillIcon = (skill) => {
  const icons = {
    // Languages
    'Swift': 'logos:swift',
    'Objective-C': 'logos:c',
    'JavaScript': 'logos:javascript',
    'TypeScript': 'logos:typescript-icon',
    'Ruby': 'logos:ruby',
    'PHP': 'logos:php',
    'Java': 'logos:java',
    
    // Frameworks
    'SwiftUI': 'logos:swift',
    'UIKit': 'logos:apple',
    'Nuxt.js': 'logos:nuxt-icon',
    'Vue.js': 'logos:vue',
    'MVI Architecture': 'i-heroicons-squares-2x2',
    'SnapKit': 'i-heroicons-puzzle-piece',
    'Lottie': 'i-heroicons-play-circle',
    'Combine': 'logos:apple',
    'Next.js': 'logos:nextjs-icon',
    'React': 'logos:react',
    'Apollo (GraphQL)': 'logos:apollostack',
    
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
    'VS Code': 'logos:visual-studio-code',
    'Vim': 'logos:vim',
    'JetBrains tools': 'logos:jetbrains',
    'AppCode': 'logos:jetbrains',
    
    // Networking
    'Alamofire': 'logos:swift',
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
    
    // Additional missing icons
    'FLAnimatedImage': 'i-heroicons-photo',
    'LiveKit': 'i-heroicons-video-camera',
    'HockeyApp': 'i-heroicons-rocket-launch',
    'Facebook Analytics': 'logos:facebook',
    'Pivotal Tracker': 'i-heroicons-clipboard-document-list',
    'Phabricator': 'i-heroicons-bug-ant',
    
    // Default icon for items without specific icons
    'default': 'i-heroicons-code-bracket'
  }
  return icons[skill] || icons.default
}

const getSkillUrl = (skill) => {
  const urls = {
    // AI-Assisted Development
    'Cursor': 'https://docs.cursor.com/',
    'Claude': 'https://docs.anthropic.com/en/docs/intro-to-claude',
    'ChatGPT': 'https://platform.openai.com/docs/overview',

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
    
    // Frameworks & Libraries
    'SwiftUI': 'https://developer.apple.com/xcode/swiftui/',
    'UIKit': 'https://developer.apple.com/documentation/uikit',
    'Nuxt.js': 'https://nuxt.com/docs',
    'Vue.js': 'https://vuejs.org/guide/introduction.html',
    'MVI Architecture': 'https://developer.android.com/topic/architecture',
    'SnapKit': 'https://snapkit.github.io/SnapKit/',
    'Lottie': 'https://airbnb.io/lottie/',
    'Combine': 'https://developer.apple.com/documentation/combine',
    'FLAnimatedImage': 'https://github.com/Flipboard/FLAnimatedImage',
    'LiveKit': 'https://docs.livekit.io/home/',
    'Apollo (GraphQL)': 'https://www.apollographql.com/docs/',
    
    // Databases
    'PostgreSQL': 'https://www.postgresql.org/docs/',
    'Realm': 'https://www.mongodb.com/docs/atlas/device-sdks/sdk/swift/',
    'MySQL': 'https://dev.mysql.com/doc/',
    'SQLite': 'https://www.sqlite.org/',
    'MongoDB': 'https://www.mongodb.com/docs/',
    
    // Development Tools
    'Xcode': 'https://developer.apple.com/xcode/',
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
    'Trunk-Based Development': 'https://trunkbaseddevelopment.com/',
    'JSON': 'https://www.json.org/',
    'YAML': 'https://yaml.org/',
    'dotenv': 'https://github.com/motdotla/dotenv',
    'xcconfig': 'https://developer.apple.com/library/archive/featuredarticles/XcodeConcepts/Concept-Build_Settings.html',
    'Regex': 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions',
    'XML': 'https://developer.mozilla.org/en-US/docs/Web/XML/XML_introduction'
  }
  return urls[skill] || null
}

const hasSkillUrl = (skill) => {
  return getSkillUrl(skill) !== null
}

const navigateToSkill = (skillName) => {
  const url = getSkillUrl(skillName)
  if (url !== null) window.open(url, '_blank')
}

const sortedCategories = computed(() => {
  if (!searchQuery.value) return props.technicalSkills
  
  return [...props.technicalSkills].sort((a, b) => {
    const aMatches = categoryMatchesSearch(a)
    const bMatches = categoryMatchesSearch(b)
    if (aMatches && !bMatches) return -1
    if (!aMatches && bMatches) return 1
    return 0
  })
})
</script>

<style>
.category-move {
  transition: transform 0.5s ease;
}

.category-enter-active,
.category-leave-active {
  transition: all 0.5s ease;
}

.category-enter-from,
.category-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style> 