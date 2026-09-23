<template>
  <UCard class="dark:bg-gray-800" :ui="{ body: 'p-5 sm:p-6' }">
    <figure class="space-y-6">
      <figcaption class="flex items-start gap-3 sm:gap-4">
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
            {{ recommendation.title }}
            <span v-if="recommendation.company">at {{ recommendation.company }}</span>
          </p>
          <p v-if="recommendation.year" class="mt-2 text-xs text-primary-400">
            <time v-if="recommendation.date" :datetime="recommendation.date">
              {{ recommendation.year }}
            </time>
            <span v-else>{{ recommendation.year }}</span>
          </p>
          <p v-if="recommendation.context" class="mt-1 text-xs text-gray-500 dark:text-gray-400">
            {{ recommendation.context }}
          </p>
        </div>
        <img
          v-if="recommendation.sharedCompany"
          :src="recommendation.sharedCompany.image"
          :alt="`${recommendation.sharedCompany.name} company logo`"
          :title="recommendation.sharedCompany.name"
          width="44"
          height="44"
          loading="lazy"
          class="size-9 shrink-0 rounded-xl object-contain ring-1 ring-white/10 sm:size-11"
        />
      </figcaption>
      <blockquote class="space-y-5 text-base leading-7 text-gray-300">
        <div aria-hidden="true" class="flex h-7 items-center gap-4">
          <ResumeQuoteMark class="h-[18px] w-6 shrink-0 text-slate-400" />
          <span class="quote-rule h-px flex-1" />
        </div>
        <p v-for="(paragraph, index) in recommendation.quote.split(/\n\n+/)" :key="index">
          {{ paragraph }}
        </p>
      </blockquote>
    </figure>
  </UCard>
</template>

<script setup lang="ts">
import type { Recommendation } from '~/data/resume'

defineProps<{ recommendation: Recommendation }>()
</script>

<style scoped>
.quote-rule {
  background: linear-gradient(90deg, #94a3b833, #94a3b814 75%, transparent);
}
</style>
