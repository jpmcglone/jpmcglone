import type { Skill, SkillCategory } from '~/data/resume'

const normalize = (value: string) => value.toLowerCase().replace(/[^a-z0-9]/g, '')

function matchesTerms(values: string[], query: string): boolean {
  const terms = query.trim().split(/\s+/).map(normalize).filter(Boolean)
  const text = normalize(values.join(' '))
  return terms.every(term => text.includes(term))
}

export function skillMatchesQuery(skill: Skill, category: SkillCategory, query: string): boolean {
  return matchesTerms([skill.name, ...(skill.keywords || [])], query) ||
    matchesTerms([category.category, ...(category.keywords || [])], query)
}

export function skillCategoryMatchesQuery(category: SkillCategory, query: string): boolean {
  return category.skills.some(skill => skillMatchesQuery(skill, category, query))
}

export function rankSkillCategories(categories: SkillCategory[], query: string): SkillCategory[] {
  if (!query.trim()) return categories
  const score = (category: SkillCategory) => category.skills.some(skill => matchesTerms([skill.name, ...(skill.keywords || [])], query)) ? 2 : Number(skillCategoryMatchesQuery(category, query))
  return [...categories].sort((a, b) => score(b) - score(a))
}
