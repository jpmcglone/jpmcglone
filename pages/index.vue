<template>
  <div class="page-shell">
    <nav aria-label="Main navigation" class="flex items-center justify-between gap-4 text-sm">
      <span class="font-medium text-gray-50">{{ indexData.personalInfo.username }}</span>
      <div class="flex gap-6 text-gray-400">
        <NuxtLink :to="indexData.resume.link" class="text-link">{{ indexData.resume.buttonText }}</NuxtLink>
      </div>
    </nav>

    <div class="mx-auto flex max-w-2xl flex-col items-center gap-6 py-16 text-center sm:py-20">
      <UAvatar
        :src="indexData.personalInfo.avatar"
        :alt="indexData.personalInfo.username"
        size="2xl"
        :ui="{ size: { '2xl': 'h-24 w-24 text-2xl' } }"
        class="ring-1 ring-gray-700"
      />
      <h1 class="text-4xl font-semibold tracking-tight text-gray-50 sm:text-[56px] sm:leading-[64px]">
        {{ indexData.personalInfo.username }}
      </h1>
      <p class="text-lg font-semibold text-gray-300">{{ indexData.personalInfo.title }}</p>

      <div class="flex flex-wrap justify-center gap-2">
        <UTooltip v-for="tag in indexData.personalInfo.tags.filter(t => t.label)" :key="tag.label" :text="tag.tooltip">
          <component
            :is="tag.link ? 'ULink' : 'span'"
            v-bind="tag.link ? { to: tag.link, external: tag.link.startsWith('http'), target: '_blank' } : {}"
            class="inline-flex items-center gap-2 rounded-full border border-gray-700 bg-gray-800 px-3 py-2 text-sm text-gray-300 transition-colors hover:bg-gray-700"
          >
            <UIcon :name="getTagIcon(tag.label)" class="h-4 w-4" />
            {{ tag.label }}
          </component>
        </UTooltip>
      </div>

      <UButton :to="indexData.resume.link" color="black" size="lg" icon="i-heroicons-document-text" class="mt-2">
        {{ indexData.resume.buttonText }}
      </UButton>
      <div class="flex justify-center gap-6">
        <ULink
          v-for="social in indexData.personalInfo.socialLinks"
          :key="social.name"
          :to="social.url"
          external
          target="_blank"
          class="inline-flex items-center gap-2 text-sm font-medium text-link"
        >
          <UIcon :name="social.icon" class="h-5 w-5" />
          {{ social.name }}
          <UIcon name="i-heroicons-arrow-up-right" class="h-3.5 w-3.5" />
        </ULink>
      </div>
      <a href="/sitemap.xml" target="_blank" class="text-xs text-link">Sitemap</a>
    </div>

  </div>
</template>

<script setup>
import indexData from '~/data/index'

import { siteMetadata } from '~/data/site'

definePageMeta({ colorMode: 'dark' })

const getTagIcon = (label) => {
  const icons = {
    'Software Engineer': 'i-simple-icons-github',
    'iOS Developer': 'i-simple-icons-apple',
    'Web Developer': 'i-simple-icons-javascript',
    'Entrepreneur': 'i-heroicons-rocket-launch',
    'Husband': 'i-heroicons-heart',
    'Landlord': 'i-heroicons-home',
  }
  return icons[label] || 'i-heroicons-tag'
}

usePageMetadata(indexData.meta)

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'John P. McGlone',
        alternateName: ['JP McGlone', 'jpmcglone', 'John McGlone', 'John P McGlone'],
        jobTitle: siteMetadata.role,
        url: 'https://jpmcglone.com',
        image: 'https://jpmcglone.com/images/johnmcglone.jpg',
        email: 'jp@jpmcglone.com',
        address: { '@type': 'PostalAddress', addressLocality: 'Roanoke', addressRegion: 'VA', addressCountry: 'US' },
        sameAs: [
          'https://github.com/jpmcglone',
          'https://www.linkedin.com/in/john-p-mcglone-18513014',
        ],
        knowsAbout: ['iOS Development', 'Swift', 'Mobile Engineering', 'SDK Development', 'Software Architecture', 'Full-Stack Development', 'Agentic Coding', 'MCP Server Development', 'AI-Assisted Engineering', 'Technical Leadership', 'Nuxt.js', 'Vue.js'],
      })
    }
  ]
})
</script>
