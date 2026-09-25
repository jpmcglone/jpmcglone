<template>
  <div class="relative pr-16 md:pr-20">
    <!-- Timeline year -->
    <div v-if="shouldShowYear" class="absolute right-0 top-5 z-10">
      <div
        :class="[
          'flex h-8 w-14 items-center justify-center rounded-full border text-xs font-medium',
          isCurrentRole
            ? 'border-emerald-300 bg-emerald-300 text-gray-950 shadow-[0_0_16px_#6ee7b733]'
            : 'border-gray-600 bg-gray-800 text-gray-300',
        ]"
      >
        {{ isCurrentRole ? 'Now' : getEndYear(job.period) }}
      </div>
    </div>

    <UCard
      :ui="{
        root: isCurrentRole
          ? 'bg-gradient-to-br from-emerald-950/60 to-gray-800 ring-1 ring-emerald-300/50 shadow-lg shadow-emerald-950/20'
          : job.isContract
            ? 'bg-gray-900 ring-1 ring-gray-800'
            : 'bg-gray-800 ring-1 ring-primary-400/25',
      }"
      :data-employment="
        job.isIndependent ? 'independent' : job.isContract ? 'contract' : 'full-time'
      "
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
                <h3
                  :class="[
                    'text-lg flex flex-wrap items-center gap-2 text-gray-50',
                    job.isContract ? 'font-medium' : 'font-semibold',
                  ]"
                >
                  <a
                    v-if="job.url"
                    :href="job.url"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-link"
                  >
                    {{ job.company }}
                  </a>
                  <span v-else>{{ job.company }}</span>
                  <UTooltip v-if="job.companyStatus" :text="job.companyStatus.note">
                    <span
                      :class="[
                        'inline-flex items-center gap-1.5 rounded-full py-0.5 pr-2 text-[11px] font-medium ring-1 ring-inset',
                        job.companyStatus.logo ? 'pl-0.5' : 'pl-2',
                        statusClasses[job.companyStatus.kind],
                      ]"
                    >
                      <img
                        v-if="job.companyStatus.logo"
                        :src="job.companyStatus.logo"
                        alt=""
                        width="16"
                        height="16"
                        class="size-4 rounded-full"
                      />
                      {{
                        [job.companyStatus.label, job.companyStatus.date]
                          .filter(Boolean)
                          .join(' · ')
                      }}
                    </span>
                  </UTooltip>
                </h3>
                <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  {{ job.title }}
                  <template v-if="job.isContract">
                    <span class="text-amber-500/70 dark:text-amber-400/60">· Contract</span>
                    <span v-if="job.isRemote" class="text-gray-400 dark:text-gray-500">
                      · Remote
                    </span>
                  </template>
                  <span v-else-if="job.location" class="text-gray-400 dark:text-gray-500">
                    · {{ job.location }}
                  </span>
                </p>
              </div>
              <UBadge
                :color="job.isCurrentRole ? 'success' : 'neutral'"
                variant="soft"
                size="sm"
                class="hidden md:block shrink-0"
              >
                {{ formatExperiencePeriod(job) }}
              </UBadge>
            </div>
          </div>
        </div>

        <!-- Mobile-only date -->
        <UBadge
          :color="job.isCurrentRole ? 'success' : 'neutral'"
          variant="soft"
          size="sm"
          class="md:hidden self-start"
        >
          {{ formatExperiencePeriod(job) }}
        </UBadge>

        <!-- Badges row — full-time only -->
        <div v-if="!job.isContract" class="flex flex-wrap gap-2">
          <UTooltip v-for="badge in jobBadges" :key="badge.label" :text="badge.tooltip">
            <span
              :class="[
                'inline-flex items-center gap-1 px-2 py-0.5 text-xs font-medium rounded-full',
                badge.classes,
              ]"
            >
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
          <ul class="space-y-4">
            <li
              v-for="(item, index) in normalizedResponsibilities"
              :key="index"
              class="flex gap-3 text-base leading-relaxed"
              :class="
                item.highlighted
                  ? 'text-gray-600 dark:text-gray-300'
                  : 'text-gray-500 dark:text-gray-400'
              "
            >
              <UIcon
                v-if="item.highlighted"
                name="i-jpm-check"
                class="flex-shrink-0 h-4 w-4 mt-1 text-primary-500"
              />
              <span v-else class="flex-shrink-0 w-4 text-center">•</span>
              <InlineContent :text="item.text" />
            </li>
          </ul>
          <div v-if="job.appStore?.length" class="mt-5 flex flex-wrap gap-2">
            <a
              v-for="app in job.appStore"
              :key="app.url"
              :href="app.url"
              target="_blank"
              rel="noopener noreferrer"
              :aria-label="`${app.name} on the App Store`"
              class="inline-flex items-center gap-2 rounded-lg bg-black px-3 py-1.5 text-white ring-1 ring-white/20 transition hover:ring-white/40"
            >
              <UIcon name="i-simple-icons-apple" class="h-5 w-5" />
              <span class="flex flex-col leading-none">
                <span class="text-[9px] tracking-wide text-gray-300">
                  Download on the App Store
                </span>
                <span class="mt-0.5 text-sm font-semibold">{{ app.name }}</span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </UCard>
  </div>
