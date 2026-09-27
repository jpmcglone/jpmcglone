import { siteMetadata } from '~/data/site'

export interface ShareAudience {
  name: string
  domain?: string
}

export function recruiterShareUrl(recruiter: ShareAudience | null, path = '/resume/') {
  const url = new URL(path, `${siteMetadata.url}/`)
  if (recruiter) url.searchParams.set('for', recruiter.domain || recruiter.name)
  return url.toString()
}

export function hiringNote(recruiter: ShareAudience | null) {
  const intro = recruiter ? `For the ${recruiter.name} team —\n\n` : ''
  return `${intro}JP McGlone — Lead iOS & Product Engineer
16 years of Swift, SwiftUI, and UIKit. Built Rumble Studio from scratch; ships Men of Hunger across iOS, web, and API. Open to senior and lead remote roles.

${recruiterShareUrl(recruiter)}`
}

export async function copyText(text: string) {
  try {
    await navigator.clipboard.writeText(text)
    return true
  } catch {
    const field = document.createElement('textarea')
    field.value = text
    field.setAttribute('readonly', '')
    field.style.position = 'fixed'
    field.style.left = '-9999px'
    document.body.appendChild(field)
    field.select()
    const copied = document.execCommand('copy')
    field.remove()
    return copied
  }
}
