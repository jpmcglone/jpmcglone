<template>
  <div class="min-h-screen flex items-center justify-center">
    <ColorModeToggle />
    <div class="space-y-6 text-center">
      <UAvatar
        :src="resumeData.personalInfo.image"
        size="2xl"
      />
      <h1>
        <UText class="text-4xl font-light">@jpmcglone</UText>
      </h1>
      <p>
        <UText class="text-lg text-gray-500 dark:text-gray-400">Software Engineer</UText>
      </p>
      <UButton
        to="/resume"
        class="flex items-center px-4 py-2 rounded-lg font-medium transition-all duration-200 shadow hover:-translate-y-[1px] hover:shadow-lg bg-gray-900 text-white hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100"
        icon="i-heroicons-document-text"
      >
        View Resume
      </UButton>
    </div>
  </div>
</template>

<script setup>
import resumeData from '~/public/data/resume.js'

useHead({
  title: `@jpmcglone - Software Engineer`,
  meta: [
    { name: 'description', content: 'Software Engineer specializing in iOS and Full Stack Development' },
    { name: 'og:title', content: `${resumeData.personalInfo?.name || 'JP McGlone'} - Software Engineer` },
    { name: 'og:description', content: 'Software Engineer specializing in iOS and Full Stack Development' },
    { name: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary' },
    { name: 'twitter:title', content: `${resumeData.personalInfo?.name || 'JP McGlone'} - Software Engineer` },
    { name: 'twitter:description', content: 'Software Engineer specializing in iOS and Full Stack Development' }
  ]
})
</script>