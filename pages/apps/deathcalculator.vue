<template>
  <UContainer class="page-shell max-w-[1200px]">
    <PageNav title="Age Calculator" />
    <div class="space-y-8">
      <div class="flex items-center justify-between">
        <div>
          <h1 class="text-2xl font-semibold text-gray-50">Age Calculator</h1>
          <p class="text-gray-400 mt-3">Calculate precise ages and periods from birthdays</p>
        </div>
      </div>

      <UCard>
        <form
          class="grid items-start gap-4 sm:grid-cols-[1fr_140px_auto]"
          @submit.prevent="calculate"
        >
          <UFormField label="Birthday" name="birthdays" :error="error || undefined">
            <UInput
              v-model="birthdayInput"
              class="w-full"
              placeholder="YYYY-MM-DD"
              size="lg"
              icon="i-heroicons-calendar-days"
            />
          </UFormField>
          <UFormField label="Life in Years" name="maxAge">
            <UInput v-model="maxAgeInput" type="number" min="1" step="1" required size="lg" />
          </UFormField>
          <UButton type="submit" color="neutral" size="lg" class="justify-center sm:mt-6">
            Calculate age
          </UButton>
        </form>
      </UCard>

      <div v-if="!birthdays.length" class="py-4">
        <p class="text-sm leading-relaxed text-gray-400">
          No birthdays provided. Add ?birthdays=YYYY-MM-DD or ?birthdays=YYYY-MM-DD,YYYY-MM-DD to
          the URL.
        </p>
      </div>
      <div v-else class="flex flex-col gap-6">
        <BirthdayCard
          v-for="(birthday, index) in birthdays"
          :key="index"
          :birthday="birthday"
          :max-age="maxAge"
        />
      </div>
    </div>
  </UContainer>
</template>

<script setup lang="ts">
import { pageMetadata } from '~/data/site'
import { isValid, parseISO } from 'date-fns'

definePageMeta({ colorMode: 'dark' })
usePageMetadata(pageMetadata.ageCalculator)

const route = useRoute()
const router = useRouter()
const birthdayInput = ref('')
const maxAgeInput = ref(80)
const error = ref('')

const validBirthday = (date: string) => /^\d{4}-\d{2}-\d{2}$/.test(date) && isValid(parseISO(date))

const maxAge = computed(() => {
  const maxAgeParam = Number(route.query.maxAge)
  return Number.isInteger(maxAgeParam) && maxAgeParam > 0 ? maxAgeParam : 80
})

const birthdays = computed(() => {
  const birthdaysParam = route.query.birthdays
  if (typeof birthdaysParam !== 'string') return []
  if (!birthdaysParam) return []
  return birthdaysParam
    .split(',')
    .map((date) => date.trim())
    .filter(validBirthday)
})

watch(
  () => [route.query.birthdays, maxAge.value],
  () => {
    birthdayInput.value = typeof route.query.birthdays === 'string' ? route.query.birthdays : ''
    maxAgeInput.value = maxAge.value
    error.value = ''
  },
  { immediate: true },
)

async function calculate() {
  const dates = birthdayInput.value.split(',').map((date) => date.trim())
  if (!dates.length || dates.some((date) => !validBirthday(date))) {
    error.value = 'Use dates in YYYY-MM-DD format, separated by commas.'
    return
  }
  error.value = ''
  await router.push({
    query: { ...route.query, birthdays: dates.join(','), maxAge: String(maxAgeInput.value) },
  })
}
</script>
