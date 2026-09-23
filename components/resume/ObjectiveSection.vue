<template>
  <div class="objective-section scroll-mt-6 py-8">
    <ResumeSectionHeading icon="i-jpm-flag" title="Objective" />
    <p class="text-gray-200 leading-relaxed text-lg">
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

<style scoped>
.objective-section {
  position: relative;
}
.objective-section::before,
.objective-section::after {
  content: '';
  position: absolute;
  inset-inline: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--color-primary-400), transparent);
  opacity: 0.5;
}
.objective-section::before {
  top: 0;
}
.objective-section::after {
  bottom: 0;
}
</style>
