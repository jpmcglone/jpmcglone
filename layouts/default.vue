<template>
  <div class="min-h-screen flex flex-col">
    <main class="flex-grow">
      <slot />
    </main>
    <footer class="px-6 pb-10 pt-8 text-center text-xs text-gray-400">
      <p
        class="mx-auto flex max-w-[69rem] flex-wrap items-center justify-center gap-x-4 gap-y-1 border-t border-gray-800 pt-6"
      >
        <span>© {{ new Date().getFullYear() }} John P. McGlone</span>
        <button
          type="button"
          class="min-h-11 text-gray-500 transition-colors hover:text-gray-200 print:hidden"
          aria-label="Open command palette"
          title="Jump, search, or copy"
          @click="openPalette"
        >
          {{ shortcutHint }}
        </button>
      </p>
    </footer>
  </div>
</template>

<script setup>
const { open } = useCommandPalette()
const shortcutHint = ref('⌘K')

onMounted(() => {
  if (!/Mac|iPhone|iPad/.test(navigator.userAgent)) shortcutHint.value = 'Ctrl+K'
})

function openPalette() {
  open.value = true
}
</script>
