<template>
  <div id="education" class="scroll-mt-6">
    <h2 class="text-xl font-semibold mb-4 flex items-center gap-2">
      <UIcon name="i-heroicons-academic-cap" class="text-primary-500 h-5 w-5" />
      Education
    </h2>
    <UCard class="dark:bg-gray-800">
      <div class="flex justify-between items-stretch gap-4">
        <div class="flex-grow">
          <UBadge color="gray" variant="soft" size="sm" class="mb-2">
            {{ education.period }}
          </UBadge>
          <h3 class="text-base font-medium text-gray-900 dark:text-white">
            {{ education.degree }}
          </h3>
          <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">
            {{ education.school }}
          </p>
          <p class="text-sm text-gray-500 dark:text-gray-400">
            {{ education.location }}
          </p>
        </div>
        <div v-if="education.gpa" class="relative border-2 border-gray-300 dark:border-gray-600 rounded-lg w-24 aspect-square">
          <div class="absolute top-2 left-2 text-xs text-gray-500 dark:text-gray-400">
            GPA
          </div>
          <div class="absolute inset-0 flex items-center justify-center text-2xl font-bold text-gray-900 dark:text-white">
            {{ education.gpa }}
          </div>
        </div>
      </div>
    </UCard>
  </div>
</template>

<script setup>
defineProps({
  education: {
    type: Object,
    required: true,
    validator: (value) => {
      return ['degree', 'school', 'location', 'period'].every(key => key in value)
    }
  }
})
</script> 