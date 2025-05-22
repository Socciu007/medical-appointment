/* eslint-disable @typescript-eslint/no-explicit-any */
import moment from 'moment'
import { PDFDocument } from 'pdf-lib'
import fontkit from '@pdf-lib/fontkit'
import TimesNewRoman from '/assets/fonts/times.ttf'
const siteCodes = ['HN', 'SG', 'DN', 'HP', 'CT', 'TH', 'BD', 'NT', 'KH', 'LA']

// Get random site code
export function getRandomSiteCode(): string {
  const index = Math.floor(Math.random() * siteCodes.length)
  return siteCodes[index]
}


// Map save sequence number of each site by day
const counterStore: Map<string, number> = new Map()

/**
 * Create code for reception like AA.TN.YYMMDD.XXXX
 * @param siteCode - Site code (example: 'HN', 'SG')
 * @returns String code for reception
 */
export function generateCode(siteCode: string = 'AA'): string {
  const prefix = 'TN'
  const today = moment().format('YYMMDD')
  const key = `${siteCode}_${today}`

  let count = counterStore.get(key) || 0
  count += 1
  counterStore.set(key, count)

  const suffix = String(count).padStart(4, '0')
  return `${siteCode}.${prefix}.${today}.${suffix}`
}

export async function generatePDF(contextObj: any) {
  const pdfDoc = await PDFDocument.create()
  pdfDoc.registerFontkit(fontkit)
  const fontBytes = await fetch(TimesNewRoman).then((res) => res.arrayBuffer())
  let page = pdfDoc.addPage([595, 842])
  const font = await pdfDoc.embedFont(fontBytes)

  let y = 800
  const fontSize = 12

  Object.entries(contextObj).forEach(([key, value]: [string, any]) => {
    const line = `${key.replace(/_/g, ' ')}.`
    page.drawText(line, { x: 50, y, size: fontSize, font })
    y -= 20
    Object.entries(value).forEach(([key, value]) => {
      const line = `- ${key.replace(/_/g, ' ')}: ${value}`
      page.drawText(line, { x: 50, y, size: fontSize, font })
      y -= 20
      if (y < 50) {
        page = pdfDoc.addPage([595, 842])
        y = 800
      }
    })
    if (y < 50) {
      page = pdfDoc.addPage([595, 842])
      y = 800
    }
  })

  const pdfBytes = await pdfDoc.save()
  return pdfBytes
}
