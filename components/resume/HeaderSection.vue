<template>
  <div class="p-6 sm:p-8 text-center">
    <UAvatar
      v-if="personalInfo?.image"
      :src="personalInfo.image"
      :alt="personalInfo?.name"
      size="2xl"
    />
    <h1 v-if="personalInfo?.name" class="text-3xl font-semibold mb-2 text-gray-900 dark:text-white">
      {{ personalInfo.name }}
    </h1>
    <p v-if="personalInfo?.title" class="text-lg text-gray-500 dark:text-gray-400 mb-2">
      {{ personalInfo.title }}
    </p>
    <p v-if="personalInfo?.location" class="text-md text-gray-500 dark:text-gray-400 mb-6">
      {{ personalInfo.location }}
    </p>
    
    <div v-if="hasLinks" class="flex justify-center gap-3">
      <UButton
        v-for="link in links"
        :key="link.url"
        :to="link.url"
        target="_blank"
        class="flex items-center px-4 py-2 rounded-lg font-medium transition-all duration-200 shadow hover:-translate-y-[1px] hover:shadow-lg bg-gray-900 text-white hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100"
      >
        <UIcon
          :name="getSocialIcon(link.name)"
          class="h-5 w-5 mr-2"
        />
        {{ link.name }}
      </UButton>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  personalInfo: {
    type: Object,
    required: true
  },
  links: {
    type: Array,
    default: () => []
  }
})

const hasLinks = computed(() => props.links?.length > 0)

const getSocialIcon = (name) => {
  const icons = {
    'GitHub': 'i-simple-icons-github',
    'LinkedIn': 'i-simple-icons-linkedin',
    'default': 'i-heroicons-link'
  }
  return icons[name] || icons.default
}
</script> 