<template>
  <div class="relative pr-8 md:pr-12">
    <!-- Timeline year -->
    <div
      v-if="shouldShowYear"
      class="absolute -right-[0.25rem] top-5 translate-x-1/2"
    >
      <div :class="[
        'text-[10px] md:text-xs font-medium px-2 md:px-3 py-1 md:py-1.5 rounded-full',
        isCurrentRole
          ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/20 dark:shadow-primary-500/10'
          : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 shadow-md'
      ]">
        {{ job.period.endsWith('Present') ? 'Present' : getEndYear(job.period) }}
      </div>
    </div>

    <UCard
      :class="[
        'transition-all duration-300',
        job.isContract
          ? 'dark:bg-gray-800/70 border-l-2 border-amber-400/40 dark:border-amber-400/25 hover:shadow-md'
          : isCurrentRole
            ? 'bg-gradient-to-b from-emerald-500/10 to-transparent dark:from-emerald-500/10 dark:bg-gray-700/60 shadow-md hover:shadow-xl ring-1 ring-emerald-500/20 dark:ring-emerald-400/15'
            : 'dark:bg-gray-700/60 shadow-md hover:shadow-xl ring-1 ring-primary-500/10 dark:ring-primary-400/10',
      ]"
    >
      <div :class="['flex flex-col', job.isContract ? 'gap-3' : 'gap-4']">
        <div class="flex items-start gap-3">
          <LinkedAvatar
            :url="job.url"
            :src="job.logo"
            :alt="job.company"
            :size="job.isContract ? 'sm' : 'lg'"
            shape="square"
          />
          <div class="flex-1 min-w-0">
            <div class="flex justify-between items-start gap-4">
              <div>
                <h3 :class="['text-base flex items-center gap-2 text-gray-900 dark:text-white', job.isContract ? 'font-medium' : 'font-semibold']">
                  <a
                    v-if="job.url"
                    :href="job.url"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                  >{{ job.company }}</a>
                  <span v-else>{{ job.company }}</span>
                  <span
                    v-if="job.isDefunct"
                    class="text-[10px] font-normal px-1.5 py-0.5 rounded border border-gray-300 dark:border-gray-600 text-gray-400 dark:text-gray-500 tracking-wide"
                  >closed</span>
                </h3>
                <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  {{ job.title }}
                  <template v-if="job.isContract">
                    <span class="text-amber-500/70 dark:text-amber-400/60"> · Contract</span>
                    <span v-if="job.isRemote" class="text-gray-400 dark:text-gray-500"> · Remote</span>
                  </template>
                  <span v-else-if="job.location" class="text-gray-400 dark:text-gray-500">
                    · {{ job.location }}
                  </span>
                </p>
              </div>
              <UBadge
                :color="job.isCurrentRole ? 'green' : 'gray'"
                variant="soft"
                size="sm"
                class="hidden md:block shrink-0"
              >
                {{ formatPeriod(job.period) }}
              </UBadge>
            </div>
          </div>
        </div>

        <!-- Mobile-only date -->
        <UBadge
          :color="job.isCurrentRole ? 'green' : 'gray'"
          variant="soft"
          size="sm"
          class="md:hidden self-start"
        >
          {{ job.period }}
        </UBadge>

        <!-- Badges row — full-time only -->
        <div v-if="!job.isContract" class="flex flex-wrap gap-2">
          <UTooltip v-for="badge in jobBadges" :key="badge.label" :text="badge.tooltip">
            <span :class="['inline-flex items-center gap-1 px-2 py-0.5 text-xs font-medium rounded-full', badge.classes]">
              <UIcon :name="badge.icon" class="h-3 w-3" />
              {{ badge.label }}
            </span>
          </UTooltip>
        </div>

        <div
          :class="[
            'border-t border-gray-200 dark:border-gray-700',
            job.isContract ? 'pt-3' : 'pt-4',
          ]"
        >
          <ul class="space-y-2">
            <li
              v-for="(item, index) in normalizedResponsibilities"
              :key="index"
              class="flex gap-2 text-sm"
              :class="item.highlighted ? 'text-gray-600 dark:text-gray-300' : 'text-gray-500 dark:text-gray-400'"
            >
              <UIcon
                v-if="item.highlighted"
                name="i-heroicons-check"
                class="flex-shrink-0 h-4 w-4 mt-1 text-primary-500"
              />
              <span v-else class="flex-shrink-0 w-4 text-center">•</span>
              <span v-html="item.text" />
            </li>
          </ul>
        </div>
      </div>
    </UCard>
  </div>
</template>

<script setup>
const props = defineProps({
  job: {
    type: Object,
    required: true
  },
  shouldShowYear: {
    type: Boolean,
    required: true
  },
  isCurrentRole: {
    type: Boolean,
    default: false
  }
})

const normalizedResponsibilities = computed(() => {
  const items = (props.job.responsibilities || []).map(item => {
    if (typeof item === 'string') return { text: item, highlighted: true }
    return { text: item.text, highlighted: item.highlighted !== false }
  })
  return [
    ...items.filter(i => i.highlighted),
    ...items.filter(i => !i.highlighted)
  ]
})

const jobBadges = computed(() => {
  const badges = []
  if (props.job.isContract) {
    badges.push({
      label: 'Contract',
      icon: 'i-heroicons-briefcase-solid',
      tooltip: 'Worked as an independent contractor or through a consulting agency',
      classes: 'bg-amber-50 text-amber-700 ring-1 ring-inset ring-amber-600/20 dark:bg-amber-400/10 dark:text-amber-400 dark:ring-amber-400/20'
    })
  } else {
    badges.push({
      label: 'Full-time',
      icon: 'i-heroicons-building-office-solid',
      tooltip: 'Full-time employee position with benefits',
      classes: 'bg-emerald-50 text-emerald-700 ring-1 ring-inset ring-emerald-600/20 dark:bg-emerald-400/10 dark:text-emerald-400 dark:ring-emerald-400/20'
    })
  }
  if (props.job.isRemote) {
    badges.push({
      label: 'Remote',
      icon: 'i-heroicons-globe-americas-solid',
      tooltip: 'Work performed primarily from home office',
      classes: 'bg-sky-50 text-sky-700 ring-1 ring-inset ring-sky-600/20 dark:bg-sky-400/10 dark:text-sky-400 dark:ring-sky-400/20'
    })
  }
  return badges
})
</script>

<style scoped>
:deep(a) {
  color: rgb(var(--color-primary-400));
  text-decoration: underline;
  text-underline-offset: 3px;
}
:deep(a:hover) {
  color: rgb(var(--color-primary-300));
}
</style>
