<template>
  <div id="technical-skills" class="scroll-mt-6">
    <h2 class="text-xl font-semibold mb-4 flex items-center gap-2 text-gray-900 dark:text-white">
      <UIcon name="i-heroicons-code-bracket" class="text-primary-500 h-5 w-5" />
      Technical Skills
    </h2>

    <!-- Add search input -->
    <div class="mb-4">
      <UInput
        v-model="searchQuery"
        placeholder="Search skills..."
        icon="i-heroicons-magnifying-glass"
        class="max-w-md"
      />
    </div>

    <div class="grid md:grid-cols-2 gap-4">
      <UCard
        v-for="skill in technicalSkills"
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
          <UBadge
            v-for="item in skill.skills"
            :key="item.name"
            :color="item.featured ? 'primary' : 'gray'"
            :variant="'soft'"
            :class="[
              'cursor-pointer hover:-translate-y-0.5 transition-all duration-300',
              item.featured ? 'border border-primary-500' : '',
              !itemMatchesSearch(item) ? 'opacity-20' : '',
              itemMatchesSearch(item) && searchQuery ? 'scale-[1.05] shadow-sm' : ''
            ]"
            size="md"
            @click="navigateToSkill(item.name)"
          >
            <UIcon 
              :name="getSkillIcon(item.name)" 
              :class="[
                'h-4 w-4 mr-1',
                isAppleLogo(item.name) ? 'dark:invert' : ''
              ]"
            />
            {{ item.name }}
          </UBadge>
        </div>
      </UCard>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  technicalSkills: {
    type: Array,
    required: true
  }
})

const searchQuery = ref('')

// Helper function to check if an item matches the search
const itemMatchesSearch = (item) => {
  const query = searchQuery.value.toLowerCase().trim()
  if (!query) return true
  return item.name.toLowerCase().includes(query)
}

// Helper function to check if any items in a category match the search
const categoryMatchesSearch = (category) => {
  const query = searchQuery.value.toLowerCase().trim()
  if (!query) return true
  return category.skills.some(item => item.name.toLowerCase().includes(query))
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
    
    // Databases
    'PostgreSQL': 'https://www.postgresql.org/',
    'Realm': 'https://realm.io/',
    'MySQL': 'https://www.mysql.com/',
    'SQLite': 'https://www.sqlite.org/',
    'MongoDB': 'https://www.mongodb.com/',
  }
  return urls[skill] || '#'
}

const navigateToSkill = (skillName) => {
  const url = getSkillUrl(skillName)
  if (url !== '#') window.open(url, '_blank')
}
</script> 