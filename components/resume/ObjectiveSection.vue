<template>
  <div class="scroll-mt-6">
    <h2 class="text-xl font-semibold mb-4 flex items-center gap-2">
      <UIcon name="i-heroicons-flag" class="text-primary-500 h-5 w-5" />
      Objective
    </h2>
    <p class="text-gray-600 dark:text-gray-300 leading-relaxed text-lg py-4 px-1">
      {{ objective }}
    </p>
  </div>
</template>

<script setup>
defineProps({
  objective: {
    type: String,
    required: true
  }
})
</script> 