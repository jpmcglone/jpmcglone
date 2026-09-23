<template>
  <div ref="stackSection" class="-mx-3 overflow-x-clip px-3">
    <div
      v-if="items.length > 1"
      class="deck-navigation mb-4 flex items-center justify-between gap-3"
    >
      <p class="text-sm text-gray-400" role="status" aria-live="polite" aria-atomic="true">
        <template v-if="showAll">All {{ items.length }} {{ pluralLabel }}</template>
        <template v-else>
          <span class="font-semibold tabular-nums text-gray-100">{{ selected + 1 }}</span>
          of {{ items.length }}
          <span class="sr-only">: {{ items[selected]?.label }}</span>
        </template>
      </p>
      <div v-if="!showAll" class="flex gap-2">
        <UButton
          icon="i-jpm-arrow-left"
          color="neutral"
          variant="outline"
          class="min-h-11"
          :disabled="selected === 0"
          :aria-label="`Previous ${itemLabel}`"
          :aria-controls="`${id}-deck`"
          @click="goTo(selected - 1)"
        >
          Previous
        </UButton>
        <UButton
          trailing-icon="i-jpm-arrow-right"
          color="primary"
          variant="soft"
          class="min-h-11"
          :disabled="selected === items.length - 1"
          :aria-label="`Next ${itemLabel}`"
          :aria-controls="`${id}-deck`"
          @click="goTo(selected + 1)"
        >
          Next
        </UButton>
      </div>
      <UButton v-else variant="ghost" class="min-h-11 text-link" @click="showAll = false">
        Card view
      </UButton>
    </div>

    <div :class="showAll ? 'grid gap-4' : 'hidden print:grid print:gap-4'">
      <div v-for="(item, index) in items" :key="item.id">
        <slot :item="item" :index="index" />
      </div>
    </div>
    <template v-if="!showAll">
      <div
        class="recommendation-stack relative print:hidden"
        :class="{ 'has-more': nextItem, 'has-depth': remaining > 1 }"
      >
        <motion.div
          v-if="nextItem"
          class="next-card-preview"
          :initial="false"
          :animate="{ rotate: reducedMotion ? 0 : 0.7 }"
          :while-hover="reducedMotion ? {} : { rotate: 0, y: 2 }"
          :transition="{ duration: reducedMotion ? 0 : 0.2 }"
        >
          <button
            type="button"
            class="group w-full rounded-b-2xl px-4 py-3 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-400"
            :aria-label="`View next ${itemLabel}: ${nextItem.label}`"
            :aria-controls="`${id}-deck`"
            @click="goTo(selected + 1)"
          >
            <span class="flex w-full items-center gap-3 text-left">
              <UAvatar
                :src="nextItem.image"
                :alt="nextItem.label"
                size="sm"
                class="shrink-0"
                :ui="{ root: itemLabel === 'project' ? 'company-logo' : 'rounded-full' }"
              />
              <span class="min-w-0 flex-1">
                <span class="block text-[10px] font-medium uppercase tracking-widest text-gray-400">
                  Up next
                </span>
                <span class="block truncate text-sm font-medium text-gray-100">
                  {{ nextItem.label }}
                </span>
              </span>
              <img
                v-if="nextItem.company"
                :src="nextItem.company.image"
                :alt="`${nextItem.company.name} company logo`"
                width="28"
                height="28"
                loading="lazy"
                class="size-7 shrink-0 company-logo object-contain ring-1 ring-white/10"
              />
              <UIcon
                name="i-jpm-arrow-right"
                class="size-4 shrink-0 text-link transition-transform group-hover:translate-x-1 motion-reduce:transition-none"
              />
            </span>
          </button>
        </motion.div>
        <div
          :id="`${id}-deck`"
          ref="deckRegion"
          role="region"
          aria-roledescription="carousel"
          :aria-label="label"
          :aria-describedby="`${id}-help`"
          tabindex="0"
          class="relative z-10 rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-400"
          @keydown.left.prevent="goTo(selected - 1)"
          @keydown.right.prevent="goTo(selected + 1)"
        >
          <motion.div
            class="relative"
            :animate="{ height: cardHeight || 'auto' }"
            :transition="
              reducedMotion ? { duration: 0 } : { duration: 0.4, ease: [0.22, 1, 0.36, 1] }
            "
          >
            <AnimatePresence :initial="false" mode="popLayout" :custom="direction">
              <motion.div
                :key="selected"
                class="relative w-full touch-pan-y select-none cursor-grab active:cursor-grabbing"
                :custom="direction"
                :variants="cardVariants"
                initial="enter"
                animate="center"
                exit="exit"
                :transition="
                  reducedMotion
                    ? { duration: 0 }
                    : { type: 'spring', stiffness: 190, damping: 25, mass: 0.8 }
                "
                :drag="items.length > 1 ? 'x' : false"
                :drag-constraints="{ left: 0, right: 0 }"
                :drag-elastic="0.35"
                :drag-momentum="false"
                :while-drag="reducedMotion ? {} : { scale: 1.015, rotate: direction * -1.5 }"
                @drag-end="onDragEnd"
              >
                <div ref="cardContent">
                  <div
                    class="deck-card"
                    :aria-label="`${selected + 1} of ${items.length}: ${items[selected]?.label}`"
                  >
                    <slot :item="items[selected]!" :index="selected" />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
      <div
        v-if="items.length > 1"
        class="deck-navigation mt-4 flex flex-wrap items-center justify-between gap-x-3 gap-y-1"
      >
        <div role="group" :aria-label="`Choose a ${itemLabel}`" class="flex items-center">
          <button
            v-for="(item, index) in items"
            :key="item.id"
            type="button"
            :aria-label="`View ${itemLabel} ${index + 1}: ${item.label}`"
            :aria-current="selected === index ? 'true' : undefined"
            :title="item.label"
            class="flex size-11 items-center justify-center rounded-lg focus-visible:outline-2 focus-visible:outline-primary-400"
            @click="goTo(index)"
          >
            <span
              class="h-2 rounded-full transition-all duration-200 motion-reduce:transition-none"
              :class="
                selected === index ? 'w-6 bg-primary-400' : 'w-2 bg-gray-500 hover:bg-gray-300'
              "
            />
          </button>
        </div>
        <UButton variant="ghost" class="min-h-11 text-link" @click="showAll = true">
          View all {{ items.length }}
        </UButton>
      </div>
      <p :id="`${id}-help`" class="deck-navigation mt-1 text-xs text-gray-400">
        Swipe or use the arrows to explore.
      </p>
    </template>
  </div>
