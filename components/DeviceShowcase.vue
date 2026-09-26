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
          update across iPhone, iPad, and Vision Pro.
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
        class="showcase-stage relative flex h-[500px] items-center justify-center pb-10 sm:h-[540px]"
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
                class="device block cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-primary-400"
                :class="`device-${device}`"
                :aria-label="`Show the next Rumble Studio screen on ${currentDevice.label}`"
                @click="nextScreen"
              >
                <span v-if="device === 'iphone'" aria-hidden="true" class="dynamic-island" />
                <span class="screen block">
                  <img
                    v-for="(src, index) in currentDevice.screens"
                    :key="src"
                    :src="src"
                    :alt="
                      index === screen
                        ? `Rumble Studio on ${currentDevice.label}: ${captions[index]}`
                        : ''
                    "
                    :width="currentDevice.size[0]"
                    :height="currentDevice.size[1]"
                    loading="lazy"
                    decoding="async"
                    class="absolute inset-0 size-full object-cover transition-opacity duration-500 motion-reduce:transition-none"
                    :class="index === screen ? 'opacity-100' : 'opacity-0'"
                  />
                </span>
              </button>
              <span v-if="device === 'vision'" aria-hidden="true" class="window-bar" />
            </div>
          </motion.div>
        </AnimatePresence>
        <div class="absolute bottom-0 flex gap-2">
          <button
            v-for="(caption, index) in captions"
            :key="caption"
            type="button"
            :aria-label="`Show screen: ${caption}`"
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

type DeviceId = 'iphone' | 'ipad' | 'vision'

const appStoreUrl = 'https://apps.apple.com/us/app/rumble-studio/id6472735205'
const captions = ['Your online streaming studio', 'Stream to anywhere']
const iphoneScreens = ['/images/rumble-studio/iphone-1.webp', '/images/rumble-studio/iphone-2.webp']
const ipadScreens = ['/images/rumble-studio/ipad-1.webp', '/images/rumble-studio/ipad-2.webp']
// Rumble Studio runs on Vision Pro as its iPad app, so the window shows the iPad screens.
const devices: { id: DeviceId; label: string; screens: string[]; size: [number, number] }[] = [
  { id: 'iphone', label: 'iPhone', screens: iphoneScreens, size: [434, 946] },
  { id: 'ipad', label: 'iPad', screens: ipadScreens, size: [954, 717] },
  { id: 'vision', label: 'Vision Pro', screens: ipadScreens, size: [954, 717] },
]

const device = ref<DeviceId>('iphone')
const screen = ref(0)
const currentDevice = computed(() => devices.find((option) => option.id === device.value)!)
const motionPreference = usePreferredReducedMotion()
const reducedMotion = computed(() => motionPreference.value === 'reduce')

function select(id: DeviceId) {
  device.value = id
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
  screen.value = (screen.value + 1) % captions.length
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
  background: radial-gradient(closest-side, rgb(56 189 248 / 0.14), transparent 75%);
}
.glow-vision {
  background:
    radial-gradient(60% 45% at 30% 30%, rgb(167 139 250 / 0.2), transparent 70%),
    radial-gradient(55% 45% at 75% 70%, rgb(56 189 248 / 0.16), transparent 70%);
}

.device-tilt {
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.25s ease-out;
}

.device {
  position: relative;
  background: #05070b;
  box-shadow:
    0 0 0 1px rgb(255 255 255 / 0.12),
    0 30px 80px -20px rgb(0 0 0 / 0.8);
}
.screen {
  position: relative;
  overflow: hidden;
  background: #0b1520;
}

.device-iphone {
  border-radius: 46px;
  padding: 11px;
}
.device-iphone .screen {
  width: min(188px, 45vw);
  aspect-ratio: 434 / 946;
  border-radius: 36px;
}
.dynamic-island {
  position: absolute;
  z-index: 1;
  top: 20px;
  left: 50%;
  width: 30%;
  height: 22px;
  border-radius: 999px;
  background: #000;
  transform: translateX(-50%);
}

.device-ipad {
  border-radius: 30px;
  padding: 14px;
}
.device-ipad .screen {
  width: min(540px, 82vw);
  aspect-ratio: 954 / 717;
  border-radius: 16px;
}

.device-vision {
  padding: 0;
  border-radius: 28px;
  background: rgb(255 255 255 / 0.08);
  box-shadow:
    0 0 0 1px rgb(255 255 255 / 0.22),
    0 40px 90px -30px rgb(0 0 0 / 0.9),
    inset 0 1px 0 rgb(255 255 255 / 0.25);
  animation: float 6s ease-in-out infinite;
}
.device-vision .screen {
  width: min(520px, 80vw);
  aspect-ratio: 954 / 717;
  border-radius: 28px;
}
.window-bar {
  position: absolute;
  bottom: -22px;
  left: 50%;
  width: 72px;
  height: 7px;
  border-radius: 999px;
  background: rgb(255 255 255 / 0.35);
  transform: translateX(-50%);
  animation: float 6s ease-in-out infinite;
}

@keyframes float {
  0%,
  100% {
    translate: 0 0;
  }
  50% {
    translate: 0 -8px;
  }
}
</style>
