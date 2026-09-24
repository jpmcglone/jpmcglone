import { createWriteStream } from 'node:fs'
import { mkdir } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import PDFDocument from 'pdfkit'
import resume from '../data/resume.ts'

const output = fileURLToPath(new URL('../public/resume.pdf', import.meta.url))
await mkdir(fileURLToPath(new URL('../public', import.meta.url)), { recursive: true })
const doc = new PDFDocument({
  size: 'LETTER',
  margin: 44,
  bufferPages: true,
  info: {
    Title: `${resume.personalInfo.name} — Resume`,
    Author: resume.personalInfo.name,
    Subject: resume.personalInfo.title,
    Keywords: 'iOS, technical leadership, AI, Swift, MCP, full-stack',
    CreationDate: new Date('2026-09-23T00:00:00Z'),
    ModDate: new Date('2026-09-23T00:00:00Z'),
  },
})
const stream = createWriteStream(output)
doc.pipe(stream)
const plain = (value) => value.replace(/<[^>]*>/g, '').replace(/&amp;/g, '&')
const width = 524
const body = (text, options = {}) =>
  doc
    .font('Helvetica')
    .fontSize(10)
    .fillColor('#263447')
    .text(plain(text), 44, doc.y, { width, lineGap: 2, ...options })
const section = (title) => {
  doc.moveDown(0.6)
  doc
    .font('Helvetica-Bold')
    .fontSize(10)
    .fillColor('#176376')
    .text(title.toUpperCase(), 44, doc.y, { characterSpacing: 1.1 })
  doc
    .moveTo(44, doc.y + 4)
    .lineTo(568, doc.y + 4)
    .lineWidth(0.5)
    .strokeColor('#cbd5e1')
    .stroke()
  doc.y += 13
}
const period = (value) => {
  const [start, end] = value.split(' - ')
  return start === end ? start : value.replace(' - ', '–')
}
function job(entry, count) {
  const y = doc.y
  doc
    .font('Helvetica-Bold')
    .fontSize(10.5)
    .fillColor('#142337')
    .text(entry.company, 44, y, { width: 400, link: entry.url })
  doc
    .font('Helvetica')
    .fontSize(9)
    .fillColor('#526477')
    .text(period(entry.period), 440, y, { width: 128, align: 'right' })
  doc.y = y + 15
  body(
    `${entry.title}${entry.isIndependent ? ' · Nights & weekends' : entry.isContract ? ' · Contract' : ''}`,
    { lineGap: 0 },
  )
  doc.y += 4
  for (const item of entry.responsibilities.slice(0, count)) {
    const text = typeof item === 'string' ? item : item.text
    const y = doc.y
    doc.font('Helvetica').fontSize(10).fillColor('#263447').text('•', 46, y)
    doc.text(plain(text), 57, y, { width: width - 13, lineGap: 1.5 })
    doc.y += 3
  }
  doc.y += 4
}
const person = resume.personalInfo
doc.font('Helvetica-Bold').fontSize(26).fillColor('#142337').text(person.name)
doc.font('Helvetica').fontSize(12).fillColor('#176376').text(person.title)
doc.y += 9
body(`${person.location} · Open to remote roles`)
body('jpmcglone.com/resume', { link: 'https://jpmcglone.com/resume/' })
section('Profile')
body(plain(person.bio).replace(/\n\n/g, ' '))
doc.y += 5
body(resume.objective)
section('Core skills')
body('iOS: Swift, SwiftUI, UIKit, Swift concurrency · Architecture & full-stack development')
body('AI: Cursor, ChatGPT Codex, Claude, agentic coding, MCP servers · Web: Nuxt, Vue, TypeScript')
section('Experience')
const bulletCounts = { 'Men of Hunger': 2, Rumble: 3, Callin: 2, Eligible: 2, DocuSign: 2 }
resume.experience.slice(0, 5).forEach((entry) => job(entry, bulletCounts[entry.company] || 1))
doc.addPage()
doc.font('Helvetica-Bold').fontSize(13).fillColor('#142337').text(person.name)
section('Experience continued')
resume.experience.slice(5).forEach((entry) => job(entry, bulletCounts[entry.company] || 1))
section('Education')
body(`${resume.education.school} · ${period(resume.education.period)}`)
body(`${resume.education.degree} · ${resume.education.studies}`)
body(`Computer Science GPA: ${resume.education.majorGpa} · Overall GPA: ${resume.education.gpa}`)
const range = doc.bufferedPageRange()
if (range.count !== 2)
  throw new Error(`Expected two resume pages, got ${range.count}; adjust layout before publishing.`)
for (let i = 0; i < range.count; i++) {
  doc.switchToPage(i)
  doc
    .font('Helvetica')
    .fontSize(8)
    .fillColor('#526477')
    .text(`jpmcglone.com · Full experience and recommendations online`, 44, 737, {
      width: 470,
      lineBreak: false,
      link: 'https://jpmcglone.com/resume/',
    })
  doc.text(`${i + 1} / ${range.count}`, 530, 737, { lineBreak: false })
}
if (doc.bufferedPageRange().count !== 2) throw new Error('PDF footer overflow')
doc.end()
await new Promise((resolve, reject) => {
  stream.on('finish', resolve)
  stream.on('error', reject)
})
console.log(`Generated ${output} (${range.count} pages)`)
