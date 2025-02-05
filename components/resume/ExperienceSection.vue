<template>
  <div id="experience" class="scroll-mt-6">
    <h2 class="text-xl font-semibold mb-4 flex items-center gap-2">
      <UIcon name="i-heroicons-briefcase" class="text-primary-500 h-5 w-5" />
      Experience
    </h2>
    
    <div class="relative">
      <!-- Timeline line -->
      <div 
        class="absolute right-0 w-px bg-gradient-to-t from-gray-200 via-gray-200 via-90% to-primary-500 dark:from-gray-700 dark:via-gray-700 dark:via-90% dark:to-primary-500"
        :style="{
          top: `${firstDateTop + 24}px`,
          bottom: '0'
        }"
      />
      
      <!-- Current Roles -->
      <div v-if="currentRoles.length" class="space-y-12 mb-12">
        <h3 class="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Current</h3>
        <div
          v-for="(job, index) in currentRoles"
          :key="job.company"
          class="relative pr-8 md:pr-12"
          ref="currentJobCards"
        >
          <!-- Timeline year -->
          <div 
            v-if="shouldShowYear(job, index, currentRoles)"
            class="absolute -right-[0.25rem] top-5 translate-x-1/2"
          >
            <div class="bg-primary-500 text-white text-[10px] md:text-xs font-medium px-2 md:px-3 py-1 md:py-1.5 rounded-full shadow-lg shadow-primary-500/20 dark:shadow-primary-500/10">
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
      </div>

      <!-- Past Roles -->
      <div class="space-y-12">
        <h3 class="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Previous</h3>
        <div
          v-for="(job, index) in pastRoles"
          :key="job.company"
          class="relative pr-8 md:pr-12"
          ref="pastJobCards"
        >
          <!-- Timeline year -->
          <div 
            v-if="shouldShowYear(job, index, pastRoles)"
            class="absolute -right-[0.25rem] top-5 translate-x-1/2"
          >
            <div class="bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-[10px] md:text-xs font-medium px-2 md:px-3 py-1 md:py-1.5 rounded-full shadow-md">
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
                      {{ job.period }}
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
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'

const currentYear = new Date().getFullYear()

const props = defineProps({
  experience: {
    type: Array,
    required: true
  }
})

const currentRoles = computed(() => 
  props.experience.filter(job => job.isCurrentRole) || []
)

const pastRoles = computed(() => 
  props.experience.filter(job => !job.isCurrentRole) || []
)

const currentJobCards = ref([])
const pastJobCards = ref([])

const firstDateTop = computed(() => {
  // Get all job cards in display order
  const allJobCards = [...currentJobCards.value, ...pastJobCards.value]
  const allRoles = [...currentRoles.value, ...pastRoles.value]
  
  if (!allJobCards.length) return 0
  
  // Find first card with a visible year
  const firstCard = allJobCards.find((_, index) => 
    shouldShowYear(allRoles[index], index, allRoles)
  )
  
  return firstCard?.offsetTop || 0
})

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

const shouldShowYear = (job, index, roles) => {
  if (index === 0) return true
  
  const currentYear = getEndYear(job.period)
  const previousYear = getEndYear(roles[index - 1].period)
  
  return currentYear !== previousYear
}
</script> 