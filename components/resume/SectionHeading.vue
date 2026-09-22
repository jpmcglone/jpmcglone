<template>
  <h2 class="section-heading">
    <UIcon :name="icon" class="text-primary-400 h-5 w-5" />
    <slot>{{ title }}</slot>
  </h2>
</template>

<script setup lang="ts">
defineProps<{
  icon: string
  title?: string
}>()
</script>
