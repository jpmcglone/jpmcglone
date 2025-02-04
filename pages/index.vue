<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <!-- Color mode toggle -->
    <div class="fixed top-4 right-4 z-50">
      <UButton
        icon="i-heroicons-sun"
        color="gray"
        variant="ghost"
        aria-label="Toggle color mode"
        @click="toggleColorMode"
      />
    </div>

    <UContainer class="py-8 relative">
      <UCard class="max-w-4xl mx-auto">
        <template v-if="resumeData">
          <!-- Header -->
          <div class="p-6 sm:p-8 text-center">
            <UAvatar
              v-if="resumeData.personalInfo?.image"
              :src="resumeData.personalInfo.image"
              :alt="resumeData.personalInfo?.name"
              size="2xl"
              class="mb-6 border-4 border-primary-500"
            />
            <h1 class="text-3xl font-semibold mb-2 text-gray-900 dark:text-white">
              {{ resumeData.personalInfo?.name }}
            </h1>
            <p class="text-lg text-gray-500 dark:text-gray-400 mb-6">
              {{ resumeData.personalInfo?.title }}
            </p>
            
            <div class="flex justify-center gap-2">
              <UButton
                v-if="resumeData.personalInfo?.email"
                :to="`mailto:${resumeData.personalInfo.email}`"
                color="primary"
                icon="i-heroicons-envelope"
                size="md"
              >
                Contact
              </UButton>
              <UButton
                v-for="link in resumeData.links"
                :key="link.url"
                :to="link.url"
                target="_blank"
                color="gray"
                variant="soft"
                size="md"
              >
                {{ link.name }}
              </UButton>
            </div>
          </div>

          <UDivider />

          <!-- Main Content -->
          <div class="p-6 sm:p-8 space-y-8">
            <!-- Technical Skills -->
            <div v-if="resumeData.technicalSkills">
              <h2 class="text-xl font-semibold mb-4 flex items-center gap-2 text-gray-900 dark:text-white">
                <UIcon name="i-heroicons-code-bracket" class="text-primary-500 h-5 w-5" />
                Technical Skills
              </h2>
              <div class="grid md:grid-cols-2 gap-4">
                <UCard
                  v-for="skill in resumeData.technicalSkills"
                  :key="skill.category"
                  class="bg-white dark:bg-gray-800"
                >
                  <h3 class="text-base font-medium mb-3 text-gray-900 dark:text-white">
                    {{ skill.category }}
                  </h3>
                  <div class="flex flex-wrap gap-2">
                    <UBadge
                      v-for="item in sortedSkills(skill.skills)"
                      :key="item.name"
                      :color="item.featured ? 'primary' : 'gray'"
                      :variant="item.featured ? 'solid' : 'soft'"
                      size="md"
                      class="cursor-pointer hover:-translate-y-0.5 transition-transform"
                      @click="navigateToSkill(item.name)"
                    >
                      <UIcon 
                        :name="getSkillIcon(item.name)" 
                        class="h-4 w-4 mr-1"
                      />
                      {{ item.name }}
                    </UBadge>
                  </div>
                </UCard>
              </div>
            </div>

            <UDivider />

            <!-- Experience -->
            <div v-if="resumeData.experience">
              <h2 class="text-xl font-semibold mb-4 flex items-center gap-2 text-gray-900 dark:text-white">
                <UIcon name="i-heroicons-briefcase" class="text-primary-500 h-5 w-5" />
                Experience
              </h2>
              
              <!-- Current Roles -->
              <div class="space-y-4 mb-8">
                <h3 class="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Current</h3>
                <UCard
                  v-for="job in currentRoles"
                  :key="job.company"
                  class="bg-white dark:bg-gray-800"
                >
                  <div class="flex items-center gap-4 mb-4">
                    <UAvatar
                      v-if="job.logo"
                      :src="job.logo"
                      :alt="job.company"
                      size="lg"
                    />
                    <div class="flex-1">
                      <div class="flex justify-between items-start gap-4">
                        <h3 class="text-base font-medium text-gray-900 dark:text-white">
                          {{ job.company }}
                        </h3>
                        <UBadge color="primary" variant="soft" size="sm">
                          {{ job.period }}
                        </UBadge>
                      </div>
                      <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">
                        {{ job.title }}
                      </p>
                    </div>
                  </div>
                  <ul class="space-y-2">
                    <li
                      v-for="(item, index) in job.responsibilities"
                      :key="index"
                      class="flex gap-2 text-sm text-gray-600 dark:text-gray-400"
                    >
                      <UIcon 
                        name="i-heroicons-check" 
                        class="flex-shrink-0 h-4 w-4 mt-1 text-primary-500" 
                      />
                      {{ item }}
                    </li>
                  </ul>
                </UCard>
              </div>

              <!-- Past Roles -->
              <div class="space-y-4">
                <h3 class="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Previous</h3>
                <UCard
                  v-for="job in pastRoles"
                  :key="job.company"
                  class="bg-white dark:bg-gray-800"
                >
                  <div class="flex items-center gap-4 mb-4">
                    <UAvatar
                      v-if="job.logo"
                      :src="job.logo"
                      :alt="job.company"
                      size="lg"
                    />
                    <div class="flex-1">
                      <div class="flex justify-between items-start gap-4">
                        <h3 class="text-base font-medium text-gray-900 dark:text-white">
                          {{ job.company }}
                        </h3>
                        <UBadge color="gray" variant="soft" size="sm">
                          {{ job.period }}
                        </UBadge>
                      </div>
                      <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">
                        {{ job.title }}
                      </p>
                    </div>
                  </div>
                  <ul class="space-y-2">
                    <li
                      v-for="(item, index) in job.responsibilities"
                      :key="index"
                      class="flex gap-2 text-sm text-gray-600 dark:text-gray-400"
                    >
                      <UIcon 
                        name="i-heroicons-check" 
                        class="flex-shrink-0 h-4 w-4 mt-1 text-primary-500" 
                      />
                      {{ item }}
                    </li>
                  </ul>
                </UCard>
              </div>
            </div>

            <!-- After Experience section, before closing template -->
            <UDivider />

            <!-- Education -->
            <div v-if="resumeData.education">
              <h2 class="text-xl font-semibold mb-4 flex items-center gap-2 text-gray-900 dark:text-white">
                <UIcon name="i-heroicons-academic-cap" class="text-primary-500 h-5 w-5" />
                Education
              </h2>
              <UCard class="bg-white dark:bg-gray-800">
                <div class="flex justify-between items-start gap-4">
                  <div>
                    <h3 class="text-base font-medium text-gray-900 dark:text-white">
                      {{ resumeData.education.degree }}
                    </h3>
                    <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">
                      {{ resumeData.education.school }}
                    </p>
                    <p class="text-sm text-gray-500 dark:text-gray-400">
                      {{ resumeData.education.location }}
                    </p>
                  </div>
                  <div class="text-right">
                    <UBadge color="gray" variant="soft" size="sm">
                      {{ resumeData.education.period }}
                    </UBadge>
                    <p v-if="resumeData.education.gpa" class="text-sm text-gray-500 dark:text-gray-400 mt-1">
                      GPA: {{ resumeData.education.gpa }}
                    </p>
                  </div>
                </div>
              </UCard>
            </div>

            <!-- Achievements -->
            <div v-if="resumeData.achievements">
              <h2 class="text-xl font-semibold mb-4 flex items-center gap-2 text-gray-900 dark:text-white">
                <UIcon name="i-heroicons-trophy" class="text-primary-500 h-5 w-5" />
                Achievements
              </h2>
              <div class="grid md:grid-cols-2 gap-4">
                <UCard
                  v-for="achievement in resumeData.achievements"
                  :key="achievement.title"
                  class="bg-white dark:bg-gray-800"
                >
                  <div class="flex items-start gap-4">
                    <div>
                      <h3 class="text-base font-medium text-gray-900 dark:text-white mb-2">
                        {{ achievement.title }}
                      </h3>
                      <p class="text-sm text-gray-600 dark:text-gray-400">
                        {{ achievement.description }}
                      </p>
                    </div>
                    <UBadge
                      v-if="achievement.metric"
                      color="primary"
                      variant="soft"
                      size="sm"
                    >
                      {{ achievement.metric }}
                    </UBadge>
                  </div>
                </UCard>
              </div>
            </div>
          </div>
        </template>
        <template v-else>
          <div class="p-8 text-center">
            <ULoading size="lg" />
          </div>
        </template>
      </UCard>
    </UContainer>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const colorMode = useColorMode()
