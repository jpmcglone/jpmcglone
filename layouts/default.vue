<template> 
  <div class="min-h-screen flex flex-col">
    <main class="flex-grow">
      <slot />
    </main>
    <footer class="border-t border-gray-200 bg-gray-50 py-8 text-center text-sm text-gray-600">
      <p class="max-w-md mx-auto px-4">
        Built by 
        <a 
          href="https://github.com/mcglonej" 
          class="font-medium text-gray-700 hover:text-gray-900 transition-colors duration-200 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          John McGlone
        </a> 
        using 
        <a 
          href="https://nuxt.com" 
          class="font-medium text-gray-700 hover:text-gray-900 transition-colors duration-200 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Nuxt 3
        </a>
        <br>
        <span class="mt-2 block text-gray-500">© {{ new Date().getFullYear() }}</span>
      </p>
    </footer>
  </div>
</template>

<script setup>

</script>