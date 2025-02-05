<template>
  <p class="text-gray-600 dark:text-gray-300 leading-relaxed text-lg py-4 px-1">
    {{ bio }}
  </p>
</template>

<script setup>
defineProps({
  bio: {
    type: String,
    required: true
  }
})
</script> 