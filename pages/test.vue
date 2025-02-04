<template>
  <div class="min-h-screen bg-gray-50">
    <UContainer class="py-8">
      <UPageHeader
        title="Nuxt UI Components"
        description="A showcase of beautiful UI components"
        class="mb-8"
      >
        <template #right>
          <UButton
            icon="i-heroicons-sparkles"
            color="primary"
            @click="showNotification"
          >
            Try Me!
          </UButton>
        </template>
      </UPageHeader>

      <UTabs
        :items="tabs"
        class="mb-8"
      />

      <div class="grid md:grid-cols-2 gap-4 mb-8">
        <UCard>
          <template #header>
            <div class="flex items-center gap-2">
              <UIcon name="i-heroicons-chart-bar" class="text-primary-500" />
              <h3 class="text-lg font-medium">Statistics</h3>
            </div>
          </template>
          <UStat
            label="Components Shown"
            :value="12"
            :change="30"
            help="Compared to last week"
          />
        </UCard>

        <UCard>
          <template #header>
            <div class="flex items-center gap-2">
              <UIcon name="i-heroicons-bell-alert" class="text-primary-500" />
              <h3 class="text-lg font-medium">Notifications</h3>
            </div>
          </template>
          <UTimeline :items="timelineItems" />
        </UCard>
      </div>

      <div class="space-y-4">
        <UCard>
          <template #header>
            <div class="flex items-center justify-between">
              <h3 class="text-lg font-medium">Interactive Elements</h3>
              <UBadge color="primary">New</UBadge>
            </div>
          </template>
          
          <div class="space-y-4">
            <UFormGroup label="Search Components">
              <UInput
                v-model="search"
                icon="i-heroicons-magnifying-glass"
                placeholder="Type to search..."
                color="primary"
              />
            </UFormGroup>

            <div class="flex flex-wrap gap-2">
              <UChip
                v-for="tag in tags"
                :key="tag"
                :text="tag"
                color="primary"
                variant="soft"
              />
            </div>

            <UDivider label="Progress Section" />

            <div class="space-y-2">
              <UProgress value="75" color="primary" class="mb-2" />
              <p class="text-sm text-gray-500">
                Loading progress: 75%
              </p>
            </div>
          </div>
        </UCard>

        <UCard>
          <template #header>
            <div class="flex items-center gap-2">
              <UIcon name="i-heroicons-question-mark-circle" />
              <h3 class="text-lg font-medium">FAQ</h3>
            </div>
          </template>
          <UAccordion :items="faqItems" />
        </UCard>
      </div>
    </UContainer>
  </div>
</template>

<script setup>
const search = ref('')
const tags = ['UI', 'Components', 'Design', 'Interactive']

const tabs = [{
  label: 'Overview',
  icon: 'i-heroicons-home'
}, {
  label: 'Components',
  icon: 'i-heroicons-squares-2x2'
}, {
  label: 'Documentation',
  icon: 'i-heroicons-book-open'
}]

const timelineItems = [{
  title: 'Component Added',
  description: 'New UI component was added',
  date: '2 hours ago'
}, {
  title: 'Update Released',
  description: 'Version 2.21 is now live',
  date: 'Yesterday'
}]

const faqItems = [{
  label: 'What is Nuxt UI?',
  content: 'Nuxt UI is a fully styled and customizable components library for Nuxt.',
  icon: 'i-heroicons-question-mark-circle'
}, {
  label: 'Is it easy to use?',
  content: 'Yes! Components are auto-imported and ready to use in your templates.',
  icon: 'i-heroicons-light-bulb'
}]

const showNotification = () => {
  useToast().add({
    title: 'Welcome!',
    description: 'Thanks for checking out Nuxt UI components',
    icon: 'i-heroicons-sparkles',
    color: 'primary',
    timeout: 3000
  })
}
</script>