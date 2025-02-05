<template>
  <div v-if="projects">
    <div class="flex justify-between items-center mb-4">
      <h2 class="text-xl font-semibold flex items-center gap-2 text-gray-900 dark:text-white">
        <UIcon name="i-heroicons-rocket-launch" class="text-primary-500 h-5 w-5" />
        Featured Projects
      </h2>
      <UButton
        :icon="isExpanded ? 'i-heroicons-chevron-up' : 'i-heroicons-chevron-down'"
        color="gray"
        variant="ghost"
        size="xs"
        @click="toggleSection"
      />
    </div>
    <Transition name="fade">
      <div v-show="isExpanded">
        <div class="grid md:grid-cols-2 gap-4">
          <UCard
            v-for="project in projects"
            :key="project.name"
            class="dark:bg-gray-800"
          >
            <div class="space-y-4">
              <div class="flex justify-between items-start">
                <h3 class="text-base font-medium text-gray-900 dark:text-white">
                  {{ project.name }}
                </h3>
                <UBadge 
                  :color="project.status === 'In Development' ? 'orange' : 'green'"
                  variant="soft"
                >
                  {{ project.status }}
                </UBadge>
              </div>
              <p class="text-sm text-gray-600 dark:text-gray-100">
                {{ project.description }}
              </p>
              <div class="flex flex-wrap gap-2">
                <UBadge
                  v-for="tech in project.technologies"
                  :key="tech"
                  color="gray"
                  variant="soft"
                  size="sm"
                >
                  {{ tech }}
                </UBadge>
              </div>
            </div>
          </UCard>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  projects: {
    type: Array,
    required: true
  }
})

const isExpanded = ref(true)
const toggleSection = () => {
  isExpanded.value = !isExpanded.value
}
</script> 