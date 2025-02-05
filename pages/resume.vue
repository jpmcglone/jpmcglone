<template>
  <div id="about" class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <ColorModeToggle />

    <UContainer class="sm:py-8 relative max-w-5xl mx-auto sm:px-4">
      <UCard 
        class="-mx-4 sm:mx-auto sm:rounded-lg" 
        :ui="{ 
          base: 'relative overflow-hidden',
          background: 'bg-white dark:bg-gray-900',
          divide: 'divide-y divide-gray-200 dark:divide-gray-800',
          ring: 'ring-1 ring-gray-200 dark:ring-gray-800',
          rounded: 'sm:rounded-lg',
          shadow: 'sm:shadow-lg',
          padding: 'p-0 sm:p-0'
        }"
      >
        <template v-if="resumeData">
          <div class="p-6 sm:p-8 space-y-8">
            <!-- Header Section -->
            <ResumeHeaderSection
              :personal-info="resumeData.personalInfo"
              :links="resumeData.links"
            />
            
            <!-- About Section -->
            <ResumeAboutSection 
              v-if="resumeData.personalInfo?.bio" 
              :bio="resumeData.personalInfo.bio" 
            />

            <!-- Objective Section -->
            <ResumeObjectiveSection
              v-if="resumeData.objective"
              :objective="resumeData.objective"
            />

            <UDivider />
            
            <!-- Social Proof Section -->
            <ResumeSocialProofSection
              v-if="hasMetrics" 
              :metrics="resumeData.metrics" 
            />

            <UDivider v-if="hasMetrics" />

            <!-- Featured Projects -->
            <ResumeFeaturedProjectsSection 
              v-if="resumeData.projects"
              :projects="resumeData.projects"
            />

            <UDivider v-if="resumeData.projects" />

            <!-- Testimonials -->
            <ResumeTestimonialsSection 
              v-if="resumeData.testimonials"
              :testimonials="resumeData.testimonials"
            />

            <UDivider v-if="resumeData.testimonials"/>

            <!-- Technical Skills -->
            <ResumeTechnicalSkillsSection 
              v-if="resumeData.technicalSkills"
              :technical-skills="resumeData.technicalSkills"
            />

            <UDivider v-if="resumeData.technicalSkills" />

            <!-- Experience -->
            <ResumeExperienceSection 
              v-if="resumeData.experience"
              :experience="resumeData.experience"
            />

            <UDivider v-if="resumeData.experience" />

            <!-- Education -->
            <ResumeEducationSection 
              v-if="resumeData.education"
              :education="resumeData.education"
            />

            <UDivider v-if="resumeData.education && resumeData.achievements" />

            <!-- Achievements -->
            <ResumeAchievementsSection 
              v-if="resumeData.achievements"
              :achievements="resumeData.achievements"
            />
          </div>
        </template>
        <template v-else>
          <div class="p-8 text-center text-gray-500 dark:text-gray-400">
            Loading...
          </div>
        </template>
      </UCard>
    </UContainer>

    <!-- Floating navigation -->
    <nav class="fixed left-4 top-1/2 transform -translate-y-1/2 hidden lg:block print:hidden">
      <ul class="space-y-2">
        <li v-for="section in sections" :key="section.id">
          <UButton
            variant="ghost"
            size="xs"
            @click="scrollToSection(section.id)"
          >
            {{ section.label }}
          </UButton>
        </li>
      </ul>
    </nav>

    <!-- <UButton
      icon="i-heroicons-document-arrow-down"
      color="gray"
      variant="soft"
      class="dark:bg-gray-800 dark:hover:bg-gray-700"
      @click="downloadPDF"
    >
      Download PDF
    </UButton> -->
  </div>
</template>

<script setup>
import { ref, computed, onMounted, reactive } from 'vue'
import { useHead } from 'unhead'

const resumeData = ref(null)
const loading = ref(true)
const sections = computed(() => {
  const availableSections = []
  
  if (resumeData.value?.personalInfo?.bio) {
    availableSections.push({ id: 'about', label: 'About' })
  }
  
  if (resumeData.value?.technicalSkills?.length) {
    availableSections.push({ id: 'technical-skills', label: 'Skills' })
  }
  
  if (resumeData.value?.experience?.length) {
    availableSections.push({ id: 'experience', label: 'Experience' })
  }
  
  if (resumeData.value?.education) {
    availableSections.push({ id: 'education', label: 'Education' })
  }
  
  return availableSections
})

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

const trackEvent = (action, category, label) => {
  // Integration with your analytics platform
  if (window.gtag) {
    gtag('event', action, {
      event_category: category,
      event_label: label
    })
  }
}

const navigateToSkill = (skillName) => {
  trackEvent('click', 'skill', skillName)
  const url = getSkillUrl(skillName)
  if (url !== '#') window.open(url, '_blank')
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

const downloadPDF = () => {
  window.print()
  // Or implement a proper PDF generation service
}

useHead({
  title: resumeData.value?.personalInfo?.name || 'Resume',
  meta: [
    { name: 'description', content: resumeData.value?.personalInfo?.title || 'Professional Resume' }
  ]
})

const sectionStates = reactive({
  about: true,
  skills: true,
  experience: true
})

const toggleSection = (sectionId) => {
  sectionStates[sectionId] = !sectionStates[sectionId]
}

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

const hasContactOrLinks = computed(() => {
  return resumeData.value?.personalInfo?.email || (resumeData.value?.links?.length > 0)
})

const hasMetrics = computed(() => {
  return resumeData.value?.metrics?.yearsExperience || resumeData.value?.metrics?.employersSatisfied
})

const getSocialIcon = (name) => {
  const icons = {
    'GitHub': 'i-simple-icons-github',
    'LinkedIn': 'i-simple-icons-linkedin',
    // Add more social icons as needed
    'default': 'i-heroicons-link'
  }
  return icons[name] || icons.default
}
</script>