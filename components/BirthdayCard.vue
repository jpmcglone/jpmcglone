<template>
  <UCard>
    <template #header>
      <div class="flex items-center justify-between">
        <h3 class="text-xl font-semibold">{{ formattedBirthday }}</h3>
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

    <div class="grid grid-cols-3 gap-8">
      <!-- Precise Age -->
      <div>
        <h4 class="mb-3 font-medium text-gray-700 dark:text-gray-300">Precise Age</h4>
        <div class="grid grid-cols-2 gap-3">
          <div class="rounded-lg bg-gray-100 p-3 dark:bg-gray-800">
            <div class="text-sm text-gray-500">Years</div>
            <div class="text-2xl font-semibold">{{ formatNumber(ageData.years) }}</div>
          </div>
          <div class="rounded-lg bg-gray-100 p-3 dark:bg-gray-800">
            <div class="text-sm text-gray-500">Months</div>
            <div class="text-2xl font-semibold">{{ formatNumber(ageData.months) }}</div>
          </div>
          <div class="rounded-lg bg-gray-100 p-3 dark:bg-gray-800">
            <div class="text-sm text-gray-500">Weeks</div>
            <div class="text-2xl font-semibold">{{ formatNumber(ageData.weeks) }}</div>
          </div>
          <div class="rounded-lg bg-gray-100 p-3 dark:bg-gray-800">
            <div class="text-sm text-gray-500">Days</div>
            <div class="text-2xl font-semibold">{{ formatNumber(ageData.days) }}</div>
          </div>
        </div>
      </div>

      <!-- Current Periods -->
      <div>
        <h4 class="mb-3 font-medium text-gray-700 dark:text-gray-300">Current Periods</h4>
        <div class="space-y-3 rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
          <div class="flex items-center justify-between">
            <span class="text-gray-500">Day</span>
            <span class="text-xl font-medium">{{ formatNumber(currentPeriods.day) }}</span>
          </div>
          <div class="flex items-center justify-between">
            <span class="text-gray-500">Week</span>
            <span class="text-xl font-medium">{{ formatNumber(currentPeriods.week) }}</span>
          </div>
          <div class="flex items-center justify-between">
            <span class="text-gray-500">Month</span>
            <span class="text-xl font-medium">{{ formatNumber(currentPeriods.month) }}</span>
          </div>
          <div class="flex items-center justify-between">
            <span class="text-gray-500">Year</span>
            <span class="text-xl font-medium">{{ formatNumber(currentPeriods.year) }}</span>
          </div>
        </div>
      </div>

      <!-- Year Grid -->
      <div>
        <h4 class="mb-3 font-medium text-gray-700 dark:text-gray-300">
          Life in Years ({{ formatNumber(ageData.years) }})
        </h4>
        <div class="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
          <div class="grid w-full grid-cols-10 gap-1">
            <template v-for="i in props.maxAge" :key="i">
              <div class="relative w-full pb-[100%]">
                <div
                  class="absolute inset-0 rounded"
                  :class="[
                    i <= ageData.years
                      ? 'bg-primary-500'
                      : i === ageData.years + 1
                        ? 'bg-primary-500 animate-pulse-opacity'
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
} from 'date-fns';

const props = defineProps<{
  birthday: string;
  maxAge: number;
}>();

const birthDate = computed(() => {
  const date = parseISO(props.birthday);
  const offset = date.getTimezoneOffset();
  date.setMinutes(date.getMinutes() + offset);
  return date;
});

const today = new Date();

const formattedBirthday = computed(() => format(birthDate.value, 'MMMM d, yyyy'));

const ageData = computed(() => ({
  years: differenceInYears(today, birthDate.value),
  months: differenceInMonths(today, birthDate.value),
  weeks: differenceInWeeks(today, birthDate.value),
  days: differenceInDays(today, birthDate.value),
}));

const progressPercent = computed(() => {
  return Math.round((ageData.value.years / props.maxAge) * 100);
});

const currentPeriods = computed(() => {
  const birthDateObj = birthDate.value;
  const nextDay = new Date(birthDateObj);
  nextDay.setDate(birthDateObj.getDate() + 1);

  const nextSunday = startOfWeek(birthDateObj, { weekStartsOn: 0 });
  nextSunday.setDate(nextSunday.getDate() + 7);

  const nextMonth = new Date(birthDateObj);
  nextMonth.setMonth(nextMonth.getMonth() + 1);
  nextMonth.setDate(1);

  const nextYear = new Date(birthDateObj);
  nextYear.setFullYear(nextYear.getFullYear() + 1);
  nextYear.setMonth(0, 1);

  return {
    day: differenceInDays(today, nextDay) + 1,
    week: differenceInWeeks(today, nextSunday) + 1,
    month: differenceInMonths(today, nextMonth) + 1,
    year: differenceInYears(today, nextYear) + 1,
  };
});

const formatNumber = (num: number) => {
  return new Intl.NumberFormat().format(num);
};
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