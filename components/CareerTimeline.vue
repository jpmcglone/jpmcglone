<template>
  <section aria-labelledby="timeline-heading" class="pb-20">
    <div class="flex flex-wrap items-end justify-between gap-4">
      <div>
        <h2
          id="timeline-heading"
          class="text-[28px] font-semibold tracking-tight text-gray-50 sm:text-4xl"
        >
          The road here
        </h2>
        <p class="mt-2 text-[17px] text-gray-300">
          {{ firstYear }} to today. Drag through it, or use the arrow keys.
        </p>
      </div>
      <div class="flex gap-2">
        <UButton
          icon="i-jpm-arrow-left"
          color="neutral"
          variant="outline"
          aria-label="Earlier role"
          class="size-11 justify-center"
          :disabled="selected === 0"
          @click="select(selected - 1)"
        />
        <UButton
          icon="i-jpm-arrow-right"
          color="neutral"
          variant="outline"
          aria-label="Later role"
          class="size-11 justify-center"
          :disabled="selected === roles.length - 1"
          @click="select(selected + 1)"
        />
      </div>
    </div>

    <div
      ref="track"
      role="listbox"
      aria-label="Career timeline"
      :aria-activedescendant="`timeline-role-${selected}`"
      tabindex="0"
      class="timeline-track -mx-6 mt-8 flex cursor-grab snap-x snap-mandatory overflow-x-auto px-6 pb-2 pt-1 select-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-400 active:cursor-grabbing"
      @keydown.left.prevent="select(selected - 1)"
      @keydown.right.prevent="select(selected + 1)"
      @keydown.home.prevent="select(0)"
      @keydown.end.prevent="select(roles.length - 1)"
      @pointerdown="onPointerDown"
      @pointermove="onPointerMove"
      @pointerup="onPointerUp"
      @pointercancel="dragging = null"
      @click.capture="onClickCapture"
    >
      <div
        v-for="(role, index) in roles"
        :id="`timeline-role-${index}`"
        :key="`${role.company}-${role.period}`"
        role="option"
        :aria-selected="index === selected"
        class="group relative flex w-36 shrink-0 snap-center flex-col items-center gap-3 pt-7 text-center sm:w-40"
        @click="select(index, false)"
      >
        <span
          class="absolute top-0 text-xs font-semibold tabular-nums transition-colors"
          :class="index === selected ? 'text-emerald-300' : 'text-gray-500'"
        >
          <template v-if="index === 0 || role.startYear !== roles[index - 1]!.startYear">
            {{ role.startYear }}
          </template>
        </span>
        <span aria-hidden="true" class="timeline-line absolute top-[52px] h-px w-full" />
        <span
          class="relative z-10 grid size-12 place-items-center rounded-xl bg-gray-900 ring-1 transition duration-300"
          :class="
            index === selected
              ? 'scale-110 ring-emerald-400/70 shadow-[0_0_28px_-4px_rgb(52_211_153/0.55)]'
              : 'ring-gray-700 group-hover:ring-gray-500'
          "
        >
          <img
            v-if="role.logo"
            :src="role.logo"
            alt=""
            width="40"
            height="40"
            draggable="false"
            class="company-logo size-10 object-contain"
          />
          <span v-else class="text-base font-semibold text-gray-300">
            {{ role.company.charAt(0) }}
          </span>
          <span
            v-if="role.companyStatus || role.isCurrentRole"
            aria-hidden="true"
            class="absolute -right-1 -top-1 size-3 rounded-full ring-2 ring-gray-900"
            :class="statusDot(role)"
          />
        </span>
        <span
          class="line-clamp-2 px-2 text-sm font-semibold leading-snug transition-colors"
          :class="index === selected ? 'text-gray-50' : 'text-gray-400 group-hover:text-gray-200'"
        >
          {{ role.shortName }}
        </span>
      </div>
    </div>

    <div aria-live="polite" class="mt-6">
      <Transition
        mode="out-in"
        enter-active-class="transition duration-300 ease-out motion-reduce:transition-none"
        enter-from-class="translate-y-2 opacity-0"
        leave-active-class="transition duration-150 ease-in motion-reduce:transition-none"
        leave-to-class="-translate-y-1 opacity-0"
      >
        <article
          :key="selected"
          class="flex flex-col gap-4 rounded-2xl bg-gray-800/55 p-6 ring-1 ring-gray-700 sm:flex-row sm:items-start sm:gap-6 sm:p-7"
        >
          <div class="min-w-0 flex-1">
            <p class="text-sm tabular-nums text-gray-400">
              {{ current.period.replace(' - ', ' – ') }}
            </p>
            <h3 class="mt-1 text-xl font-semibold text-gray-50">{{ current.company }}</h3>
            <p class="mt-1 text-[15px] font-medium text-gray-300">{{ current.title }}</p>
            <p v-if="current.highlight" class="mt-4 text-[15px] leading-relaxed text-gray-300">
              {{ current.highlight }}
            </p>
          </div>
          <div class="flex flex-col items-start gap-3 sm:w-60 sm:shrink-0">
            <p
              v-if="current.story"
              class="flex items-start gap-2 rounded-xl px-3 py-2 text-sm leading-snug ring-1 ring-inset"
              :class="storyTone(current)"
            >
              <img
                v-if="current.story.logo"
                :src="current.story.logo"
                alt=""
                width="20"
                height="20"
                class="company-logo mt-px size-5 shrink-0"
              />
              <span>
                <span class="block font-semibold">
                  {{ current.story.label }}
                  <template v-if="current.story.date">· {{ current.story.date }}</template>
                </span>
              </span>
            </p>
            <NuxtLink
              to="/resume/#experience"
              class="inline-flex min-h-11 items-center gap-1 text-sm font-medium text-link"
            >
              Full story in the résumé
              <UIcon name="i-jpm-arrow-right" class="size-3.5" />
            </NuxtLink>
          </div>
        </article>
      </Transition>
    </div>
  </section>
