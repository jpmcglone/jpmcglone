<template>
  <div id="recommendations" v-if="recommendations?.length" class="scroll-mt-6">
    <div class="mb-4 flex items-center justify-between gap-4">
      <h2 class="text-xl font-semibold flex items-center gap-2 text-gray-900 dark:text-white">
        <UIcon name="i-heroicons-chat-bubble-bottom-center-text" class="text-primary-500 h-5 w-5" />
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
      >
        See more on LinkedIn
      </UButton>
    </div>

    <div class="grid gap-4">
      <UCard
        v-for="recommendation in recommendations"
        :key="recommendation.author"
        class="dark:bg-gray-800"
      >
        <div class="space-y-4">
          <div class="flex items-start gap-4">
            <p class="flex-1 text-gray-600 dark:text-gray-100 italic">
              "{{ recommendation.quote }}"
            </p>
            <span v-if="recommendation.year" class="shrink-0 text-xs text-gray-300 dark:text-gray-600">
              {{ recommendation.year }}
            </span>
          </div>
          <div class="flex items-start gap-4">
            <a
              v-if="recommendation.linkedin"
              :href="recommendation.linkedin"
              target="_blank"
              rel="noopener noreferrer"
              class="shrink-0"
            >
              <div
                v-if="!recommendation.image"
                class="h-16 w-16 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center"
              >
                <span class="text-base font-semibold text-primary-600 dark:text-primary-400 uppercase">{{ initials(recommendation.author) }}</span>
              </div>
              <UAvatar
                v-else
                :src="recommendation.image"
                :alt="recommendation.author"
                size="xl"
              />
            </a>
            <template v-else>
              <div
                v-if="!recommendation.image"
                class="h-16 w-16 shrink-0 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center"
              >
                <span class="text-base font-semibold text-primary-600 dark:text-primary-400 uppercase">{{ initials(recommendation.author) }}</span>
              </div>
              <UAvatar
                v-else
                :src="recommendation.image"
                :alt="recommendation.author"
                size="xl"
              />
            </template>
            <div>
              <p class="text-sm font-medium text-gray-900 dark:text-white">
                <a
                  v-if="recommendation.linkedin"
                  :href="recommendation.linkedin"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center gap-1 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                >
                  {{ recommendation.author }}
                  <UIcon name="i-simple-icons-linkedin" class="h-3.5 w-3.5 opacity-50" />
                </a>
                <span v-else>{{ recommendation.author }}</span>
              </p>
              <p class="text-xs text-gray-500 dark:text-gray-400">
                {{ recommendation.title }}<span v-if="recommendation.company"> at {{ recommendation.company }}</span>
              </p>
              <p v-if="recommendation.context" class="mt-1 text-xs text-gray-500 dark:text-gray-400">
                {{ recommendation.context }}
              </p>
            </div>
          </div>
        </div>
      </UCard>
    </div>
  </div>
</template>

<script setup>
defineProps({
  recommendations: {
    type: Array,
    required: true
  },
  recommendationsUrl: {
    type: String,
    default: ''
  }
})

const initials = (name) => {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .map(w => w[0])
    .slice(0, 2)
    .join('')
    .toUpperCase()
}
</script>
