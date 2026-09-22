<template>
  <div class="scroll-mt-6">
    <ResumeSectionHeading icon="i-heroicons-flag" title="Objective" />
    <p class="text-gray-300 leading-relaxed text-base">
      {{ objective }}
    </p>
  </div>
</template>

<script setup>
defineProps({
  objective: {
    type: String,
    required: true,
  },
})
</script>
