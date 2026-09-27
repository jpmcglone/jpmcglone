<template>
  <UModal v-model:open="open" :ui="{ content: 'command-palette sm:max-w-lg z-50' }">
    <template #content>
      <UCommandPalette
        v-model:search-term="searchTerm"
        :groups="groups"
        placeholder="Jump, search, or copy…"
        class="h-96"
        :ui="{ viewport: 'pb-1' }"
      />
    </template>
  </UModal>
</template>

<script setup lang="ts">
import type { CommandPaletteGroup, CommandPaletteItem } from '@nuxt/ui'
import indexData from '~/data/index'
import resumeData from '~/data/resume'

type SearchableItem = CommandPaletteItem & { keywords?: string[] }

const { open } = useCommandPalette()
const { recruiter } = useRecruiter()
const { select } = useSkillHighlight()
const toast = useToast()
const router = useRouter()
const route = useRoute()
const motionPreference = usePreferredReducedMotion()

defineShortcuts({
  meta_k: {
    usingInput: true,
    handler: () => {
      open.value = !open.value
    },
  },
  'g-h': () => go('/'),
  'g-r': () => go('/resume/'),
})

async function go(path: string) {
  open.value = false
  const [pathname, hash] = path.split('#')
  if (pathname && route.path !== pathname) {
    await router.push({ path: pathname, hash: hash ? `#${hash}` : undefined })
  }
  if (!hash) return
  await nextTick()
  document.getElementById(hash)?.scrollIntoView({
    behavior: motionPreference.value === 'reduce' ? 'instant' : 'smooth',
  })
}

async function copyHiring() {
  open.value = false
  const text = hiringNote(recruiter.value)
  const copied = await copyText(text)
  toast.add({
    title: copied ? 'Copied' : 'Could not copy',
    description: copied
      ? recruiter.value
        ? `A note for the ${recruiter.value.name} team.`
        : 'Hiring note copied.'
      : 'Copy the text from the page instead.',
  })
}

async function copyLink() {
  open.value = false
  const url = recruiterShareUrl(
    recruiter.value,
    route.path.startsWith('/resume') ? '/resume/' : '/',
  )
  const copied = await copyText(url)
  toast.add({
    title: copied ? 'Link copied' : 'Could not copy',
    description: copied ? url : 'Copy the address from the bar instead.',
  })
}

const searchTerm = ref('')

watch(open, (isOpen) => {
  if (!isOpen) searchTerm.value = ''
})

const resumeSections: SearchableItem[] = [
  { id: 'about', label: 'About', icon: 'i-jpm-user', keywords: ['bio', 'profile'] },
  {
    id: 'projects',
    label: 'Projects',
    icon: 'i-jpm-rocket-launch',
    keywords: ['work', 'building'],
  },
  {
    id: 'experience',
    label: 'Experience',
    icon: 'i-jpm-briefcase',
    keywords: ['work', 'jobs', 'career'],
  },
  {
    id: 'technical-skills',
    label: 'Skills',
    icon: 'i-jpm-code-bracket',
    keywords: ['tech', 'stack'],
  },
  {
    id: 'recommendations',
    label: 'Recommendations',
    icon: 'i-jpm-chat-bubble-bottom-center-text',
    keywords: ['rec', 'recs', 'testimonials', 'references'],
  },
  {
    id: 'education',
    label: 'Education',
    icon: 'i-jpm-academic-cap',
    keywords: ['college', 'school', 'nassau', 'ncc'],
  },
].map((section) => ({
  ...section,
  onSelect: () => go(`/resume/#${section.id}`),
}))

const allGroups = computed<CommandPaletteGroup[]>(() => [
  {
    id: 'goto',
    label: 'Go to',
    items: [
      {
        label: 'Home',
        icon: 'i-jpm-home',
        kbds: ['G', 'H'],
        keywords: ['start', 'index'],
        onSelect: () => go('/'),
      },
      {
        label: 'Résumé',
        icon: 'i-jpm-document-text',
        kbds: ['G', 'R'],
        keywords: ['resume', 'cv'],
        onSelect: () => go('/resume/'),
      },
      ...resumeSections,
    ],
  },
  {
    id: 'actions',
    label: 'Actions',
    items: [
      {
        label: recruiter.value ? `Copy note for ${recruiter.value.name}` : 'Copy hiring note',
        icon: 'i-jpm-clipboard-document-list',
        keywords: ['share', 'intro', 'recruiter', 'forward'],
        onSelect: copyHiring,
      },
      {
        label: 'Copy page link',
        icon: 'i-jpm-link',
        keywords: ['url', 'share'],
        onSelect: copyLink,
      },
      {
        label: 'Download PDF',
        icon: 'i-jpm-document-text',
        keywords: ['pdf', 'resume', 'cv'],
        onSelect: () => {
          open.value = false
          saveResumePdfFromAction()
        },
      },
      ...indexData.personalInfo.socialLinks.map((link) => ({
        label: link.name,
        icon: link.icon,
        onSelect: () => {
          open.value = false
          window.open(link.url, '_blank', 'noopener,noreferrer')
        },
      })),
    ],
  },
  {
    id: 'skills',
    label: 'Highlight a skill',
    items: featuredSkillNames().map((name) => ({
      label: name,
      icon: getSkillIcon(name),
      suffix: 'Matching work',
      onSelect: async () => {
        select(name)
        await go('/resume/#technical-skills')
      },
    })),
  },
  {
    id: 'projects',
    label: 'Projects',
    items: resumeData.projects.map((project) => ({
      label: project.name,
      suffix: project.status,
      avatar: project.logo ? { src: project.logo } : undefined,
      icon: project.logo ? undefined : 'i-jpm-rocket-launch',
      keywords: [project.name, ...(project.technologies || [])],
      onSelect: () => {
        open.value = false
        if (project.url) window.open(project.url, '_blank', 'noopener,noreferrer')
        else go('/resume/#projects')
      },
    })),
  },
  {
    id: 'experience',
    label: 'Experience',
    items: resumeData.experience.map((job) => ({
      label: job.company,
      suffix: job.title,
      avatar: job.logo ? { src: job.logo } : undefined,
      icon: job.logo ? undefined : 'i-jpm-briefcase',
      keywords: [job.company, job.title],
      onSelect: () => go('/resume/#experience'),
    })),
  },
])

const groups = computed(() =>
  allGroups.value
    .map((group) => ({
      ...group,
      ignoreFilter: true,
      items: (group.items || []).filter((item) => commandMatchesQuery(item, searchTerm.value)),
    }))
    .filter((group) => group.items.length > 0),
)
</script>
