<template>
  <div id="technical-skills" class="scroll-mt-6">
    <h2 class="text-xl font-semibold mb-4 flex items-center gap-2 text-gray-900 dark:text-white">
      <UIcon name="i-heroicons-code-bracket" class="text-primary-500 h-5 w-5" />
      Technical Skills
    </h2>
    <div class="grid md:grid-cols-2 gap-4">
      <UCard
        v-for="skill in technicalSkills"
        :key="skill.category"
        class="dark:bg-gray-800"
      >
        <h3 class="text-base font-medium mb-3 text-gray-900 dark:text-white">
          {{ skill.category }}
        </h3>
        <div class="flex flex-wrap gap-2">
          <UBadge
            v-for="item in sortedSkills(skill.skills)"
            :key="item.name"
            :color="item.featured ? 'primary' : 'gray'"
            :variant="item.featured ? 'solid' : 'soft'"
            size="md"
            class="cursor-pointer hover:-translate-y-0.5 transition-transform"
            @click="navigateToSkill(item.name)"
          >
            <UIcon 
              :name="getSkillIcon(item.name)" 
              class="h-4 w-4 mr-1"
            />
            {{ item.name }}
          </UBadge>
        </div>
      </UCard>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  technicalSkills: {
    type: Array,
    required: true
  }
})

const sortedSkills = (skills) => {
  return skills.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0))
}

const getSkillIcon = (skill) => {
  const icons = {
    // Languages
    'Swift': 'logos:swift',
    'Objective-C': 'logos:c',
    'JavaScript': 'logos:javascript',
    'TypeScript': 'logos:typescript-icon',
    'Ruby': 'logos:ruby',
    'PHP': 'logos:php',
    'Java': 'logos:java',
    
    // Databases
    'PostgreSQL': 'logos:postgresql',
    'MongoDB': 'logos:mongodb-icon',
    'MySQL': 'logos:mysql',
    'SQLite': 'logos:sqlite',
    'Realm': 'logos:realm',
    
    // Tools & Frameworks
    'SwiftUI': 'logos:swift',
    'UIKit': 'logos:apple',
    'Xcode': 'logos:xcode',
    'VS Code': 'logos:visual-studio-code',
    'GitHub': 'logos:github-icon',
    'npm': 'logos:npm-icon',
    'Firebase': 'logos:firebase',
    
    // Default icon for items without specific icons
    'default': 'heroicons:code-bracket'
  }
  return icons[skill] || icons.default
}

const getSkillUrl = (skill) => {
  const urls = {
    // Languages
    'Swift': 'https://developer.apple.com/swift/',
    'Objective-C': 'https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/',
    'JavaScript': 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    'TypeScript': 'https://www.typescriptlang.org/',
    'Ruby': 'https://www.ruby-lang.org/',
    'PHP': 'https://www.php.net/',
    'Java': 'https://dev.java/',
    
    // Databases
    'PostgreSQL': 'https://www.postgresql.org/',
    'Realm': 'https://realm.io/',
    'MySQL': 'https://www.mysql.com/',
    'SQLite': 'https://www.sqlite.org/',
    'MongoDB': 'https://www.mongodb.com/',
  }
  return urls[skill] || '#'
}

const navigateToSkill = (skillName) => {
  const url = getSkillUrl(skillName)
  if (url !== '#') window.open(url, '_blank')
}
</script> 