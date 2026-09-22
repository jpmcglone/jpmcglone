<template>
  <div id="technical-skills" class="scroll-mt-6">
    <ResumeSectionHeading icon="i-heroicons-code-bracket" title="Technical Skills" />

    <div class="mb-4">
      <UInput
        v-model="searchInput"
        placeholder="Search skills..."
        icon="i-heroicons-magnifying-glass"
        class="max-w-md"
        aria-label="Search technical skills"
        aria-describedby="skills-search-help"
        @update:model-value="onSearchInput"
      />
      <p id="skills-search-help" class="mt-2 text-xs text-gray-400">Search tools or topics: Cursor, ChatGPT, Claude, MCP, iPhone, architecture…</p>
      <div v-if="searchQuery.trim()" class="mt-2 flex items-center gap-3">
        <p role="status" class="text-sm text-gray-300">{{ matchingSkills }} matching {{ matchingSkills === 1 ? 'skill' : 'skills' }}</p>
        <UButton variant="ghost" color="gray" size="xs" @click="clearSearch">Clear search</UButton>
      </div>
    </div>

    <p class="mb-4 text-xs text-gray-400">Filled chips highlight my core focus. Muted items reflect historical experience.</p>

    <TransitionGroup
      name="category"
      tag="div"
      class="grid md:grid-cols-2 gap-4"
    >
      <UCard
        v-for="skill in sortedCategories"
        :key="skill.category"
        class="dark:bg-gray-800 transition-all duration-300"
        :class="{
          'opacity-20': !categoryMatchesSearch(skill),
          'scale-[1.02] shadow-lg': categoryMatchesSearch(skill) && searchQuery
        }"
      >
        <h3 class="text-base font-medium mb-3 text-gray-900 dark:text-white">
          {{ skill.category }}
        </h3>
        <p v-if="skill.description" class="mb-3 text-sm leading-relaxed text-gray-400">{{ skill.description }}</p>
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
              item.featured ? 'skill-chip-primary bg-primary-400 text-gray-950' : item.historical ? 'bg-gray-800 text-gray-500 ring-1 ring-inset ring-gray-700/50' : 'bg-gray-700/60 text-gray-300',
              !itemMatchesSearch(item, skill) ? 'opacity-20' : '',
              itemMatchesSearch(item, skill) && searchQuery ? 'scale-[1.05] shadow-sm' : '',
              hasSkillUrl(item.name) ? 'cursor-pointer hover:-translate-y-0.5' : ''
            ]"
          >
            <UIcon
              :name="getSkillIcon(item.name, item.featured)"
              class="h-4 w-4 text-current"
              :class="[!item.featured && isAppleSkill(item.name) ? 'dark:invert' : '', item.historical ? 'grayscale opacity-50' : '']"
            />
            {{ item.name }}
            <span v-if="hasSkillUrl(item.name)" class="opacity-70 group-hover:opacity-100">↗</span>
            <span v-if="item.historical" class="sr-only"> (historical experience)</span>
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
    required: true
  }
})

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
const categoryMatchesSearch = category => skillCategoryMatchesQuery(category, searchQuery.value)
const matchingSkills = computed(() => props.technicalSkills.reduce((total, category) => total + category.skills.filter(item => itemMatchesSearch(item, category)).length, 0))
const clearSearch = () => {
  searchInput.value = ''
  searchQuery.value = ''
  updateQuery('')
}

const sortedCategories = computed(() => rankSkillCategories(props.technicalSkills, searchQuery.value))
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
</style>