</template>

<script setup lang="ts">
import resumeData, { type Experience } from '~/data/resume'

type Role = Experience & {
  startYear: string
  shortName: string
  highlight?: string
  story?: { label: string; date?: string; logo?: string; kind: string }
}

const plain = (html: string) => html.replace(/<[^>]+>/g, '')
const roles: Role[] = [...resumeData.experience].reverse().map((job) => {
  const first = job.responsibilities[0]
  const status = job.companyStatus
  return {
    ...job,
    startYear: job.period.split(' - ')[0]!,
    shortName: job.company.replace(/\s*\(.*\)$/, ''),
    highlight: first ? plain(typeof first === 'string' ? first : first.text) : undefined,
    story: status
      ? { label: status.label, date: status.date, logo: status.logo, kind: status.kind }
      : job.joinedVia
        ? { ...job.joinedVia, kind: 'joined' }
        : undefined,
  }
})
const firstYear = roles[0]?.startYear

const selected = ref(roles.length - 1)
const current = computed(() => roles[selected.value]!)

function statusDot(role: Role) {
  if (role.isCurrentRole) return 'bg-emerald-400'
  if (role.companyStatus?.kind === 'acquired') return 'bg-sky-400'
  if (role.companyStatus?.kind === 'renamed') return 'bg-violet-400'
  return 'bg-gray-500'
}
function storyTone(role: Role) {
  const kind = role.story?.kind
  if (kind === 'acquired' || kind === 'joined') return 'bg-sky-400/10 text-sky-200 ring-sky-400/30'
  if (kind === 'renamed') return 'bg-violet-400/10 text-violet-200 ring-violet-400/30'
  return 'bg-gray-700/40 text-gray-300 ring-gray-600'
}

const track = useTemplateRef('track')
const motionPreference = usePreferredReducedMotion()

function select(index: number, scroll = true) {
  if (index < 0 || index >= roles.length) return
  selected.value = index
  if (!scroll) return
  track.value?.children[index]?.scrollIntoView({
    behavior: motionPreference.value === 'reduce' ? 'instant' : 'smooth',
    block: 'nearest',
    inline: 'center',
  })
}

onMounted(() => {
  if (track.value) track.value.scrollLeft = track.value.scrollWidth
})

// Mouse users drag the track; touch and trackpads already scroll it natively.
const dragging = ref<{ x: number; scrollLeft: number; moved: boolean } | null>(null)
function onPointerDown(event: PointerEvent) {
  if (event.pointerType !== 'mouse' || event.button !== 0 || !track.value) return
  dragging.value = { x: event.clientX, scrollLeft: track.value.scrollLeft, moved: false }
  track.value.style.scrollSnapType = 'none'
}
function onPointerMove(event: PointerEvent) {
  if (!dragging.value || !track.value) return
  const distance = event.clientX - dragging.value.x
  if (!dragging.value.moved && Math.abs(distance) > 4) {
    dragging.value.moved = true
    // Capture only once a drag starts, so plain clicks still reach the role under the cursor.
    track.value.setPointerCapture(event.pointerId)
  }
  track.value.scrollLeft = dragging.value.scrollLeft - distance
}
let suppressClick = false
function onPointerUp() {
  if (!dragging.value || !track.value) return
  suppressClick = dragging.value.moved
  dragging.value = null
  track.value.style.scrollSnapType = ''
}
function onClickCapture(event: MouseEvent) {
  if (!suppressClick) return
  suppressClick = false
  event.stopPropagation()
  event.preventDefault()
}
</script>

<style scoped>
.timeline-track {
  scrollbar-width: none;
  mask-image: linear-gradient(90deg, transparent, #000 48px, #000 calc(100% - 48px), transparent);
}
.timeline-track::-webkit-scrollbar {
  display: none;
}
.timeline-line {
  background: linear-gradient(90deg, rgb(75 85 99 / 0.2), rgb(75 85 99 / 0.8), rgb(75 85 99 / 0.2));
}
</style>
