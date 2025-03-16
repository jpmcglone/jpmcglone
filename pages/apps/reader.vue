<template>
  <div class="min-h-screen flex flex-col">
    <!-- Input Area (shown only when not in presentation mode) -->
    <div v-if="!isPresenting" class="p-8">
      <UCard class="max-w-3xl mx-auto">
        <div class="space-y-4">
          <h1 class="text-2xl font-semibold">Lyrics Reader</h1>
          <UTextarea
            v-model="inputText"
            :rows="10"
            placeholder="Paste your lyrics here..."
            class="w-full font-mono"
          />
          <UButton 
            @click="startPresentation" 
            :disabled="!inputText"
            color="primary"
            size="lg"
            class="w-full"
          >
            Start Presentation
          </UButton>
        </div>
      </UCard>
    </div>

    <!-- Presentation Mode -->
    <div 
      v-else 
      class="fixed inset-0 bg-gray-900 text-white"
      @keydown="handleKeydown"
      tabindex="0"
      ref="presentationRef"
    >
      <!-- Progress Bar -->
      <div class="fixed top-0 left-0 right-0 z-10 bg-gray-900 bg-opacity-80 p-4">
        <div class="flex justify-between items-center text-sm mb-2">
          <span>Section {{ currentPosition.section + 1 }}/{{ sections.length }}</span>
          <span>Line {{ currentPosition.line + 1 }}/{{ currentSection?.length || 0 }}</span>
          <!-- Close Button -->
          <UButton
            icon="i-heroicons-x-mark"
            color="gray"
            variant="ghost"
            size="sm"
            @click="exitPresentation"
            aria-label="Close presentation"
          />
        </div>
        <UProgress 
          :value="progressPercent" 
          color="primary"
          class="h-1"
        />
      </div>

      <!-- Fixed indicator at 1/3 mark -->
      <div class="fixed left-0 right-0 top-0 h-full pointer-events-none" style="z-index: 0;">
        <div class="relative h-full">
          <div class="absolute top-[calc(33.333vh-2.5rem)] w-full">
            <div class="flex justify-center items-center">
              <div class="max-w-4xl w-full">
                <div class="w-full h-12 bg-primary-500 bg-opacity-10 rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Main content container -->
      <div class="absolute inset-0 pt-16 pb-16 flex flex-col items-center" style="z-index: 1;">
        <!-- Scrollable content -->
        <div 
          class="h-full w-full overflow-y-auto" 
          ref="scrollContainer"
        >
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
                  class="text-3xl mb-4 text-center whitespace-nowrap overflow-hidden text-ellipsis fit-text"
                >
                  {{ sentence }}
                </div>
              </div>

              <!-- Current Section -->
              <div class="w-full max-w-[calc(100vw-40px)] md:max-w-4xl mb-16">
                <div 
                  v-for="(sentence, index) in currentSection" 
                  :key="`current-${index}`"
                  class="text-3xl mb-4 text-center whitespace-nowrap overflow-hidden text-ellipsis fit-text"
                  :class="{
                    'font-semibold': index === currentPosition.line
                  }"
                  :id="index === currentPosition.line ? 'current-line' : ''"
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
                  class="text-3xl mb-4 text-center whitespace-nowrap overflow-hidden text-ellipsis fit-text"
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

      <!-- Controls Help -->
      <div class="fixed bottom-0 left-0 right-0 z-10 bg-gray-900 bg-opacity-80 p-4 flex justify-center gap-8 text-sm text-gray-400">
        <span>← → Navigate Lines</span>
        <span>Shift + ← → Navigate Sections</span>
        <span>R Reset</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, nextTick } from 'vue'

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
    .map(section => section.split('\n'))
    .filter(section => section.length)
})

// View Data
const currentSection = computed(() => sections.value[currentPosition.value.section] || [])
const previousSections = computed(() => sections.value.slice(0, currentPosition.value.section))
const futureSections = computed(() => sections.value.slice(currentPosition.value.section + 1))
const progressPercent = computed(() => {
  if (!sections.value.length) return 0
  const totalLines = sections.value.reduce((acc, section) => acc + section.length, 0)
  const completedLines = sections.value
    .slice(0, currentPosition.value.section)
    .reduce((acc, section) => acc + section.length, 0) + currentPosition.value.line
  return (completedLines / totalLines) * 100
})

// Navigation Logic
type Position = { section: number, line: number }

function isValidPosition(position: Position): boolean {
  console.log('isValidPosition')
  const section = sections.value[position.section]
  return section !== undefined && position.line >= 0 && position.line < section.length
}

function calculateNextPosition(direction: 'next' | 'prev', mode: 'line' | 'section'): Position | null {
  console.log('calculateNextPosition', { direction, mode })
  const { section: currentSection, line: currentLine } = currentPosition.value
  
  if (mode === 'line') {
    if (direction === 'next') {
      // Try next line in current section
      if (currentLine + 1 < sections.value[currentSection]?.length) {
        return { section: currentSection, line: currentLine + 1 }
      }
      // Try first line of next section
      if (currentSection + 1 < sections.value.length) {
        return { section: currentSection + 1, line: 0 }
      }
    } else {
      // Try previous line in current section
      if (currentLine > 0) {
        return { section: currentSection, line: currentLine - 1 }
      }
      // Try last line of previous section
      if (currentSection > 0) {
        const prevSection = currentSection - 1
        return { section: prevSection, line: sections.value[prevSection].length - 1 }
      }
    }
  } else { // mode === 'section'
    if (direction === 'next' && currentSection + 1 < sections.value.length) {
      return { section: currentSection + 1, line: 0 }
    } else if (direction === 'prev' && currentSection > 0) {
      const prevSection = currentSection - 1
      return { section: prevSection, line: sections.value[prevSection].length - 1 }
    }
  }
  
  return null
}

async function navigateTo(position: Position) {
  console.log('navigateTo', position)
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
  
  container.scrollTo({
    top: scrollTarget,
    behavior: 'smooth'
  })
}

// Navigation Commands
function navigate(direction: 'next' | 'prev', mode: 'line' | 'section') {
  console.log('navigate', { direction, mode })
  const nextPosition = calculateNextPosition(direction, mode)
  if (nextPosition) {
    navigateTo(nextPosition)
  }
}

// Event Handlers
function handleKeydown(event: KeyboardEvent) {
  console.log('handleKeydown', event.key)
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

// Focus Management
watch(isPresenting, (newValue) => {
  if (newValue) {
    nextTick(() => {
      presentationRef.value?.focus()
    })
  }
})
</script>

<style scoped>
@keyframes pulse {
  0%, 100% {
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

/* Add smooth transitions for opacity changes */
.opacity-25,
.opacity-50 {
  transition: opacity 0.3s ease-out;
}

/* Add smooth transitions for font weight changes */
.text-3xl {
  transition: font-weight 0.3s ease-out;
}

/* Fit text container */
.fit-text {
  font-size: clamp(1rem, 5vw, 1.875rem);
  padding: 0 1rem;
}
</style>