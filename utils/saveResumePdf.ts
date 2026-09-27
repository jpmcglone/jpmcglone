const resumeFileName = 'John-P-McGlone-Resume.pdf'

type SaveFilePicker = (options: {
  suggestedName: string
  types: { description: string; accept: Record<string, string[]> }[]
}) => Promise<{
  createWritable: () => Promise<{
    write: (data: Blob) => Promise<void>
    close: () => Promise<void>
  }>
}>

export async function saveResumePdfFromAction() {
  const showSaveFilePicker = (window as Window & { showSaveFilePicker?: SaveFilePicker })
    .showSaveFilePicker
  if (showSaveFilePicker) {
    try {
      const handle = await showSaveFilePicker({
        suggestedName: resumeFileName,
        types: [{ description: 'PDF document', accept: { 'application/pdf': ['.pdf'] } }],
      })
      const file = await (await fetch('/resume.pdf')).blob()
      const writable = await handle.createWritable()
      await writable.write(file)
      await writable.close()
      return
    } catch (error) {
      if ((error as DOMException).name === 'AbortError') return
    }
  }
  const link = document.createElement('a')
  link.href = '/resume.pdf'
  link.download = resumeFileName
  link.click()
}

// Browsers without a save dialog API keep the link's normal download behavior.
export async function saveResumePdf(event: MouseEvent) {
  const showSaveFilePicker = (window as Window & { showSaveFilePicker?: SaveFilePicker })
    .showSaveFilePicker
  if (!showSaveFilePicker) return
  event.preventDefault()
  const href = (event.currentTarget as HTMLAnchorElement | null)?.href ?? '/resume.pdf'
  try {
    // The picker must open before any await so it keeps the click's user activation.
    const handle = await showSaveFilePicker({
      suggestedName: resumeFileName,
      types: [{ description: 'PDF document', accept: { 'application/pdf': ['.pdf'] } }],
    })
    const file = await (await fetch(href)).blob()
    const writable = await handle.createWritable()
    await writable.write(file)
    await writable.close()
  } catch (error) {
    if ((error as DOMException).name === 'AbortError') return
    const link = document.createElement('a')
    link.href = href
    link.download = resumeFileName
    link.click()
  }
}
