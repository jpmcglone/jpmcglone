<template>
  <div id="projects" v-if="projects" class="scroll-mt-6">
    <div class="flex justify-between items-center mb-4">
      <h2 class="text-xl font-semibold flex items-center gap-2 text-gray-900 dark:text-white">
        <UIcon name="i-heroicons-rocket-launch" class="text-primary-500 h-5 w-5" />
        Projects & Advisory
      </h2>
    </div>
    <div class="grid md:grid-cols-2 gap-4">
      <UCard
        v-for="project in projects"
        :key="project.name"
        class="dark:bg-gray-800"
      >
        <div class="space-y-4">
          <div class="flex items-start justify-between gap-4">
            <div class="flex items-start gap-4">
              <LinkedAvatar :url="project.url" :src="project.logo" :alt="project.name" size="lg" shape="square" />
              <h3 class="pt-1 text-base font-medium text-gray-900 dark:text-white">
                {{ project.name }}
              </h3>
            </div>
            <UBadge color="gray" variant="soft">
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
          <div v-if="project.url">
            <a
              :href="project.url"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 text-sm text-primary-600 dark:text-primary-400 hover:underline"
            >
              <UIcon name="i-heroicons-link" class="h-4 w-4" />
              Visit site
            </a>
          </div>
        </div>
      </UCard>
    </div>
  </div>
</template>

<script setup>
defineProps({
  projects: {
    type: Array,
    required: true
  }
})
</script>
