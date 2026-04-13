<template>
  <div id="about" class="min-h-screen">
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

          <!-- Featured Projects -->
          <ResumeFeaturedProjectsSection
            v-if="resumeData.projects?.length"
            :projects="resumeData.projects"
          />

          <UDivider v-if="resumeData.projects?.length" />

          <!-- Recommendations -->
          <ResumeTestimonialsSection
            v-if="resumeData.recommendations?.items?.length"
            :recommendations="resumeData.recommendations.items"
            :recommendations-url="resumeData.recommendations.url"
          />

          <UDivider v-if="resumeData.recommendations?.items?.length" />

          <!-- Technical Skills -->
          <ResumeTechnicalSkillsSection
            v-if="resumeData.technicalSkills"
            :technical-skills="resumeData.technicalSkills"
          />

          <UDivider v-if="resumeData.technicalSkills" />

          <!-- Experience -->
          <ResumeExperienceSection
            v-if="resumeData.experience"
            :experience="normalizedExperience"
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
import resumeData from '~/data/resume'

const normalizedExperience = computed(() => {
  return resumeData.experience?.map(exp => {
    if (exp.isCurrentRole && !exp.period.endsWith('Present')) {
      return { ...exp, period: exp.period.replace(/- \d{4}$/, '- Present') }
    }
    return exp
  })
})

const sections = computed(() => {
  const availableSections = []

  if (resumeData.personalInfo?.bio) {
    availableSections.push({ id: 'about', label: 'About', icon: 'i-heroicons-user' })
  }
  if (resumeData.projects?.length) {
    availableSections.push({ id: 'projects', label: 'Projects', icon: 'i-heroicons-rocket-launch' })
  }
  if (resumeData.recommendations?.items?.length) {
    availableSections.push({ id: 'recommendations', label: 'Recommendations', icon: 'i-heroicons-chat-bubble-bottom-center-text' })
  }
  if (resumeData.technicalSkills?.length) {
    availableSections.push({ id: 'technical-skills', label: 'Skills', icon: 'i-heroicons-code-bracket' })
  }
  if (resumeData.experience?.length) {
    availableSections.push({ id: 'experience', label: 'Experience', icon: 'i-heroicons-briefcase' })
  }
  if (resumeData.education) {
    availableSections.push({ id: 'education', label: 'Education', icon: 'i-heroicons-academic-cap' })
  }

  return availableSections
})


const seo = resumeData.seo

useHead({
  title: seo.title,
  link: [
    { rel: 'canonical', href: seo.canonical }
  ],
  meta: [
    { name: 'description', content: seo.description },
    { name: 'keywords', content: seo.keywords },
    // Open Graph
    { property: 'og:title', content: seo.title },
    { property: 'og:description', content: seo.description },
    { property: 'og:type', content: 'profile' },
    { property: 'og:url', content: seo.ogUrl },
    { property: 'og:image', content: seo.ogImage },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '1200' },
    { property: 'og:image:alt', content: 'John P. McGlone — Senior iOS Engineer' },
    { property: 'og:site_name', content: 'jpmcglone.com' },
    { property: 'profile:first_name', content: 'John' },
    { property: 'profile:last_name', content: 'McGlone' },
    { property: 'profile:username', content: 'jpmcglone' },
    // Twitter
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: seo.title },
    { name: 'twitter:description', content: seo.description },
    { name: 'twitter:image', content: seo.ogImage },
    { name: 'twitter:site', content: '@jpmcglone' },
    { name: 'twitter:creator', content: '@jpmcglone' },
    // Extra discoverability
    { name: 'author', content: 'John P. McGlone' },
    { name: 'robots', content: 'index, follow' },
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'John P. McGlone',
        alternateName: ['JP McGlone', 'jpmcglone', 'John McGlone', 'John P McGlone'],
        jobTitle: 'Senior iOS Engineer',
        url: 'https://jpmcglone.com',
        image: 'https://jpmcglone.com/images/johnmcglone.jpg',
        email: 'jp@jpmcglone.com',
        description: 'Senior iOS Engineer with 16+ years of experience building polished mobile apps, SDKs, and products at companies like Rumble, DocuSign, and Imgur.',
        address: { '@type': 'PostalAddress', addressLocality: 'Roanoke', addressRegion: 'VA', addressCountry: 'US' },
        sameAs: [
          'https://github.com/jpmcglone',
          'https://www.linkedin.com/in/john-p-mcglone-18513014',
        ],
        knowsAbout: ['iOS Development', 'Swift', 'Mobile Engineering', 'SDK Development', 'Software Architecture', 'Nuxt.js', 'Vue.js'],
        hasOccupation: {
          '@type': 'Occupation',
          name: 'Senior iOS Engineer',
          occupationLocation: { '@type': 'City', name: 'Roanoke, VA' },
        },
        worksFor: {
          '@type': 'Organization',
          name: 'Rumble',
          url: 'https://rumble.studio',
        },
      })
    }
  ]
})
</script>
