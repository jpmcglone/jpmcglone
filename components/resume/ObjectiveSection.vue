<template>
  <div class="scroll-mt-6">
    <ResumeSectionHeading icon="i-heroicons-flag" title="Objective" />
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
