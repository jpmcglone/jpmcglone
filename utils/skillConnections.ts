import resume, {
  type Experience,
  type Project,
  type Recommendation,
  type Skill,
} from '~/data/resume'

export interface SkillConnections {
  skill: string
  jobs: string[]
  projects: string[]
  recommendations: string[]
}

/** Extra search terms so a skill can light up work that never names it literally. */
const extraNeedles: Record<string, string[]> = {
  SwiftUI: ['ios', 'iphone', 'ipad', 'vision pro'],
  UIKit: ['ios', 'iphone', 'ipad'],
  Swift: ['ios', 'iphone'],
  'Swift 6 Concurrency': ['ios', 'swift', 'concurrency'],
  Combine: ['ios'],
  LiveKit: ['livekit', 'audio', 'video', 'streaming', 'media'],
  Cursor: ['agentic'],
  'ChatGPT Codex': ['agentic'],
  Astra: ['agentic'],
  'Agentic Coding': ['agentic'],
  'MCP Server Development': ['mcp'],
  'AI Workflow Design': ['agentic', 'ai'],
  Claude: ['agentic'],
  'Nuxt.js': ['nuxt', 'web', 'frontend'],
  'Vue.js': ['vue', 'web', 'frontend'],
  PostgreSQL: ['postgres', 'api'],
  'Full-Stack Development': ['full stack', 'api', 'web'],
  'System Architecture': ['architecture'],
  Agora: ['agora'],
  Xcode: ['xcode', 'ios'],
  'API Design': ['api'],
}

function normalize(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, '')
}

function tokens(value: string) {
  return value
    .toLowerCase()
    .split(/[^a-z0-9]+/)
    .filter(Boolean)
}

function matchesNeedle(text: string, needle: string) {
  const compact = normalize(needle)
  if (!compact) return false
  if (compact.length <= 3) return tokens(text).includes(compact)
  return normalize(text).includes(compact)
}

function needlesFor(skill: Skill) {
  return [skill.name, ...(skill.keywords || []), ...(extraNeedles[skill.name] || [])]
}

function jobText(job: Experience) {
  const lines = job.responsibilities.map((item) => (typeof item === 'string' ? item : item.text))
  return [job.company, job.title, ...lines, job.joinedVia?.label, job.companyStatus?.label].join(
    ' ',
  )
}

function projectText(project: Project) {
  return [project.name, project.description, project.originStory, ...project.technologies].join(' ')
}

function recommendationText(item: Recommendation) {
  return [item.quote, item.company, item.sharedCompany?.name, item.context, item.title].join(' ')
}

export function connectionsForSkill(
  skillName: string,
  data: typeof resume = resume,
): SkillConnections {
  const skill = data.technicalSkills
    .flatMap((category) => category.skills)
    .find((item) => item.name === skillName)
  if (!skill) return { skill: skillName, jobs: [], projects: [], recommendations: [] }

  const needles = needlesFor(skill)
  const matches = (text: string) => needles.some((needle) => matchesNeedle(text, needle))

  const jobs = data.experience.filter((job) => matches(jobText(job))).map((job) => job.company)
  const projects = data.projects
    .filter((project) => matches(projectText(project)))
    .map((project) => project.name)
  const relatedCompanies = new Set([...jobs, ...projects])
  const recommendations = data.recommendations.items
    .filter((item) => {
      const company = item.sharedCompany?.name || item.company
      return (company && relatedCompanies.has(company)) || matches(recommendationText(item))
    })
    .map((item) => item.author)

  return { skill: skillName, jobs, projects, recommendations }
}

export function featuredSkillNames(data: typeof resume = resume) {
  return data.technicalSkills.flatMap((category) =>
    category.skills.filter((skill) => skill.featured).map((skill) => skill.name),
  )
}
