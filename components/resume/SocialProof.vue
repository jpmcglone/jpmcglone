<template>
  <div class="scroll-mt-16">
    <div class="grid grid-cols-2 gap-4 mb-8">
      <UCard v-if="metrics?.yearsExperience" class="text-center p-4 dark:bg-gray-800">
        <div class="flex flex-col items-center">
          <UIcon name="i-heroicons-clock" class="h-8 w-8 text-primary-500 mb-2" />
          <h4 class="text-2xl font-bold text-gray-900 dark:text-white">
            {{ metrics.yearsExperience }}+
          </h4>
          <p class="text-sm text-gray-600 dark:text-gray-400">Years Experience</p>
        </div>
      </UCard>

      <UCard v-if="metrics?.employersSatisfied" class="text-center p-4 dark:bg-gray-800">
        <div class="flex flex-col items-center">
          <UIcon name="i-heroicons-users" class="h-8 w-8 text-primary-500 mb-2" />
          <h4 class="text-2xl font-bold text-gray-900 dark:text-white">
            {{ metrics.employersSatisfied }}+
          </h4>
          <p class="text-sm text-gray-600 dark:text-gray-400">Satisfied Employers</p>
        </div>
      </UCard>
    </div>
  </div>
</template>

<script setup>
defineProps({
  metrics: {
    type: Object,
    required: true
  }
})
</script> 