import { existsSync, readdirSync } from 'node:fs'
import { createRequire } from 'node:module'
import { describe, expect, it } from 'vitest'
import resume from '../data/resume'
import { pageMetadata } from '../data/site'
import { formatExperiencePeriod, formatPeriod, getEndYear } from '../utils/formatters'
import { parseInlineContent } from '../utils/inlineContent'
import { profileSchema } from '../utils/profileSchema'
import {
  rankSkillCategories,
  skillMatchesQuery,
  visibleSkillCategories,
} from '../utils/skillSearch'

describe('skill search', () => {
  const matches = (query: string) =>
    resume.technicalSkills.flatMap((category) =>
      category.skills.filter((skill) => skillMatchesQuery(skill, category, query)),
    )
  it('finds AI tools by the names and aliases readers use', () => {
    for (const query of ['cursor', 'chatgpt', 'codex', 'claude', 'mcp'])
      expect(matches(query).length).toBeGreaterThan(0)
    expect(matches('mcp').map((skill) => skill.name)).toContain('MCP Server Development')
  })
  it('handles whitespace, punctuation and combined terms', () => {
    expect(matches('  MCP   server  ')).toEqual(matches('mcp server'))
    expect(matches('swiftui')).toEqual(matches('Swift-UI'))
    expect(matches('mcp unrelated')).toEqual([])
    expect(matches('AppCode')).toEqual([])
  })
  it('ranks direct matches first without changing the source order', () => {
    const before = resume.technicalSkills.map((category) => category.category)
    expect(rankSkillCategories(resume.technicalSkills, 'mcp')[0]?.category).toBe(
      'AI & Agentic Development',
    )
    expect(resume.technicalSkills.map((category) => category.category)).toEqual(before)
    expect(rankSkillCategories(resume.technicalSkills, '')).toBe(resume.technicalSkills)
  })
})

describe('resume content', () => {
  it('displays year ranges while preserving precise data', () => {
    const rumble = resume.experience.find((job) => job.company === 'Rumble')!
    expect(formatExperiencePeriod(rumble)).toBe('2023 - 2026')
    expect(formatPeriod('2022 - 2022')).toBe('2022')
    expect(getEndYear('2023 - 2026')).toBe('2026')
  })
  it('renders allowed rich text without accepting executable markup', () => {
    expect(parseInlineContent('Built <a href="https://example.com/">Example</a>.')).toEqual([
      { type: 'text', content: 'Built ' },
      { type: 'link', href: 'https://example.com/', content: 'Example' },
      { type: 'text', content: '.' },
    ])
    expect(parseInlineContent('<strong>Lead</strong>')).toEqual([
      { type: 'strong', content: 'Lead' },
    ])
    for (const input of [
      '<img src=x onerror=alert(1)>',
      '<a href="javascript:alert(1)">Unsafe</a>',
    ])
      expect(parseInlineContent(input)).toEqual([{ type: 'text', content: input }])
  })
  it('uses one person identity across public profile pages', () => {
    const home = profileSchema(pageMetadata.home)['@graph']
    const profile = profileSchema(pageMetadata.resume)['@graph']
    expect(home[0]?.['@id']).toBe(profile[0]?.['@id'])
    expect(profile[2]?.url).toBe('https://jpmcglone.com/resume/')
    expect(pageMetadata.reader.unlisted).toBe(true)
    expect(pageMetadata.ageCalculator.unlisted).toBe(true)
  })
})

describe('skill icon assets', () => {
  it('resolves every displayed skill icon from the local collection and installed libraries', async () => {
    const { getSkillIcon, getSkillImage } = await import('../utils/skillMeta')
    const require = createRequire(import.meta.url)
    const collections = {
      jpm: Object.fromEntries(
        readdirSync(new URL('../assets/icons/', import.meta.url)).map((file) => [
          file.replace(/\.svg$/, ''),
          true,
        ]),
      ),
      heroicons: require('@iconify-json/heroicons/icons.json').icons,
      logos: require('@iconify-json/logos/icons.json').icons,
      'simple-icons': require('@iconify-json/simple-icons/icons.json').icons,
    }
    for (const skill of resume.technicalSkills.flatMap((category) => category.skills)) {
      const image = getSkillImage(skill.name)
      if (image) {
        expect(
          existsSync(new URL(`../public${image}`, import.meta.url)),
          `Missing ${skill.name} logo`,
        ).toBe(true)
        continue
      }
      const id = getSkillIcon(skill.name).replace(/^i-/, '')
      const prefix = Object.keys(collections).find(
        (prefix) => id.startsWith(`${prefix}:`) || id.startsWith(`${prefix}-`),
      ) as keyof typeof collections
      expect(prefix, `Icon prefix for ${skill.name}: ${id}`).toBeDefined()
      const name = id.slice(prefix.length + 1)
      expect(name in collections[prefix], `Missing ${skill.name} icon: ${id}`).toBe(true)
    }
  })
})

describe('progressive skill disclosure', () => {
  it('keeps the default view compact while preserving every skill in expanded mode', () => {
    const preview = visibleSkillCategories(resume.technicalSkills, '')
    expect(preview).toHaveLength(4)
    expect(preview.flatMap((category) => category.skills).length).toBeLessThan(20)
    expect(visibleSkillCategories(resume.technicalSkills, '', true)).toBe(resume.technicalSkills)
  })
  it('finds hidden skills without expanding and shows only matching results', () => {
    const names = (query: string) =>
      visibleSkillCategories(resume.technicalSkills, query).flatMap((category) =>
        category.skills.map((skill) => skill.name),
      )
    expect(names('JSON')).toContain('JSON')
    expect(names('cursor')).toEqual(['Cursor'])
    expect(names('notarealskill')).toEqual([])
    expect(visibleSkillCategories(resume.technicalSkills, 'JSON', true)).toEqual(
      visibleSkillCategories(resume.technicalSkills, 'JSON'),
    )
  })
})
