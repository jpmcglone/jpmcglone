<template>
  <UCard>
    <template #header>
      <div class="flex flex-wrap items-center justify-between gap-3">
        <h3 class="text-2xl font-semibold text-gray-50">{{ formattedBirthday }}</h3>
        <UBadge color="primary" size="lg" class="text-lg">{{ formatNumber(ageData.years) }} years</UBadge>
      </div>
    </template>

    <!-- Progress Bar Section -->
    <div class="space-y-2 mb-6">
      <div class="flex justify-between text-sm">
        <span class="text-gray-500">Life Progress</span>
        <span class="text-gray-700 dark:text-gray-300">{{ progressPercent }}%</span>
      </div>
      <UProgress :value="progressPercent" color="primary" />
    </div>

    <div class="grid grid-cols-1 gap-8 lg:grid-cols-3">
      <!-- Precise Age -->
      <div>
        <h4 class="mb-3 font-medium text-gray-700 dark:text-gray-300">Precise Age</h4>
        <div class="grid grid-cols-2 gap-3">
          <div v-for="metric in ageMetrics" :key="metric.key" class="rounded-xl border border-gray-700 bg-gray-900/50 p-4">
            <div class="text-[28px] font-semibold leading-9 tabular-nums text-gray-50">{{ formatNumber(ageData[metric.key]) }}</div>
            <div class="mt-2 text-xs font-medium text-primary-400">{{ metric.label }}</div>
          </div>
        </div>
      </div>

      <!-- Current Periods -->
      <div>
        <h4 class="mb-3 font-medium text-gray-700 dark:text-gray-300">Current Periods</h4>
        <div class="space-y-4 rounded-xl border border-gray-700 bg-gray-900/50 p-4">
          <div v-for="period in periodMetrics" :key="period.key" class="flex items-center justify-between gap-4">
            <span class="text-sm text-gray-400">{{ period.label }}</span>
            <span class="text-xl font-medium tabular-nums text-gray-50">{{ formatNumber(currentPeriods[period.key]) }}</span>
          </div>
        </div>
      </div>

      <!-- Year Grid -->
      <div>
        <h4 class="mb-3 font-medium text-gray-700 dark:text-gray-300">
          Life in Years ({{ formatNumber(ageData.years) }})
        </h4>
        <div class="rounded-xl border border-gray-700 bg-gray-900/50 p-4">
          <div class="grid w-full grid-cols-10 gap-1.5">
            <template v-for="i in props.maxAge" :key="i">
              <div class="relative w-full pb-[100%]">
                <div
                  class="absolute inset-0 rounded"
                  :class="[
                    i <= ageData.years
                      ? 'bg-primary-400'
                      : i === ageData.years + 1
                        ? 'bg-gray-300 animate-pulse-opacity'
                        : 'bg-gray-200 dark:bg-gray-700',
                  ]"
                />
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>
  </UCard>
</template>

<script setup lang="ts">
import {
  differenceInDays,
  differenceInMonths,
  differenceInWeeks,
  differenceInYears,
  format,
  startOfWeek,
  parseISO,
} from 'date-fns'

const props = defineProps<{
  birthday: string
  maxAge: number
}>()

const birthDate = computed(() => {
  const date = parseISO(props.birthday)
  const offset = date.getTimezoneOffset()
  date.setMinutes(date.getMinutes() + offset)
  return date
})

const ageMetrics = [
  { key: 'years', label: 'Years' },
  { key: 'months', label: 'Months' },
  { key: 'weeks', label: 'Weeks' },
  { key: 'days', label: 'Days' },
] as const
const periodMetrics = [
  { key: 'day', label: 'Day' },
  { key: 'week', label: 'Week' },
  { key: 'month', label: 'Month' },
  { key: 'year', label: 'Year' },
] as const

const today = new Date()

const formattedBirthday = computed(() => format(birthDate.value, 'MMMM d, yyyy'))

const ageData = computed(() => ({
  years: differenceInYears(today, birthDate.value),
  months: differenceInMonths(today, birthDate.value),
  weeks: differenceInWeeks(today, birthDate.value),
  days: differenceInDays(today, birthDate.value),
}))

const progressPercent = computed(() => {
  return Math.round((ageData.value.years / props.maxAge) * 100)
})

const currentPeriods = computed(() => {
  const birthDateObj = birthDate.value
  const nextDay = new Date(birthDateObj)
  nextDay.setDate(birthDateObj.getDate() + 1)

  const nextSunday = startOfWeek(birthDateObj, { weekStartsOn: 0 })
  nextSunday.setDate(nextSunday.getDate() + 7)

  const nextMonth = new Date(birthDateObj)
  nextMonth.setMonth(nextMonth.getMonth() + 1)
  nextMonth.setDate(1)

  const nextYear = new Date(birthDateObj)
  nextYear.setFullYear(nextYear.getFullYear() + 1)
  nextYear.setMonth(0, 1)

  return {
    day: differenceInDays(today, nextDay) + 1,
    week: differenceInWeeks(today, nextSunday) + 1,
    month: differenceInMonths(today, nextMonth) + 1,
    year: differenceInYears(today, nextYear) + 1,
  }
})
</script>

<style>
@keyframes pulse-opacity {
  0%,
  100% {
    opacity: 0.25;
  }
  50% {
    opacity: 0.6;
  }
}

.animate-pulse-opacity {
  animation: pulse-opacity 2s ease-in-out infinite;
}
</style>
