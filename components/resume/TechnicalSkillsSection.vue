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
              class="h-4 w-4"
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
    'JSON': 'i-heroicons-code-bracket',
    'YAML': 'i-heroicons-document-text',
    'dotenv': 'i-heroicons-document',
    'xcconfig': 'logos:apple',
    'Regex': 'i-heroicons-command-line',
    'XML': 'i-heroicons-code-bracket',
    
    // Default icon for items without specific icons
    'default': 'i-heroicons-code-bracket'
  }
  return icons[skill] || icons.default
}

const getSkillUrl = (skill) => {
  const urls = {
    // Languages
    'Swift': 'https://developer.apple.com/swift/',
    'Objective-C': 'https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/',
    'JavaScript': 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    'TypeScript': 'https://www.typescriptlang.org/',
    'Ruby': 'https://www.ruby-lang.org/',
    'PHP': 'https://www.php.net/',
    'Java': 'https://dev.java/',
    
    // Frameworks & Libraries
    'React': 'https://react.dev/',
    'Next.js': 'https://nextjs.org/',
    'Nuxt.js': 'https://nuxt.com/',
    'Apollo (GraphQL)': 'https://www.apollographql.com/',
    
    // Databases
    'PostgreSQL': 'https://www.postgresql.org/',
    'Realm': 'https://realm.io/',
    'MySQL': 'https://www.mysql.com/',
    'SQLite': 'https://www.sqlite.org/',
    'MongoDB': 'https://www.mongodb.com/',
    
    // Development Tools
    'VS Code': 'https://code.visualstudio.com/',
    'Vim': 'https://www.vim.org/',
    'JetBrains tools': 'https://www.jetbrains.com/',
    
    // Issue Tracking / Wiki
    'Linear': 'https://linear.app/',
    'JIRA': 'https://www.atlassian.com/software/jira',
    'GitHub': 'https://github.com/',
    'Notion': 'https://www.notion.so/',
    'GitLab': 'https://gitlab.com/',
    'Bitbucket': 'https://bitbucket.org/',
    'Confluence': 'https://www.atlassian.com/software/confluence',
    
    // CI/CD & DevOps
    'CircleCI': 'https://circleci.com/',
    'GitHub Actions': 'https://github.com/features/actions',
    'Travis CI': 'https://travis-ci.org/',
    'Jenkins': 'https://www.jenkins.io/',
    'Azure DevOps': 'https://azure.microsoft.com/en-us/products/devops',
    
    // Monitoring & Analytics
    'Sentry': 'https://sentry.io/',
    'Firebase': 'https://firebase.google.com/',
    'Amplitude': 'https://amplitude.com/',
    'Mixpanel': 'https://mixpanel.com/',
    
    // APIs & Data
    'GraphQL': 'https://graphql.org/',
    'JSON': 'https://www.json.org/',
    'YAML': 'https://yaml.org/',
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