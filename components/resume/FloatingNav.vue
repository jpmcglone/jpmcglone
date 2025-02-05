<template>
  <nav class="fixed left-4 top-1/2 transform -translate-y-1/2 hidden lg:block print:hidden">
    <ul class="space-y-2">
      <li v-for="section in sections" :key="section.id">
        <UButton
          variant="ghost"
          size="xs"
          @click="scrollToSection(section.id)"
        >
          {{ section.label }}
        </UButton>
      </li>
    </ul>
  </nav>
</template>

<script setup>
defineProps({
  sections: {
    type: Array,
    required: true
  }
})

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
</script> 