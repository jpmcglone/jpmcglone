<template>
  <div id="education" class="scroll-mt-6">
    <ResumeSectionHeading icon="i-jpm-academic-cap" title="Education" />
    <UCard class="bg-gradient-to-br from-primary-400/[0.06] to-transparent">
      <div class="space-y-6">
        <div class="space-y-2">
          <img
            v-if="education.logo"
            :src="education.logo"
            :alt="`${education.school} logo`"
            width="48"
            height="48"
            loading="lazy"
            class="mb-4 size-12 company-logo ring-1 ring-white/10"
          />
          <p class="flex items-center gap-2 text-xs font-medium leading-[18px] text-gray-400">
            <UIcon name="i-jpm-calendar-days" class="h-4 w-4 shrink-0" aria-hidden="true" />
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
              <UIcon
                name="i-jpm-arrow-up-right"
                class="h-4 w-4 shrink-0 self-center"
                aria-hidden="true"
              />
            </a>
            <span v-else>{{ education.school }}</span>
          </p>
          <p v-if="education.studies" class="text-sm leading-relaxed text-gray-400">
            {{ education.studies }}
          </p>
        </div>
        <div
          class="flex flex-wrap items-center justify-between gap-3 border-t border-gray-700/70 pt-4"
        >
          <p class="flex items-center gap-2 text-sm leading-[22px] text-gray-400">
            <UIcon name="i-jpm-map-pin" class="h-4 w-4 shrink-0" aria-hidden="true" />
            {{ education.location }}
          </p>
          <dl class="flex flex-wrap gap-x-5 gap-y-3">
            <div v-if="education.majorGpa" class="flex items-baseline gap-2">
              <dd class="text-xl font-semibold tabular-nums text-primary-300">
                {{ education.majorGpa }}
              </dd>
              <dt class="text-xs font-medium text-gray-300">CS GPA</dt>
            </div>
            <div v-if="education.gpa" class="flex items-baseline gap-2">
              <dd class="text-lg font-medium tabular-nums text-gray-200">{{ education.gpa }}</dd>
              <dt class="text-xs text-gray-400">Overall GPA</dt>
            </div>
          </dl>
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
      return ['degree', 'school', 'location', 'period'].every((key) => key in value)
    },
  },
})
</script>
