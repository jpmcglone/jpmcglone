export function initials(name: string): string {
  return name
    .split(/[\s:]+/)
    .filter(Boolean)
    .map(w => w[0])
    .slice(0, 2)
    .join('')
    .toUpperCase()
}

export function formatPeriod(period: string): string {
  if (!period.includes(' - ')) return period
  const [start, end] = period.split(' - ')
  return start === end ? end : period
}

export function formatExperiencePeriod(job: { period: string; endDate?: string }): string {
  if (!job.endDate) return formatPeriod(job.period)
  const end = new Intl.DateTimeFormat('en-US', {
    month: 'short', day: 'numeric', year: 'numeric', timeZone: 'UTC',
  }).format(new Date(job.endDate))
  return `${job.period.split(' - ')[0]} - ${end}`
}

export function getEndYear(period: string): number | string {
  const currentYear = new Date().getFullYear()
  const parts = period.split(' - ')
  if (parts.length < 2 || parts[0] === parts[1]) return parts[0]
  const end = parts[1]
  return end === 'Present' ? currentYear : end
}

export function formatNumber(num: number): string {
  return new Intl.NumberFormat().format(num)
}
