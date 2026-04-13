<template>
  <component
    :is="url ? 'a' : 'span'"
    v-bind="url ? { href: url, target: '_blank', rel: 'noopener noreferrer' } : {}"
    class="shrink-0"
  >
    <div
      v-if="!src"
      :class="[
        'bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center',
        sizes.box,
        isCircle ? 'rounded-full' : 'rounded-lg',
      ]"
    >
      <span :class="['font-semibold text-primary-600 dark:text-primary-400 uppercase', sizes.text]">
        {{ initials(alt) }}
      </span>
    </div>
    <UAvatar
      v-else
      :src="src"
      :alt="alt"
      :size="sizes.avatar"
      :ui="{ rounded: isCircle ? 'rounded-full' : 'rounded-lg' }"
    />
  </component>
</template>

<script setup lang="ts">
const props = defineProps<{
  url?: string
  src?: string
  alt: string
  size?: 'sm' | 'lg' | 'xl'
  shape?: 'square' | 'circle'
}>()

const sizeMap = {
  sm: { box: 'w-9 h-9', text: 'text-xs', avatar: 'sm' as const },
  lg: { box: 'w-12 h-12 md:w-14 md:h-14', text: 'text-sm md:text-base', avatar: 'lg' as const },
  xl: { box: 'h-16 w-16', text: 'text-base', avatar: 'xl' as const },
}

const sizes = computed(() => sizeMap[props.size ?? 'lg'])
const isCircle = computed(() => props.shape === 'circle')
</script>
