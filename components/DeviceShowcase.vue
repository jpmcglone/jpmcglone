<template>
  <section aria-labelledby="showcase-heading" class="py-20">
    <div class="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:gap-16">
      <div class="flex flex-col items-start gap-5">
        <p class="section-eyebrow text-emerald-300">Shipped</p>
        <h2
          id="showcase-heading"
          class="text-[28px] font-semibold tracking-tight text-gray-50 sm:text-4xl"
        >
          Rumble Studio, on every Apple screen.
        </h2>
        <p class="max-w-lg text-[17px] leading-relaxed text-gray-300">
          I built Rumble Studio for iOS from scratch as its sole developer, then shipped every
          update on iPhone and iPad. The same iPad app runs on Vision Pro, with custom UI so eye
          tracking can highlight each control.
        </p>
        <div
          role="radiogroup"
          aria-label="Device"
          class="inline-flex rounded-full bg-gray-800/80 p-1 ring-1 ring-gray-700"
          @keydown.right.prevent="step(1)"
          @keydown.left.prevent="step(-1)"
        >
          <button
            v-for="option in devices"
            :key="option.id"
            type="button"
            role="radio"
            :aria-checked="device === option.id"
            :tabindex="device === option.id ? 0 : -1"
            class="relative min-h-10 rounded-full px-4 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-400"
            :class="device === option.id ? 'text-gray-900' : 'text-gray-300 hover:text-white'"
            @click="select(option.id)"
          >
            <motion.span
              v-if="device === option.id"
              layout-id="device-pill"
              class="absolute inset-0 rounded-full bg-gray-50"
              :transition="{ type: 'spring', stiffness: 420, damping: 34 }"
            />
            <span class="relative">{{ option.label }}</span>
          </button>
        </div>
        <UButton
          :to="appStoreUrl"
          target="_blank"
          rel="noopener noreferrer"
          color="neutral"
          variant="soft"
          class="min-h-11 px-4"
        >
          <UIcon name="i-simple-icons-appstore" class="size-4" />
          View on the App Store
        </UButton>
      </div>

      <div
        ref="stage"
        class="showcase-stage relative flex min-h-[640px] items-center justify-center pb-12 sm:min-h-[700px]"
        @pointermove="onPointerMove"
        @pointerleave="resetTilt"
      >
        <div aria-hidden="true" class="stage-glow absolute inset-0" :class="`glow-${device}`" />
        <AnimatePresence mode="wait">
          <motion.div
            :key="device"
            class="relative flex items-center justify-center"
            :initial="
              reducedMotion ? false : { opacity: 0, scale: 0.92, y: 16, filter: 'blur(6px)' }
            "
            :animate="{ opacity: 1, scale: 1, y: 0, filter: 'blur(0px)' }"
            :exit="
              reducedMotion
                ? { opacity: 0 }
                : { opacity: 0, scale: 0.94, y: -10, filter: 'blur(6px)' }
            "
            :transition="{ duration: reducedMotion ? 0 : 0.35, ease: [0.22, 1, 0.36, 1] }"
          >
            <div class="device-tilt" :style="tiltStyle">
              <button
                type="button"
                class="poster block cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-primary-400"
                :class="`poster-${device}`"
                :aria-label="`Show the next Rumble Studio screen on ${currentDevice.label}`"
                @click="nextScreen"
              >
                <img
                  v-for="(shot, index) in currentDevice.screens"
                  :key="shot.src"
                  :src="shot.src"
                  :alt="
                    index === screen
                      ? `Rumble Studio on ${currentDevice.label}: ${shot.caption}`
                      : ''
                  "
                  :width="shot.width"
                  :height="shot.height"
                  loading="lazy"
                  decoding="async"
                  class="absolute inset-0 size-full object-contain transition-opacity duration-500 motion-reduce:transition-none"
                  :class="index === screen ? 'opacity-100' : 'opacity-0'"
                />
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
        <div class="absolute bottom-0 flex gap-2">
          <button
            v-for="(shot, index) in currentDevice.screens"
            :key="shot.src"
            type="button"
            :aria-label="`Show screen: ${shot.caption}`"
            :aria-pressed="screen === index"
            class="grid size-11 place-items-center"
            @click="screen = index"
          >
            <span
              class="block h-1.5 rounded-full transition-all duration-300"
              :class="screen === index ? 'w-6 bg-gray-100' : 'w-1.5 bg-gray-600'"
            />
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { AnimatePresence, motion } from 'motion-v'

