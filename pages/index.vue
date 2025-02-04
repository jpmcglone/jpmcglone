<template>
  <div class="min-h-screen bg-gray-50">
    <UContainer class="py-8">
      <UCard class="max-w-4xl mx-auto">
        <template v-if="loading">
          <div class="p-8 text-center">
            <UProgress indeterminate color="primary" />
          </div>
        </template>

        <template v-else-if="resumeData">
          <!-- Header -->
          <div class="p-8 text-center">
            <UAvatar
              v-if="resumeData.personalInfo?.image"
              :src="resumeData.personalInfo.image"
              :alt="resumeData.personalInfo?.name"
              size="xl"
              class="mb-4"
            />
            <h1 class="text-2xl font-bold mb-2">{{ resumeData.personalInfo?.name }}</h1>
            <p class="text-lg text-gray-600 mb-4">{{ resumeData.personalInfo?.title }}</p>
            
            <!-- Contact Links -->
            <div class="flex justify-center gap-2">
              <UButton
                v-if="resumeData.personalInfo?.email"
                :to="`mailto:${resumeData.personalInfo.email}`"
                color="primary"
                icon="i-heroicons-envelope"
                size="sm"
              >
                Contact
              </UButton>
              <UButton
                v-for="link in resumeData.links"
                :key="link.url"
                :to="link.url"
                target="_blank"
                color="gray"
                size="sm"
                variant="soft"
              >
                {{ link.name }}
              </UButton>
            </div>
          </div>

          <UDivider />

          <!-- Main Content -->
          <div class="p-8 space-y-8">
            <!-- Objective -->
            <div v-if="resumeData.objective">
              <h2 class="font-semibold mb-2 flex items-center gap-2">
                <UIcon name="i-heroicons-flag" class="text-primary-500" />
                Objective
              </h2>
              <p class="text-gray-600">{{ resumeData.objective }}</p>
            </div>

            <!-- Technical Skills -->
            <div v-if="resumeData.technicalSkills">
              <h2 class="font-semibold mb-4 flex items-center gap-2">
                <UIcon name="i-heroicons-code-bracket" class="text-primary-500" />
                Technical Skills
              </h2>
              <div class="grid md:grid-cols-2 gap-4">
                <UCard
                  v-for="skill in resumeData.technicalSkills"
                  :key="skill.category"
                  class="bg-gray-50"
                >
                  <h3 class="font-medium mb-3">{{ skill.category }}</h3>
                  <div class="flex flex-wrap gap-2">
                    <a
                      v-for="item in sortedSkills(skill.skills)"
                      :key="item.name"
                      :href="getSkillUrl(item.name)"
                      target="_blank"
                      :class="[
                        'flex items-center gap-1 px-3 py-1 rounded-full transition-colors',
                        item.featured ? 'bg-navy-200 text-navy-800' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      ]"
                    >
                      <UIcon 
                        :name="getSkillIcon(item.name)" 
                        class="w-4 h-4"
                      />
                      {{ item.name }}
                    </a>
                  </div>
                </UCard>
              </div>
            </div>

            <!-- Experience -->
            <div v-if="resumeData.experience">
              <h2 class="font-semibold mb-4 flex items-center gap-2">
                <UIcon name="i-heroicons-briefcase" class="text-primary-500" />
                Experience
              </h2>
              <div class="space-y-4">
                <UCard
                  v-for="job in resumeData.experience"
                  :key="job.company"
                  class="bg-gray-50"
                >
                  <div class="flex items-center gap-3 mb-3">
                    <UAvatar
                      v-if="job.logo"
                      :src="job.logo"
                      :alt="job.company"
                      size="sm"
                    />
                    <div class="flex-1">
                      <div class="flex justify-between items-start">
                        <h3 class="font-medium">{{ job.company }}</h3>
                        <UBadge color="gray" variant="soft">{{ job.period }}</UBadge>
                      </div>
                      <p class="text-sm text-gray-600">{{ job.title }}</p>
                    </div>
                  </div>
                  <ul class="space-y-2">
                    <li
                      v-for="(item, index) in job.responsibilities"
                      :key="index"
                      class="flex gap-2 text-sm text-gray-600"
                    >
                      <UIcon name="i-heroicons-check" class="flex-shrink-0 w-4 h-4 mt-1 text-primary-500" />
                      {{ item }}
                    </li>
                  </ul>
                </UCard>
              </div>
            </div>
          </div>
        </template>

        <template v-else>
          <UAlert
            icon="i-heroicons-exclamation-triangle"
            color="red"
            title="Error"
            description="Failed to load resume data"
          />
        </template>
      </UCard>
    </UContainer>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const resumeData = ref(null)
const loading = ref(true)

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
.text-navy-800 {
  color: #1e3a8a;
}
</style>