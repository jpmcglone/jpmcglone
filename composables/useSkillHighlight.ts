export function useSkillHighlight() {
  const selected = useState<string | null>('skill-highlight', () => null)

  const matches = computed(() =>
    selected.value
      ? connectionsForSkill(selected.value)
      : { skill: '', jobs: [], projects: [], recommendations: [] },
  )

  const active = computed(() => Boolean(selected.value))

  function select(name: string) {
    selected.value = selected.value === name ? null : name
  }

  function clear() {
    selected.value = null
  }

  function isJobMatched(company: string) {
    return matches.value.jobs.includes(company)
  }

  function isProjectMatched(name: string) {
    return matches.value.projects.includes(name)
  }

  function isRecommendationMatched(author: string) {
    return matches.value.recommendations.includes(author)
  }

  return {
    selected,
    matches,
    active,
    select,
    clear,
    isJobMatched,
    isProjectMatched,
    isRecommendationMatched,
  }
}
