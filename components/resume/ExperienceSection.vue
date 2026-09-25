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
          v-for="(job, index) in visiblePastRoles"
          :key="job.company"
          :class="gapBefore(job, index, pastRoles)"
        >
          <ResumeJobCard
            :job="job"
            :should-show-year="shouldShowYear(job, index, pastRoles)"
            :is-current-role="false"
          />
        </div>

        <template v-if="earlierRoles.length">
          <div ref="earlierToggle" class="mt-8 pr-16 md:pr-20 print:hidden">
            <button
              type="button"
              class="group flex w-full items-center gap-4 rounded-2xl border border-dashed border-gray-600 bg-gray-900/60 px-4 py-3 text-left transition-colors hover:border-gray-400 hover:bg-gray-800/80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-400"
              :aria-expanded="expanded"
              aria-controls="earlier-experience"
              @click="expanded = !expanded"
            >
              <span v-if="!expanded" aria-hidden="true" class="flex shrink-0 -space-x-2">
                <UAvatar
                  v-for="job in earlierLogos"
                  :key="job.company"
                  :src="job.logo"
                  :alt="job.company"
                  size="sm"
                  class="company-logo ring-2 ring-gray-900"
                  :ui="{ root: 'company-logo' }"
                />
              </span>
              <span class="min-w-0 flex-1">
                <span class="block text-sm font-semibold text-gray-100">
                  {{ expanded ? 'Show fewer roles' : `Show ${earlierRoles.length} more roles` }}
                </span>
                <span v-if="!expanded" class="block text-xs text-gray-400">
                  {{ earlierSpan }}
                </span>
              </span>
              <UIcon
                name="i-jpm-arrow-right"
                class="size-4 shrink-0 text-link transition-transform duration-300 motion-reduce:transition-none"
                :class="expanded ? '-rotate-90' : 'rotate-90'"
              />
            </button>
          </div>

          <div
            id="earlier-experience"
            class="grid transition-[grid-template-rows] duration-500 ease-out [overflow-anchor:none] motion-reduce:transition-none print:grid-rows-[1fr]"
            :class="expanded ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'"
            :inert="!expanded"
          >
            <div class="-mx-3 min-h-0 overflow-hidden print:overflow-visible">
              <div class="px-3 pb-3">
                <div
                  v-for="(job, index) in earlierRoles"
                  :key="job.company"
                  class="transition duration-500 ease-out motion-reduce:transition-none print:translate-y-0 print:opacity-100"
                  :class="[
                    gapBefore(job, index + visiblePastCount, pastRoles),
                    expanded ? 'translate-y-0 opacity-100' : '-translate-y-3 opacity-0',
                  ]"
                  :style="{ transitionDelay: expanded ? `${Math.min(index, 8) * 60}ms` : '0ms' }"
                >
                  <ResumeJobCard
                    :job="job"
                    :should-show-year="shouldShowYear(job, index + visiblePastCount, pastRoles)"
                    :is-current-role="false"
                  />
                </div>
                <div class="mt-8 pr-16 md:pr-20 print:hidden">
                  <button
                    type="button"
                    class="flex w-full items-center justify-between gap-4 rounded-2xl border border-dashed border-gray-600 bg-gray-900/60 px-4 py-3 text-left text-sm font-semibold text-gray-100 transition-colors hover:border-gray-400 hover:bg-gray-800/80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-400"
                    aria-controls="earlier-experience"
                    :aria-expanded="expanded"
                    @click="collapseFromBottom"
                  >
                    Show fewer roles
                    <UIcon name="i-jpm-arrow-right" class="size-4 shrink-0 -rotate-90 text-link" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </template>
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

const visiblePastCount = 2
const visiblePastRoles = computed(() => pastRoles.value.slice(0, visiblePastCount))
const earlierRoles = computed(() => pastRoles.value.slice(visiblePastCount))
const earlierLogos = computed(() => earlierRoles.value.filter((job) => job.logo).slice(0, 6))
const earlierSpan = computed(() => {
  const roles = earlierRoles.value
  if (!roles.length) return ''
  const start = roles.at(-1).period.split(' - ')[0]
  const end = getEndYear(roles[0].period)
  return start === end ? start : `${start}–${end}`
})
const expanded = ref(false)
const earlierToggle = useTemplateRef('earlierToggle')
const motionPreference = usePreferredReducedMotion()

function collapseFromBottom() {
  const toggle = earlierToggle.value
  if (!toggle) {
    expanded.value = false
    return
  }
  const reduceMotion = motionPreference.value === 'reduce'
  let collapsed = false
  const collapse = () => {
    if (collapsed) return
    collapsed = true
    window.removeEventListener('scrollend', collapse)
    expanded.value = false
    toggle.querySelector('button')?.focus({ preventScroll: true })
  }
  // Collapse only after scrolling back up, so the shrinking list can't cancel the scroll.
  if (!reduceMotion) {
    window.addEventListener('scrollend', collapse, { once: true })
    setTimeout(collapse, 900)
  }
  toggle.scrollIntoView({ block: 'center', behavior: reduceMotion ? 'instant' : 'smooth' })
  if (reduceMotion) collapse()
}

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
