<template>
  <div class="mx-auto max-w-6xl px-6">
    <nav aria-label="Main" class="flex items-center justify-between py-5">
      <NuxtLink to="/" class="flex min-h-11 items-center gap-2.5 font-semibold text-gray-50">
        <img
          :src="personalInfo.avatar"
          alt=""
          width="32"
          height="32"
          class="size-8 rounded-full object-cover ring-1 ring-gray-600"
        />
        {{ personalInfo.name }}
      </NuxtLink>
      <div class="flex items-center gap-6">
        <a
          href="#building"
          class="hidden text-sm font-medium text-gray-300 hover:text-white sm:inline"
          @click.prevent="scrollToSection('building')"
        >
          Projects
        </a>
        <UButton :to="indexData.resume.link" color="neutral" class="min-h-10 px-4 font-semibold">
          Resume
        </UButton>
      </div>
    </nav>

    <header
      class="grid items-center gap-12 border-t border-gray-800 py-14 lg:grid-cols-[1fr_440px] lg:gap-20 lg:py-24"
    >
      <div class="flex flex-col items-start gap-7">
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
          <span class="font-normal text-gray-400">
            <span aria-hidden="true" class="mx-1">·</span>
            {{ personalInfo.workPreference }}
          </span>
        </p>
        <h1 class="flex flex-col gap-4">
          <span class="text-base font-medium text-gray-300 sm:text-lg">
            {{ personalInfo.name }}, {{ personalInfo.title }}
          </span>
          <span
            class="text-[40px] font-semibold leading-[1.08] tracking-tight text-gray-50 sm:text-5xl lg:text-6xl"
          >
            {{ personalInfo.headline }}
          </span>
        </h1>
        <p class="max-w-xl text-[17px] leading-relaxed text-gray-300 sm:text-lg">
          {{ personalInfo.pitch }}
        </p>
        <div class="flex flex-wrap items-center gap-3">
          <UButton
            :to="indexData.resume.link"
            color="neutral"
            size="lg"
            class="min-h-12 px-6 font-semibold"
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
            size="lg"
            class="min-h-12 px-5"
          >
            <UIcon name="i-jpm-document-text" class="size-4" />
            Download PDF
          </UButton>
          <UTooltip
            v-for="social in personalInfo.socialLinks"
            :key="social.name"
            :text="social.name"
          >
            <UButton
              :to="social.url"
              target="_blank"
              rel="noopener noreferrer"
              :aria-label="social.name"
              color="neutral"
              variant="soft"
              size="lg"
              class="size-12 justify-center p-0"
            >
              <UIcon :name="social.icon" class="size-[18px]" />
            </UButton>
          </UTooltip>
        </div>
      </div>

      <div class="relative mx-auto w-full max-w-[440px]">
        <img
          :src="personalInfo.portrait"
          :alt="`Portrait of ${personalInfo.name}`"
          width="440"
          height="500"
          fetchpriority="high"
          class="aspect-[22/25] w-full rounded-[28px] object-cover ring-1 ring-gray-700"
        />
        <div
          v-for="(chip, index) in personalInfo.heroChips"
          :key="chip.title"
          class="hero-chip absolute flex items-center gap-2.5 rounded-xl bg-gray-900/90 px-3.5 py-2.5 shadow-2xl ring-1 ring-gray-700 backdrop-blur"
          :class="index === 0 ? 'left-3 top-4 sm:-left-8' : 'bottom-6 right-3 sm:-right-8'"
        >
          <img
            v-if="chip.logo"
            :src="chip.logo"
            alt=""
            width="32"
            height="32"
            class="company-logo size-8 shrink-0"
          />
          <span class="text-left">
            <span class="block text-[15px] font-semibold text-gray-50">{{ chip.title }}</span>
            <span class="block text-xs text-gray-400">{{ chip.subtitle }}</span>
          </span>
        </div>
      </div>
    </header>

    <section
      aria-label="Previously at"
      class="flex flex-wrap items-center justify-center gap-x-12 gap-y-5 border-y border-gray-800 py-8"
    >
      <h2 class="section-eyebrow w-full text-center text-gray-400 sm:w-auto">Previously at</h2>
      <span
        v-for="company in previouslyAt"
        :key="company.label"
        class="flex items-center gap-2.5 text-base font-semibold text-gray-300"
      >
        <img
          :src="company.logo"
          alt=""
          width="36"
          height="36"
          class="company-logo size-9 object-contain"
        />
        {{ company.label }}
      </span>
    </section>

    <section
      v-if="buildingNow.length"
      id="building"
      aria-labelledby="building-heading"
      class="scroll-mt-6 py-20"
    >
      <h2
        id="building-heading"
        class="text-[28px] font-semibold tracking-tight text-gray-50 sm:text-4xl"
      >
        What I’m working on
      </h2>
      <div class="mt-8 grid gap-5 md:grid-cols-2">
        <a
          v-for="project in buildingNow"
          :key="project.name"
          :href="project.url"
          target="_blank"
          rel="noopener noreferrer"
          class="group flex flex-col gap-4 rounded-2xl bg-gray-800/55 p-6 ring-1 ring-gray-700 transition hover:bg-gray-800 hover:ring-gray-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-400 sm:p-7"
        >
          <span class="flex items-start justify-between">
            <img
              :src="project.logo"
              :alt="`${project.name} logo`"
              width="56"
              height="56"
              class="company-logo size-14 object-contain"
            />
            <UIcon
              name="i-jpm-arrow-up-right"
              class="size-5 text-link transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transition-none"
            />
          </span>
          <span class="flex flex-wrap items-center gap-2.5">
            <span class="text-2xl font-semibold text-gray-50 group-hover:underline">
              {{ project.name }}
            </span>
            <ResumeProjectStatusBadge :status="project.status" />
          </span>
          <span class="text-base leading-relaxed text-gray-300">{{ project.description }}</span>
          <span
            v-if="project.originStory"
            class="rounded-lg border-l-2 border-amber-400/60 bg-amber-400/5 px-3 py-2 text-sm italic leading-relaxed text-gray-300"
          >
            <span class="font-semibold not-italic text-amber-200">Origin story:&nbsp;</span>
            {{ project.originStory }}
          </span>
        </a>
      </div>
    </section>

    <figure
      v-if="recommendation"
      class="rounded-3xl bg-gray-800/60 p-7 ring-1 ring-emerald-400/30 sm:p-10"
    >
      <ResumeQuoteMark aria-hidden="true" class="mb-5 h-[22px] w-7 text-emerald-300" />
      <blockquote
        class="max-w-4xl text-xl font-medium leading-snug tracking-tight text-gray-50 sm:text-2xl"
      >
        {{ personalInfo.featuredRecommendation.excerpt }}
      </blockquote>
      <figcaption class="mt-7 flex flex-wrap items-center justify-between gap-x-6 gap-y-3">
        <span class="flex items-center gap-3">
          <img
            :src="recommendation.image"
            :alt="recommendation.author"
            width="48"
            height="48"
            class="size-12 rounded-full object-cover"
          />
          <span>
            <span class="block font-semibold text-gray-50">{{ recommendation.author }}</span>
            <span class="block text-sm text-gray-400">
              {{ recommendation.title }} at {{ recommendation.company }}
            </span>
          </span>
        </span>
        <NuxtLink
          to="/resume/#recommendations"
          class="inline-flex min-h-11 items-center gap-1 text-sm font-medium text-link"
        >
          All {{ recommendationCount }} recommendations
          <UIcon name="i-jpm-arrow-right" class="size-3.5" />
        </NuxtLink>
      </figcaption>
    </figure>

    <section
      aria-labelledby="hiring-heading"
      class="mt-20 flex flex-col gap-6 rounded-3xl bg-emerald-400/[0.07] p-7 ring-1 ring-emerald-400/30 sm:p-12 lg:flex-row lg:items-center lg:justify-between"
    >
      <div>
        <h2
          id="hiring-heading"
          class="text-[26px] font-semibold tracking-tight text-gray-50 sm:text-3xl"
        >
          Hiring? Let’s talk.
        </h2>
        <p class="mt-2 text-[17px] text-gray-300">
          I’m open to senior and lead remote roles owning the engineering of a product.
        </p>
      </div>
      <div class="flex flex-wrap gap-3">
        <UButton
          v-if="linkedIn"
          :to="linkedIn.url"
          target="_blank"
          rel="noopener noreferrer"
          color="neutral"
          size="lg"
          class="min-h-12 px-5 font-semibold"
        >
          <UIcon :name="linkedIn.icon" class="size-[18px]" />
          Message me on LinkedIn
        </UButton>
        <UButton
          :to="indexData.resume.link"
          color="neutral"
          variant="soft"
          size="lg"
          class="min-h-12 px-5"
        >
          {{ indexData.resume.buttonText }}
        </UButton>
      </div>
    </section>

    <p class="mt-14 flex flex-wrap items-center justify-center gap-x-5 text-[13px] text-gray-400">
      <span>Outside of tech</span>
      <UTooltip v-for="tag in personalInfo.outsideOfTech" :key="tag.label" :text="tag.tooltip">
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
const linkedIn = personalInfo.socialLinks.find((link) => link.name === 'LinkedIn')
const buildingNow = resumeData.projects.filter((project) => project.status !== 'Advising')
const previouslyAt = personalInfo.previouslyAt.map((entry) => ({
  ...entry,
  logo: resumeData.experience.find((job) => job.company === entry.company)?.logo,
}))
const recommendation = resumeData.recommendations.items.find(
  (item) => item.author === personalInfo.featuredRecommendation.author,
)
const recommendationCount = resumeData.recommendations.items.length

const motionPreference = usePreferredReducedMotion()
function scrollToSection(id) {
  const section = document.getElementById(id)
  if (!section) return
  section.scrollIntoView({ behavior: motionPreference.value === 'reduce' ? 'instant' : 'smooth' })
  history.replaceState(null, '', `#${id}`)
}
</script>

<style scoped>
.section-eyebrow {
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}
</style>
