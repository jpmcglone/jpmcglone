<template>
  <Transition
    enter-active-class="transition duration-700 ease-out motion-reduce:transition-none"
    enter-from-class="translate-y-3 opacity-0"
    leave-active-class="transition duration-200 ease-in motion-reduce:transition-none"
    leave-to-class="translate-y-2 opacity-0"
  >
    <aside
      v-if="visible"
      aria-label="A note from JP"
      class="fixed bottom-5 right-5 z-40 w-[min(22rem,calc(100vw-2.5rem))] rounded-2xl bg-gray-900/95 p-4 shadow-2xl ring-1 ring-emerald-400/30"
    >
      <div class="flex items-start gap-3">
        <p class="font-hand min-w-0 flex-1 text-[22px] leading-snug text-gray-100">
          Still here? That’s the good kind of signal. I’d rather hear what you’re building than have
          you keep scrolling.
          <span class="mt-2 block text-emerald-300">JP</span>
        </p>
        <UButton
          icon="i-jpm-x-mark"
          color="neutral"
          variant="ghost"
          size="sm"
          aria-label="Dismiss note"
          class="size-11 shrink-0 justify-center"
          @click="dismiss"
        />
      </div>
    </aside>
  </Transition>
</template>

<script setup lang="ts">
const route = useRoute()
const storageKey = 'jpm-linger-dismissed'
const visible = ref(false)
let timer = 0
const onPublicPage = computed(() => route.path === '/' || route.path.startsWith('/resume'))

function dismiss() {
  visible.value = false
  sessionStorage.setItem(storageKey, '1')
}

onMounted(() => {
  if (!onPublicPage.value || sessionStorage.getItem(storageKey)) return
  timer = window.setTimeout(() => {
    visible.value = true
  }, 45_000)
})

onUnmounted(() => {
  window.clearTimeout(timer)
})
</script>
