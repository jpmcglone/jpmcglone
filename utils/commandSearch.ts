export function foldSearchText(value: string) {
  return value
    .normalize('NFD')
    .replace(/\p{M}/gu, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, ' ')
    .trim()
}

function fieldFolds(item: {
  label?: string
  suffix?: string
  description?: string
  keywords?: string[]
}) {
  return [item.label, item.suffix, item.description, ...(item.keywords || [])]
    .filter((value): value is string => Boolean(value))
    .map(foldSearchText)
    .filter(Boolean)
}

export function commandMatchesQuery(
  item: { label?: string; suffix?: string; description?: string; keywords?: string[] },
  query: string,
) {
  const foldedQuery = foldSearchText(query)
  if (!foldedQuery) return true
  const needles = foldedQuery.split(/\s+/).filter(Boolean)
  const fields = fieldFolds(item)
  const hay = fields.join(' ')
  const compactQuery = foldedQuery.replace(/ /g, '')
  if (needles.every((needle) => hay.includes(needle))) return true
  return fields.some((field) => field.replace(/ /g, '').includes(compactQuery))
}
