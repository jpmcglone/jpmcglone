<template>
  <div id="experience" class="scroll-mt-6">
    <ResumeSectionHeading icon="i-heroicons-briefcase" title="Experience" />

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
      <div v-if="currentRoles.length" class="mb-12">
        <p class="text-sm font-medium text-gray-500 dark:text-gray-400 my-2">Current</p>
        <div
          v-for="(job, index) in currentRoles"
          :key="job.company"
          :class="gapBefore(job, index, currentRoles)"
        >
          <ResumeJobCard
            :job="job"
            :should-show-year="shouldShowYear(job, index, currentRoles)"
            :is-current-role="true"
            ref="currentJobCards"
          />
        </div>
      </div>

      <!-- Past Roles -->
      <div>
        <h3 class="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Previous</h3>
        <div
          v-for="(job, index) in pastRoles"
          :key="job.company"
          :class="gapBefore(job, index, pastRoles)"
        >
          <ResumeJobCard
            :job="job"
            :should-show-year="shouldShowYear(job, index, pastRoles)"
            :is-current-role="false"
            ref="pastJobCards"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
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
  const allJobCards = [...currentJobCards.value, ...pastJobCards.value]
  const allRoles = [...currentRoles.value, ...pastRoles.value]
  if (!allJobCards.length) return 0
  const firstCard = allJobCards.find((_, index) =>
    shouldShowYear(allRoles[index], index, allRoles)
  )
  return firstCard?.offsetTop || 0
})

const shouldShowYear = (job, index, roles) => {
  if (index === 0) return true
  return getEndYear(job.period) !== getEndYear(roles[index - 1].period)
}

const gapBefore = (job, index, roles) => {
  if (index === 0) return ''
  const prevIsContract = roles[index - 1].isContract
  const currIsContract = job.isContract
  if (prevIsContract && currIsContract) return 'mt-5'
  return 'mt-12'
}
</script>
