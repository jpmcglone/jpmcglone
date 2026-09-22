<template>
  <span>
    <template v-for="(segment, index) in segments" :key="index">
      <a
        v-if="segment.type === 'link'"
        :href="segment.href"
        target="_blank"
        rel="noopener noreferrer"
      >
        {{ segment.content }}
      </a>
      <strong v-else-if="segment.type === 'strong'">{{ segment.content }}</strong>
      <template v-else>{{ segment.content }}</template>
    </template>
  </span>
</template>

<script setup lang="ts">
const props = defineProps<{ text: string }>()
const segments = computed(() => parseInlineContent(props.text))
</script>
