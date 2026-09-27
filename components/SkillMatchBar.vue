<template>
  <Transition
    enter-active-class="transition duration-300 ease-out motion-reduce:transition-none"
    enter-from-class="-translate-y-1 opacity-0"
    leave-active-class="transition duration-200 ease-in motion-reduce:transition-none"
    leave-to-class="-translate-y-1 opacity-0"
  >
    <div
      v-if="active && selected"
      class="mt-3 flex flex-wrap items-center justify-between gap-3 rounded-xl bg-emerald-400/10 px-3 py-2.5 ring-1 ring-emerald-400/30"
    >
      <p role="status" class="text-sm text-emerald-100">
        <span class="font-semibold text-white">{{ selected }}</span>
        lights up
        {{ summary }}
      </p>
      <UButton color="neutral" variant="ghost" size="xs" @click="clear">Clear highlight</UButton>
    </div>
  </Transition>
</template>

<script setup lang="ts">
const { active, selected, matches, clear } = useSkillHighlight()

const summary = computed(() => {
  const parts = [
    matches.value.jobs.length
      ? `${matches.value.jobs.length} ${matches.value.jobs.length === 1 ? 'job' : 'jobs'}`
      : null,
    matches.value.projects.length
      ? `${matches.value.projects.length} ${matches.value.projects.length === 1 ? 'project' : 'projects'}`
      : null,
    matches.value.recommendations.length
      ? `${matches.value.recommendations.length} ${
          matches.value.recommendations.length === 1 ? 'recommendation' : 'recommendations'
        }`
      : null,
  ].filter(Boolean)
  return parts.length ? parts.join(' · ') : 'related work on this résumé'
})
</script>
