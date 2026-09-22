<template>
  <div id="experience" class="scroll-mt-6">
    <ResumeSectionHeading icon="i-heroicons-briefcase" title="Experience" />

    <div class="relative">
      <!-- Timeline line -->
      <div aria-hidden="true" class="absolute bottom-0 right-7 top-12 w-px bg-gray-600" />

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
    required: true,
  },
})

const currentRoles = computed(() => props.experience.filter((job) => job.isCurrentRole) || [])

const pastRoles = computed(() => props.experience.filter((job) => !job.isCurrentRole) || [])

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
