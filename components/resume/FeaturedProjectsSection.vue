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
              <a
                v-if="project.url"
                :href="project.url"
                target="_blank"
                rel="noopener noreferrer"
                class="shrink-0"
              >
                <div
                  v-if="!project.logo"
                  class="w-12 h-12 md:w-14 md:h-14 rounded-lg bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center flex-shrink-0"
                >
                  <span class="text-sm md:text-base font-semibold text-primary-600 dark:text-primary-400 uppercase">{{ initials(project.name) }}</span>
                </div>
                <UAvatar
                  v-else
                  :src="project.logo"
                  :alt="project.name"
                  size="lg"
                  :ui="{ rounded: 'rounded-lg' }"
                />
              </a>
              <template v-else>
                <div
                  v-if="!project.logo"
                  class="w-12 h-12 md:w-14 md:h-14 rounded-lg bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center flex-shrink-0"
                >
                  <span class="text-sm md:text-base font-semibold text-primary-600 dark:text-primary-400 uppercase">{{ initials(project.name) }}</span>
                </div>
                <UAvatar
                  v-else
                  :src="project.logo"
                  :alt="project.name"
                  size="lg"
                  :ui="{ rounded: 'rounded-lg' }"
                />
              </template>
              <h3 class="pt-1 text-base font-medium text-gray-900 dark:text-white">
                {{ project.name }}
              </h3>
            </div>
            <UBadge
              color="gray"
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

const initials = (name) => {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .map(w => w[0])
    .slice(0, 2)
    .join('')
    .toUpperCase()
}
</script>
