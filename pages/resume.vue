<template>
  <div id="about" class="min-h-screen">
    <ColorModeToggle />

    <UContainer class="sm:py-8 relative max-w-5xl mx-auto px-2 sm:px-4">
      <UCard 
        class="-mx-2 sm:mx-auto sm:rounded-lg" 
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
        <div class="p-3 sm:p-8 space-y-8">
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
            :experience="transformedExperience"
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
      </UCard>
    </UContainer>

    <ResumeFloatingNav :sections="sections" />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useHead } from 'unhead'
import resumeData from '~/public/data/resume.js'

// Transform experience data to handle "Present" dates
const transformedExperience = computed(() => {
  return resumeData.experience?.map((exp, index) => {
    // Only transform the first entry (most recent) if it ends in current year
    if (index === 0 && exp.period.endsWith('2024')) {
      const period = exp.period.replace('- 2024', '- Present')
      return {
        ...exp,
        period
      }
    }
    return exp
  })
})

const sections = computed(() => {
  const availableSections = []
  
  if (resumeData.personalInfo?.bio) {
    availableSections.push({ id: 'about', label: 'About' })
  }
  
  if (resumeData.technicalSkills?.length) {
    availableSections.push({ id: 'technical-skills', label: 'Skills' })
  }
  
  if (resumeData.experience?.length) {
    availableSections.push({ id: 'experience', label: 'Experience' })
  }
  
  if (resumeData.education) {
    availableSections.push({ id: 'education', label: 'Education' })
  }
  
  return availableSections
})

const hasMetrics = computed(() => {
  return resumeData.metrics?.yearsExperience || resumeData.metrics?.employersSatisfied
})

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

useHead({
  title: resumeData.personalInfo?.name || 'Resume',
  meta: [
    { name: 'description', content: resumeData.personalInfo?.title || 'Professional Resume' },
    { name: 'og:title', content: resumeData.personalInfo?.name || 'Resume' },
    { name: 'og:description', content: resumeData.personalInfo?.title || 'Professional Resume' },
    { name: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary' },
    { name: 'twitter:title', content: resumeData.personalInfo?.name || 'Resume' },
    { name: 'twitter:description', content: resumeData.personalInfo?.title || 'Professional Resume' }
  ]
})
</script>