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
    
    <UCard class="dark:bg-gray-800 transition-all duration-300 hover:shadow-lg">
      <div class="flex flex-col gap-4">
        <div class="flex items-start gap-4">
          <UAvatar
            v-if="job.logo"
            :src="job.logo"
            :alt="job.company"
            size="lg"
          />
          <div class="flex-1 min-w-0">
            <div class="flex justify-between items-start gap-4">
              <div>
                <h3 class="text-base font-medium text-gray-900 dark:text-white">
                  {{ job.company }}
                </h3>
                <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  {{ job.title }}
                  <span v-if="job.location" class="text-gray-400 dark:text-gray-500">
                    · {{ job.location }}
                  </span>
                </p>
              </div>
              <UBadge 
                :color="job.isCurrentRole ? 'green' : 'gray'" 
                variant="soft" 
                size="sm"
                class="hidden md:block"
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

        <!-- Badges -->
        <div class="flex flex-wrap gap-2">
          <UTooltip
            v-if="job.isContract"
            text="Worked as an independent contractor or through a consulting agency"
          >
            <span
              class="inline-flex items-center gap-1 px-2 py-0.5 text-xs font-medium rounded-full bg-amber-50 text-amber-700 ring-1 ring-inset ring-amber-600/20 dark:bg-amber-400/10 dark:text-amber-400 dark:ring-amber-400/20"
            >
              <UIcon name="i-heroicons-briefcase-solid" class="h-3 w-3" />
              Contract
            </span>
          </UTooltip>
          <UTooltip
            v-if="!job.isContract"
            text="Full-time employee position with benefits"
          >
            <span
              class="inline-flex items-center gap-1 px-2 py-0.5 text-xs font-medium rounded-full bg-emerald-50 text-emerald-700 ring-1 ring-inset ring-emerald-600/20 dark:bg-emerald-400/10 dark:text-emerald-400 dark:ring-emerald-400/20"
            >
              <UIcon name="i-heroicons-building-office-solid" class="h-3 w-3" />
              Full-time
            </span>
          </UTooltip>
          <UTooltip
            v-if="job.isRemote"
            text="Work performed primarily from home office"
          >
            <span
              class="inline-flex items-center gap-1 px-2 py-0.5 text-xs font-medium rounded-full bg-sky-50 text-sky-700 ring-1 ring-inset ring-sky-600/20 dark:bg-sky-400/10 dark:text-sky-400 dark:ring-sky-400/20"
            >
              <UIcon name="i-heroicons-globe-americas-solid" class="h-3 w-3" />
              Remote
            </span>
          </UTooltip>
        </div>

        <div class="border-t border-gray-200 dark:border-gray-700 pt-4">
          <ul class="space-y-2">
            <li
              v-for="(item, index) in job.responsibilities"
              :key="index"
              class="flex gap-2 text-sm text-gray-600 dark:text-gray-400"
            >
              <UIcon 
                name="i-heroicons-check" 
                class="flex-shrink-0 h-4 w-4 mt-1 text-primary-500" 
              />
              {{ item }}
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

const currentYear = new Date().getFullYear()

const formatPeriod = (period) => {
  if (!period.includes(' - ')) return period
  const [start, end] = period.split(' - ')
  return start === end ? end : period
}

const getEndYear = (period) => {
  const [start, end] = period.split(' - ')
  if (start === end) return start
  return end === 'Present' ? currentYear : end
}
</script>