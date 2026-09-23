<template>
  <section v-if="projects.length" id="projects" class="scroll-mt-6">
    <ResumeSectionHeading icon="i-jpm-rocket-launch" title="Projects & Advisory" />
    <ResumeCardStack
      id="projects"
      :items="stackItems"
      label="Projects and advisory"
      item-label="project"
      plural-label="projects"
    >
      <template #default="{ index }">
        <ResumeProjectCard :project="orderedProjects[index]!" />
      </template>
    </ResumeCardStack>
  </section>
</template>
<script setup lang="ts">
import type { Project } from '~/data/resume'
const props = defineProps<{ projects: Project[] }>()
const orderedProjects = computed(() =>
  [...props.projects].sort((a, b) => Number(!!b.featured) - Number(!!a.featured)),
)
const stackItems = computed(() =>
  orderedProjects.value.map((project) => ({
    id: project.name,
    label: project.name,
    image: project.logo,
  })),
)
</script>
