<template>
  <div v-if="testimonials">
    <h2 class="text-xl font-semibold mb-4 flex items-center gap-2 text-gray-900 dark:text-white">
      <UIcon name="i-heroicons-chat-bubble-bottom-center-text" class="text-primary-500 h-5 w-5" />
      Testimonials
    </h2>
    <div class="grid md:grid-cols-2 gap-4">
      <UCard
        v-for="testimonial in testimonials"
        :key="testimonial.author"
        class="dark:bg-gray-800"
      >
        <div class="space-y-4">
          <p class="text-gray-600 dark:text-gray-100 italic">
            "{{ testimonial.quote }}"
          </p>
          <div class="flex items-center gap-4">
            <UAvatar
              v-if="testimonial.image"
              :src="testimonial.image"
              :alt="testimonial.author"
              size="sm"
            />
            <div>
              <p class="text-sm font-medium text-gray-900 dark:text-white">
                {{ testimonial.author }}
              </p>
              <p class="text-xs text-gray-500 dark:text-gray-400">
                {{ testimonial.title }} at {{ testimonial.company }}
              </p>
            </div>
          </div>
        </div>
      </UCard>
    </div>
  </div>
</template>

<script setup>
defineProps({
  testimonials: {
    type: Array,
    required: true
  }
})
</script> 