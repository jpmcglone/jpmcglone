<template> 
  <div class="min-h-screen flex flex-col">
    <main class="flex-grow">
      <slot />
    </main>
    <footer class="px-6 pb-12 pt-8 text-center text-xs leading-relaxed text-gray-400">
      <p class="max-w-md mx-auto px-4">
        Built by 
        <NuxtLink 
          to="/" 
          class="font-medium text-link underline"
        >
          John McGlone
        </NuxtLink> 
        using 
        <a 
          href="https://nuxt.com" 
          class="font-medium text-link underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Nuxt 3
        </a>
        <br>
        <span class="mt-2 block text-gray-400">© {{ new Date().getFullYear() }}</span>
      </p>
    </footer>
  </div>
</template>
