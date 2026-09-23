<template>
  <section
    v-if="recommendations.length"
    id="recommendations"
    aria-labelledby="recommendations-title"
    class="scroll-mt-6"
  >
    <div class="mb-5 flex flex-wrap items-center justify-between gap-3">
      <h2
        id="recommendations-title"
        class="text-2xl font-semibold flex items-center gap-2 text-gray-50"
      >
        <UIcon
          name="i-jpm-chat-bubble-bottom-center-text"
          class="text-primary-400 h-5 w-5 shrink-0"
        />
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

    <ResumeCardStack
      id="recommendations"
      :items="stackItems"
      label="Recommendations from colleagues"
      item-label="recommendation"
      plural-label="recommendations"
    >
      <template #default="{ index }">
        <ResumeRecommendationCard :recommendation="recommendations[index]!" />
      </template>
    </ResumeCardStack>
  </section>
</template>
<script setup lang="ts">
import type { Recommendation } from '~/data/resume'
const props = defineProps<{ recommendations: Recommendation[]; recommendationsUrl?: string }>()
const stackItems = computed(() =>
  props.recommendations.map((item) => ({
    id: item.author,
    label: item.author,
    image: item.image,
    company: item.sharedCompany,
  })),
)
</script>
