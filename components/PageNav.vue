<template>
  <nav aria-label="Main navigation" class="mb-12 flex items-center justify-between gap-4 text-sm">
    <NuxtLink to="/" class="inline-flex items-center gap-2 text-link">
      <UIcon name="i-jpm-arrow-left" class="h-4 w-4" />
      Home
    </NuxtLink>
    <span class="text-gray-400">{{ title }}</span>
  </nav>
</template>

<script setup lang="ts">
defineProps<{ title: string }>()
</script>