</template>

<script setup>
const props = defineProps({
  job: {
    type: Object,
    required: true,
  },
  shouldShowYear: {
    type: Boolean,
    required: true,
  },
  isCurrentRole: {
    type: Boolean,
    default: false,
  },
})

const statusClasses = {
  acquired: 'bg-emerald-400/10 text-emerald-300 ring-emerald-400/30',
  renamed: 'bg-sky-400/10 text-sky-300 ring-sky-400/30',
  closed: 'bg-gray-700/40 text-gray-400 ring-gray-600',
}

const normalizedResponsibilities = computed(() => {
  const items = (props.job.responsibilities || []).map((item) => {
    if (typeof item === 'string') return { text: item, highlighted: true }
    return { text: item.text, highlighted: item.highlighted !== false }
  })
  return [...items.filter((i) => i.highlighted), ...items.filter((i) => !i.highlighted)]
})

const jobBadges = computed(() => {
  const badges = []
  if (props.job.isContract) {
    badges.push({
      label: 'Contract',
      icon: 'i-jpm-briefcase',
      tooltip: 'Worked as an independent contractor or through a consulting agency',
      classes:
        'bg-amber-50 text-amber-700 ring-1 ring-inset ring-amber-600/20 dark:bg-amber-400/10 dark:text-amber-400 dark:ring-amber-400/20',
    })
  } else if (props.job.isIndependent) {
    badges.push({
      label: 'Nights & weekends',
      icon: 'i-jpm-moon',
      tooltip: 'Independent passion project',
      classes: 'bg-emerald-400/10 text-emerald-300 ring-1 ring-inset ring-emerald-400/20',
    })
  } else {
    badges.push({
      label: 'Full-time',
      icon: 'i-jpm-building-office',
      tooltip: 'Full-time employee position with benefits',
      classes:
        'bg-emerald-50 text-emerald-700 ring-1 ring-inset ring-emerald-600/20 dark:bg-emerald-400/10 dark:text-emerald-400 dark:ring-emerald-400/20',
    })
  }
  if (props.job.isRemote) {
    badges.push({
      label: 'Remote',
      icon: 'i-jpm-globe-americas',
      tooltip: 'Work performed primarily from home office',
      classes:
        'bg-sky-50 text-sky-700 ring-1 ring-inset ring-sky-600/20 dark:bg-sky-400/10 dark:text-sky-400 dark:ring-sky-400/20',
    })
  }
  return badges
})
</script>

<style scoped>
:deep(li a) {
  color: var(--link-default);
  text-decoration: underline;
  text-underline-offset: 3px;
}
:deep(li a:visited) {
  color: var(--link-visited);
}
:deep(li a:hover) {
  color: var(--link-hover);
}
</style>
