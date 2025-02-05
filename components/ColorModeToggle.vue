<template>
  <div class="fixed top-4 right-4 z-50 print:hidden">
    <UButton
      :icon="colorMode.value === 'dark' ? 'i-heroicons-moon' : 'i-heroicons-sun'"
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

const toggleColorMode = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}
</script> 