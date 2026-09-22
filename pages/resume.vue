<template>
  <div id="about" class="min-h-screen">
    <div class="resume-page mx-auto grid gap-12 px-6 py-6 sm:py-12 print:block">
      <ResumeFloatingNav :sections="sections" />
      <div class="resume-content mx-auto w-full min-w-0 max-w-[70ch] space-y-12">
        <!-- Header Section -->
        <ResumeHeaderSection :personal-info="resumeData.personalInfo" :links="resumeData.links" />

        <!-- About Section -->
        <ResumeAboutSection
          v-if="resumeData.personalInfo?.bio"
          :bio="resumeData.personalInfo.bio"
        />

        <!-- Objective Section -->
        <ResumeObjectiveSection v-if="resumeData.objective" :objective="resumeData.objective" />

        <USeparator />

        <!-- Featured Projects -->
        <ResumeFeaturedProjectsSection
          v-if="resumeData.projects?.length"
          :projects="resumeData.projects"
        />

        <USeparator v-if="resumeData.projects?.length" />

        <!-- Recommendations -->
        <ResumeTestimonialsSection
          v-if="resumeData.recommendations?.items?.length"
          :recommendations="resumeData.recommendations.items"
          :recommendations-url="resumeData.recommendations.url"
        />

        <USeparator v-if="resumeData.recommendations?.items?.length" />

        <!-- Technical Skills -->
        <ResumeTechnicalSkillsSection
          v-if="resumeData.technicalSkills"
          :technical-skills="resumeData.technicalSkills"
        />

        <USeparator v-if="resumeData.technicalSkills" />

        <!-- Experience -->
        <ResumeExperienceSection v-if="resumeData.experience" :experience="resumeData.experience" />

        <USeparator v-if="resumeData.experience" />

        <!-- Education -->
        <ResumeEducationSection v-if="resumeData.education" :education="resumeData.education" />

        <USeparator v-if="resumeData.education && resumeData.achievements" />

        <!-- Achievements -->
        <ResumeAchievementsSection
          v-if="resumeData.achievements"
          :achievements="resumeData.achievements"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import resumeData from '~/data/resume'

definePageMeta({ colorMode: 'dark' })

const sections = computed(() => {
  const availableSections = []

  if (resumeData.personalInfo?.bio) {
    availableSections.push({ id: 'about', label: 'About', icon: 'i-heroicons-user' })
  }
  if (resumeData.projects?.length) {
    availableSections.push({ id: 'projects', label: 'Projects', icon: 'i-heroicons-rocket-launch' })
  }
  if (resumeData.recommendations?.items?.length) {
    availableSections.push({
      id: 'recommendations',
      label: 'Recommendations',
      icon: 'i-heroicons-chat-bubble-bottom-center-text',
    })
  }
  if (resumeData.technicalSkills?.length) {
    availableSections.push({
      id: 'technical-skills',
      label: 'Skills',
      icon: 'i-heroicons-code-bracket',
    })
  }
  if (resumeData.experience?.length) {
    availableSections.push({ id: 'experience', label: 'Experience', icon: 'i-heroicons-briefcase' })
  }
  if (resumeData.education) {
    availableSections.push({
      id: 'education',
      label: 'Education',
      icon: 'i-heroicons-academic-cap',
    })
  }

  return availableSections
})

usePageMetadata(resumeData.seo)
</script>
