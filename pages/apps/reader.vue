<template>
  <div class="min-h-screen flex flex-col">
    <!-- Input Area (shown only when not in presentation mode) -->
    <div v-if="!isPresenting" class="page-shell">
      <PageNav title="Lyrics Reader" />
      <div class="max-w-[800px] mx-auto">
        <div class="space-y-6">
          <h1 class="text-2xl font-semibold text-gray-50">Lyrics Reader</h1>
          <UTextarea
            v-model="inputText"
            :rows="10"
            placeholder="Paste your lyrics here..."
            aria-label="Lyrics"
            size="xl"
            :ui="{ base: 'p-6 min-h-[300px] leading-relaxed' }"
            class="w-full"
          />
          <UButton
            :disabled="!inputText"
            color="neutral"
            size="lg"
            class="w-full justify-center"
            @click="startPresentation"
          >
            Start Presentation
          </UButton>
        </div>
      </div>
    </div>

    <!-- Presentation Mode -->
    <div
      v-else
      ref="presentationRef"
      class="matte-background fixed inset-0 z-50 bg-gray-900 text-gray-50"
      tabindex="0"
      @keydown="handleKeydown"
    >
      <!-- Progress Bar -->
      <div class="fixed top-0 left-0 right-0 z-10 bg-gray-900/95 p-6">
        <div class="flex justify-between items-center text-sm mb-2">
          <span>Section {{ currentPosition.section + 1 }}/{{ sections.length }}</span>
          <span>Line {{ currentPosition.line + 1 }}/{{ currentSection?.length || 0 }}</span>
          <!-- Close Button -->
          <UButton
            icon="i-heroicons-x-mark"
            color="neutral"
            variant="ghost"
            size="sm"
            aria-label="Close presentation"
            @click="exitPresentation"
          />
        </div>
        <UProgress :model-value="progressPercent" color="primary" class="h-1" />
      </div>

      <!-- Main content container -->
      <div class="absolute inset-0 pt-24 pb-36 flex flex-col items-center" style="z-index: 1">
        <!-- Scrollable content -->
        <div ref="scrollContainer" class="h-full w-full overflow-y-auto">
          <div class="min-h-full flex flex-col">
            <!-- Top spacer -->
            <div class="h-[33vh] shrink-0"></div>

            <!-- Content wrapper -->
            <div class="flex flex-col items-center px-5">
              <!-- Previous Sections -->
              <div
                v-for="(section, sIndex) in previousSections"
                :key="`prev-section-${sIndex}`"
                class="w-full max-w-[calc(100vw-40px)] md:max-w-4xl opacity-25 mb-16"
              >
                <div
                  v-for="(sentence, lIndex) in section"
                  :key="`prev-${sIndex}-${lIndex}`"
                  class="text-3xl mb-4 text-center break-words fit-text"
                >
                  {{ sentence }}
                </div>
              </div>

              <!-- Current Section -->
              <div class="w-full max-w-[calc(100vw-40px)] md:max-w-4xl mb-16">
                <div
                  v-for="(sentence, index) in currentSection"
                  :id="index === currentPosition.line ? 'current-line' : ''"
                  :key="`current-${index}`"
                  class="text-3xl mb-4 text-center break-words fit-text"
                  :class="{
                    'font-semibold rounded-2xl bg-gray-800 py-6': index === currentPosition.line,
                  }"
                >
                  {{ sentence }}
                </div>
              </div>

              <!-- Next Sections -->
              <div
                v-for="(section, sIndex) in futureSections"
                :key="`future-section-${sIndex}`"
                class="w-full max-w-[calc(100vw-40px)] md:max-w-4xl mb-16"
                :class="{ 'opacity-50': sIndex === 0, 'opacity-25': sIndex > 0 }"
              >
                <div
                  v-for="(sentence, lIndex) in section"
                  :key="`future-${sIndex}-${lIndex}`"
                  class="text-3xl mb-4 text-center break-words fit-text"
                >
                  {{ sentence }}
                </div>
              </div>

              <!-- Bottom spacer -->
              <div class="h-[66vh] shrink-0"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- The same navigation actions are available to touch and keyboard users. -->
      <div class="fixed bottom-0 left-0 right-0 z-10 space-y-4 bg-gray-900/95 px-6 py-5">
        <div class="flex justify-center gap-3">
          <UButton
            color="neutral"
            variant="soft"
            size="lg"
            icon="i-heroicons-arrow-left"
            aria-label="Previous line"
            :disabled="!calculateNextPosition('prev', 'line')"
            @click="navigate('prev', 'line')"
          />
          <UButton
            color="neutral"
            size="lg"
            icon="i-heroicons-arrow-right"
            aria-label="Next line"
            :disabled="!calculateNextPosition('next', 'line')"
            @click="navigate('next', 'line')"
          />
          <UButton
            color="neutral"
            variant="soft"
            size="lg"
            icon="i-heroicons-arrow-path"
            aria-label="Reset presentation"
            @click="navigateTo({ section: 0, line: 0 })"
          />
        </div>
        <div class="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-gray-400">
          <span>← → Navigate Lines</span>
          <span>Shift + ← → Navigate Sections</span>
          <span>R Reset</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { pageMetadata } from '~/data/site'
