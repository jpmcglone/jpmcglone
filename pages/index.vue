<template>
  <div class="mx-auto max-w-xl px-6 pb-6 pt-12 sm:pt-16">
    <div class="flex flex-col items-center gap-4 text-center">
      <UAvatar
        :src="indexData.personalInfo.avatar"
        :alt="indexData.personalInfo.name"
        :ui="{ root: 'size-[72px]' }"
        size="2xl"
        width="72"
        height="72"
        fetchpriority="high"
        decoding="async"
        class="mb-1 ring-1 ring-gray-700"
      />
      <h1
        class="text-[32px] font-semibold leading-tight tracking-tight text-gray-50 sm:text-[40px]"
      >
        {{ indexData.personalInfo.name }}
      </h1>
      <p class="text-base font-semibold text-gray-300">{{ indexData.personalInfo.title }}</p>
      <p
        class="inline-flex items-center gap-2 rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300 ring-1 ring-inset ring-emerald-400/30"
      >
        <span aria-hidden="true" class="relative flex size-2">
          <span
            class="absolute inline-flex size-full rounded-full bg-emerald-300 opacity-75 motion-safe:animate-ping"
          />
          <span class="relative inline-flex size-2 rounded-full bg-emerald-300" />
        </span>
        {{ indexData.personalInfo.availability }}
      </p>
      <p class="max-w-md text-base leading-relaxed text-gray-400">
        {{ indexData.personalInfo.description }}
      </p>
      <p class="highlight max-w-md text-sm leading-relaxed text-gray-300">
        <InlineContent :text="indexData.personalInfo.highlight" />
      </p>
      <p class="flex flex-wrap items-center justify-center gap-2 text-sm text-gray-400">
        <VirginiaIcon class="h-4 w-6" />
        <span>
          {{ indexData.personalInfo.location }}
          <span aria-hidden="true">·</span>
          {{ indexData.personalInfo.workPreference }}
        </span>
      </p>
      <div class="flex flex-wrap justify-center gap-3">
        <UButton :to="indexData.resume.link" color="neutral" size="md" class="px-6 py-3">
          {{ indexData.resume.buttonText }}
        </UButton>
        <UButton
          to="/resume.pdf"
          external
          download="John-P-McGlone-Resume.pdf"
          aria-label="Download résumé as PDF"
          color="neutral"
          variant="soft"
          size="md"
          class="px-5 py-3"
        >
          <UIcon name="i-jpm-document-text" class="size-4" />
          Download PDF
        </UButton>
      </div>
      <div class="flex justify-center gap-6 pt-1">
        <a
          v-for="social in indexData.personalInfo.socialLinks"
          :key="social.name"
          :href="social.url"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex min-h-9 items-center gap-2 text-sm font-medium text-link"
        >
          <UIcon :name="social.icon" class="h-4 w-4" />
          {{ social.name }}
          <UIcon name="i-jpm-arrow-up-right" class="h-3 w-3" />
        </a>
      </div>
    </div>

    <section v-if="buildingNow.length" aria-labelledby="building-now" class="mt-12">
      <h2
        id="building-now"
        class="mb-3 text-center text-xs font-semibold uppercase tracking-widest text-gray-400"
      >
        Building now
      </h2>
      <div class="grid gap-3">
        <a
          v-for="project in buildingNow"
          :key="project.name"
          :href="project.url"
          target="_blank"
          rel="noopener noreferrer"
          class="group flex gap-3 rounded-xl bg-gray-800/60 p-4 ring-1 ring-gray-700 transition hover:bg-gray-800 hover:ring-gray-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-400"
        >
          <img
            :src="project.logo"
            :alt="`${project.name} logo`"
            width="40"
            height="40"
            class="company-logo size-10 shrink-0 object-contain"
          />
          <span class="min-w-0">
            <span class="flex flex-wrap items-center gap-x-2 gap-y-1">
              <span class="font-semibold text-gray-50 group-hover:underline">
                {{ project.name }}
              </span>
              <ResumeProjectStatusBadge :status="project.status" />
            </span>
            <span class="mt-1.5 block text-sm leading-snug text-gray-400">
              {{ project.description }}
            </span>
          </span>
        </a>
      </div>
    </section>

    <p
      class="mt-10 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-gray-500"
    >
      <span>Off the clock:</span>
      <UTooltip
        v-for="tag in indexData.personalInfo.offTheClock"
        :key="tag.label"
        :text="tag.tooltip"
      >
        <NuxtLink
          v-if="tag.link"
          :to="tag.link"
          :target="tag.link.startsWith('https:') ? '_blank' : undefined"
          rel="noopener noreferrer"
          class="inline-flex min-h-8 items-center gap-1.5 text-gray-400 transition-colors hover:text-white"
        >
          <UIcon :name="tag.icon" class="size-3.5" />
          {{ tag.label }}
        </NuxtLink>
        <span v-else class="inline-flex min-h-8 items-center gap-1.5 text-gray-400">
          <UIcon :name="tag.icon" class="size-3.5" />
          {{ tag.label }}
        </span>
      </UTooltip>
    </p>
  </div>
</template>

<script setup>
import indexData from '~/data/index'
import resumeData from '~/data/resume'

definePageMeta({ colorMode: 'dark' })
usePageMetadata(indexData.meta)

const buildingNow = resumeData.projects.filter((project) => project.status !== 'Advising')
</script>

<style scoped>
.highlight :deep(a) {
  color: var(--link-default);
  text-decoration: underline;
  text-underline-offset: 3px;
}
.highlight :deep(a:hover) {
  color: var(--link-hover);
}
</style>
