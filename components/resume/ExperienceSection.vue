<template>
  <div id="experience" class="scroll-mt-6">
    <ResumeSectionHeading icon="i-jpm-briefcase" title="Experience" />

    <div class="relative">
      <!-- Timeline line -->
      <div
        aria-hidden="true"
        class="absolute bottom-0 right-7 w-px bg-gray-600"
        :class="currentRoles.length ? 'top-18' : 'top-16'"
      />

      <!-- Current Roles -->
      <div v-if="currentRoles.length" class="current-experience relative mb-12">
        <h3
          class="mb-4 flex w-fit items-center gap-2 text-sm font-semibold uppercase tracking-widest text-emerald-300"
        >
          <span
            aria-hidden="true"
            class="size-2 rounded-full bg-emerald-300 shadow-[0_0_12px_#6ee7b766]"
          />
          Current
        </h3>
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

<style scoped>
.current-experience::before {
  content: '';
  position: absolute;
  right: 1.75rem;
  top: 4.5rem;
  bottom: -7rem;
  width: 1px;
  background: linear-gradient(to bottom, #6ee7b7 0%, #34d399 25%, var(--color-gray-600) 100%);
}
</style>