definePageMeta({ colorMode: 'dark' })
usePageMetadata(pageMetadata.reader)

// State
const inputText = ref('')
const isPresenting = ref(false)
const currentPosition = ref({ section: 0, line: 0 })
const presentationRef = ref<HTMLElement | null>(null)
const scrollContainer = ref<HTMLElement | null>(null)

// Text Processing
const sections = computed(() => {
  if (!inputText.value) return []
  return inputText.value
    .split(/\n\n+/)
    .map((section) => section.split('\n'))
    .filter((section) => section.length)
})

// View Data
const currentSection = computed(() => sections.value[currentPosition.value.section] || [])
const previousSections = computed(() => sections.value.slice(0, currentPosition.value.section))
const futureSections = computed(() => sections.value.slice(currentPosition.value.section + 1))
const progressPercent = computed(() => {
  if (!sections.value.length) return 0
  const totalLines = sections.value.reduce((acc, section) => acc + section.length, 0)
  const completedLines =
    sections.value
      .slice(0, currentPosition.value.section)
      .reduce((acc, section) => acc + section.length, 0) + currentPosition.value.line
  return (completedLines / totalLines) * 100
})

// Navigation Logic
type Position = { section: number; line: number }

function isValidPosition(position: Position): boolean {
  const section = sections.value[position.section]
  return section !== undefined && position.line >= 0 && position.line < section.length
}

function calculateNextPosition(
  direction: 'next' | 'prev',
  mode: 'line' | 'section',
): Position | null {
  const { section: currentSectionIdx, line: currentLine } = currentPosition.value

  if (mode === 'line') {
    if (direction === 'next') {
      if (currentLine + 1 < (sections.value[currentSectionIdx]?.length ?? 0)) {
        return { section: currentSectionIdx, line: currentLine + 1 }
      }
      if (currentSectionIdx + 1 < sections.value.length) {
        return { section: currentSectionIdx + 1, line: 0 }
      }
    } else {
      if (currentLine > 0) {
        return { section: currentSectionIdx, line: currentLine - 1 }
      }
      if (currentSectionIdx > 0) {
        const prevSection = currentSectionIdx - 1
        return { section: prevSection, line: (sections.value[prevSection]?.length ?? 1) - 1 }
      }
    }
  } else {
    if (direction === 'next' && currentSectionIdx + 1 < sections.value.length) {
      return { section: currentSectionIdx + 1, line: 0 }
    } else if (direction === 'prev' && currentSectionIdx > 0) {
      const prevSection = currentSectionIdx - 1
      return { section: prevSection, line: (sections.value[prevSection]?.length ?? 1) - 1 }
    }
  }

  return null
}

async function navigateTo(position: Position) {
  if (!isValidPosition(position)) return

  currentPosition.value = position
  await nextTick()

  const container = scrollContainer.value
  const currentLine = document.getElementById('current-line')

  if (!container || !currentLine) return

  const containerRect = container.getBoundingClientRect()
  const lineRect = currentLine.getBoundingClientRect()
  const targetFromTop = containerRect.height / 3
  const scrollTarget = container.scrollTop + (lineRect.top - containerRect.top) - targetFromTop

  container.scrollTo({ top: scrollTarget, behavior: 'smooth' })
}

function navigate(direction: 'next' | 'prev', mode: 'line' | 'section') {
  const nextPosition = calculateNextPosition(direction, mode)
  if (nextPosition) navigateTo(nextPosition)
}

function handleKeydown(event: KeyboardEvent) {
  if (event.shiftKey) {
    if (event.key === 'ArrowRight') {
      event.preventDefault()
      navigate('next', 'section')
    } else if (event.key === 'ArrowLeft') {
      event.preventDefault()
      navigate('prev', 'section')
    }
  } else {
    if (event.key === 'ArrowRight') {
      event.preventDefault()
      navigate('next', 'line')
    } else if (event.key === 'ArrowLeft') {
      event.preventDefault()
      navigate('prev', 'line')
    } else if (event.key === 'ArrowUp') {
      event.preventDefault()
      navigate('prev', 'section')
    } else if (event.key === 'ArrowDown') {
      event.preventDefault()
      navigate('next', 'section')
    } else if (event.key === 'r' || event.key === 'R') {
      event.preventDefault()
      navigateTo({ section: 0, line: 0 })
    } else if (event.key === 'Escape') {
      event.preventDefault()
      isPresenting.value = false
    }
  }
}

function startPresentation() {
  if (!sections.value.length) return
  isPresenting.value = true
  navigateTo({ section: 0, line: 0 })
}

function exitPresentation() {
  isPresenting.value = false
}

watch(isPresenting, (newValue) => {
  if (newValue) nextTick(() => presentationRef.value?.focus())
})
</script>

<style scoped>
@keyframes pulse {
  0%,
  100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.6;
    transform: scale(1.2);
  }
}

.animate-pulse {
  animation: pulse 1.5s ease-in-out infinite;
}

.opacity-25,
.opacity-50 {
  transition: opacity 0.3s ease-out;
}

.text-3xl {
  transition: font-weight 0.3s ease-out;
}

.fit-text {
  font-size: clamp(1rem, 5vw, 1.875rem);
  padding-inline: 1rem;
}
</style>
