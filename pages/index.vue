<template>
  <div class="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
    <ColorModeToggle />
    <div class="space-y-8 text-center max-w-2xl mx-auto px-6">
      <div>
        <UAvatar
          :src="indexData.personalInfo.avatar"
          size="2xl"
          class="ring-4 ring-white dark:ring-gray-800 shadow-xl transform hover:scale-105 transition-all duration-300"
        />
      </div>
      
      <h1>
        <UText class="text-5xl font-light bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
          {{ indexData.personalInfo.username }}
        </UText>
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

      <p>
        <UText class="text-xl text-gray-500 dark:text-gray-400 font-light">{{ indexData.personalInfo.title }}</UText>
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
    </div>
  </div>
</template>

<script setup>
import indexData from '~/public/data/index.js'

const getTagIcon = (label) => {
  const icons = {
    'Software Engineer': 'i-simple-icons-github',
    'iOS Developer': 'i-simple-icons-apple',
    'Web Developer': 'i-simple-icons-javascript',
    'Entrepreneur': 'i-heroicons-rocket-launch',
    'Husband': 'i-heroicons-heart',
    'Landlord': 'i-heroicons-home',
    // 'Gamer': 'i-simple-icons-twitch'
  }
  return icons[label] || 'i-heroicons-tag'
}

useHead({
  title: indexData.meta.title,
  meta: [
    { name: 'description', content: indexData.meta.description },
    { name: 'og:title', content: indexData.meta.ogTitle },
    { name: 'og:description', content: indexData.meta.ogDescription },
    { name: 'og:type', content: indexData.meta.ogType },
    { name: 'twitter:card', content: indexData.meta.twitterCard },
    { name: 'twitter:title', content: indexData.meta.twitterTitle },
    { name: 'twitter:description', content: indexData.meta.twitterDescription }
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