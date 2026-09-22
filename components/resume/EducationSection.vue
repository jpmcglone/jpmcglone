<template>
  <div id="education" class="scroll-mt-6">
    <ResumeSectionHeading icon="i-heroicons-academic-cap" title="Education" />
    <UCard class="bg-gradient-to-br from-primary-400/[0.06] to-transparent">
      <div class="space-y-6">
        <div class="space-y-2">
          <p class="flex items-center gap-2 text-xs font-medium leading-[18px] text-gray-400">
            <UIcon name="i-heroicons-calendar-days" class="h-4 w-4 shrink-0" aria-hidden="true" />
            {{ education.period }}
          </p>
          <h3 class="text-xl font-semibold leading-7 text-gray-50">
            {{ education.degree }}
          </h3>
          <p class="text-base leading-relaxed text-gray-300">
            <a
              v-if="education.schoolUrl"
              :href="education.schoolUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="text-link inline-flex max-w-full items-baseline gap-2 hover:underline"
            >
              <span class="min-w-0">{{ education.school }}</span>
              <UIcon name="i-heroicons-arrow-up-right" class="h-4 w-4 shrink-0 self-center" aria-hidden="true" />
            </a>
            <span v-else>{{ education.school }}</span>
          </p>
        </div>
        <div class="flex flex-wrap items-center justify-between gap-3 border-t border-gray-700/70 pt-4">
          <p class="flex items-center gap-2 text-sm leading-[22px] text-gray-400">
            <UIcon name="i-heroicons-map-pin" class="h-4 w-4 shrink-0" aria-hidden="true" />
            {{ education.location }}
          </p>
          <p v-if="education.gpa" class="inline-flex shrink-0 items-center gap-2 rounded-lg bg-primary-400/10 px-3 py-1 ring-1 ring-inset ring-primary-400/20">
            <span class="text-lg font-semibold leading-[26px] tabular-nums text-primary-400">{{ education.gpa }}</span>
            <span class="text-xs font-medium text-gray-300">GPA</span>
          </p>
        </div>
      </div>
    </UCard>
  </div>
</template>

<script setup>
defineProps({
  education: {
    type: Object,
    required: true,
    validator: (value) => {
      return ['degree', 'school', 'location', 'period'].every(key => key in value)
    }
  }
})
</script>
