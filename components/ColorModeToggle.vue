<template>
  <div class="fixed top-4 right-4 z-50 print:hidden">
    <UButton
      v-if="mounted && !colorMode.unknown"
      :icon="isDark ? 'i-heroicons-moon' : 'i-heroicons-sun'"
      color="gray"
      variant="soft"
      class="dark:bg-gray-800 dark:hover:bg-gray-700"
      aria-label="Toggle color mode"
      @click="toggleColorMode"
    />
  </div>
</template>

<script setup>
const colorMode = useColorMode()
const mounted = ref(false)

// Computed property to determine dark mode
const isDark = computed(() => {
  if (colorMode.unknown) return false
  return colorMode.value === 'dark'
})

onMounted(() => {
  // Small delay to ensure color mode is properly initialized
  nextTick(() => {
    mounted.value = true
  })
})

const toggleColorMode = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}
</script> 