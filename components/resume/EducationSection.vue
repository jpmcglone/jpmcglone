<template>
  <div id="education" class="scroll-mt-6">
    <h2 class="text-xl font-semibold mb-4 flex items-center gap-2">
      <UIcon name="i-heroicons-academic-cap" class="text-primary-500 h-5 w-5" />
      Education
    </h2>
    <UCard class="dark:bg-gray-800">
      <div class="flex justify-between items-start gap-4">
        <div>
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
        <div class="text-right">
          <UBadge color="gray" variant="soft" size="sm">
            {{ education.period }}
          </UBadge>
          <p v-if="education.gpa" class="text-sm text-gray-500 dark:text-gray-400 mt-1">
            GPA: {{ education.gpa }}
          </p>
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