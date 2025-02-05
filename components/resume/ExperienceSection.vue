<template>
  <div id="experience" class="scroll-mt-6">
    <h2 class="text-xl font-semibold mb-4 flex items-center gap-2">
      <UIcon name="i-heroicons-briefcase" class="text-primary-500 h-5 w-5" />
      Experience
    </h2>
    <!-- Current Roles -->
    <div class="space-y-4 mb-8">
      <h3 class="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Current</h3>
      <UCard
        v-for="job in currentRoles"
        :key="job.company"
        class="dark:bg-gray-800"
      >
        <div class="flex items-center gap-4 mb-4">
          <UAvatar
            v-if="job.logo"
            :src="job.logo"
            :alt="job.company"
            size="lg"
          />
          <div class="flex-1">
            <div class="flex justify-between items-start gap-4">
              <h3 class="text-base font-medium text-gray-900 dark:text-white">
                {{ job.company }}
              </h3>
              <UBadge color="green" variant="soft" size="sm">
                {{ job.period }}
              </UBadge>
            </div>
            <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">
              {{ job.title }}
            </p>
          </div>
        </div>
        <ul class="space-y-2">
          <li
            v-for="(item, index) in job.responsibilities"
            :key="index"
            class="flex gap-2 text-sm text-gray-600 dark:text-gray-400"
          >
            <UIcon 
              name="i-heroicons-check" 
              class="flex-shrink-0 h-4 w-4 mt-1 text-primary-500" 
            />
            {{ item }}
          </li>
        </ul>
      </UCard>
    </div>

    <!-- Past Roles -->
    <div class="space-y-4">
      <h3 class="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Previous</h3>
      <UCard
        v-for="job in pastRoles"
        :key="job.company"
        class="dark:bg-gray-800"
      >
        <div class="flex items-center gap-4 mb-4">
          <UAvatar
            v-if="job.logo"
            :src="job.logo"
            :alt="job.company"
            size="lg"
          />
          <div class="flex-1">
            <div class="flex justify-between items-start gap-4">
              <h3 class="text-base font-medium text-gray-900 dark:text-white">
                {{ job.company }}
              </h3>
              <UBadge color="gray" variant="soft" size="sm">
                {{ job.period }}
              </UBadge>
            </div>
            <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">
              {{ job.title }}
            </p>
          </div>
        </div>
        <ul class="space-y-2">
          <li
            v-for="(item, index) in job.responsibilities"
            :key="index"
            class="flex gap-2 text-sm text-gray-600 dark:text-gray-400"
          >
            <UIcon 
              name="i-heroicons-check" 
              class="flex-shrink-0 h-4 w-4 mt-1 text-primary-500" 
            />
            {{ item }}
          </li>
        </ul>
      </UCard>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  experience: {
    type: Array,
    required: true
  }
})

const currentRoles = computed(() => 
  props.experience.filter(job => job.isCurrentRole) || []
)

const pastRoles = computed(() => 
  props.experience.filter(job => !job.isCurrentRole) || []
)
</script> 