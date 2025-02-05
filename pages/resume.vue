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
import { computed } from 'vue'
import { useHead } from 'unhead'
import resumeData from '~/public/data/resume.json'

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
    { name: 'description', content: resumeData.personalInfo?.title || 'Professional Resume' }
  ]
})
</script>