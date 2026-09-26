<template>
  <div class="flex flex-col items-center gap-4 py-4 text-center">
    <UAvatar
      v-if="personalInfo?.image"
      :src="personalInfo.image"
      :alt="personalInfo?.name"
      size="3xl"
      :ui="{ root: 'portrait-morph size-20' }"
      width="80"
      height="80"
      fetchpriority="high"
      decoding="async"
    />
    <h1
      v-if="personalInfo?.name"
      class="w-full text-4xl leading-[44px] sm:text-[56px] sm:leading-[64px] font-semibold text-gray-50"
    >
      {{ personalInfo.name }}
    </h1>
    <p v-if="personalInfo?.title" class="text-lg leading-[26px] font-semibold text-gray-300">
      {{ personalInfo.title }}
    </p>
    <p
      v-if="personalInfo?.location"
      class="flex flex-wrap items-center justify-center gap-2 text-sm leading-[22px] text-gray-400"
    >
      <VirginiaIcon class="h-4 w-6" />
      <span>
        {{ personalInfo.location }}
        <template v-if="personalInfo.workPreference">
          <span aria-hidden="true">·</span>
          {{ personalInfo.workPreference }}
        </template>
      </span>
    </p>

    <nav
      aria-label="Profile links and résumé download"
      class="profile-actions grid w-full max-w-[342px] grid-cols-3 gap-2 sm:flex sm:w-auto sm:max-w-none sm:gap-3"
    >
      <UButton
        v-for="link in links"
        :key="link.url"
        :to="link.url"
        target="_blank"
        rel="noopener noreferrer"
        color="neutral"
        variant="soft"
        class="profile-action"
        :class="link.name === 'LinkedIn' ? 'sm:w-[134px]' : 'sm:w-[124px]'"
      >
        <UIcon :name="getSocialIcon(link.name)" class="size-4 shrink-0 sm:size-[18px]" />
        {{ link.name }}
      </UButton>
      <UButton
        to="/resume.pdf"
        external
        download="John-P-McGlone-Resume.pdf"
        aria-label="Download résumé as PDF"
        color="neutral"
        variant="soft"
        class="profile-action sm:w-[154px]"
        @click="saveResumePdf"
      >
        <UIcon name="i-jpm-document-text" class="size-4 shrink-0 sm:size-[18px]" />
        <span class="sm:hidden" aria-hidden="true">PDF</span>
        <span class="hidden sm:inline" aria-hidden="true">Download PDF</span>
      </UButton>
    </nav>
  </div>
</template>

<script setup>
defineProps({
  personalInfo: {
    type: Object,
    required: true,
  },
  links: {
    type: Array,
    default: () => [],
  },
})

const getSocialIcon = (name) => {
  const icons = {
    GitHub: 'i-simple-icons-github',
    LinkedIn: 'i-simple-icons-linkedin',
    default: 'i-jpm-link',
  }
  return icons[name] || icons.default
}
</script>

<style scoped>
@reference "../../assets/css/tailwind.css";
.profile-action {
  @apply min-h-11 min-w-0 justify-center gap-2 whitespace-nowrap rounded-lg border border-gray-700 bg-gray-800 px-1.5 py-2 text-xs leading-5 font-medium sm:px-4 sm:text-sm;
  color: var(--link-default);
}
.profile-action:hover {
  @apply bg-gray-700;
}
.profile-action:focus-visible {
  @apply outline-2 outline-offset-4 outline-primary-400;
}
</style>
