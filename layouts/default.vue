<template>
  <div class="min-h-screen flex flex-col">
    <main class="flex-grow">
      <slot />
    </main>
    <footer class="px-6 pb-10 pt-8 text-center text-xs text-gray-400">
      <p class="mx-auto max-w-[69rem] border-t border-gray-800 pt-6">
        © {{ new Date().getFullYear() }} John P. McGlone
      </p>
    </footer>
  </div>
</template>
