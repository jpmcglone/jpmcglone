export interface Recruiter {
  name: string
  domain?: string
}

const storageKey = 'jpm-recruiter'

function parseRecruiter(value: string): Recruiter | null {
  const cleaned = value
    .trim()
    .replace(/^https?:\/\//i, '')
    .replace(/^www\./i, '')
    .replace(/\/.*$/, '')
  if (!cleaned || cleaned.length > 60 || !/^[\p{L}\p{N} .&'-]+$/u.test(cleaned)) return null
  const isDomain = /^[a-z0-9-]+(\.[a-z0-9-]+)+$/i.test(cleaned)
  const base = isDomain ? cleaned.split('.').at(-2)! : cleaned
  const words = base.replace(/-+/g, ' ')
  // Keep deliberate casing like "OpenAI"; only capitalize names typed in all lowercase.
  const name =
    words === words.toLowerCase() ? words.replace(/\b\p{L}/gu, (c) => c.toUpperCase()) : words
  return { name, domain: isDomain ? cleaned.toLowerCase() : undefined }
}

// Pages are prerendered, so the greeting is resolved in the browser after hydration.
export function useRecruiter() {
  const recruiter = useState<Recruiter | null>('recruiter', () => null)
  const route = useRoute()

  onMounted(() => {
    const requested = typeof route.query.for === 'string' ? route.query.for : null
    const saved = requested ?? sessionStorage.getItem(storageKey)
    const parsed = saved ? parseRecruiter(saved) : null
    if (!parsed) return
    recruiter.value = parsed
    sessionStorage.setItem(storageKey, saved!)
  })

  function dismiss() {
    recruiter.value = null
    sessionStorage.removeItem(storageKey)
  }

  return { recruiter, dismiss }
}
