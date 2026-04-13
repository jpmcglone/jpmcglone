<template>
  <div class="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
    <div class="space-y-8 text-center max-w-2xl mx-auto px-6">
      <div>
        <UAvatar
          :src="indexData.personalInfo.avatar"
          size="2xl"
          class="ring-4 ring-white dark:ring-gray-800 shadow-xl transform hover:scale-105 transition-all duration-300"
        />
      </div>

      <h1 class="text-5xl font-light bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
        {{ indexData.personalInfo.username }}
      </h1>

      <div class="tag-cloud flex gap-3 justify-center flex-wrap max-w-xl mx-auto py-4">
        <UTooltip v-for="tag in indexData.personalInfo.tags.filter(t => t.label)" :key="tag.label" :text="tag.tooltip">
          <component
            :is="tag.link ? 'ULink' : 'span'"
            v-bind="tag.link ? {
              to: tag.link,
              external: tag.link.startsWith('http'),
              target: '_blank'
            } : {}"
            class="tag-item px-4 py-2 rounded-full text-sm bg-white hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700
                   shadow-sm hover:shadow-md transition-all duration-300 inline-flex items-center gap-2
                   border border-gray-200 dark:border-gray-700 hover:-translate-y-0.5"
          >
            <UIcon
              :name="getTagIcon(tag.label)"
              class="h-4 w-4"
            />
            {{ tag.label }}
          </component>
        </UTooltip>
      </div>

      <p class="text-xl text-gray-500 dark:text-gray-400 font-light">
        {{ indexData.personalInfo.title }}
      </p>

      <UButton
        :to="indexData.resume.link"
        class="inline-flex items-center px-6 py-3 rounded-xl font-medium transition-all duration-300
               shadow-lg hover:shadow-xl hover:-translate-y-1
               bg-gradient-to-r from-gray-900 to-gray-700 text-white hover:from-gray-800 hover:to-gray-600
               dark:from-white dark:to-gray-200 dark:text-gray-900 dark:hover:from-gray-100 dark:hover:to-gray-300"
        icon="i-heroicons-document-text"
      >
        {{ indexData.resume.buttonText }}
      </UButton>

      <div class="pt-8 border-t border-gray-200 dark:border-gray-700">
        <div class="flex justify-center gap-4">
          <UTooltip v-for="social in indexData.personalInfo.socialLinks" :key="social.name" :text="social.name">
            <ULink
              :to="social.url"
              external
              target="_blank"
              class="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white
                     transition-all duration-300 hover:-translate-y-1"
            >
              <UIcon
                :name="social.icon"
                class="h-6 w-6"
              />
            </ULink>
          </UTooltip>
        </div>
      </div>

      <div class="pt-4">
        <a
          href="/sitemap.xml"
          target="_blank"
          class="text-xs text-gray-400 dark:text-gray-600 hover:text-gray-500 dark:hover:text-gray-500 transition-colors"
        >Sitemap</a>
      </div>
    </div>
  </div>
</template>

<script setup>
import indexData from '~/data/index'

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

const m = indexData.meta

useHead({
  title: m.title,
  link: [
    { rel: 'canonical', href: m.canonical }
  ],
  meta: [
    { name: 'description', content: m.description },
    { name: 'keywords', content: m.keywords },
    // Open Graph
    { property: 'og:title', content: m.ogTitle },
    { property: 'og:description', content: m.ogDescription },
    { property: 'og:type', content: m.ogType },
    { property: 'og:url', content: m.ogUrl },
    { property: 'og:image', content: m.ogImage },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '1200' },
    { property: 'og:image:alt', content: 'John P. McGlone — Senior iOS Engineer' },
    { property: 'og:site_name', content: 'jpmcglone.com' },
    { property: 'profile:first_name', content: 'John' },
    { property: 'profile:last_name', content: 'McGlone' },
    { property: 'profile:username', content: 'jpmcglone' },
    // Twitter
    { name: 'twitter:card', content: m.twitterCard },
    { name: 'twitter:title', content: m.twitterTitle },
    { name: 'twitter:description', content: m.twitterDescription },
    { name: 'twitter:image', content: m.twitterImage },
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
        address: { '@type': 'PostalAddress', addressLocality: 'Roanoke', addressRegion: 'VA', addressCountry: 'US' },
        sameAs: [
          'https://github.com/jpmcglone',
          'https://www.linkedin.com/in/john-p-mcglone-18513014',
        ],
        knowsAbout: ['iOS Development', 'Swift', 'Mobile Engineering', 'SDK Development', 'Software Architecture', 'Nuxt.js', 'Vue.js'],
      })
    }
  ]
})
</script>

<style scoped>
.tag-cloud {
  perspective: 1000px;
}

.tag-item {
  animation: float 6s ease-in-out infinite;
  animation-delay: calc(var(--index, 0) * 0.5s);
}

.tag-item:nth-child(odd) {
  --index: 1;
}

.tag-item:nth-child(even) {
  --index: 2;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(-5px) rotate(1deg);
  }
}
</style>
