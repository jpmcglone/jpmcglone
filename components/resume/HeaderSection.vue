<template>
  <div class="py-4 text-center">
    <UAvatar
      v-if="personalInfo?.image"
      :src="personalInfo.image"
      :alt="personalInfo?.name"
      size="3xl"
      :ui="{ root: 'size-20' }"
      width="80"
      height="80"
      fetchpriority="high"
      decoding="async"
      class="mb-6"
    />
    <h1
      v-if="personalInfo?.name"
      class="text-4xl sm:text-[56px] sm:leading-[64px] font-semibold mb-4 text-gray-50"
    >
      {{ personalInfo.name }}
    </h1>
    <p v-if="personalInfo?.title" class="text-lg font-semibold text-gray-300 mb-3">
      {{ personalInfo.title }}
    </p>
    <p
      v-if="personalInfo?.location"
      class="mb-6 flex flex-wrap items-center justify-center gap-2 text-sm text-gray-400"
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

    <div v-if="hasLinks" class="flex flex-wrap justify-center gap-3">
      <UButton
        v-for="link in links"
        :key="link.url"
        :to="link.url"
        target="_blank"
        color="neutral"
        variant="soft"
        size="lg"
        class="text-link"
      >
        <UIcon :name="getSocialIcon(link.name)" class="h-5 w-5 mr-2" />
        {{ link.name }}
      </UButton>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  personalInfo: {
    type: Object,
    required: true,
  },
  links: {
    type: Array,
    default: () => [],
  },
})

const hasLinks = computed(() => props.links?.length > 0)

const getSocialIcon = (name) => {
  const icons = {
    GitHub: 'i-simple-icons-github',
    LinkedIn: 'i-simple-icons-linkedin',
    default: 'i-jpm-link',
  }
  return icons[name] || icons.default
}
</script>
