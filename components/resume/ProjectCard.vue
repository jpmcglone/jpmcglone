<template>
  <UCard
    :ui="{
      body: project.featured ? 'p-6' : 'p-4',
      root: project.featured ? 'ring-1 ring-primary-400/30' : 'ring-1 ring-gray-700',
    }"
  >
    <div :class="project.featured ? 'space-y-4' : 'space-y-2'">
      <div class="flex items-start gap-3">
        <LinkedAvatar
          :url="project.url"
          :src="project.logo"
          :alt="project.name"
          :size="project.featured ? 'lg' : 'sm'"
          shape="square"
        />
        <div class="min-w-0">
          <h3 :class="['font-semibold text-gray-50', project.featured ? 'text-lg' : 'text-base']">
            <a
              v-if="project.url"
              :href="project.url"
              target="_blank"
              rel="noopener noreferrer"
              class="hover:underline"
            >
              {{ project.name }}
            </a>
            <span v-else>{{ project.name }}</span>
          </h3>
          <ResumeProjectStatusBadge :status="project.status" class="mt-1.5" />
        </div>
      </div>
      <p :class="['leading-relaxed text-gray-300', project.featured ? 'text-base' : 'text-sm']">
        {{ project.description }}
      </p>
      <aside
        v-if="project.originStory"
        class="flex gap-2.5 rounded-lg border-l-2 border-amber-400/60 bg-amber-400/5 px-3 py-2 text-sm leading-relaxed text-gray-300"
      >
        <UIcon name="i-jpm-sparkles" class="mt-0.5 size-4 shrink-0 text-amber-300" />
        <p>
          <span class="font-semibold text-amber-200">Origin story:&nbsp;</span>
          <em>{{ project.originStory }}</em>
        </p>
      </aside>
      <template v-if="project.technologies.length || project.url">
        <div class="flex flex-wrap gap-2">
          <UBadge
            v-for="tech in project.technologies"
            :key="tech"
            color="neutral"
            variant="soft"
            size="sm"
          >
            {{ tech }}
          </UBadge>
        </div>
        <a
          v-if="project.url"
          :href="project.url"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 text-sm text-link hover:underline"
        >
          Visit site
          <UIcon name="i-jpm-arrow-up-right" class="h-4 w-4" />
        </a>
      </template>
    </div>
  </UCard>
</template>
<script setup lang="ts">
import type { Project } from '~/data/resume'
defineProps<{ project: Project }>()
</script>
