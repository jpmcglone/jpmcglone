<template>
  <Transition
    enter-active-class="transition duration-500 ease-out motion-reduce:transition-none"
    enter-from-class="-translate-y-2 opacity-0"
    leave-active-class="transition duration-200 ease-in motion-reduce:transition-none"
    leave-to-class="-translate-y-1 opacity-0"
  >
    <aside
      v-if="recruiter"
      aria-label="Welcome"
      class="flex w-full items-center gap-3 rounded-2xl bg-gray-800/70 py-2.5 pl-3 pr-1.5 ring-1 ring-gray-700 backdrop-blur"
    >
      <img
        v-if="recruiter.domain && !logoFailed"
        :src="`https://icons.duckduckgo.com/ip3/${recruiter.domain}.ico`"
        alt=""
        width="32"
        height="32"
        class="size-8 shrink-0 rounded-lg bg-white object-contain p-1"
        @error="logoFailed = true"
      />
      <span
        v-else
        aria-hidden="true"
        class="grid size-8 shrink-0 place-items-center rounded-lg bg-emerald-400/15 text-sm font-semibold text-emerald-300"
      >
        {{ recruiter.name.charAt(0) }}
      </span>
      <p class="min-w-0 flex-1 text-sm leading-snug text-gray-300">
        <span class="font-semibold text-gray-50">Hi, {{ recruiter.name }} team.</span>
        Thanks for taking a look. I’d love to hear what you’re building.
      </p>
      <UButton
        icon="i-jpm-x-mark"
        color="neutral"
        variant="ghost"
        size="sm"
        aria-label="Dismiss greeting"
        class="size-11 shrink-0 justify-center"
        @click="dismiss"
      />
    </aside>
  </Transition>
</template>

<script setup lang="ts">
const { recruiter, dismiss } = useRecruiter()
const logoFailed = ref(false)
watch(recruiter, () => (logoFailed.value = false))
</script>
