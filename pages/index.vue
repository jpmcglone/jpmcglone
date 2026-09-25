<template>
  <div class="mx-auto max-w-2xl px-6 pb-6 pt-14 sm:pt-20">
    <div class="flex flex-col items-center gap-7 text-center">
      <div class="flex flex-col items-center gap-3">
        <UAvatar
          :src="personalInfo.avatar"
          :alt="personalInfo.name"
          :ui="{ root: 'size-[104px]' }"
          size="3xl"
          width="104"
          height="104"
          fetchpriority="high"
          decoding="async"
          class="mb-1 ring-1 ring-gray-600"
        />
        <h1 class="text-[36px] font-semibold leading-tight tracking-tight text-gray-50 sm:text-5xl">
          {{ personalInfo.name }}
        </h1>
        <p class="text-lg font-medium text-gray-200 sm:text-xl">{{ personalInfo.title }}</p>
        <p
          class="inline-flex items-center gap-2 rounded-full bg-emerald-400/10 px-3 py-1.5 text-[13px] font-medium text-emerald-300 ring-1 ring-inset ring-emerald-400/30"
        >
          <span aria-hidden="true" class="relative flex size-2">
            <span
              class="absolute inline-flex size-full rounded-full bg-emerald-300 opacity-75 motion-safe:animate-ping"
            />
            <span class="relative inline-flex size-2 rounded-full bg-emerald-300" />
          </span>
          {{ personalInfo.availability }}
          <span class="hidden font-normal text-gray-400 sm:inline">
            <span aria-hidden="true" class="mx-1">·</span>
            {{ personalInfo.workPreference }}
            <span aria-hidden="true" class="mx-1">·</span>
            {{ personalInfo.location }}
          </span>
        </p>
        <p class="flex items-center gap-2 text-[13px] text-gray-400 sm:hidden">
          <VirginiaIcon class="h-4 w-6" />
          {{ personalInfo.workPreference }}
          <span aria-hidden="true">·</span>
          {{ personalInfo.location }}
        </p>
      </div>

      <div class="flex flex-col items-center gap-3.5">
        <p class="max-w-lg text-[17px] leading-relaxed text-gray-300 sm:text-lg">
          {{ personalInfo.description }}
        </p>
        <p
          class="proof inline-flex items-start gap-2.5 rounded-lg bg-gray-800/70 py-1.5 pl-1.5 pr-3.5 text-left text-sm leading-relaxed text-gray-200 ring-1 ring-gray-700 sm:items-center"
        >
          <img
            src="/images/logos/rumble.png"
            alt=""
            width="24"
            height="24"
            class="company-logo size-6 shrink-0"
          />
          <InlineContent :text="personalInfo.highlight" />
        </p>
      </div>

      <div class="flex flex-wrap items-center justify-center gap-2.5">
        <UButton
          :to="indexData.resume.link"
          color="neutral"
          size="md"
          class="min-h-11 px-6 font-semibold"
        >
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
          class="min-h-11 px-5"
        >
          <UIcon name="i-jpm-document-text" class="size-4" />
          Download PDF
        </UButton>
        <UTooltip v-for="social in personalInfo.socialLinks" :key="social.name" :text="social.name">
          <UButton
            :to="social.url"
            target="_blank"
            rel="noopener noreferrer"
            :aria-label="social.name"
            color="neutral"
            variant="soft"
            size="md"
            class="size-11 justify-center"
          >
            <UIcon :name="social.icon" class="size-[18px]" />
          </UButton>
        </UTooltip>
      </div>
    </div>

    <section v-if="buildingNow.length" aria-labelledby="building-now" class="mt-14">
      <h2 id="building-now" class="section-label">Building now</h2>
      <div class="grid gap-3">
        <a
          v-for="project in buildingNow"
          :key="project.name"
          :href="project.url"
          target="_blank"
          rel="noopener noreferrer"
          class="group flex gap-3.5 rounded-2xl bg-gray-800/60 p-4 ring-1 ring-gray-700 transition hover:bg-gray-800 hover:ring-gray-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-400"
        >
          <img
            :src="project.logo"
            :alt="`${project.name} logo`"
            width="44"
            height="44"
            class="company-logo size-11 shrink-0 object-contain"
          />
          <span class="min-w-0 flex-1">
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
          <UIcon
            name="i-jpm-arrow-up-right"
            class="size-4 shrink-0 text-link transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transition-none"
          />
        </a>
      </div>
    </section>

    <section aria-labelledby="previously-at" class="mt-14">
      <h2 id="previously-at" class="section-label">Previously at</h2>
      <ul class="flex flex-wrap justify-center gap-x-6 gap-y-4 sm:gap-x-10">
        <li
          v-for="company in previouslyAt"
          :key="company.label"
          class="flex w-16 flex-col items-center gap-2"
        >
          <img
            :src="company.logo"
            :alt="`${company.label} logo`"
            width="40"
            height="40"
            class="company-logo size-10 object-contain"
          />
          <span class="text-xs font-medium text-gray-400">{{ company.label }}</span>
        </li>
      </ul>
    </section>

    <figure
      v-if="recommendation"
      class="mt-14 rounded-2xl bg-gray-800/60 p-5 ring-1 ring-gray-700 sm:px-7 sm:py-6"
    >
      <ResumeQuoteMark aria-hidden="true" class="mb-4 h-[18px] w-6 text-emerald-300" />
      <blockquote class="text-base leading-relaxed text-gray-200 sm:text-lg">
        {{ indexData.personalInfo.featuredRecommendation.excerpt }}
      </blockquote>
      <figcaption class="mt-5 flex flex-wrap items-center justify-between gap-x-4 gap-y-3">
        <span class="flex items-center gap-3">
          <img
            :src="recommendation.image"
            :alt="recommendation.author"
            width="40"
            height="40"
            class="size-10 rounded-full object-cover"
          />
          <span class="text-left">
            <span class="block text-sm font-semibold text-gray-50">
              {{ recommendation.author }}
            </span>
            <span class="block text-[13px] text-gray-400">
              {{ recommendation.title }} at {{ recommendation.company }}
            </span>
          </span>
        </span>
        <NuxtLink
          to="/resume#recommendations"
          class="inline-flex min-h-11 items-center gap-1 text-[13px] font-medium text-link"
        >
          All {{ recommendationCount }} recommendations
          <UIcon name="i-jpm-arrow-right" class="size-3.5" />
        </NuxtLink>
      </figcaption>
    </figure>

    <p class="mt-12 flex flex-wrap items-center justify-center gap-x-5 text-[13px] text-gray-400">
      <span>Off the clock</span>
      <UTooltip v-for="tag in personalInfo.offTheClock" :key="tag.label" :text="tag.tooltip">
        <NuxtLink
          v-if="tag.link"
          :to="tag.link"
          :target="tag.link.startsWith('https:') ? '_blank' : undefined"
          rel="noopener noreferrer"
          class="inline-flex min-h-11 items-center gap-1.5 text-gray-300 transition-colors hover:text-white"
        >
          <UIcon :name="tag.icon" class="size-3.5 text-gray-400" />
          {{ tag.label }}
        </NuxtLink>
        <span v-else class="inline-flex min-h-11 items-center gap-1.5 text-gray-300">
          <UIcon :name="tag.icon" class="size-3.5 text-gray-400" />
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

const personalInfo = indexData.personalInfo
const buildingNow = resumeData.projects.filter((project) => project.status !== 'Advising')
const previouslyAt = personalInfo.previouslyAt.map((entry) => ({
  ...entry,
  logo: resumeData.experience.find((job) => job.company === entry.company)?.logo,
}))
const recommendation = resumeData.recommendations.items.find(
  (item) => item.author === personalInfo.featuredRecommendation.author,
)
const recommendationCount = resumeData.recommendations.items.length
</script>

<style scoped>
.section-label {
  margin-bottom: 0.875rem;
  text-align: center;
  font-size: 0.6875rem;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--color-gray-400);
}
.proof :deep(a) {
  color: var(--link-default);
  text-decoration: underline;
  text-underline-offset: 3px;
}
.proof :deep(a:hover) {
  color: var(--link-hover);
}
</style>
