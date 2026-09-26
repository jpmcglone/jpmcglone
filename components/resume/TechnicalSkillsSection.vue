<template>
  <div id="technical-skills" class="scroll-mt-6">
    <ResumeSectionHeading icon="i-jpm-code-bracket" title="Technical Skills" />

    <div class="mb-4">
      <UInput
        v-model="searchInput"
        placeholder="Search skills…"
        icon="i-jpm-magnifying-glass"
        class="w-full max-w-md"
        aria-label="Search technical skills"
        aria-describedby="skills-search-help"
        @update:model-value="onSearchInput"
      />
      <p id="skills-search-help" class="mt-2 text-xs text-gray-400">
        Search tools or topics: Cursor, ChatGPT, Claude, MCP, iPhone, architecture…
      </p>
      <div v-if="searchQuery.trim()" class="mt-2 flex items-center gap-3">
        <p role="status" class="text-sm text-gray-300">
          {{ matchingSkills }} matching {{ matchingSkills === 1 ? 'skill' : 'skills' }}
        </p>
        <UButton variant="ghost" color="neutral" size="xs" @click="clearSearch">
          Clear search
        </UButton>
      </div>
    </div>

    <div v-if="!searchQuery.trim()" class="mb-4 flex flex-wrap items-center justify-between gap-3">
      <p class="text-xs text-gray-400">
        {{
          showAllSkills
            ? 'Full skill set. Muted items reflect historical experience.'
            : 'Core focus. Search the full skill set or expand below.'
        }}
      </p>
      <UButton
        color="neutral"
        variant="outline"
        size="sm"
        :aria-expanded="showAllSkills"
        aria-controls="skills-list"
        @click="showAllSkills = !showAllSkills"
      >
        {{ showAllSkills ? 'Show core skills' : `Show all ${totalSkills} skills` }}
      </UButton>
    </div>

    <TransitionGroup id="skills-list" name="category" tag="div" class="grid md:grid-cols-2 gap-4">
      <UCard
        v-for="skill in sortedCategories"
        :key="skill.category"
        class="dark:bg-gray-800 transition-all duration-300"
      >
        <h3 class="text-base font-medium mb-3 text-gray-900 dark:text-white">
          {{ skill.category }}
        </h3>
        <p v-if="skill.description" class="mb-3 text-sm leading-relaxed text-gray-400">
          {{ skill.description }}
        </p>
        <div class="flex flex-wrap gap-2">
          <component
            :is="hasSkillUrl(item.name) ? 'a' : 'span'"
            v-for="item in skill.skills"
            :key="item.name"
            :href="getSkillUrl(item.name) || undefined"
            :target="hasSkillUrl(item.name) ? '_blank' : undefined"
            :rel="hasSkillUrl(item.name) ? 'noopener noreferrer' : undefined"
            :title="item.historical ? 'Historical experience' : undefined"
            class="skill-chip inline-flex items-center font-medium rounded-md text-sm px-2 py-1 gap-1.5 transition-all duration-200"
            :class="[
              item.featured
                ? 'skill-chip-primary bg-primary-400 text-gray-950'
                : item.historical
                  ? 'bg-gray-800 text-gray-500 ring-1 ring-inset ring-gray-700/50'
                  : 'bg-gray-700/60 text-gray-300',
              hasSkillUrl(item.name) ? 'cursor-pointer hover:-translate-y-0.5' : '',
            ]"
          >
            <img
              v-if="getSkillImage(item.name)"
              :src="getSkillImage(item.name)"
              alt=""
              width="16"
              height="16"
              loading="lazy"
              class="size-4 shrink-0 object-contain"
              :class="item.historical ? 'grayscale opacity-50' : ''"
            />
            <UIcon
              v-else
              :name="getSkillIcon(item.name)"
              class="h-4 w-4 shrink-0 text-current"
              :class="[
                !item.featured && isDarkSkillIcon(item.name) ? 'invert' : '',
                item.historical ? 'grayscale opacity-50' : '',
              ]"
            />
            {{ item.name }}
            <span v-if="hasSkillUrl(item.name)" class="opacity-70 group-hover:opacity-100">↗</span>
            <span v-if="item.historical" class="sr-only">(historical experience)</span>
          </component>
        </div>
      </UCard>
    </TransitionGroup>
  </div>
</template>

<script setup>
const props = defineProps({
  technicalSkills: {
    type: Array,
    required: true,
  },
})

const showAllSkills = ref(false)
const totalSkills = computed(() =>
  props.technicalSkills.reduce((sum, category) => sum + category.skills.length, 0),
)
const searchInput = ref('')
const searchQuery = ref('')

const updateQuery = useDebounceFn((value) => {
  searchQuery.value = value
}, 300)

const onSearchInput = (value) => {
  searchInput.value = value
  updateQuery(value)
}

const itemMatchesSearch = (item, category) => skillMatchesQuery(item, category, searchQuery.value)
const matchingSkills = computed(() =>
  props.technicalSkills.reduce(
    (total, category) =>
      total + category.skills.filter((item) => itemMatchesSearch(item, category)).length,
    0,
  ),
)
const clearSearch = () => {
  searchInput.value = ''
  searchQuery.value = ''
  updateQuery('')
}

const sortedCategories = computed(() =>
  visibleSkillCategories(props.technicalSkills, searchQuery.value, showAllSkills.value),
)
</script>

<style>
.category-move {
  transition: transform 0.5s ease;
}

.category-enter-active,
.category-leave-active {
  transition: all 0.5s ease;
}

.category-enter-from,
.category-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
@media (prefers-reduced-motion: reduce) {
  .category-move,
  .category-enter-active,
  .category-leave-active {
    transition: none;
  }
}
</style>
