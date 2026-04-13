<template>
  <div class="bio-text py-4 px-1 text-lg leading-relaxed text-gray-600 dark:text-gray-300">
    <p
      v-for="(paragraph, paragraphIndex) in parsedBio"
      :key="paragraphIndex"
      class="mb-4 last:mb-0"
    ><template
        v-for="(segment, segmentIndex) in paragraph"
        :key="`${paragraphIndex}-${segmentIndex}`"
      ><span v-if="segment.type === 'text'" v-text="segment.content" /><strong
          v-else-if="segment.type === 'strong'"
          class="font-semibold text-gray-800 dark:text-white"
        >{{ segment.content }}</strong        ><span
          v-else
          class="bio-link-wrap"
        ><a
            :href="segment.href"
            target="_blank"
            rel="noopener noreferrer"
            class="bio-link text-primary-600 underline underline-offset-4 hover:text-primary-500 dark:text-primary-400"
          >{{ segment.content }}</a><span class="bio-tooltip" role="tooltip"><strong>{{ segment.content }}</strong><br />{{ segment.description }}</span></span></template></p>
  </div>
</template>

<script setup>
const props = defineProps({
  bio: {
    type: String,
    required: true
  }
})

const linkDescriptions = {
  'https://rumble.studio': 'Rumble\'s creator-focused platform for recording, editing, and publishing content.',
  'https://www.docusign.com': 'Digital agreement platform centered on e-signature and workflow automation.',
  'https://imgur.com': 'A large image-sharing and internet culture platform.',
  'https://menofhunger.com': 'A social media platform  justfor men.',
  'https://realm.github.io/SwiftLint/': 'Enforces style and best practices in Swift codebases.',
  'https://github.com/nicklockwood/SwiftFormat': 'Automatically formats Swift code to keep it clean and consistent.',
  'https://github.com/peripheryapp/periphery': 'Static analysis tool for finding unused Swift code.',
  'https://cursor.com': 'AI-powered code editor designed to speed up development work.',
  'https://claude.ai': 'AI assistant that helps with drafting, reasoning, and code tasks.'
}

const parsedBio = computed(() => {
  return props.bio
    .split('\n\n')
    .filter(Boolean)
    .map(parseParagraph)
})

function parseParagraph(paragraph) {
  const segments = []
  const pattern = /<a\s+[^>]*href="([^"]+)"[^>]*>(.*?)<\/a>|<strong>(.*?)<\/strong>/g
  let lastIndex = 0
  let match

  while ((match = pattern.exec(paragraph)) !== null) {
    if (match.index > lastIndex) {
      segments.push({ type: 'text', content: paragraph.slice(lastIndex, match.index) })
    }
    if (match[1] !== undefined) {
      segments.push({
        type: 'link',
        href: match[1],
        content: match[2],
        description: linkDescriptions[match[1]] || match[1]
      })
    } else {
      segments.push({ type: 'strong', content: match[3] })
    }
    lastIndex = match.index + match[0].length
  }

  if (lastIndex < paragraph.length) {
    segments.push({ type: 'text', content: paragraph.slice(lastIndex) })
  }

  return segments
}
</script>

<style scoped>
.bio-link-wrap {
  position: relative;
  display: inline;
}

.bio-tooltip {
  visibility: hidden;
  opacity: 0;
  position: absolute;
  bottom: calc(100% + 8px);
  left: 50%;
  transform: translateX(-50%);
  width: max-content;
  max-width: 280px;
  padding: 8px 12px;
  border-radius: 8px;
  font-size: 0.75rem;
  line-height: 1.5;
  text-decoration: none;
  font-style: normal;
  color: rgb(209 213 219);
  background: rgb(17 24 39);
  border: 1px solid rgb(31 41 55);
  box-shadow: 0 4px 16px rgb(0 0 0 / 0.3);
  pointer-events: none;
  transition: opacity 0.15s ease, visibility 0.15s ease;
  z-index: 50;
}

:root.dark .bio-tooltip {
  color: rgb(209 213 219);
  background: rgb(17 24 39);
  border-color: rgb(55 65 81);
  box-shadow: 0 4px 16px rgb(0 0 0 / 0.5);
}

.bio-tooltip strong {
  font-weight: 600;
  display: block;
  margin-bottom: 2px;
}

.bio-link-wrap:hover .bio-tooltip {
  visibility: visible;
  opacity: 1;
  transition-delay: 0.35s;
}
</style>
