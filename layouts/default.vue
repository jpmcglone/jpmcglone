<template> 
  <div class="min-h-screen flex flex-col">
    <main class="flex-grow">
      <slot />
    </main>
    <footer class="border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 py-8 text-center text-sm text-gray-600 dark:text-gray-400">
      <p class="max-w-md mx-auto px-4">
        Built by 
        <NuxtLink 
          to="/" 
          class="font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-200 underline"
        >
          John McGlone
        </NuxtLink> 
        using 
        <a 
          href="https://nuxt.com" 
          class="font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-200 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Nuxt 3
        </a>
        <br>
        <span class="mt-2 block text-gray-500 dark:text-gray-500">© {{ new Date().getFullYear() }}</span>
      </p>
    </footer>
  </div>
</template>

<script setup>

</script>

<style>
body {
  background-color: rgb(249 250 251);
}

:root.dark body {
  background-color: rgb(17 24 39);
}
</style>