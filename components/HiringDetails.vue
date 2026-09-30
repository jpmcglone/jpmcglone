<template>
  <aside aria-label="Hiring details" class="max-w-xl space-y-2 text-xs leading-5 text-gray-400">
    <ul class="flex flex-wrap gap-x-4 gap-y-1" :class="{ 'justify-center': centered }">
      <li v-for="detail in details" :key="detail" class="inline-flex items-center gap-1.5">
        <span aria-hidden="true" class="text-emerald-300/70">✓</span>
        {{ detail }}
      </li>
    </ul>
  </aside>
</template>

<script setup lang="ts">
import { hiringPreferences } from '~/data/site'

defineProps<{ centered?: boolean }>()

const details = [
  hiringPreferences.workAuthorization,
  hiringPreferences.location,
  hiringPreferences.availability,
]
</script>
