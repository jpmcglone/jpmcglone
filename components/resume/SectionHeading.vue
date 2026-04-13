<template>
  <h2 class="text-xl font-semibold mb-4 flex items-center gap-2 text-gray-900 dark:text-white">
    <UIcon :name="icon" class="text-primary-500 h-5 w-5" />
    <slot>{{ title }}</slot>
  </h2>
</template>

<script setup lang="ts">
defineProps<{
  icon: string
  title?: string
}>()
</script>
