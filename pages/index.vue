<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
    <div class="container mx-auto py-6 md:py-10 px-4 md:px-8">
      <section class="max-w-4xl mx-auto bg-white rounded-lg border border-gray-100 shadow-[0_2px_8px_-3px_rgba(0,0,0,0.05)]" v-if="resumeData">
        <!-- Header with refined gradient -->
        <header class="relative mb-16 p-6 md:p-8 rounded-t-lg bg-gradient-to-b from-white via-white to-gray-50/50">
          <div class="absolute -bottom-16 left-1/2 transform -translate-x-1/2">
            <img 
              :src="resumeData.personalInfo.image" 
              :alt="resumeData.personalInfo.name" 
              class="w-28 h-28 md:w-32 md:h-32 rounded-full object-cover border-4 border-white shadow-sm"
            />
          </div>
          <div class="text-center mb-8">
            <h1 class="text-4xl md:text-5xl font-bold text-gray-800">{{ resumeData.personalInfo.name }}</h1>
            <p class="text-lg md:text-xl mt-2 text-gray-600">{{ resumeData.personalInfo.title }}</p>
            <p class="mt-1 text-gray-500 text-sm md:text-base">
              {{ resumeData.personalInfo.location }} | {{ resumeData.personalInfo.phone }} | 
              <a :href="'mailto:' + resumeData.personalInfo.email" class="text-gray-700 hover:text-gray-900 underline">
                {{ resumeData.personalInfo.email }}
              </a>
            </p>
          </div>
        </header>

        <!-- Sections with subtle borders and gradients -->
        <section class="mt-20 mb-8 px-4 md:px-6 py-6 md:py-8 bg-gradient-to-br from-white to-gray-50/30 rounded-lg border border-gray-100/50 hover:bg-white hover:border-gray-200/50 transition-all duration-500">
          <h2 class="text-xl md:text-2xl font-semibold text-gray-700 mb-4 flex items-center">
            <span class="mr-2 opacity-70">🎯</span> Objective
          </h2>
          <p class="text-gray-600 leading-relaxed">{{ resumeData.objective }}</p>
        </section>

        <!-- Technical Skills with gradient cards -->
        <section class="mb-8 px-4 md:px-6 py-6 md:py-8">
          <h2 class="text-xl md:text-2xl font-semibold text-gray-800 mb-6 flex items-center">
            <span class="mr-2">⚡</span> Technical Skills
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div v-for="skill in resumeData.technicalSkills" 
                 :key="skill.category"
                 class="p-4 rounded-lg bg-gradient-to-br from-gray-50 to-white border border-gray-100/50 hover:border-gray-200/50 hover:from-white hover:to-gray-50/30 transition-all duration-500">
              <h3 class="font-medium text-gray-800">{{ skill.category }}</h3>
              <p class="text-gray-600 mt-1 text-sm md:text-base">{{ skill.skills }}</p>
            </div>
          </div>
        </section>

        <!-- Experience Section -->
        <section class="mb-8 px-4 md:px-6 py-6 md:py-8 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
          <h2 class="text-xl md:text-2xl font-semibold text-gray-800 mb-6 flex items-center">
            <span class="mr-2">💼</span> Professional Experience
          </h2>
          <div v-for="job in resumeData.experience" 
               :key="job.company" 
               class="mb-8 last:mb-0">
            <div class="flex flex-col md:flex-row md:items-start gap-4 md:gap-6 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-300">
              <img 
                :src="job.logo" 
                :alt="`${job.company} Logo`" 
                class="w-12 h-12 md:w-16 md:h-16 object-contain rounded-lg"
              />
              <div>
                <h3 class="text-lg md:text-xl font-semibold text-gray-800">{{ job.company }} - {{ job.title }}</h3>
                <p class="text-gray-600">{{ job.period }}{{ job.location ? ` (${job.location})` : '' }}</p>
                <ul class="mt-3 space-y-2">
                  <li v-for="(responsibility, index) in job.responsibilities" 
                      :key="index"
                      class="flex items-start">
                    <span class="text-gray-400 mr-2">•</span>
                    <span class="text-gray-600">{{ responsibility }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <!-- Achievements Section -->
        <section class="mb-8 px-4 md:px-6 py-6 md:py-8 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
          <h2 class="text-xl md:text-2xl font-semibold text-gray-800 mb-6 flex items-center">
            <span class="mr-2">🏆</span> Key Achievements
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <div v-for="achievement in resumeData.achievements" 
                 :key="achievement.title"
                 class="p-4 md:p-6 rounded-lg bg-gray-50 hover:bg-gray-100 transition-all duration-300">
              <h3 class="text-lg md:text-xl font-semibold text-gray-800">{{ achievement.title }}</h3>
              <p class="text-gray-600 mt-2 text-sm md:text-base">{{ achievement.description }}</p>
              <div class="mt-3 inline-block px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm font-medium">
                {{ achievement.metric }}
              </div>
            </div>
          </div>
        </section>

        <!-- Speaking & Publications Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-8">
          <!-- Speaking Engagements -->
          <section class="px-4 md:px-6 py-6 md:py-8 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
            <h2 class="text-xl md:text-2xl font-semibold text-gray-800 mb-6 flex items-center">
              <span class="mr-2">🎤</span> Speaking
            </h2>
            <div class="space-y-4">
              <div v-for="talk in resumeData.speakingEngagements" 
                   :key="talk.event"
                   class="p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-300">
                <h3 class="font-medium text-gray-800">{{ talk.title }}</h3>
                <p class="text-gray-700">{{ talk.event }}</p>
                <p class="text-gray-500 text-sm">{{ talk.location }} - {{ talk.date }}</p>
              </div>
            </div>
          </section>

          <!-- Publications -->
          <section class="px-4 md:px-6 py-6 md:py-8 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
            <h2 class="text-xl md:text-2xl font-semibold text-gray-800 mb-6 flex items-center">
              <span class="mr-2">📚</span> Publications
            </h2>
            <div class="space-y-4">
              <div v-for="pub in resumeData.publications" 
                   :key="pub.title"
                   class="p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-300">
                <h3 class="font-medium text-gray-800">{{ pub.title }}</h3>
                <p class="text-gray-700">{{ pub.platform }}</p>
                <a :href="pub.url" 
                   target="_blank" 
                   class="text-sm text-gray-600 hover:text-gray-800 hover:underline inline-flex items-center mt-2">
                   Read Article 
                   <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                   </svg>
                </a>
              </div>
            </div>
          </section>
        </div>

        <!-- Footer with subtle gradient -->
        <footer class="text-center mt-12 pb-8 bg-gradient-to-t from-gray-50/50 to-white">
          <div class="flex flex-wrap justify-center gap-3">
            <a v-for="link in resumeData.links" 
               :key="link.url" 
               :href="link.url" 
               target="_blank"
               class="px-5 py-2 bg-gradient-to-br from-gray-50 to-white border border-gray-100 text-gray-600 rounded-full hover:border-gray-200 hover:from-white hover:to-gray-50 transition-all duration-300 text-sm md:text-base">
              {{ link.name }}
            </a>
          </div>
        </footer>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const resumeData = ref(null)

onMounted(async () => {
  try {
    const response = await fetch('/data/resume.json')
    resumeData.value = await response.json()
  } catch (error) {
    console.error('Error loading resume data:', error)
  }
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

.container {
  font-family: 'Inter', sans-serif;
}

html {
  scroll-behavior: smooth;
}

section {
  transition: all 0.3s ease;
}

/* Subtle gradient animation on hover */
section:hover {
  background-position: 100% 100%;
  background-size: 200% 200%;
}
</style>