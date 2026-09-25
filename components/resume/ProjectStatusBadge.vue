<template>
  <span
    v-if="status === 'Live'"
    class="inline-flex items-center gap-1.5 rounded bg-[#e62117] px-2 py-1 text-xs font-bold uppercase leading-none tracking-wider text-white shadow-[0_0_16px_#e6211766]"
  >
    <span class="relative flex h-2 w-2">
      <span
        class="absolute inline-flex h-full w-full rounded-full bg-white opacity-75 motion-safe:animate-ping"
      />
      <span class="relative inline-flex h-2 w-2 rounded-full bg-white" />
    </span>
    Live
  </span>
  <span
    v-else-if="status === 'In Development'"
    class="inline-flex items-center gap-1.5 rounded-full bg-amber-400/10 px-2.5 py-1 text-xs font-semibold leading-none text-amber-300 ring-1 ring-inset ring-amber-400/40"
  >
    <UIcon name="i-jpm-wrench-screwdriver" class="h-3.5 w-3.5" />
    In Development
  </span>
  <span
    v-else
    class="inline-flex items-center gap-1.5 rounded-full bg-gray-700/60 px-2.5 py-1 text-xs font-medium leading-none text-gray-300 ring-1 ring-inset ring-gray-600"
  >
    <UIcon name="i-jpm-chat-bubble-bottom-center-text" class="h-3.5 w-3.5" />
    {{ status }}
  </span>
</template>
<script setup lang="ts">
import type { ProjectStatus } from '~/data/resume'
defineProps<{ status: ProjectStatus }>()
</script>