const resumeData = ref(null)
const loading = ref(true)

const toggleColorMode = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}

onMounted(async () => {
  try {
    const response = await fetch('/data/resume.json')
    resumeData.value = await response.json()
  } catch (error) {
    console.error('Error loading resume data:', error)
  } finally {
    loading.value = false
  }
})

const navigateToSkill = (skillName) => {
  const url = getSkillUrl(skillName)
  if (url !== '#') {
    window.open(url, '_blank')
  }
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
    
    // Databases
    'PostgreSQL': 'logos:postgresql',
    'MongoDB': 'logos:mongodb-icon',
    'MySQL': 'logos:mysql',
    'SQLite': 'logos:sqlite',
    'Realm': 'logos:realm',
    
    // Tools & Frameworks
    'SwiftUI': 'logos:swift',
    'UIKit': 'logos:apple',
    'Xcode': 'logos:xcode',
    'VS Code': 'logos:visual-studio-code',
    'GitHub': 'logos:github-icon',
    'npm': 'logos:npm-icon',
    'Firebase': 'logos:firebase',
    
    // Default icon for items without specific icons
    'default': 'heroicons:code-bracket'
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
    
    // Add more URLs as needed...
  }
  return urls[skill] || '#'
}

const sortedSkills = (skills) => {
  return skills.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0))
}

// Computed properties for role filtering
const currentRoles = computed(() => 
  resumeData.value?.experience?.filter(job => job.isCurrentRole) || []
)

const pastRoles = computed(() => 
  resumeData.value?.experience?.filter(job => !job.isCurrentRole) || []
)
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

.container {
  font-family: 'Inter', sans-serif;
}

html {
  scroll-behavior: smooth;
}

section {
  transition: all 0.3s ease;
}

/* Subtle gradient animation on hover */
section:hover {
  background-position: 100% 100%;
  background-size: 200% 200%;
}

.bg-navy-200 {
  background-color: #e0e7ff;
}
.dark .bg-navy-200 {
  background-color: #1e3a8a;
}

.text-navy-800 {
  color: #1e3a8a;
}
.dark .text-navy-800 {
  color: #e0e7ff;
}

/* Add smooth transitions for all interactive elements */
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}

/* Hover effect for cards */
.hover\:shadow {
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
}

/* Existing color classes */
.text-navy-900 {
  color: #1e3a8a;
}
.bg-navy-100 {
  background-color: #e0e7ff;
}
.bg-navy-200 {
  background-color: #c7d2fe;
}

/* Add dark mode transitions */
:root {
  --bg-transition: background-color 0.3s ease;
}

.dark-mode-transition {
  transition: var(--bg-transition);
}
</style>