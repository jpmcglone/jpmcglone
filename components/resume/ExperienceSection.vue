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
        <p class="text-sm font-medium text-gray-500 dark:text-gray-400 my-2">Current</p>
        <ResumeJobCard
          v-for="(job, index) in currentRoles"
          :key="job.company"
          :job="job"
          :should-show-year="shouldShowYear(job, index, currentRoles)"
          :is-current-role="true"
          ref="currentJobCards"
        />
      </div>

      <!-- Past Roles -->
      <div class="space-y-12">
        <h3 class="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Previous</h3>
        <ResumeJobCard
          v-for="(job, index) in pastRoles"
          :key="job.company"
          :job="job"
          :should-show-year="shouldShowYear(job, index, pastRoles)"
          :is-current-role="false"
          ref="pastJobCards"
        />
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