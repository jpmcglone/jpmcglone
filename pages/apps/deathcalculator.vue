<template>
  <UContainer class="py-16">
    <UCard>
      <div class="flex items-center justify-between">
        <div>
          <h1 class="text-2xl font-semibold">Age Calculator</h1>
          <p class="text-gray-500 mt-1">Calculate precise ages and periods from birthdays</p>
        </div>
        <ColorModeToggle />
      </div>

      <div v-if="!birthdays.length" class="flex flex-col items-center justify-center p-8">
        <p class="text-gray-500">
          No birthdays provided. Add ?birthdays=YYYY-MM-DD or ?birthdays=YYYY-MM-DD,YYYY-MM-DD to the URL.
        </p>
      </div>
      <div v-else class="flex flex-col gap-6 p-4">
        <BirthdayCard v-for="(birthday, index) in birthdays" :key="index" :birthday="birthday" :max-age="maxAge" />
      </div>
    </UCard>
  </UContainer>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const route = useRoute()

const maxAge = computed(() => {
  const maxAgeParam = Number(route.query.maxAge)
  return !isNaN(maxAgeParam) && maxAgeParam > 0 ? maxAgeParam : 80
})

const birthdays = computed(() => {
  const birthdaysParam = route.query.birthdays as string
  if (!birthdaysParam) return []

  return birthdaysParam
    .split(',')
    .map((date) => date.trim())
    .filter((date) => /^\d{4}-\d{2}-\d{2}$/.test(date))
})
</script>
