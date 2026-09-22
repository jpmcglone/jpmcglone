export type InlineSegment =
  { type: 'text' | 'strong'; content: string } | { type: 'link'; content: string; href: string }

// Resume copy supports emphasis and HTTPS links without injecting raw HTML.
export function parseInlineContent(value: string): InlineSegment[] {
  const segments: InlineSegment[] = []
  const pattern =
    /<a\s+[^>]*href="(https:\/\/[^\s"<>]+)"[^>]*>([^<>]*)<\/a>|<strong>([^<>]*)<\/strong>/g
  let lastIndex = 0
  for (const match of value.matchAll(pattern)) {
    if (match.index > lastIndex)
      segments.push({ type: 'text', content: value.slice(lastIndex, match.index) })
    if (match[1] !== undefined) {
      segments.push({ type: 'link', content: match[2]!, href: match[1] })
    } else {
      segments.push({ type: 'strong', content: match[3]! })
    }
    lastIndex = match.index + match[0].length
  }
  if (lastIndex < value.length) segments.push({ type: 'text', content: value.slice(lastIndex) })
  return segments
}
