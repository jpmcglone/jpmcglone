<template>
  <div>
    <ResumeSectionHeading icon="i-heroicons-trophy" title="Achievements" />
    <div class="grid md:grid-cols-2 gap-4">
      <UCard
        v-for="achievement in achievements"
        :key="achievement.title"
        class="dark:bg-gray-800"
      >
        <div class="flex items-start gap-4">
          <div>
            <h3 class="text-base font-medium text-gray-900 dark:text-white mb-2">
              {{ achievement.title }}
            </h3>
            <p class="text-sm text-gray-600 dark:text-gray-100">
              {{ achievement.description }}
            </p>
          </div>
          <UBadge
            v-if="achievement.metric"
            color="primary"
            variant="soft"
            size="sm"
          >
            {{ achievement.metric }}
          </UBadge>
        </div>
      </UCard>
    </div>
  </div>
</template>

<script setup>
defineProps({
  achievements: {
    type: Array,
    required: true,
    validator: (value) => {
      return value.every(achievement =>
        'title' in achievement &&
        'description' in achievement
      )
    }
  }
})
</script>
