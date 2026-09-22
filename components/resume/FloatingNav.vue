<template>
  <nav
    aria-label="Resume sections"
    class="space-y-4 print:hidden xl:sticky xl:top-12 xl:w-[200px] xl:justify-self-end xl:self-start"
  >
    <UTooltip text="Home">
      <UButton
        to="/"
        icon="i-heroicons-home"
        aria-label="Home"
        color="neutral"
        variant="ghost"
        size="lg"
        class="h-11 w-11 justify-center p-0"
      />
    </UTooltip>
    <ul class="flex flex-wrap justify-center gap-2 xl:flex-col">
      <li v-for="section in sections" :key="section.id">
        <UButton
          color="neutral"
          variant="ghost"
          size="sm"
          class="resume-nav-link text-sm rounded-full bg-gray-800 px-3 py-2 ring-1 ring-gray-700 xl:w-full xl:justify-start xl:rounded-xl xl:bg-transparent xl:ring-0"
          :icon="section.icon"
          :aria-current="activeSection === section.id ? 'location' : undefined"
          @click="scrollToSection(section.id)"
        >
          {{ section.label }}
        </UButton>
      </li>
    </ul>
  </nav>
</template>

<script setup>
const props = defineProps({
  sections: {
    type: Array,
    required: true,
  },
})

const activeSection = ref(props.sections[0]?.id)
let animationFrame = 0
let observer

const updateActiveSection = () => {
  animationFrame = 0
  const sections = props.sections
    .map((section) => ({ id: section.id, element: document.getElementById(section.id) }))
    .filter((section) => section.element)
  if (!sections.length) return
  const readingLine = Math.min(160, window.innerHeight * 0.25)
  let current = sections[0].id
  for (const section of sections) {
    if (section.element.getBoundingClientRect().top <= readingLine) current = section.id
  }
  if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 4)
    current = sections.at(-1).id
  activeSection.value = current
}

const scheduleUpdate = () => {
  if (!animationFrame) animationFrame = window.requestAnimationFrame(updateActiveSection)
}

onMounted(() => {
  updateActiveSection()
  window.addEventListener('scroll', scheduleUpdate, { passive: true })
  window.addEventListener('resize', scheduleUpdate)
  observer = new ResizeObserver(scheduleUpdate)
  observer.observe(document.getElementById('about') || document.body)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', scheduleUpdate)
  window.removeEventListener('resize', scheduleUpdate)
  observer?.disconnect()
  if (animationFrame) window.cancelAnimationFrame(animationFrame)
})

const scrollToSection = (sectionId) => {
  document.getElementById(sectionId)?.scrollIntoView({
    behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth',
  })
}
</script>

<style scoped>
nav .resume-nav-link {
  transition:
    transform 200ms ease,
    background-color 200ms ease,
    color 200ms ease,
    box-shadow 200ms ease;
}
nav .resume-nav-link[aria-current='location'] {
  color: #f9fafb;
  background-color: #2a374b;
  box-shadow: inset 0 0 0 1px #34455e;
  transform: scale(1.04);
}
@media (min-width: 1280px) {
  .resume-nav-link {
    transform-origin: left center;
  }
}
@media (prefers-reduced-motion: reduce) {
  nav .resume-nav-link {
    transition: none;
  }
  nav .resume-nav-link[aria-current='location'] {
    transform: none;
  }
}
</style>
