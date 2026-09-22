<template>
  <div v-if="recommendations?.length" id="recommendations" class="scroll-mt-6">
    <div class="mb-6 flex flex-wrap items-center justify-between gap-4">
      <h2 class="text-2xl font-semibold flex items-center gap-2 text-gray-50">
        <UIcon name="i-heroicons-chat-bubble-bottom-center-text" class="text-primary-400 h-5 w-5" />
        Recommendations
      </h2>
      <UButton
        v-if="recommendationsUrl"
        :to="recommendationsUrl"
        external
        target="_blank"
        size="sm"
        variant="ghost"
        icon="i-simple-icons-linkedin"
        class="text-link"
      >
        See more on LinkedIn
      </UButton>
    </div>

    <div class="grid gap-4">
      <UCard
        v-for="recommendation in sortedRecommendations"
        :key="recommendation.author"
        class="dark:bg-gray-800"
      >
        <figure class="space-y-6">
          <blockquote class="space-y-4 border-l-2 border-primary-400/30 pl-4 text-base leading-relaxed text-gray-300">
            <span aria-hidden="true" class="block h-9 text-5xl leading-none text-link">“</span>
            <p v-for="(paragraph, index) in recommendation.quote.split(/\n\n+/)" :key="index">{{ paragraph }}</p>
          </blockquote>
          <figcaption class="flex items-start gap-4">
            <LinkedAvatar
              :url="recommendation.linkedin"
              :src="recommendation.image"
              :alt="recommendation.author"
              size="xl"
              shape="circle"
            />
            <div class="min-w-0 flex-1">
              <p class="text-sm font-medium text-gray-900 dark:text-white">
                <a
                  v-if="recommendation.linkedin"
                  :href="recommendation.linkedin"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center gap-1 text-link"
                >
                  {{ recommendation.author }}
                  <UIcon name="i-simple-icons-linkedin" class="h-3.5 w-3.5 opacity-50" />
                </a>
                <span v-else>{{ recommendation.author }}</span>
              </p>
              <p class="mt-1 text-sm text-gray-400">
                {{ recommendation.title }}<span v-if="recommendation.company"> at {{ recommendation.company }}</span>
              </p>
              <p v-if="recommendation.year" class="mt-2 text-xs text-primary-400">
                <time v-if="recommendation.date" :datetime="recommendation.date">{{ recommendation.year }}</time>
                <span v-else>{{ recommendation.year }}</span>
              </p>
              <p v-if="recommendation.context" class="mt-1 text-xs text-gray-500 dark:text-gray-400">
                {{ recommendation.context }}
              </p>
            </div>
          </figcaption>
        </figure>
      </UCard>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  recommendations: {
    type: Array,
    required: true
  },
  recommendationsUrl: {
    type: String,
    default: ''
  }
})

const sortedRecommendations = computed(() => [...props.recommendations].sort((a, b) =>
  (b.date || `${b.year || '0000'}-01-01`).localeCompare(a.date || `${a.year || '0000'}-01-01`)
))
</script>
