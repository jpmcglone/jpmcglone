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
      <p class="max-w-md text-base leading-relaxed text-gray-400">
        {{ indexData.personalInfo.description }}
      </p>
      <p class="flex flex-wrap items-center justify-center gap-2 text-sm text-gray-400">
        <VirginiaIcon class="h-4 w-6" />
        <span>
          {{ indexData.personalInfo.location }}
          <span aria-hidden="true">·</span>
          {{ indexData.personalInfo.workPreference }}
        </span>
      </p>
      <div class="flex flex-wrap justify-center gap-x-5 gap-y-2">
        <UTooltip v-for="tag in indexData.personalInfo.tags" :key="tag.label" :text="tag.tooltip">
          <NuxtLink
            v-if="tag.link"
            :to="tag.link"
            :target="tag.link.startsWith('https:') ? '_blank' : undefined"
            rel="noopener noreferrer"
            class="inline-flex min-h-9 items-center gap-1.5 text-sm text-gray-300 transition-colors hover:text-white"
          >
            <UIcon :name="tag.icon" class="h-4 w-4 text-gray-400" />
            {{ tag.label }}
          </NuxtLink>
          <span v-else class="inline-flex min-h-9 items-center gap-1.5 text-sm text-gray-300">
            <UIcon :name="tag.icon" class="h-4 w-4 text-gray-400" />
            {{ tag.label }}
          </span>
        </UTooltip>
      </div>
      <UButton :to="indexData.resume.link" color="neutral" size="md" class="px-6 py-3">
        {{ indexData.resume.buttonText }}
      </UButton>
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
  </div>
</template>

<script setup>
import indexData from '~/data/index'

definePageMeta({ colorMode: 'dark' })
usePageMetadata(indexData.meta)
</script>