type DeviceId = 'iphone' | 'ipad'

const appStoreUrl = 'https://apps.apple.com/us/app/rumble-studio/id6472735205'
const iphoneScreens = [
  { src: '/images/rumble-studio/iphone-1.webp', caption: 'Home', width: 1290, height: 2796 },
  { src: '/images/rumble-studio/iphone-2.webp', caption: 'Go live', width: 1290, height: 2796 },
  { src: '/images/rumble-studio/iphone-3.webp', caption: 'Canvas', width: 1290, height: 2796 },
  {
    src: '/images/rumble-studio/iphone-4.webp',
    caption: 'Multi-stream',
    width: 1290,
    height: 2796,
  },
  { src: '/images/rumble-studio/iphone-5.webp', caption: 'Campaigns', width: 1290, height: 2796 },
]
const ipadScreens = [
  { src: '/images/rumble-studio/ipad-1.webp', caption: 'Go live', width: 1199, height: 1600 },
  { src: '/images/rumble-studio/ipad-2.webp', caption: 'Canvas', width: 1199, height: 1600 },
  { src: '/images/rumble-studio/ipad-3.webp', caption: 'Campaigns', width: 1199, height: 1600 },
]
const devices = [
  { id: 'iphone' as const, label: 'iPhone', screens: iphoneScreens },
  { id: 'ipad' as const, label: 'iPad / Vision Pro', screens: ipadScreens },
]

const device = ref<DeviceId>('iphone')
const screen = ref(0)
const currentDevice = computed(() => devices.find((option) => option.id === device.value)!)
const motionPreference = usePreferredReducedMotion()
const reducedMotion = computed(() => motionPreference.value === 'reduce')

function select(id: DeviceId) {
  device.value = id
  const next = devices.find((option) => option.id === id)!
  if (screen.value >= next.screens.length) screen.value = 0
}
function step(offset: number) {
  const index = devices.findIndex((option) => option.id === device.value)
  const next = devices[(index + offset + devices.length) % devices.length]!
  select(next.id)
  nextTick(() =>
    stage.value?.parentElement
      ?.querySelector<HTMLElement>('[role="radio"][aria-checked="true"]')
      ?.focus(),
  )
}
function nextScreen() {
  screen.value = (screen.value + 1) % currentDevice.value.screens.length
}

const stage = useTemplateRef('stage')
const tilt = reactive({ x: 0, y: 0 })
const tiltStyle = computed(() => ({
  transform: `perspective(1200px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`,
}))
function onPointerMove(event: PointerEvent) {
  if (event.pointerType !== 'mouse' || reducedMotion.value || !stage.value) return
  const rect = stage.value.getBoundingClientRect()
  tilt.x = ((event.clientX - rect.left) / rect.width - 0.5) * 12
  tilt.y = -((event.clientY - rect.top) / rect.height - 0.5) * 10
}
function resetTilt() {
  tilt.x = 0
  tilt.y = 0
}
</script>

<style scoped>
.section-eyebrow {
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.stage-glow {
  border-radius: 32px;
  transition: background 0.6s ease;
}
.glow-iphone {
  background: radial-gradient(closest-side, rgb(132 204 22 / 0.16), transparent 75%);
}
.glow-ipad {
  background:
    radial-gradient(55% 45% at 28% 30%, rgb(167 139 250 / 0.16), transparent 70%),
    radial-gradient(closest-side, rgb(56 189 248 / 0.14), transparent 75%);
}

.device-tilt {
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.25s ease-out;
}

.poster {
  position: relative;
  overflow: hidden;
  border-radius: 32px;
  box-shadow: inset 0 0 0 1px rgb(255 255 255 / 0.14);
  filter: drop-shadow(0 28px 48px rgb(0 0 0 / 0.55));
}
.poster-iphone {
  width: min(286px, 72vw);
  aspect-ratio: 1290 / 2796;
}
.poster-ipad {
  width: min(460px, 88vw);
  aspect-ratio: 1199 / 1600;
}
</style>