</template>
<script setup lang="ts">
import { AnimatePresence, motion } from 'motion-v'
interface StackItem {
  id: string
  label: string
  image?: string
  company?: { name: string; image: string }
}
const props = defineProps<{
  id: string
  items: StackItem[]
  label: string
  itemLabel: string
  pluralLabel: string
}>()
const section = useTemplateRef('stackSection')
const deckRegion = useTemplateRef('deckRegion')
const selected = ref(0)
const showAll = ref(false)
const remaining = computed(() => props.items.length - selected.value - 1)
const nextItem = computed(() => props.items[selected.value + 1])
const direction = ref(1)
const cardContent = useTemplateRef('cardContent')
const { height: cardHeight } = useElementSize(cardContent)
const motionPreference = usePreferredReducedMotion()
const reducedMotion = computed(() => motionPreference.value === 'reduce')

async function goTo(index: number) {
  if (index < 0 || index >= props.items.length || index === selected.value) return
  direction.value = index > selected.value ? 1 : -1
  selected.value = index
  await nextTick()
  if (deckRegion.value && deckRegion.value.getBoundingClientRect().top < 0) {
    if (section.value) {
      window.scrollTo({
        top: window.scrollY + section.value.getBoundingClientRect().top - 24,
        behavior: 'instant',
      })
    }
  }
}

const cardVariants = computed(() => ({
  enter: (travel: number) => ({
    x: reducedMotion.value ? 0 : travel * 65,
    y: reducedMotion.value ? 0 : 18,
    rotate: reducedMotion.value ? 0 : travel * 3,
    scale: reducedMotion.value ? 1 : 0.97,
    opacity: reducedMotion.value ? 1 : 0,
  }),
  center: { x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 },
  exit: (travel: number) => ({
    x: reducedMotion.value ? 0 : travel * -110,
    y: reducedMotion.value ? 0 : -14,
    rotate: reducedMotion.value ? 0 : travel * -5,
    scale: reducedMotion.value ? 1 : 0.96,
    opacity: 0,
    transition: { duration: reducedMotion.value ? 0 : 0.28 },
  }),
}))

function onDragEnd(_event: PointerEvent, info: { offset: { x: number }; velocity: { x: number } }) {
  const distance = info.offset.x
  if (Math.abs(distance) > 55 || (Math.abs(distance) > 12 && Math.abs(info.velocity.x) > 500)) {
    goTo(selected.value + (distance < 0 ? 1 : -1))
  }
}
</script>
<style scoped>
.recommendation-stack {
  isolation: isolate;
  margin-inline: 6px;
}
.recommendation-stack.has-more {
  padding-top: 24px;
  padding-bottom: 76px;
}
.recommendation-stack.has-depth::before {
  content: '';
  position: absolute;
  inset: 18px 10px 20px;
  z-index: 0;
  border: 1px solid var(--color-gray-600);
  border-radius: 20px;
  background: linear-gradient(145deg, var(--color-gray-700), var(--color-gray-900));
  pointer-events: none;
  transform-origin: 50% 12%;
  transform: rotate(-1.8deg) translateY(-8px) scale(0.98);
  opacity: 0.55;
}
.next-card-preview {
  position: absolute;
  inset: 28px 10px 4px;
  z-index: 1;
  display: flex;
  align-items: flex-end;
  padding: 0;
  border: 1px solid var(--color-gray-600);
  border-radius: 20px;
  background: linear-gradient(145deg, #263244, #202a38);
  cursor: pointer;
}
.deck-card {
  border-radius: 20px;
  background: linear-gradient(135deg, #263345, #1c2432 65%);
  box-shadow:
    0 20px 45px -22px #000b,
    inset 0 1px 0 #ffffff0d;
}
@media print {
  .deck-navigation {
    display: none;
  }
}
</style>
