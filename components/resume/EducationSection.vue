<template>
  <div id="education" class="scroll-mt-6">
    <ResumeSectionHeading icon="i-heroicons-academic-cap" title="Education" />
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
            <a
              v-if="education.schoolUrl"
              :href="education.schoolUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="hover:text-primary-500 dark:hover:text-primary-400 transition-colors underline underline-offset-4"
            >{{ education.school }}</a>
            <span v-else>{{ education.school }}</span>
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
